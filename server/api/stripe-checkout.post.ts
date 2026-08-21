import Stripe from "stripe";

/**
 * Crée une session Stripe Checkout pour l'acompte de 50 %.
 * Le solde est encaissé le jour de l'événement (virement, TWINT ou espèces).
 */

const PACKAGES: Record<string, { label: string; total: number; hours: number }> = {
	standard: { label: "Formule Standard · 3 heures", total: 770, hours: 3 },
	classic: { label: "Formule Classic · 4 heures", total: 880, hours: 4 },
	super: { label: "Formule Super · 5 heures", total: 990, hours: 5 },
};

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const secret = config.STRIPE_SECRET_KEY;

	if (!secret) {
		throw createError({ statusCode: 500, statusMessage: "Stripe non configuré (clé manquante)." });
	}

	const body = await readBody(event);
	const { tier, date, time, name, email } = body || {};

	const pkg = PACKAGES[tier];
	if (!pkg) {
		throw createError({ statusCode: 400, statusMessage: "Formule inconnue." });
	}
	if (!date || !time || !name || !email) {
		throw createError({ statusCode: 400, statusMessage: "Date, heure, nom et e-mail sont obligatoires." });
	}

	const deposit = Math.round(pkg.total / 2);
	const origin = getRequestURL(event).origin;

	const stripe = new Stripe(secret, { apiVersion: "2024-06-20" });

	const session = await stripe.checkout.sessions.create({
		mode: "payment",
		payment_method_types: ["card"],
		customer_email: email,
		line_items: [
			{
				quantity: 1,
				price_data: {
					currency: "chf",
					unit_amount: deposit * 100,
					product_data: {
						name: `Acompte 50 % — ${pkg.label}`,
						description: `Événement du ${date} à ${time} · Total CHF ${pkg.total}.— · Solde de CHF ${deposit}.— le jour de l'événement.`,
					},
				},
			},
		],
		metadata: {
			tier,
			packageLabel: pkg.label,
			eventDate: String(date),
			eventTime: String(time),
			customerName: String(name),
			customerEmail: String(email),
			totalCHF: String(pkg.total),
			depositCHF: String(deposit),
			balanceCHF: String(pkg.total - deposit),
		},
		success_url: `${origin}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${origin}/formules?annule=1`,
		locale: "fr",
	});

	return { url: session.url };
});
