<!--
  ============================================================
  SUR MESURE — portage du mockup design-preview-sur-mesure.html
  Branche : riviera-pop   ·   Route : /sur-mesure
  ============================================================
-->
<template>
  <div class="surmesure-root">

<nav>
  <a href="/riviera" class="nav-logo">Coffez<span>.ch</span></a>
  <ul class="nav-links">
    <li><a href="/riviera#preuve">{{ $t('siteNav.references') }}</a></li>
    <li><a href="/formules">{{ $t('siteNav.formules') }}</a></li>
    <li><a href="/sur-mesure">{{ $t('siteNav.surMesure') }}</a></li>
    <li><a href="/riviera#faq">{{ $t('siteNav.faq') }}</a></li>
  </ul>
  <div class="nav-right">
    <div class="nav-lang">
      <button type="button" :class="{ active: locale === 'fr' }" @click="setLocale('fr')">FR</button><span>|</span><button type="button" :class="{ active: locale === 'de' }" @click="setLocale('de')">DE</button><span>|</span><button type="button" :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
    </div>
    <a href="/riviera#contact" class="nav-cta">{{ $t('siteNav.demanderDevis') }}</a>
  </div>
</nav>

<!-- HERO -->
<section class="sec" style="padding-bottom:var(--s3);">
  <div class="wrap">
    <div class="hero-duo">
      <div>
        <span class="lbl">{{ $t('surMesure.eyebrowEntreprises') }}</span>
        <h1 class="d">{{ $t('surMesure.title') }}</h1>
        <p class="meta" style="white-space:pre-line;">{{ $t('surMesure.metaLine') }}</p>
      </div>
      <figure style="background:var(--grey-cool);border-radius:22px;display:flex;align-items:center;justify-content:center;box-shadow:0 20px 56px rgba(15,25,35,0.13);overflow:hidden;">
        <img src="/riviera/img/cas-itconcepts-itconcepts-artiste-invite.jpg" alt="Stand IT Concepts&nbsp;: l'artiste dessine en direct, l'invit&eacute; assis face &agrave; lui sur le si&egrave;ge VIP" style="aspect-ratio:auto;object-fit:contain;max-height:420px;box-shadow:none;border-radius:0;">
      </figure>
    </div>
  </div>
</section>

