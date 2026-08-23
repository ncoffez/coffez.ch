import Stripe from "stripe";


/**
 * Notifie Pascal (Slack + e-mail) dès qu'une réservation est payée.
 * Appelé par la page /booking-success avec l'identifiant de session Stripe.
 * On relit la session côté serveur : impossible de falsifier une fausse réservation.
 */
export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const secret = config.STRIPE_SECRET_KEY;
	if (!secret) {
		throw createError({ statusCode: 500, statusMessage: "Stripe non configuré." });
	}

	const body = await readBody(event);
	const sessionId = String(body?.session_id || "").trim();
	if (!sessionId.startsWith("cs_")) {
		throw createError({ statusCode: 400, statusMessage: "Session invalide." });
	}

	const stripe = new Stripe(secret, { apiVersion: "2024-06-20" });
	const session = await stripe.checkout.sessions.retrieve(sessionId);

	if (session.payment_status !== "paid") {
		return { notified: false, reason: "not_paid" };
	}

	const m = (session.metadata || {}) as Record<string, string>;
	const nom = m.customerName || "Client";
	const email = m.customerEmail || session.customer_email || "";
	const message =
		`NOUVELLE RÉSERVATION PAYÉE\n\n` +
		`Formule    : ${m.packageLabel || "—"}\n` +
		`Date       : ${m.eventDate || "—"} à ${m.eventTime || "—"}\n` +
		`Client     : ${nom}\n` +
		`E-mail     : ${email}\n` +
		`Acompte    : CHF ${m.depositCHF || "—"} (encaissé)\n` +
		`Solde      : CHF ${m.balanceCHF || "—"} le jour de l'événement\n` +
		`Total      : CHF ${m.totalCHF || "—"}\n\n` +
		`Paiement Stripe : ${sessionId}`;

	// On passe par le circuit éprouvé du formulaire de contact :
	// il notifie Pascal (Slack + e-mail) ET confirme au client.
	try {
		await $fetch("/api/sendMailConfirmation", {
			method: "post",
			body: {
				name: `RÉSERVATION PAYÉE — ${nom}`,
				email: email || "pascalcoffez@gmail.com",
				phone: "—",
				message,
			},
		});
		return { notified: true };
	} catch (e) {
		console.error("Notification de réservation échouée:", e);
		return { notified: false, reason: "send_failed" };
	}
});
