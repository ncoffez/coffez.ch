/**
 * Vérification de disponibilité d'une date.
 *
 * ─────────────────────────────────────────────────────────────
 *  POUR MODIFIER TES DATES INDISPONIBLES : édite la liste
 *  ci-dessous. Format : "AAAA-MM-JJ" (année-mois-jour).
 *  Exemple : le 4 septembre 2026 s'écrit "2026-09-04".
 * ─────────────────────────────────────────────────────────────
 */
const DATES_INDISPONIBLES = [
	"2026-09-04",
	"2026-09-17",
	"2026-10-31",
];

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const date = String(body?.date || "").trim();

	if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
		throw createError({ statusCode: 400, statusMessage: "Date invalide." });
	}

	// Une date passée n'est jamais réservable.
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const asked = new Date(date + "T00:00:00");
	if (asked < today) {
		return { available: false, reason: "past" };
	}

	const available = !DATES_INDISPONIBLES.includes(date);
	return { available, reason: available ? null : "booked" };
});