<!-- UNE EXPÉRIENCE À VOTRE IMAGE -->
<section class="sec" style="padding-top:0;">
  <div class="wrap">
    <span class="lbl">{{ $t('surMesure.eyebrowPerso') }}</span>
    <h2 class="h3" style="font-size:var(--t-h2);margin-bottom:var(--s1);">{{ $t('surMesure.persoTitle') }}</h2>
    <p class="txt" style="max-width:62ch;margin-bottom:var(--s3);">{{ $t('surMesure.persoIntro') }}</p>

    <div class="dom">
      <div>
        <h3>{{ $t('surMesure.domStyles') }}</h3>
        <ul>
          <li v-for="item in $tm('surMesure.domStylesItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
      <div>
        <h3>{{ $t('surMesure.domSupports') }}</h3>
        <ul>
          <li v-for="item in $tm('surMesure.domSupportsItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
      <div>
        <h3>{{ $t('surMesure.domFormats') }}</h3>
        <ul>
          <li v-for="item in $tm('surMesure.domFormatsItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
      <div>
        <h3>{{ $t('surMesure.domBranding') }}</h3>
        <ul>
          <li v-for="item in $tm('surMesure.domBrandingItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
      <div>
        <h3>{{ $t('surMesure.domEcrin') }}</h3>
        <ul>
          <li v-for="item in $tm('surMesure.domEcrinItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
    </div>

    <div class="popart-duo">
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 20px 56px rgba(15,25,35,0.13);background:var(--grey-cool);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
        <img src="/riviera/img/popart-planche-six-portraits.jpg" alt="Planche de six portraits pop art, styles et couleurs vari&eacute;s" style="width:100%;height:100%;object-fit:contain;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 20px 56px rgba(15,25,35,0.13);background:var(--grey-cool);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
        <img src="/riviera/img/popart-lausanne-homme-lunettes-rouge.jpg" alt="Portrait pop art, fond rouge, homme en lunettes de soleil, Lausanne" style="width:100%;height:100%;object-fit:contain;display:block;">
      </figure>
    </div>
    <p style="text-align:center;margin-top:12px;" class="lbl">D&rsquo;autres possibilit&eacute;s existent selon vos envies.</p>

    <div class="hero-duo" style="margin-top:var(--s3);">
      <figure style="background:var(--grey-cool);border-radius:22px;display:flex;align-items:center;justify-content:center;box-shadow:0 20px 56px rgba(15,25,35,0.13);overflow:hidden;">
        <img src="/riviera/img/offre-branding-sisley-5min.jpg" alt="Client tenant son portrait branded Sisley Paris, panneau 5 minutes en arri&egrave;re-plan" style="aspect-ratio:auto;object-fit:contain;max-height:420px;box-shadow:none;border-radius:0;">
      </figure>
      <div>
        <span class="lbl">{{ $t('surMesure.eyebrow2min') }}</span>
        <h2 class="h3">{{ $t('surMesure.liveTitle') }}</h2>
        <p class="txt">{{ $t('surMesure.liveText') }}</p>
      </div>
    </div>

    <div class="hero-duo" style="margin-top:var(--s3);">
      <div style="order:1;">
        <span class="lbl">{{ $t('surMesure.eyebrowPopArt') }}</span>
        <h2 class="h3">{{ $t('surMesure.brandTitle') }}</h2>
        <p class="txt">{{ $t('surMesure.brandText') }}</p>
      </div>
      <figure style="order:2;background:var(--grey-cool);border-radius:22px;display:flex;align-items:center;justify-content:center;box-shadow:0 20px 56px rgba(15,25,35,0.13);overflow:hidden;">
        <img src="/riviera/img/offre-branding-matis-live.jpg" alt="Portrait dessin&eacute; en direct avec le logo Matis Paris int&eacute;gr&eacute; &agrave; l'illustration" style="aspect-ratio:auto;object-fit:contain;max-height:420px;box-shadow:none;border-radius:0;">
      </figure>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="sec" style="padding-top:0;">
  <div class="wrap">
    <span class="lbl">{{ $t('surMesure.eyebrowDevis') }}</span>
    <div class="contact-grid">
      <a class="c-card primary" href="/riviera#contact">
        <span class="c-k">{{ $t('surMesure.cardDirectLabel') }}</span>
        <span class="c-v">{{ $t('surMesure.cardDirectValue') }}</span>
      </a>
      <a class="c-card" href="/riviera#contact">
        <span class="c-k">{{ $t('surMesure.cardVisioLabel') }}</span>
        <span class="c-v">{{ $t('surMesure.cardVisioValue') }}</span>
      </a>
      <a class="c-card" href="https://www.linkedin.com/in/coffez/" target="_blank" rel="noopener">
        <span class="c-k">{{ $t('surMesure.cardLinkedinLabel') }}</span>
        <span class="c-v">{{ $t('surMesure.cardLinkedinValue') }}</span>
      </a>
      <button class="c-card" id="telBtn" type="button" onclick="revealTel()">
        <span class="c-k">{{ $t('surMesure.cardTelLabel') }}</span>
        <span class="c-v" id="telVal">{{ $t('surMesure.cardTelValue') }}</span>
      </button>
    </div>

    <div class="refs" style="margin-top:var(--s3);">
      <span>UBS</span><i>&#9670;</i><span>Roche</span><i>&#9670;</i><span>IWC Schaffhausen</span><i>&#9670;</i><span>Sisley Paris</span><i>&#9670;</i><span>KGV Z&uuml;rich</span><i>&#9670;</i><span>ITConcepts</span><i>&#9670;</i><span>JobCloud</span><i>&#9670;</i><span>Orbis</span>
    </div>
  </div>
</section>

