<template>
  <div class="tp-root">
    <div class="tp-card">
      <p class="tp-tag">Page technique &middot; non r&eacute;f&eacute;renc&eacute;e</p>
      <h1>Test de paiement r&eacute;el</h1>
      <p class="tp-lead">
        Ce bouton lance un vrai paiement de <strong>CHF&nbsp;10.&mdash;</strong> avec votre carte,
        via le m&ecirc;me circuit que les r&eacute;servations clients.
        Il sert &agrave; v&eacute;rifier la cha&icirc;ne compl&egrave;te&nbsp;: paiement, page de confirmation,
        notification Slack et e-mail, re&ccedil;u client.
      </p>
      <p class="tp-lead">
        Remboursez-vous ensuite depuis Stripe&nbsp;: <em>Paiements &rarr; le paiement &rarr; Rembourser</em>.
        Co&ucirc;t r&eacute;siduel&nbsp;: environ CHF&nbsp;0.60 de frais.
      </p>

      <button class="tp-btn" :disabled="busy" @click="go">
        {{ busy ? 'Redirection vers Stripe…' : 'Lancer le test — CHF 10.—' }}
      </button>

      <p v-if="err" class="tp-err">{{ err }}</p>
      <p class="tp-note">Cette page sera supprim&eacute;e une fois le test valid&eacute;.</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });
useHead({
  title: "Test de paiement · coffez.ch",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" }
  ]
});

const busy = ref(false);
const err = ref('');

async function go() {
  busy.value = true;
  err.value = '';
  const d = new Date();
  d.setDate(d.getDate() + 30);
  try {
    const res = await $fetch('/api/stripe-checkout', {
      method: 'POST',
      body: {
        tier: 'test',
        date: d.toISOString().split('T')[0],
        time: '18:00',
        name: 'Test technique Pascal',
        email: 'pascalcoffez@gmail.com'
      }
    });
    if (res?.url) { window.location.href = res.url; return; }
    throw new Error('Réponse inattendue');
  } catch (e) {
    err.value = "Le paiement n'a pas pu démarrer. " + (e?.data?.statusMessage || e?.message || '');
    busy.value = false;
  }
}
</script>

<style scoped>
.tp-root {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 40px 20px; background: #F4F7F8; font-family: 'Inter', sans-serif; color: #0F1923;
}
.tp-card {
  background: #fff; border-radius: 20px; padding: 44px 40px; max-width: 560px; width: 100%;
  box-shadow: 0 20px 56px rgba(15,25,35,0.12);
}
.tp-tag {
  font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.2em;
  text-transform: uppercase; color: #9AA6B0; margin: 0 0 14px;
}
h1 { font-family: 'Sora', sans-serif; font-size: 26px; font-weight: 800; margin: 0 0 18px; letter-spacing: -0.02em; }
.tp-lead { font-size: 14.5px; line-height: 1.75; color: #5A6B78; margin: 0 0 16px; }
.tp-btn {
  width: 100%; margin-top: 10px; padding: 17px 24px; background: #0F1923; color: #fff;
  border: none; border-radius: 13px; font-family: 'Sora', sans-serif; font-weight: 700;
  font-size: 15px; cursor: pointer;
}
.tp-btn:disabled { background: #C6CDD3; cursor: not-allowed; }
.tp-err { margin-top: 14px; font-size: 13.5px; color: #9B2C2C; line-height: 1.6; }
.tp-note { margin-top: 20px; font-size: 12px; color: #9AA6B0; text-align: center; }
</style>
