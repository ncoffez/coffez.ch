<template>
  <div class="bk-ok-root">
    <div class="bk-ok-card">
      <div class="bk-ok-check">&#10003;</div>
      <h1>Votre date est bloqu&eacute;e.</h1>
      <p class="lead">
        Merci&nbsp;! Votre acompte est bien re&ccedil;u et votre r&eacute;servation est confirm&eacute;e.
        Vous recevez un re&ccedil;u de paiement par e-mail dans quelques instants.
      </p>

      <div class="bk-ok-next">
        <p class="bk-ok-h">La suite</p>
        <ul>
          <li>Pascal vous contacte sous 24&nbsp;h pour caler les d&eacute;tails de la soir&eacute;e.</li>
          <li>Le solde se r&egrave;gle le jour de l&rsquo;&eacute;v&eacute;nement, par virement, TWINT ou esp&egrave;ces.</li>
          <li>L&rsquo;artiste arrive au minimum 30&nbsp;minutes avant l&rsquo;heure de d&eacute;but, installation comprise.</li>
        </ul>
      </div>

      <p class="bk-ok-contact">
        Une question&nbsp;? <a href="mailto:pascalcoffez@gmail.com">pascalcoffez@gmail.com</a>
        &middot; <a href="tel:+41791237833">079&nbsp;123&nbsp;78&nbsp;33</a>
      </p>

      <a href="/" class="bk-ok-cta">Retour &agrave; l&rsquo;accueil</a>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });
useHead({
  title: "Réservation confirmée · coffez.ch",
  meta: [{ name: "robots", content: "noindex" }],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" }
  ]
});
</script>

<style scoped>
.bk-ok-root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: #F4F7F8;
  font-family: 'Inter', sans-serif;
  color: #0F1923;
}
.bk-ok-card {
  background: #fff;
  border-radius: 24px;
  padding: 52px 44px;
  max-width: 620px;
  width: 100%;
  box-shadow: 0 24px 64px rgba(15, 25, 35, 0.12);
  text-align: center;
}
.bk-ok-check {
  width: 68px;
  height: 68px;
  margin: 0 auto 26px;
  border-radius: 50%;
  background: #1ABFBF;
  color: #fff;
  font-size: 34px;
  line-height: 68px;
  font-weight: 700;
}
h1 {
  font-family: 'Sora', sans-serif;
  font-size: clamp(26px, 4vw, 36px);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
}
.lead {
  font-size: 15.5px;
  line-height: 1.75;
  color: #5A6B78;
  margin: 0 0 32px;
}
.bk-ok-next {
  background: #F4F7F8;
  border-radius: 14px;
  padding: 22px 24px;
  text-align: left;
  margin-bottom: 28px;
}
.bk-ok-h {
  font-family: 'Sora', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #5A6B78;
  margin: 0 0 12px;
}
.bk-ok-next ul { margin: 0; padding-left: 18px; }
.bk-ok-next li { font-size: 13.5px; line-height: 1.7; margin-bottom: 7px; }
.bk-ok-contact { font-size: 13px; color: #5A6B78; margin: 0 0 28px; }
.bk-ok-contact a { color: #0F1923; font-weight: 600; text-decoration: none; border-bottom: 2px solid #1ABFBF; }
.bk-ok-cta {
  display: inline-block;
  padding: 15px 32px;
  background: #0F1923;
  color: #fff;
  border-radius: 12px;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
}
@media (max-width: 560px) { .bk-ok-card { padding: 38px 24px; } }
</style>