<!-- ── STYLES DE DESSIN (en construction) ─────────── -->
<section class="sec" style="padding-top:0;">
  <div class="wrap">
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:10px;">
      <span class="lbl" style="margin:0;">{{ $t('surMesure.stylesLabel') }}</span>
      <span class="soon-badge">{{ $t('surMesure.stylesSoon') }}</span>
    </div>
    <h2 class="h2">{{ $t('surMesure.stylesTitle') }}</h2>
    <p class="txt" style="max-width:680px;">{{ $t('surMesure.stylesIntro') }}</p>

    <div class="popart-grid">
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);background:var(--grey-cool);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
        <img src="/riviera/img/popart-lausanne-homme-lunettes-rouge.jpg" alt="Portrait pop art, fond rouge, homme en lunettes de soleil, Lausanne" style="width:100%;height:100%;object-fit:contain;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);background:var(--grey-cool);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
        <img src="/riviera/img/popart-lausanne-femme-rire-peche.jpg" alt="Portrait pop art, fond p&ecirc;che, femme riant aux &eacute;clats, Lausanne" style="width:100%;height:100%;object-fit:contain;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);background:var(--grey-cool);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
        <img src="/riviera/img/popart-montreux-homme-lunettes-rose.jpg" alt="Portrait pop art, fond rose fluo, homme en lunettes, Montreux" style="width:100%;height:100%;object-fit:contain;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);background:var(--grey-cool);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
        <img src="/riviera/img/popart-homme-fume-gris.jpg" alt="Portrait pop art, fond gris, homme fumant" style="width:100%;height:100%;object-fit:contain;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);background:var(--grey-cool);aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
        <img src="/riviera/img/popart-homme-casquette-ny-vert.jpg" alt="Portrait pop art, fond vert, homme casquette NY" style="width:100%;height:100%;object-fit:contain;display:block;">
      </figure>
    </div>
  </div>
</section>

<footer>
  <div class="foot-wrap">
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.entreprises') }}</span>
      <a href="/sur-mesure">{{ $t('siteFooter.surMesure') }}</a>
      <a href="/formules">{{ $t('siteFooter.formules') }}</a>
      <a href="/riviera#offres">{{ $t('siteFooter.evenementsEntreprise') }}</a>
      <a href="/riviera#offres">{{ $t('siteFooter.aDistance') }}</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.etudesDeCas') }}</span>
      <a href="/riviera#preuve">{{ $t('siteFooter.kgv') }}</a>
      <a href="/riviera#preuve">{{ $t('siteFooter.mcdonalds') }}</a>
      <a href="/riviera#preuve">{{ $t('siteFooter.toutesReferences') }}</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.autresOccasions') }}</span>
      <a href="/riviera#preuve">{{ $t('siteFooter.mariage') }}</a>
      <a href="/riviera#preuve">{{ $t('siteFooter.fetesDeVille') }}</a>
      <a href="/riviera#preuve">{{ $t('siteFooter.soireesClub') }}</a>
      <a href="/riviera#preuve">{{ $t('siteFooter.cargoStudio') }}</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.contact') }}</span>
      <a href="/riviera#contact">{{ $t('siteFooter.meTrouver') }}</a>
      <a href="/riviera#faq">{{ $t('siteFooter.faq') }}</a>
      <a href="mailto:pascalcoffez@gmail.com">pascalcoffez@gmail.com</a>
    </div>
  </div>
  <p class="foot-legal">{{ $t('siteFooter.legal') }}</p>
</footer>

  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { locale, setLocale, t } = useI18n()

useHead({
  title: () => t('surMesure.seoTitle'),
  meta: [
    { name: 'description', content: () => t('surMesure.seoDescription') }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" }
  ]
})

onMounted(() => {
  const src = `
    var T = 'KzQxIDc5IDEyMyA3OCAzMw==';
    function revealTel(){
      var n = atob(T);
      document.getElementById('telVal').textContent = n;
      var b = document.getElementById('telBtn');
      b.onclick = function(){ window.location.href = 'tel:' + n.replace(/\\s/g,''); };
      b.style.borderColor = 'var(--teal)';
    }
    window.revealTel = revealTel;
  `
  try { const run = new Function(src); run() } catch (e) { console.error('[sur-mesure] script error', e) }
})
</script>

<style>
.surmesure-root {
  --teal:#1ABFBF; --teal-dark:#001e2b; --sky:#E0F5FA;
  --text:#0F1923; --muted:#6B7280; --border:#E5E7EB; --grey-cool:#F4F6F8;
  --t-display: clamp(48px,7vw,84px); --t-h2: clamp(34px,4.4vw,54px); --t-h3: clamp(24px,2.6vw,32px);
  --t-body:17px; --t-meta:13px; --t-label:10px;
  --s1:16px; --s2:32px; --s3:64px; --s4:112px;
  font-family:'Inter',sans-serif;color:var(--text);background:#fff;-webkit-font-smoothing:antialiased;
}
.surmesure-root .wrap{max-width:1080px;margin:0 auto;padding:0 40px;}
@media(max-width:700px){.surmesure-root .wrap{padding:0 20px;} .surmesure-root{--s3:44px;--s4:72px;}}

.surmesure-root nav{position:sticky;top:0;z-index:400;background:rgba(255,255,255,0.94);backdrop-filter:blur(12px);
    border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:14px 40px;}
.surmesure-root .nav-logo{font-family:'Sora',sans-serif;font-weight:800;font-size:19px;color:var(--text);text-decoration:none;letter-spacing:-0.02em;}
.surmesure-root .nav-logo span{color:var(--teal);}
.surmesure-root .nav-links{display:flex;gap:32px;list-style:none;margin:0;padding:0;}
.surmesure-root .nav-links a{font-size:14.5px;font-weight:500;color:var(--muted);text-decoration:none;}
.surmesure-root .nav-links a:hover{color:var(--text);}
.surmesure-root .nav-cta{background:var(--teal);color:#fff;border-radius:100px;padding:11px 24px;
         font-family:'Sora',sans-serif;font-weight:700;font-size:13.5px;text-decoration:none;}
.surmesure-root .nav-right{display:flex;align-items:center;gap:18px;flex-shrink:0;}
.surmesure-root .nav-lang{font-family:'Sora',sans-serif;font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.06em;display:flex;align-items:center;gap:5px;}
.surmesure-root .nav-lang button{font:inherit;background:none;border:none;padding:2px 1px;cursor:pointer;color:var(--muted);transition:color .15s;}
.surmesure-root .nav-lang button.active{color:var(--teal);}
.surmesure-root .nav-lang button:hover{color:var(--teal-dark);}
.surmesure-root .nav-lang span{color:var(--border);}
@media(max-width:860px){.surmesure-root .nav-links{display:none;} .surmesure-root nav{padding:12px 20px;} .surmesure-root .nav-lang{display:none;}}

.surmesure-root .sec{padding:var(--s4) 0;}
.surmesure-root .lbl{display:inline-flex;align-items:center;gap:10px;font-family:'Sora',sans-serif;font-size:var(--t-label);
     font-weight:700;letter-spacing:0.44em;text-transform:uppercase;color:var(--muted);margin:0 0 var(--s1);}
.surmesure-root .lbl::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--teal);flex-shrink:0;}
.surmesure-root .d{font-family:'Sora',sans-serif;font-size:var(--t-display);font-weight:800;letter-spacing:-0.05em;
   line-height:0.94;margin:0 0 var(--s2);}
.surmesure-root .h3{font-family:'Sora',sans-serif;font-size:var(--t-h3);font-weight:800;letter-spacing:-0.03em;
    line-height:1.1;margin:0 0 var(--s1);}
.surmesure-root .meta{font-family:'Sora',sans-serif;font-size:var(--t-meta);font-weight:700;letter-spacing:0.1em;
      text-transform:uppercase;line-height:2;margin:0;}
.surmesure-root .txt{font-size:var(--t-body);line-height:1.65;color:var(--muted);margin:0 0 var(--s1);max-width:62ch;}

.surmesure-root .hero-duo{display:grid;grid-template-columns:1fr 1fr;gap:var(--s3);align-items:center;}
.surmesure-root .hero-duo figure{margin:0;border-radius:22px;overflow:hidden;box-shadow:0 20px 56px rgba(15,25,35,0.13);}
.surmesure-root .hero-duo img{width:100%;height:100%;object-fit:cover;display:block;aspect-ratio:4/3;}
@media(max-width:860px){.surmesure-root .hero-duo{grid-template-columns:1fr;} .surmesure-root .hero-duo figure{order:-1;}}

.surmesure-root .dom{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--border);
     border:1px solid var(--border);border-radius:20px;overflow:hidden;}
@media(max-width:1200px){.surmesure-root .dom{grid-template-columns:repeat(3,1fr);}}
@media(max-width:1000px){.surmesure-root .dom{grid-template-columns:repeat(2,1fr);}}
@media(max-width:860px){.surmesure-root .dom{grid-template-columns:1fr;}}
.surmesure-root .dom > div{background:#fff;padding:34px 30px;}
.surmesure-root .popart-duo{display:grid;grid-template-columns:1fr 1fr;gap:var(--s2);margin-top:var(--s2);}
@media(max-width:600px){.surmesure-root .popart-duo{grid-template-columns:1fr;}}
.surmesure-root .soon-badge{display:inline-block;font-family:'Sora',sans-serif;font-size:10.5px;font-weight:800;
  letter-spacing:0.18em;text-transform:uppercase;color:#0F1923;background:#FFD84D;padding:6px 12px;border-radius:999px;}
.surmesure-root .popart-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:var(--s2);margin-top:var(--s2);}
@media(max-width:900px){.surmesure-root .popart-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:600px){.surmesure-root .popart-grid{grid-template-columns:repeat(2,1fr);}}
.surmesure-root .dom h3{font-family:'Sora',sans-serif;font-size:19px;font-weight:800;letter-spacing:-0.02em;margin:0 0 var(--s1);}
.surmesure-root .dom ul{list-style:none;padding:0;margin:0;}
.surmesure-root .dom li{font-size:15px;line-height:1.55;color:var(--muted);padding:7px 0;border-top:1px solid var(--border);}
.surmesure-root .dom li:first-child{border-top:none;}

.surmesure-root .contact-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;max-width:760px;}
@media(max-width:700px){.surmesure-root .contact-grid{grid-template-columns:1fr;}}
.surmesure-root .c-card{display:flex;flex-direction:column;gap:8px;background:#fff;border:1px solid var(--border);
        border-radius:18px;padding:26px 28px;text-decoration:none;color:var(--text);
        transition:border-color .15s, transform .15s;}
.surmesure-root .c-card:hover{border-color:var(--teal);transform:translateY(-2px);}
.surmesure-root .c-k{font-family:'Sora',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.24em;text-transform:uppercase;color:var(--muted);}
.surmesure-root .c-v{font-family:'Sora',sans-serif;font-size:18px;font-weight:800;letter-spacing:-0.02em;}
.surmesure-root .c-card.primary{background:var(--teal);border-color:var(--teal);color:#fff;box-shadow:0 12px 34px rgba(26,191,191,0.32);}
.surmesure-root .c-card.primary .c-k{color:rgba(255,255,255,0.85);}
.surmesure-root button.c-card{font:inherit;text-align:left;cursor:pointer;}

.surmesure-root .refs{display:flex;flex-wrap:wrap;align-items:center;}
.surmesure-root .refs span{font-family:'Sora',sans-serif;font-size:12.5px;font-weight:700;letter-spacing:0.16em;
           text-transform:uppercase;color:var(--text);}
.surmesure-root .refs i{color:var(--teal);font-size:9px;margin:0 14px;font-style:normal;}

.surmesure-root footer{background:var(--teal-dark);color:rgba(255,255,255,0.7);padding:76px 24px 32px;}
.surmesure-root footer .foot-wrap{max-width:1080px;margin:0 auto;padding:0 40px 34px;display:grid;
  grid-template-columns:repeat(4,1fr);gap:34px;text-align:left;}
.surmesure-root footer .foot-col{display:flex;flex-direction:column;gap:9px;}
.surmesure-root footer .foot-h{font-family:'Sora',sans-serif;font-size:10px;font-weight:800;letter-spacing:0.22em;
  text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:3px;}
.surmesure-root footer .foot-col a{color:rgba(255,255,255,0.86);font-size:13.5px;text-decoration:none;line-height:1.5;}
.surmesure-root footer .foot-col a:hover{color:#1ABFBF;}
.surmesure-root footer .foot-legal{color:rgba(255,255,255,0.5);font-size:12.5px;margin:0;padding:22px 40px 0;
  border-top:1px solid rgba(255,255,255,0.12);max-width:1080px;margin:0 auto;text-align:center;}
@media(max-width:860px){.surmesure-root footer .foot-wrap{grid-template-columns:1fr 1fr;gap:26px;padding:0 20px 26px;}}
@media(max-width:520px){.surmesure-root footer .foot-wrap{grid-template-columns:1fr;}}

.surmesure-root section[id] { scroll-margin-top: 110px; }
</style>
