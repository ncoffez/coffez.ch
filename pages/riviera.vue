<!--
  ============================================================
  RIVIERA POP — portage du mockup design-preview-riviera.html
  Branche : riviera-pop   ·   Route : /riviera
  Le bloc contact utilise le composant <Contact /> EXISTANT
  (Slack #commandes + email pascalcoffez@gmail.com) — INCHANGÉ.
  ============================================================
-->
<template>
  <div class="riviera-root">
<!-- ── SPLASH ──────────────────────────────────── -->
<div id="splash">
  <div class="splash-joy">Joy.</div>
  <div class="splash-sub">Coffez.ch</div>
</div>


<!-- ── NAV ──────────────────────────────────── -->
<!-- ── BANDEAU ACTUALITÉ : FÊTES DE FIN D'ANNÉE ────────── -->
<div class="promo-bar">
  <span class="promo-bar-text"><strong>{{ $t('riviera.promoStrong') }}</strong> &mdash; {{ $t('riviera.promoText') }} <a href="#actu-noel">{{ $t('riviera.promoLink') }}</a></span>
</div>

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
    <a href="https://coffez.ch/live" target="_blank" rel="noopener" class="nav-live"><span class="dot"></span><span>{{ $t('siteNav.live') }}</span></a>
    <a href="#offres" class="nav-cta">{{ $t('siteNav.reserver') }}</a>
  </div>
</nav>

<!-- ── A. HERO ──────────────────────────────── -->
<div class="hero">

  <div class="hero-blob hero-blob-1"></div>
  <div class="hero-blob hero-blob-2"></div>

  <div class="hero-left">
    <div class="hero-joy-row">
      <h1 class="hero-h1 d">{{ $t('riviera.heroTitle') }}</h1>
      <img src="/riviera/img/img-mascot.png" class="hero-mascot" alt="">
    </div>
    <p class="hero-sub">{{ $t('riviera.heroSub') }}</p>
    <div class="hero-ctas">
      <a href="#contact" class="btn-hero-primary">{{ $t('riviera.heroCta') }}</a>
    </div>
    <div class="hero-socials">
      <a href="https://www.instagram.com/pascalcoffez" target="_blank" class="hero-social-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        Instagram
      </a>
      <a href="https://www.linkedin.com/in/coffez/" target="_blank" class="hero-social-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
    </div>
  </div>

  <div class="hero-right">
    <div class="hero-video-wrap">
      <video id="heroVid" autoplay muted playsinline poster="/riviera/img/disco-photos-en-action-2.jpg">
        <source src="/riviera/videos/hero2-0.mp4" type="video/mp4">
      </video>
    </div>
    <button class="hero-sound-btn" id="soundBtn" onclick="toggleSound()" title="Activer / couper le son" aria-label="Son">&#128264;</button>
    <div class="hero-vid-dots" id="heroDots"></div>
  </div>

</div>

<!-- ── A2. ACTUALITÉ — FÊTES DE FIN D'ANNÉE (format "news", façon Scarlett) ── -->
<section class="section bg-white" id="actu-noel">
  <div class="wrap" style="max-width:980px;">
    <div class="actu-noel-card">
      <div class="actu-noel-media">
        <img src="/riviera/img/16-clients-iwc.jpg" alt="IWC Schaffhausen &mdash; f&ecirc;te de fin d&rsquo;ann&eacute;e" loading="lazy">
      </div>
      <div class="actu-noel-body">
        <span class="lbl">{{ $t('riviera.actuLabel') }}</span>
        <h2 class="h2" style="color:var(--text)">{{ $t('riviera.actuTitle') }}</h2>
        <a href="#contact" class="nav-cta" style="margin-top:20px;">{{ $t('riviera.actuCta') }}</a>
      </div>
    </div>
  </div>
</section>


<!-- ── B. TRUSTED BY ─────────────────────────── -->
<section class="sec section bg-sky" id="clients" >
  <div class="wrap">
    <span class="section-label">{{ $t('riviera.trustedLabel') }}</span>
    <h2 class="trusted-headline h2" style="color:var(--text)">{{ $t('riviera.trustedHeadline') }}</h2>
    <div class="trusted-rule"></div>
    <div class="logo-wall">
      <div class="lw-cell"><img src="/riviera/img/references-logos-ubs-logo-1536x922.jpg" alt="UBS" loading="lazy"></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-roche-clean.jpg" alt="Roche Diagnostics" loading="lazy"></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-iwc-1.jpg" alt="IWC Schaffhausen" loading="lazy"></div>
      <div class="lw-cell lw-lg"><img src="/riviera/img/references-logos-manor-logo-opengraph.jpg" alt="Manor" loading="lazy"></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-mcd-goldenarches-1235-rgb-switzerland-2.png" alt="McDonald&rsquo;s Suisse" loading="lazy"></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-sisley-paris-logo-svg.jpg" alt="Sisley Paris" loading="lazy"></div>
      <div class="lw-cell lw-xxl"><img src="/riviera/img/references-logos-matis-paris-clean.jpg" alt="Matis Paris" loading="lazy"></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-jobcloud-responsive-rgb-1000x232-1.jpg" alt="JobCloud" loading="lazy"></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-image-11-02-23-10-34.jpg" alt="SRF" loading="lazy"></div>
      <div class="lw-cell"><span class="lw-txt">SRG SSR</span></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-image-11-02-23-11-10.jpg" alt="KGV Z&uuml;rich" loading="lazy"></div>
      <div class="lw-cell lw-xxl"><img src="/riviera/img/references-logos-images-1.jpg" alt="Sanacare" loading="lazy"></div>
      <div class="lw-cell lw-xl"><img src="/riviera/img/references-logos-logo.png" alt="JP Rosselet Cosmetics" loading="lazy"></div>
      <div class="lw-cell"><img src="/riviera/img/references-logos-logo0x0.jpg" alt="Swiss Marketing" loading="lazy"></div>
      <div class="lw-cell lw-lg"><img src="/riviera/img/references-logos-image.jpg" alt="Eventmodus" loading="lazy"></div>
      <div class="lw-cell"><span class="lw-txt">IT&nbsp;Concepts</span></div>
      <div class="lw-cell"><span class="lw-txt">Meier&nbsp;+&nbsp;Cie</span></div>
      <div class="lw-cell"><span class="lw-txt">Thurgauer<br>Kantonalbank</span></div>
      <div class="lw-cell"><span class="lw-txt">Cuore&nbsp;Weddings</span></div>
      <div class="lw-cell"><span class="lw-txt">Swiss&nbsp;Label</span></div>
      <div class="lw-cell"><span class="lw-txt">Stadt<br>Winterthur</span></div>
      <div class="lw-cell"><span class="lw-txt">Biel-Seeland</span></div>
      <div class="lw-cell"><span class="lw-txt">Weingut<br>Besson-Strasser</span></div>
    </div>
  </div>

</section>

<!-- ── B2. RÉFÉRENCES CLIENTS ────────────────────── -->
<section style="background:#fff;padding:80px 0 0;display:none;">

  <!-- En-tête style Climbee -->
  <div class="wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-bottom:56px;align-items:start;">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;">
        <span style="width:8px;height:8px;border-radius:50%;background:var(--gold);flex-shrink:0;"></span>
        <span style="font-family:'Sora',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;color:var(--muted);">Ils nous font confiance</span>
      </div>
      <h2 class="h2" style="color:var(--text)">Déjà au service<br>des plus grands events<br>de Suisse.</h2>
    </div>
    <div style="padding-top:8px;">

      <p style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin:0 0 12px;">Secteurs</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        <span style="padding:5px 14px;border:1px solid var(--border);border-radius:100px;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;color:var(--text);letter-spacing:0.02em;">IT</span>
        <span style="padding:5px 14px;border:1px solid var(--border);border-radius:100px;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;color:var(--text);letter-spacing:0.02em;">Industrie & Luxe</span>
        <span style="padding:5px 14px;border:1px solid var(--border);border-radius:100px;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;color:var(--text);letter-spacing:0.02em;">Cosmétiques</span>
        <span style="padding:5px 14px;border:1px solid var(--border);border-radius:100px;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;color:var(--text);letter-spacing:0.02em;">Palaces</span>
        <span style="padding:5px 14px;border:1px solid var(--border);border-radius:100px;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;color:var(--text);letter-spacing:0.02em;">Mode</span>
        <span style="padding:5px 14px;border:1px solid var(--border);border-radius:100px;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;color:var(--text);letter-spacing:0.02em;">Marketing</span>
        <span style="padding:5px 14px;border:1px solid var(--border);border-radius:100px;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;color:var(--text);letter-spacing:0.02em;">Villes & Collectivités</span>
      </div>
    </div>
  </div>

  <!-- Label ligne 1 -->
  <div style="text-align:center;padding:0 0 16px;border-top:1px solid var(--border);padding-top:32px;">
    <span style="font-family:'Sora',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.32em;text-transform:uppercase;color:var(--muted);opacity:0.45;">Clients & partenaires</span>
  </div>

</section>

<!-- ── B3. ENVERGURE — preuve visuelle immédiate, sans lien, pour EMM ── -->
<section class="section bg-white" style="padding-bottom:0;">
  <div class="wrap">

    <div class="envergure-duo">
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/cas-itconcepts-itconcepts-portrait-carte.jpg" alt="Invité tenant son portrait, carte logotypée IT Concepts, congrès SMFS Zürich" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/cas-kgv-kauf-groupe-tableau.jpg" alt="Groupe de dirigeants avec leur portrait, planche de caricatures en arrière-plan, Theater Kaufleuten" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
    </div>

    <div class="envergure-duo" style="margin-top:var(--s2);">
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/cas-kgv-kgv-cinq-portraits-ecran.jpg" alt="Les cinq portraits projetés sur l'écran de scène pendant l'allocution, Herbstkongress KGV, Theater Kaufleuten" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/cas-kgv-artiste-qrcode.jpg" alt="Pascal Coffez de dos, t-shirt Artist avec QR code, banderole « in nur 3 Minuten »" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
    </div>

    <div class="envergure-quad">
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/cas-itconcepts-itconcepts-artiste-dos.jpg" alt="Pascal Coffez de dos, dessinant en direct, écran Enterprise Service Management en arrière-plan, congrès SMFS" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/16-clients-translation-probst.png" alt="Stand Translation Probst, salon professionnel de Zurich" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/cas-kgv-itconcept-business-digital.jpg" alt="Deux invités souriants, pouces levés, portrait dessiné en direct sur iPad, enseigne « Business Software » en arrière-plan" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
      <figure style="margin:0;border-radius:20px;overflow:hidden;box-shadow:0 16px 44px rgba(15,25,35,0.14);">
        <img src="/riviera/img/cas-kgv-kgv-salle-comble.jpg" alt="Salle comble vue de la galerie, Herbstkongress KGV, Theater Kaufleuten Zürich" style="width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;display:block;">
      </figure>
    </div>
  </div>
</section>


<!-- ── C. RÉFÉRENCES PHOTO ─────────────────────── -->
<section class="section bg-white" id="preuve" style="">
  <div class="wrap">

    <div class="grid-head">
      <div>
        <span class="lbl">Types d&rsquo;&eacute;v&eacute;nements</span>
        <h2 class="h2" style="color:var(--text)">Nos r&eacute;alisations.</h2>
      </div>
    </div>

    <p class="viv-chapo">Congress &middot; Trade Fair &middot; Product Launch &middot; Retail Week &middot; Staff Party &middot; In-Store Activation &middot; Annual Client Event &middot; Store Opening &middot; Wedding</p>

    <div class="viv">

        <div id="ref-kgv" class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — KGV Zürich"
             data-media-title="KGV Z&uuml;rich &middot; Theater Kaufleuten"
             data-media='[{"t":"v","src":"/riviera/videos/kgv-duo-rires.mp4","poster":"/riviera/img/cas-kgv-kgv-duo-rires-poster.jpg"},{"t":"v","src":"/riviera/videos/kgv-reaction-guest.mp4","poster":"/riviera/img/cas-kgv-kgv-reaction-video-poster.jpg"},{"t":"p","src":"/riviera/img/cas-kgv-kgv-cinq-portraits-ecran.jpg"},{"t":"p","src":"/riviera/img/cas-kgv-kgv-salle-comble.jpg"},{"t":"p","src":"/riviera/img/16-clients-ville-de-zurich-minitres-sur-scne.jpg"},{"t":"v","src":"/riviera/videos/kgv-scene-ecran.mp4","poster":"/riviera/img/cas-kgv-kgv-scene-video-poster.jpg"}]'>
          <svg class="photo-play" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          <img src="/riviera/img/16-clients-ville-de-zurich-minitres-sur-scne.jpg" alt="KGV Zurich" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Herbstkongress Z&uuml;rich</div>
            <div class="photo-hover-facts">Association des PME du canton de Z&uuml;rich &middot; Theater Kaufleuten &middot; 250 invit&eacute;s</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Journées Nationales Suisses sur la Stérilisation"
             data-media-title="Journ&eacute;es Nationales Suisses sur la St&eacute;rilisation &middot; Bienne"
             data-media='[{"t":"p","src":"/riviera/img/16-clients-villede-bienneevent-bienn-gdecran.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-salon-vue-large.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-galerie-portraits-fil.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-duo-galerie.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-selfie-ecran-geant.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-dessin-en-cours.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-dessin-invitee.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-invitee-portraits-ecran.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-invitee-table.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-poste-dessin.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-groupe-rires.jpg"},{"t":"p","src":"/riviera/img/cas-sterilisation-sterilisation-portrait-officiel-20e.jpg"},{"t":"v","src":"/riviera/videos/sterilisation-live.mp4","poster":"/riviera/img/cas-sterilisation-sterilisation-live-poster.jpg"}]'>
          <svg class="photo-play" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          <img src="/riviera/img/16-clients-villede-bienneevent-bienn-gdecran.jpg" alt="Congres suisse" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Congr&egrave;s national</div>
            <div class="photo-hover-facts">Journ&eacute;es Nationales Suisses sur la St&eacute;rilisation &middot; Bienne &middot; &asymp;400 participants &middot; 2 jours</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Orbis"
             data-media-title="Messe Z&uuml;rich &middot; HR Festival Europe"
             data-media='[{"t":"p","src":"/riviera/img/16-clients-orbis.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-stand-large-rollup.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-poste-dessin-stand.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-trio-jeunes-tablette.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-groupe-selfie-stand.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-duo-pouces-stand.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-groupe-quatre-selfie.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-jeune-homme-mobile.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-duo-lunettes-bleues.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-groupe-tablette-live.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-pascal-collegue-rollup.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-selfie-sap-banner.jpg"},{"t":"p","src":"/riviera/img/cas-orbis-orbis-badge-hr-festival.jpg"}]'>
          <img src="/riviera/img/16-clients-orbis.jpg" alt="Orbis" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Messe Z&uuml;rich &middot; HR Festival</div>
            <div class="photo-hover-facts">HR Festival Europe &middot; stand Orbis &middot; salon de 2 jours</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — IT Concepts"
             data-media-title="IT Concepts &middot; Congr&egrave;s SMFS"
             data-media='[{"t":"p","src":"/riviera/img/16-clients-itconceptsevent-itconcepts-17nov-2022.jpg"},{"t":"p","src":"/riviera/img/cas-itconcepts-itconcepts-live-drawing.jpg"},{"t":"p","src":"/riviera/img/cas-itconcepts-itconcepts-carte-branded.jpg"},{"t":"p","src":"/riviera/img/cas-itconcepts-itconcepts-thumbsup-radisson.jpg"},{"t":"p","src":"/riviera/img/cas-itconcepts-itconcepts-artiste-invite.jpg"}]'>
          <img src="/riviera/img/16-clients-itconceptsevent-itconcepts-17nov-2022.jpg" alt="IT Concepts" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">IT Concepts</div>
            <div class="photo-hover-facts">Congr&egrave;s SMFS &middot; Radisson Blu, Z&uuml;rich Flughafen &middot; File d&rsquo;attente au stand</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Matis Paris"
             data-media-title="Matis Paris &middot; AURA, Zurich"
             data-media='[{"t":"p","src":"/riviera/img/cas-matis-matis-femme-bouclee-ipad.jpg"},{"t":"p","src":"/riviera/img/cas-matis-matis-groupe-rollup.jpg"},{"t":"p","src":"/riviera/img/cas-matis-matis-mur-caricatures-dore.jpg"},{"t":"p","src":"/riviera/img/cas-matis-matis-femme-queue-cheval.jpg"},{"t":"p","src":"/riviera/img/16-clients-matis3.jpg"}]'>
          <img src="/riviera/img/cas-matis-matis-femme-bouclee-ipad.jpg" alt="Matis Paris" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Matis Paris</div>
            <div class="photo-hover-facts">Lancement &middot; AURA, Zurich &middot; Portraits &agrave; la charte de la marque</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Sisley Paris Villa privée"
             data-media-title="Sisley Paris &middot; Hair Rituel, Villa priv&eacute;e"
             data-media='[{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-tatouee.jpg"},{"t":"p","src":"/riviera/img/cas-kgv-sisley-villa-ipad.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-robe-noire.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-pull-jaune.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-ballon-rose.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-blonde-jardin.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-chemise-blanche.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-beige.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-femme-brune-exterieur.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-villa-sisley-villa-portrait-cadre.jpg"}]'>
          <img src="/riviera/img/cas-sisley-villa-sisley-villa-femme-tatouee.jpg" alt="Sisley Paris" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Sisley Paris</div>
            <div class="photo-hover-facts">Hair Rituel &middot; Villa priv&eacute;e, Zurich &middot; Portrait digital remis sur place</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Manor"
             data-media-title="Manor &middot; Beauty Days"
             data-media='[{"t":"v","src":"/riviera/videos/manor-beauty-days.mp4","poster":"/riviera/img/cas-manor-manor-video-poster.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-beauty-days-carte.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-stand-mango-ballons.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-famille-fauteuil.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-pere-fils-ballons.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-famille-quatre.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-femme-veste-rose.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-homme-bleu-muscles.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-femme-turquoise.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-pere-enfant-tablette.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-femme-ecran-portrait.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-femme-ecran-portrait-2.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-stand-large.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-stand-rayon.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-cliente-sacs.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-femme-portrait-affiche.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-affiche-gratuit.jpg"},{"t":"p","src":"/riviera/img/cas-manor-manor-beauty-days-affiche.jpg"},{"t":"p","src":"/riviera/img/16-clients-manor.jpg"}]'>
          <svg class="photo-play" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          <img src="/riviera/img/cas-manor-manor-beauty-days-carte.jpg" alt="Manor Beauty Days" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Manor</div>
            <div class="photo-hover-facts">Beauty Days &middot; Winterthour &amp; Schaffhouse &middot; Portrait remis &agrave; la cliente</div>
          </div>
        </div>
        <!-- masqu&eacute;s temporairement (fiches pas termin&eacute;es) -->
        <div class="photo-card" style="display:none">
          <img src="/riviera/img/16-clients-iwc.jpg" alt="IWC Schaffhausen" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">IWC Schaffhausen</div>
            <div class="photo-hover-facts">F&ecirc;te de No&euml;l du personnel &middot; Animation live</div>
          </div>
        </div>
        <div id="ref-ville" class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Stein am Rhein"
             data-media-title="Stein am Rhein &middot; Ch&acirc;teau de Hohenklingen"
             data-media='[{"t":"v","src":"/riviera/videos/stein-duo-rires.mp4","poster":"/riviera/img/cas-stein-am-rhein-stein-video-poster.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-femme-cheveux-longs.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-femme-portrait.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-trio-pouces-leves.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-couple-rires.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-couple-portrait.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-portrait-coeur.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-jeune-homme-portrait.jpg"},{"t":"p","src":"/riviera/img/cas-stein-am-rhein-stein-portraits-suspendus.jpg"}]'>
          <svg class="photo-play" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          <img src="/riviera/img/cas-stein-am-rhein-stein-femme-cheveux-longs.jpg" alt="Stein am Rhein" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Stein am Rhein</div>
            <div class="photo-hover-facts">Ch&acirc;teau de Hohenklingen &middot; 100e anniversaire</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Sisley Paris Globus"
             data-media-title="Sisley Paris &middot; Globus Bahnhofstrasse"
             data-media='[{"t":"p","src":"/riviera/img/cas-sisley-globus-sisley-globus-bonnet-lilas.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-globus-sisley-globus-jeune-homme.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-globus-sisley-globus-femme-manteau-bleu.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-globus-sisley-globus-enseigne.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-globus-sisley-globus-pascal-selfie.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-globus-sisley-globus-rollup-large.jpg"},{"t":"p","src":"/riviera/img/cas-sisley-globus-sisley-globus-artwork-bonnet.jpg"},{"t":"p","src":"/riviera/img/16-clients-sisley-paris.jpg"}]'>
          <img src="/riviera/img/cas-sisley-globus-sisley-globus-bonnet-lilas.jpg" alt="Sisley Paris" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Sisley Paris</div>
            <div class="photo-hover-facts">Hair Rituel &middot; Globus Bahnhofstrasse, Zurich</div>
          </div>
        </div>
        <div class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — JobCloud"
             data-media-title="JobCloud &middot; Rendez-vous annuel clients"
             data-media='[{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-invite-portrait-ecran-lg.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-salle-pleine-panel.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-invites-cocktail.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-panel-audience.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-dessin-live-ecran.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-portrait-ecran.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-panel-intervenants.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-salle-reception.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-pascal-pouces-leves.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-ecran-live-ipad.jpg"},{"t":"p","src":"/riviera/img/cas-jobcloud-jobcloud-bureau-accueil.jpg"},{"t":"p","src":"/riviera/img/cas-kgv-jobcloud-hall.jpg"}]'>
          <img src="/riviera/img/cas-jobcloud-jobcloud-salle-pleine-panel.jpg" alt="JobCloud" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">JobCloud</div>
            <div class="photo-hover-facts">Rendez-vous annuel clients &middot; Zurich &amp; Gen&egrave;ve &middot; Deux dates</div>
          </div>
        </div>
        <div id="ref-mcdonalds" class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — McDonald's Suisse"
             data-media-title="McDonald&rsquo;s Suisse &middot; Ouverture, Bienne"
             data-media='[{"t":"p","src":"/riviera/img/cas-mcdonalds-famille-avant.jpg"},{"t":"p","src":"/riviera/img/cas-mcdonalds-popart-jaune.jpg"},{"t":"p","src":"/riviera/img/cas-mcdonalds-hero-terrasse-mccafe.jpg"}]'>
          <img src="/riviera/img/16-clients-mcdo.jpg" alt="McDonald's Suisse" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">McDonald&rsquo;s Suisse</div>
            <div class="photo-hover-facts">Ouverture du restaurant et du McCaf&eacute; &middot; Bienne</div>
          </div>
        </div>
        <div id="ref-mariage" class="photo-card" tabindex="0" role="button" aria-label="Ouvrir — Mariage"
             data-media-title="Mariage &middot; Kevin &amp; Flavia"
             data-media='[{"t":"v","src":"/riviera/videos/mariage-kevin-flavia.mp4","poster":"/riviera/img/cas-mariage-mariage-video-poster.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-luz-groupe-thumbsup.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-luz-femme-seule.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-luz-jeune-homme.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-luz-jardin-ambiance.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-luz-couple-lac.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-luz-famille-groupe.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-sh-couple-noeud.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-cla-ambiance-salle.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-cla-marie-pouces.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-cla-couple-vert.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-cla-les-maries.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-zh-couple-rires.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-zh-amies-coeur.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-zh-demoiselles.jpg"},{"t":"p","src":"/riviera/img/cas-mariage-mariage-zh-famille-bebe.jpg"}]'>
          <svg class="photo-play" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          <img src="/riviera/img/cas-mariage-mariage-pascal-chevalet-vitznauerhof.jpg" alt="Mariage" loading="lazy">
          <div class="photo-hover">
            <div class="photo-hover-brand">Mariage</div>
            <div class="photo-hover-facts">Hotel Vitznauerhof, Lac des Quatre-Cantons &middot; Portrait des invit&eacute;s pendant la r&eacute;ception</div>
          </div>
        </div>

    </div>


  </div>
</section>







<!-- ── E. TÉMOIGNAGES ──────────────────────────── -->
<section class="sec section bg-white" id="temoignages">
  <div class="wrap" style="max-width:1080px;">

    <div class="emporte">
      <figure class="emporte-hero">
        <img src="/riviera/img/offre-dessin-glamour-ipad-live.jpg" alt="Invit&eacute;e avec son portrait, remis sur place" loading="lazy">
      </figure>
    </div>

    <div class="tem">

      <figure>
        <p class="tem-f">Booth activation</p>
        <blockquote class="tem-q">&laquo;&nbsp;Les visiteurs faisaient la queue chez nous, et chacun a quitt&eacute; le stand avec un rire.&nbsp;&raquo;</blockquote>
        <p class="tem-s">Event Manager, ITConcepts<br>Congr&egrave;s SMFS &middot; Z&uuml;rich</p>
      </figure>

      <figure>
        <p class="tem-f">Year-end party</p>
        <blockquote class="tem-q">&laquo;&nbsp;Nous nous souviendrons toute notre vie de cette soir&eacute;e.&nbsp;&raquo;</blockquote>
        <p class="tem-s">Assistante de direction<br>40 invit&eacute;s</p>
      </figure>

      <figure>
        <p class="tem-f">Networking event</p>
        <blockquote class="tem-q">&laquo;&nbsp;Merci pour votre formidable contribution &agrave; notre Ladies Top Table.&nbsp;&raquo;</blockquote>
        <p class="tem-s">General Communication Manager, Banque nationale Suisse<br>Ch&acirc;teau de Wolfsberg &middot; 100 invit&eacute;s</p>
      </figure>

      <figure>
        <p class="tem-f">Staff party</p>
        <blockquote class="tem-q">&laquo;&nbsp;Quelle formidable soir&eacute;e. Au plaisir de vous r&eacute;engager.&nbsp;&raquo;</blockquote>
        <p class="tem-s">Regional Marketing Manager, Banque nationale Suisse<br>80 invit&eacute;s</p>
      </figure>

      <figure>
        <p class="tem-f">Corporate event</p>
        <blockquote class="tem-q">&laquo;&nbsp;Merci pour votre travail, plein de joie et de passion.&nbsp;&raquo;</blockquote>
        <p class="tem-s">Directeur de d&eacute;partement</p>
      </figure>

      <figure>
        <p class="tem-f">Client reference</p>
        <blockquote class="tem-q">&laquo;&nbsp;Un charisme incroyable. Je recommande Pascal sans r&eacute;serve.&nbsp;&raquo;</blockquote>
        <p class="tem-s">Monika K., marketing strat&eacute;gique, Orbis<br>LinkedIn &middot; 2024</p>
      </figure>

    </div>
  </div>
</section>




<!-- ── C2. COMPARISON : Animation classique vs Coffez Live ─── -->
<section class="sec section" style="background:var(--teal-dark);display:none" id="difference">
  <div class="wrap" style="max-width:1080px;">

    <div style="display:grid;grid-template-columns:1fr 400px;gap:64px;align-items:center;">

      <!-- GAUCHE : titre + deux cartes -->
      <div>
        <div style="margin-bottom:44px;">
          <span class="section-label-dark">La différence</span>
          <h2 class="h2" style="color:#fff">
            Their face<br>says it all.
          </h2>
          <p style="font-size:16px;color:rgba(255,255,255,0.62);line-height:1.6;font-weight:300;margin:0;">
            You can watch it happen, live, on their face.
          </p>
        </div>

        <!-- Deux cartes -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">

          <!-- Ce que je ne fais PAS -->
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.18);border-radius:20px;padding:32px 28px;">
            <p style="font-family:'Sora',sans-serif;font-size:10px;font-weight:600;letter-spacing:0.24em;text-transform:uppercase;color:rgba(255,255,255,0.44);margin:0 0 24px;">What I don't do</p>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:18px;">
              <li style="display:flex;gap:14px;align-items:flex-start;">
                <span style="font-size:16px;line-height:1.2;flex-shrink:0;">❌</span>
                <span style="font-size:13px;color:rgba(255,255,255,0.55);line-height:1.5;">Ridicule people for laughs</span>
              </li>
              <li style="display:flex;gap:14px;align-items:flex-start;">
                <span style="font-size:16px;line-height:1.2;flex-shrink:0;">❌</span>
                <span style="font-size:13px;color:rgba(255,255,255,0.55);line-height:1.5;">Drawings that take longer than 5, 7 or even 12 minutes</span>
              </li>

            </ul>
          </div>

          <!-- Coffez Live -->
          <div style="background:rgba(26,191,191,0.07);border:1.5px solid var(--teal);border-radius:20px;padding:32px 28px;position:relative;">
            <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:44px;height:3px;background:var(--gold);border-radius:0 0 4px 4px;"></div>
            <p style="font-family:'Sora',sans-serif;font-size:10px;font-weight:600;letter-spacing:0.24em;text-transform:uppercase;color:var(--teal);margin:0 0 24px;">Coffez.Live: LIVE</p>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:18px;">
              <li style="display:flex;gap:14px;align-items:flex-start;">
                <span style="font-size:16px;line-height:1.2;flex-shrink:0;">✅</span>
                <span style="font-size:13px;color:rgba(255,255,255,0.72);line-height:1.5;">Positive, flattering & fun portraits</span>
              </li>
              <li style="display:flex;gap:14px;align-items:flex-start;">
                <span style="font-size:16px;line-height:1.2;flex-shrink:0;">✅</span>
                <span style="font-size:13px;color:rgba(255,255,255,0.72);line-height:1.5;">{{ $t('riviera.diffYes2Sub') }}</span>
              </li>
              <li style="display:flex;gap:14px;align-items:flex-start;">
                <span style="font-size:16px;line-height:1.2;flex-shrink:0;">✅</span>
                <span style="font-size:13px;color:#fff;line-height:1.5;font-weight:500;">Portrait · clip · photo — instantly on their phone</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- DROITE : photo preuve -->
      <div>
        <img src="/riviera/img/16-clients-procom-superdessin.jpg" alt="Guest reaction"
             style="width:100%;height:500px;object-fit:cover;object-position:center top;border-radius:24px;display:block;">
      </div>

    </div>

  </div>
</section>













<!-- ── E. RÉSERVER — récap des deux offres ───────── -->
<section class="sec section bg-white" id="offres">
  <div class="wrap">
    <div class="sec-head">
      <span class="lbl">{{ $t('riviera.offresLabel') }}</span>
      <h2 class="h2">{{ $t('riviera.offresTitle') }}</h2>
    </div>

    <div class="offer-duo">
      <a class="offer-card" href="/formules">
        <h3>{{ $t('riviera.offreFormulesTitle') }}</h3>
        <p>{{ $t('riviera.offreFormulesText') }}</p>
        <span class="offer-link">{{ $t('riviera.offreFormulesLink') }}</span>
      </a>
      <a class="offer-card" href="/sur-mesure">
        <h3>{{ $t('riviera.offreSurMesureTitle') }}</h3>
        <p>{{ $t('riviera.offreSurMesureText') }}</p>
        <span class="offer-link">{{ $t('riviera.offreSurMesureLink') }}</span>
      </a>
    </div>
  </div>
</section>


<!-- ── F. QUOTE ─────────────────────────────────── -->
<section class="section bg-white">
  <div class="wrap">
    <div class="duo-offre">
      <div>
        <span class="lbl">{{ $t('riviera.teamLabel') }}</span>
        <h2 class="h2">{{ $t('riviera.teamTitle') }}</h2>
        <p class="txt">{{ $t('riviera.teamNicolas') }}<br>{{ $t('riviera.teamCecilia') }}<br>{{ $t('riviera.teamPascal') }}</p>
      </div>
      <figure class="col-img">
        <img src="/riviera/img/img-800x800-coffezch-team-v2.jpg" alt="Pascal et Nicolas Coffez">
      </figure>
    </div>

    <div class="equipe-duo">
      <figure>
        <img src="/riviera/img/equipe-pascal-pouces-scene.jpg" alt="Pascal Coffez pouces lev&eacute;s devant son chevalet, lumi&egrave;re de sc&egrave;ne bleue, soir&eacute;e d&rsquo;entreprise">
      </figure>
      <figure>
        <video src="/riviera/videos/equipe-cargo-karate.mp4" poster="/riviera/img/equipe-cargo-karate-poster.jpg"
               muted loop playsinline autoplay preload="metadata"></video>
      </figure>
    </div>
  </div>
</section>


<!-- ── G. FAQ ────────────────────────────────────── -->
<section class="section" id="faq" style="background:var(--grey-cool);">
  <div class="wrap">
    <span class="section-label">{{ $t('riviera.faqSectionLabel') }}</span>
    <p style="font-size:14.5px;color:var(--muted);line-height:1.6;margin:0 0 28px;max-width:580px;">{{ $t('riviera.faqIntroPre') }} <a href="/formules" style="color:var(--text);font-weight:700;text-decoration:none;border-bottom:2px solid var(--teal);">{{ $t('riviera.faqIntroLink') }}</a>. {{ $t('riviera.faqIntroPost') }}</p>
    <div class="faq-list">
      <div class="faq-item" v-for="item in $tm('riviera.faq')" :key="item.q">
        <div class="faq-q">{{ $rt(item.q) }}</div>
        <div class="faq-a">{{ $rt(item.a) }}</div>
      </div>
    </div>
  </div>
</section>



<!-- ── CONTACT ───────────────────────────────────────
     Habillage Riviera, MAIS envoi identique au site actuel :
     POST /api/sendMailConfirmation  →  Slack #commandes + pascalcoffez@gmail.com
     (mêmes champs : name, email, phone, message)
-->
<div class="ask" id="contact">
  <div class="ask-in">
    <h2 class="ask-h">{{ $t('riviera.contactTitlePre') }} <em>{{ $t('riviera.contactTitleEm') }}</em>.</h2>
    <p class="ask-p">{{ $t('riviera.contactIntro') }}</p>

    <form class="ask-form" @submit.prevent="submitContact" v-if="contactState !== 'sent'">
      <div class="ask-row">
        <input type="text"  v-model="contact.name"  :placeholder="$t('riviera.contactName')" required>
        <input type="email" v-model="contact.email" :placeholder="$t('riviera.contactEmail')" required>
      </div>
      <div class="ask-row">
        <input type="tel"  v-model="contact.phone" :placeholder="$t('riviera.contactPhone')">
        <input type="date" v-model="contact.date">
      </div>
      <textarea v-model="contact.message" :placeholder="$t('riviera.contactMessage')" required></textarea>
      <button type="submit" class="ask-send" :disabled="contactState === 'sending'">
        {{ contactState === 'sending' ? $t('riviera.contactSending') : $t('riviera.contactSend') }}
      </button>
      <p class="ask-note" v-if="contactError">
        {{ $t('riviera.contactError') }}
      </p>
    </form>

    <div class="ask-done" v-else>
      <p class="ask-done-h">{{ $t('riviera.contactDoneTitle') }}</p>
      <p class="ask-done-p">{{ $t('riviera.contactDoneText') }}</p>
    </div>

    <p class="ask-alt">{{ $t('riviera.contactAlt') }}
      <a href="mailto:pascalcoffez@gmail.com">pascalcoffez@gmail.com</a> &middot;
      <a href="tel:+41791237833">079 123 78 33</a>
    </p>
  </div>
</div>

<!-- ── FOOTER ────────────────────────────────────── -->
<footer>
  <div class="foot-wrap">
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.entreprises') }}</span>
      <a href="/sur-mesure">{{ $t('siteFooter.surMesure') }}</a>
      <a href="/formules">{{ $t('siteFooter.formules') }}</a>
      <a href="/riviera#offres">{{ $t('siteFooter.evenementsEntreprise') }}</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.etudesDeCas') }}</span>
      <a href="/riviera#ref-kgv">{{ $t('siteFooter.kgv') }}</a>
      <a href="/riviera#ref-mcdonalds">{{ $t('siteFooter.mcdonalds') }}</a>
      <a href="/riviera#preuve">{{ $t('siteFooter.toutesReferences') }}</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.autresOccasions') }}</span>
      <a href="/riviera#ref-mariage">{{ $t('siteFooter.mariage') }}</a>
      <a href="/riviera#ref-ville">{{ $t('siteFooter.fetesDeVille') }}</a>
      <a href="/riviera#preuve">{{ $t('siteFooter.cargoStudio') }}</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">{{ $t('siteFooter.contact') }}</span>
      <a href="/riviera#contact">{{ $t('siteFooter.meTrouver') }}</a>
      <a href="/riviera#faq">{{ $t('siteFooter.faq') }}</a>
      <a href="mailto:pascalcoffez@gmail.com">pascalcoffez@gmail.com</a>
    </div>
  </div>
  <p class="foot-legal">{{ $t('siteFooter.legal') }} · <AdminFooterLink /></p>
</footer>

<!-- ── WIDGET CONTACT ─────────────────────────────── -->
<button class="chat-launcher" id="chatLauncher" onclick="openChat()" aria-label="Ouvrir le formulaire de contact">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
  Une question ?
</button>

<div class="chat-panel" id="chatPanel" role="dialog" aria-label="Contact">
  <div class="chat-head">
    <div>
      <h4>Pascal Coffez</h4>
      <p>R&eacute;ponse sous 24 h</p>
    </div>
    <button class="chat-close" onclick="closeChat()" aria-label="Fermer">&times;</button>
  </div>
  <div class="chat-body">
    <div class="chat-bubble">Bonjour. Une date en t&ecirc;te&nbsp;? Dites-nous o&ugrave; et quand, nous vous r&eacute;pondons directement.</div>
    <form onsubmit="return sendChat(event)">
      <div class="chat-field">
        <label for="chatName">Nom</label>
        <input type="text" id="chatName" required>
      </div>
      <div class="chat-field">
        <label for="chatDate">Date de l&rsquo;&eacute;v&eacute;nement</label>
        <input type="date" id="chatDate">
      </div>
      <div class="chat-field">
        <label for="chatType">Forfait</label>
        <select id="chatType">
          <option>Standard &middot; 3 heures</option>
          <option>Classic &middot; 4 heures</option>
          <option>Super &middot; 5 heures</option>
          <option>Je ne sais pas encore</option>
        </select>
      </div>
      <div class="chat-field">
        <label for="chatMsg">Message</label>
        <textarea id="chatMsg" placeholder="Lieu, nombre d&rsquo;invit&eacute;s"></textarea>
      </div>
      <button type="submit" class="chat-send">Envoyer &rarr;</button>
    </form>
    <p class="chat-foot">&Eacute;v&eacute;nement d&rsquo;entreprise&nbsp;? <a href="/sur-mesure" style="color:var(--teal-dark);font-weight:700;text-decoration:none;">Demander un devis &rarr;</a></p>
  </div>
</div>






<!-- ══════════════════════════════════════════════════════
     BOOKING MODAL — Paiement 50 % / 50 %
══════════════════════════════════════════════════════ -->
<div id="booking-modal" onclick="if(event.target===this)closeBooking()" style="display:none;position:fixed;inset:0;z-index:500;background:rgba(0,30,43,0.80);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);align-items:center;justify-content:center;padding:20px;box-sizing:border-box;">
  <div style="background:#fff;border-radius:24px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 48px 120px rgba(0,0,0,0.38);display:flex;flex-direction:column;max-height:92vh;">

    <!-- En-tête foncé -->
    <div style="background:var(--teal-dark);padding:32px 40px 26px;flex-shrink:0;position:relative;">
      <button onclick="closeBooking()" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.10);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;color:rgba(255,255,255,0.65);font-size:22px;line-height:1;display:flex;align-items:center;justify-content:center;transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.18)'" onmouseout="this.style.background='rgba(255,255,255,0.10)'">&times;</button>
      <p id="modal-pkg-label" style="font-family:'Sora',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.36em;text-transform:uppercase;color:rgba(201,162,75,0.65);margin:0 0 12px;">MARIAGE</p>
      <h3 class="h3" style="color:#fff">R&eacute;server votre date</h3>
      <p style="font-size:13px;color:rgba(255,255,255,0.8);margin:0;">50 % &agrave; la r&eacute;servation &middot; 50 % le jour de l&rsquo;&eacute;v&eacute;nement</p>
    </div>

    <!-- Corps scrollable -->
    <div style="padding:26px 40px 34px;overflow-y:auto;flex:1;">

      <!-- Total -->
      <div style="background:var(--sky);border-radius:14px;padding:16px 20px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;">
        <span id="bk-tier-label" style="font-size:13px;color:var(--muted);">Prestation 3h</span>
        <span id="bk-total" style="font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:var(--text);">CHF 770</span>
      </div>

      <!-- Date & heure de l'événement -->
      <div style="margin-bottom:20px;">
        <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:12px;">
          <div>
            <label style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Date de l'&eacute;v&eacute;nement *</label>
            <input type="date" id="bk-date" onchange="updateSchedule()" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Heure de d&eacute;but *</label>
            <input type="time" id="bk-time" step="900" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
          </div>
        </div>
        <p style="font-size:12px;color:var(--muted);margin:9px 0 0;line-height:1.5;">L'artiste arrive <strong style="color:var(--text);">au minimum 30 minutes avant</strong> l'heure de d&eacute;but, installation comprise.</p>
      </div>

      <!-- Paiement 50 / 50 -->
      <label style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Votre paiement</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
        <div style="padding:16px 14px;border:1.5px solid var(--teal);border-radius:12px;background:var(--sky);text-align:center;">
          <div style="font-family:'Sora',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal-dark);">Aujourd&rsquo;hui</div>
          <div id="bk-half-1" style="font-family:'Sora',sans-serif;font-size:20px;font-weight:800;color:var(--text);margin-top:6px;">CHF 385</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">la date est bloqu&eacute;e</div>
        </div>
        <div style="padding:16px 14px;border:1.5px solid var(--border);border-radius:12px;background:#fff;text-align:center;">
          <div style="font-family:'Sora',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);">Le jour J</div>
          <div id="bk-half-2" style="font-family:'Sora',sans-serif;font-size:20px;font-weight:800;color:var(--text);margin-top:6px;">CHF 385</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">virement, TWINT ou esp&egrave;ces</div>
        </div>
      </div>

      <!-- Échéancier -->
      <div id="bk-schedule" style="background:var(--sky);border-radius:12px;padding:16px 18px;margin-bottom:22px;"></div>

      <!-- Formulaire -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div>
          <label style="display:block;font-size:11px;font-weight:600;color:var(--muted);margin-bottom:7px;">Pr&eacute;nom &amp; Nom *</label>
          <input type="text" placeholder="Jean Dupont" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <div>
          <label style="display:block;font-size:11px;font-weight:600;color:var(--muted);margin-bottom:7px;">Email *</label>
          <input type="email" placeholder="votre@email.com" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
        </div>
      </div>

      <!-- Conditions -->
      <div style="background:var(--sky);border-radius:12px;padding:16px 18px;margin:12px 0 14px;">
        <p style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin:0 0 10px;">Conditions de r&eacute;servation</p>
        <div style="display:flex;flex-direction:column;gap:7px;">
          <div style="font-size:12px;color:var(--text);display:flex;gap:8px;line-height:1.45;"><span style="color:var(--gold);flex-shrink:0;font-weight:700;">&middot;</span><span>Le premier versement confirme et bloque la date.</span></div>
          <div style="font-size:12px;color:var(--text);display:flex;gap:8px;line-height:1.45;"><span style="color:var(--gold);flex-shrink:0;font-weight:700;">&middot;</span><span>Solde au plus tard le jour de l&rsquo;&eacute;v&eacute;nement, par virement, TWINT ou esp&egrave;ces.</span></div>
          <div style="font-size:12px;color:var(--text);display:flex;gap:8px;line-height:1.45;"><span style="color:var(--gold);flex-shrink:0;font-weight:700;">&middot;</span><span>Arriv&eacute;e de l&rsquo;artiste au minimum 30 min avant l&rsquo;heure de d&eacute;but.</span></div>
          <div style="font-size:12px;color:var(--text);display:flex;gap:8px;line-height:1.45;"><span style="color:var(--gold);flex-shrink:0;font-weight:700;">&middot;</span><span>Annulation &agrave; plus de 30 jours : l&rsquo;acompte reste acquis, le reste est rembours&eacute;.</span></div>
          <div style="font-size:12px;color:var(--text);display:flex;gap:8px;line-height:1.45;"><span style="color:var(--gold);flex-shrink:0;font-weight:700;">&middot;</span><span>Si je replace la date, ce que j&rsquo;encaisse vient en d&eacute;duction de ce que vous devez.</span></div>
        </div>
      </div>

      <!-- Acceptation -->
      <label id="bk-cond-label" style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;margin-bottom:16px;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;">
        <input type="checkbox" id="bk-conditions" onchange="togglePayBtn()" style="width:17px;height:17px;accent-color:var(--teal);cursor:pointer;flex-shrink:0;margin-top:2px;">
        <span style="font-size:13px;color:var(--text);line-height:1.5;">J'ai lu et j'accepte les conditions de r&eacute;servation ci-dessus.</span>
      </label>

      <!-- CTA -->
      <button id="bk-pay-btn" onclick="handlePayment()" disabled style="width:100%;padding:18px 24px;background:#e5e7eb;color:#9ca3af;border:none;border-radius:14px;font-family:'Sora',sans-serif;font-weight:700;font-size:15px;cursor:not-allowed;letter-spacing:0.01em;transition:all 0.18s;">
        Payer CHF 385 aujourd&rsquo;hui &rarr;
      </button>
      <p id="bk-balance-note" style="font-size:11px;color:var(--muted);text-align:center;margin:12px 0 0;line-height:1.6;">
        Total CHF 770 &middot; Paiement s&eacute;curis&eacute; Stripe
      </p>

    </div>
  </div>
</div>






<!-- ── RDV MODAL — Calendrier meeting (ma-ve · 8-10h / 16-19h) ── -->
<div id="rdv-modal" onclick="if(event.target===this)closeRdv()" style="display:none;position:fixed;inset:0;z-index:520;background:rgba(0,30,43,0.80);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);align-items:center;justify-content:center;padding:20px;box-sizing:border-box;">
  <div style="background:#fff;border-radius:24px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 48px 120px rgba(0,0,0,0.38);display:flex;flex-direction:column;max-height:92vh;">
    <div style="background:var(--teal-dark);padding:30px 40px 24px;flex-shrink:0;position:relative;">
      <button onclick="closeRdv()" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.10);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;color:rgba(255,255,255,0.65);font-size:22px;line-height:1;display:flex;align-items:center;justify-content:center;">&times;</button>
      <h3 class="h3" style="color:#fff">Prendre rendez-vous</h3>
      <p style="font-size:13px;color:rgba(255,255,255,0.8);margin:0;">Call de 30 min, devis gratuit</p>
    </div>
    <div style="padding:26px 40px 34px;overflow-y:auto;flex:1;">
      <label style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;">Choisissez un jour</label>
      <div id="rdv-days" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;"></div>
      <label style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;">Choisissez une heure</label>
      <div id="rdv-slots" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:26px;"></div>
      <button id="rdv-confirm" disabled onclick="confirmRdv()" style="width:100%;padding:17px 24px;background:#e5e7eb;color:#9ca3af;border:none;border-radius:100px;font-family:'Sora',sans-serif;font-weight:700;font-size:15px;cursor:not-allowed;letter-spacing:0.01em;transition:all 0.18s;">
        Confirmer le rendez-vous &rarr;
      </button>
      <p style="font-size:11px;color:var(--muted);text-align:center;margin:12px 0 0;">Mardi &ndash; vendredi &middot; 8h&ndash;10h &amp; 16h&ndash;19h</p>
    </div>
  </div>
</div>






<!-- ── VISIONNEUSE — vidéos et/ou photos, rien ne charge avant le clic ── -->
<div class="vplay" id="vplay" hidden>
  <div class="vplay-box" role="dialog" aria-modal="true" aria-labelledby="vplay-t">
    <div class="vplay-head">
      <span id="vplay-t"></span>
      <button type="button" class="vplay-x" aria-label="Fermer">&times;</button>
    </div>
    <div class="vplay-stage"></div>
    <div class="vplay-strip" hidden></div>
  </div>
</div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { locale, setLocale, t } = useI18n()

useHead({
  title: () => t('riviera.seoTitle'),
  meta: [
    { name: 'description', content: () => t('riviera.seoDescription') }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap' }
  ]
})

/* ── Formulaire de contact ────────────────────────────────
   Envoi IDENTIQUE au site actuel : POST /api/sendMailConfirmation
   → Slack #commandes + pascalcoffez@gmail.com + confirmation au visiteur.
   Aucune réécriture de ce mécanisme.
------------------------------------------------------------ */
const contact = reactive({ name: '', email: '', phone: '', date: '', message: '' })
const contactState = ref('ready')
const contactError = ref(false)

async function submitContact() {
  contactState.value = 'sending'
  contactError.value = false
  const message = contact.date
    ? `Date souhaitée : ${contact.date}\n\n${contact.message}`
    : contact.message
  try {
    await $fetch('/api/sendMailConfirmation', {
      method: 'post',
      body: { name: contact.name, email: contact.email, phone: contact.phone, message }
    })
    contactState.value = 'sent'
  } catch (e) {
    console.error('[contact] envoi échoué', e)
    contactState.value = 'ready'
    contactError.value = true
  }
}

onMounted(() => {
  const run = new Function('\nwindow.addEventListener(\'load\', function () {\n  setTimeout(function () {\n    var s = document.getElementById(\'splash\');\n    if (s) { s.classList.add(\'splash-out\'); setTimeout(function () { s.style.display = \'none\'; }, 650); }\n  }, 500);\n});\nsetTimeout(function () {\n  var s = document.getElementById(\'splash\');\n  if (s && !s.classList.contains(\'splash-out\')) {\n    s.classList.add(\'splash-out\');\n    setTimeout(function () { s.style.display = \'none\'; }, 650);\n  }\n}, 2500);\n\n\nfunction openChat(){\n  document.getElementById(\'chatPanel\').classList.add(\'is-open\');\n  document.getElementById(\'chatLauncher\').classList.add(\'is-open\');\n  setTimeout(function(){ var n=document.getElementById(\'chatName\'); if(n) n.focus(); }, 80);\n}\nfunction closeChat(){\n  document.getElementById(\'chatPanel\').classList.remove(\'is-open\');\n  document.getElementById(\'chatLauncher\').classList.remove(\'is-open\');\n}\nfunction sendChat(e){\n  e.preventDefault();\n  var n = document.getElementById(\'chatName\').value.trim();\n  var d = document.getElementById(\'chatDate\').value;\n  var t = document.getElementById(\'chatType\').value;\n  var m = document.getElementById(\'chatMsg\').value.trim();\n  var full = \'Forfait souhaité : \' + t + (m ? (\'\\n\\n\' + m) : \'\');\n  try {\n    var form = document.querySelector(\'.ask-form\');\n    if (form) {\n      var nameEl = form.querySelector(\'input[type="text"]\');\n      var dateEl = form.querySelector(\'input[type="date"]\');\n      var msgEl  = form.querySelector(\'textarea\');\n      var setVal = function (el, val) {\n        if (!el) return;\n        var proto = Object.getPrototypeOf(el);\n        var setter = Object.getOwnPropertyDescriptor(proto, \'value\').set;\n        setter.call(el, val);\n        el.dispatchEvent(new Event(\'input\', { bubbles: true }));\n      };\n      setVal(nameEl, n);\n      if (d) setVal(dateEl, d);\n      setVal(msgEl, full);\n    }\n  } catch (err) {}\n  closeChat();\n  var target = document.getElementById(\'contact\');\n  if (target) target.scrollIntoView({ behavior: \'smooth\', block: \'start\' });\n  return false;\n}\ndocument.addEventListener(\'keydown\', function(e){ if(e.key === \'Escape\') closeChat(); });\n\n\n/* ── Hero video cycling ─────────────────────────── */\n(function() {\n  // Sources: mp4 en priorité, mov en fallback pour Safari\n  const videos = [\n    { mp4: \'/riviera/videos/hero2-0.mp4\' },   // 1. 3 femmes émerveillées, téléphones\n    { mp4: \'/riviera/videos/hero2-1.mp4\' },   // 2. Groupe mixte de 4 adultes\n    { mp4: \'/riviera/videos/hero2-2.mp4\' },   // 3. Groupe de 3 qui applaudissent\n    { mp4: \'/riviera/videos/hero2-3.mp4\' },   // 4. Deux jeunes femmes qui rigolent\n    { mp4: \'/riviera/videos/hero2-4.mp4\' },   // 5. Jeune femme à la casquette\n    { mp4: \'/riviera/videos/hero2-5.mp4\' },   // 6. Duo avec presse-papier\n    { mp4: \'/riviera/videos/hero2-6.mp4\' },   // 7. Vidéo dessin + duo enlacé\n  ];\n\n  const vid   = document.getElementById(\'heroVid\');\n  const dots  = document.getElementById(\'heroDots\');\n  if (!vid || !dots) return;\n\n  let current = 0;\n\n  // Créer les dots\n  videos.forEach((_, i) => {\n    const d = document.createElement(\'span\');\n    d.className = \'hero-vid-dot\' + (i === 0 ? \' active\' : \'\');\n    d.addEventListener(\'click\', () => goTo(i));\n    dots.appendChild(d);\n  });\n\n  function goTo(idx) {\n    current = idx;\n    const src = videos[idx];\n    // Vider les sources existantes\n    while (vid.firstChild) vid.removeChild(vid.firstChild);\n    // Ajouter mp4\n    const s1 = document.createElement(\'source\');\n    s1.src  = src.mp4;\n    s1.type = \'video/mp4\';\n    vid.appendChild(s1);\n    // Ajouter mov si disponible\n    if (src.mov) {\n      const s2 = document.createElement(\'source\');\n      s2.src  = src.mov;\n      s2.type = \'video/quicktime\';\n      vid.appendChild(s2);\n    }\n    vid.load();\n    vid.play().catch(() => {});\n    // Mettre à jour dots\n    dots.querySelectorAll(\'.hero-vid-dot\').forEach((d, i) => {\n      d.classList.toggle(\'active\', i === idx);\n    });\n  }\n\n  // Passer à la vidéo suivante à la fin\n  vid.addEventListener(\'ended\', () => {\n    goTo((current + 1) % videos.length);\n  });\n\n  // Démarrer\n  goTo(0);\n})();\n\n/* ── Tabs références ─────────────────────────── */\n/* ── Son hero ───────────────────────────────── */\nfunction toggleSound() {\n  const vid = document.getElementById(\'heroVid\');\n  const btn = document.getElementById(\'soundBtn\');\n  vid.muted = !vid.muted;\n  btn.textContent = vid.muted ? \'🔇\' : \'🔊\';\n}\n\nfunction switchTab(btn, cat) {\n  document.querySelectorAll(\'.ref-tab\').forEach(t => t.classList.remove(\'active\'));\n  btn.classList.add(\'active\');\n  if (cat === \'all\') {\n    document.querySelectorAll(\'.ref-panel\').forEach(p => p.style.display = \'grid\');\n  } else {\n    document.querySelectorAll(\'.ref-panel\').forEach(p => p.style.display = \'none\');\n    document.getElementById(\'cat-\' + cat).style.display = \'grid\';\n  }\n}\n\n\n// Tier toggle (global)\nwindow.currentPrice = 770;\nwindow.currentTier  = \'standard\';\n\nwindow.setTier = function(tier) {\n  var prices = { standard: 770, classic: 880, super: 990 };\n  window.currentTier  = tier;\n  window.currentPrice = prices[tier] || 770;\n};\n\n\n(function () {\n  var BASE  = 770;\n\n  var modal = document.getElementById(\'booking-modal\');\n\n  function fmtChf(n) {\n    n = Math.round(n * 100) / 100;\n    return (n % 1 === 0) ? String(n) : n.toFixed(2);\n  }\n  function roundTo05(n) { return Math.round(n * 20) / 20; }\n\n  // Jours f\\u00e9ri\\u00e9s suisses fixes (MM-DD)\n  var HOLIDAYS = [\'01-01\', \'01-02\', \'08-01\', \'12-25\', \'12-26\'];\n  function isBizDay(d) {\n    var day = d.getDay();\n    if (day === 0 || day === 6) return false;\n    var mmdd = (\'0\' + (d.getMonth() + 1)).slice(-2) + \'-\' + (\'0\' + d.getDate()).slice(-2);\n    return HOLIDAYS.indexOf(mmdd) === -1;\n  }\n  function prevBizDay(d) {\n    var x = new Date(d);\n    while (!isBizDay(x)) x.setDate(x.getDate() - 1);\n    return x;\n  }\n  function fmtDate(d) {\n    var mois = [\'janv.\', \'f\\u00e9vr.\', \'mars\', \'avr.\', \'mai\', \'juin\', \'juil.\', \'ao\\u00fbt\', \'sept.\', \'oct.\', \'nov.\', \'d\\u00e9c.\'];\n    return d.getDate() + \' \' + mois[d.getMonth()] + \' \' + d.getFullYear();\n  }\n\n  // \\u00c9ch\\u00e9ancier automatique : 1er paiement aujourd\'hui, dernier \\u2264 jour J,\n  // interm\\u00e9diaires r\\u00e9partis r\\u00e9guli\\u00e8rement, week-end/f\\u00e9ri\\u00e9 \\u2192 jour ouvrable pr\\u00e9c\\u00e9dent.\n  function computeSchedule(total, n, eventDateStr) {\n    var today = new Date(); today.setHours(0, 0, 0, 0);\n    var per = roundTo05(total / n);\n    var amounts = [], s = 0, i;\n    for (i = 0; i < n - 1; i++) { amounts.push(per); s += per; }\n    amounts.push(Math.round((total - s) * 100) / 100);\n\n    var dates = [today];\n    if (n > 1) {\n      if (eventDateStr) {\n        var end = new Date(eventDateStr); end.setHours(0, 0, 0, 0);\n        var span = end.getTime() - today.getTime();\n        if (span < 0) span = 0;\n        for (i = 1; i < n; i++) {\n          var d = new Date(today.getTime() + span * i / (n - 1));\n          d = prevBizDay(d);\n          if (d < today) d = new Date(today);\n          dates.push(d);\n        }\n      } else {\n        for (i = 1; i < n; i++) dates.push(null);\n      }\n    }\n    return { amounts: amounts, dates: dates };\n  }\n\n  function renderSchedule() {\n    var half1 = Math.round(BASE / 2 * 20) / 20;      // arrondi 5 ct\n    var half2 = Math.round((BASE - half1) * 100) / 100;\n\n    var e1 = document.getElementById(\'bk-half-1\');\n    var e2 = document.getElementById(\'bk-half-2\');\n    if (e1) e1.textContent = \'CHF \' + fmtChf(half1);\n    if (e2) e2.textContent = \'CHF \' + fmtChf(half2);\n\n    var box = document.getElementById(\'bk-schedule\');\n    if (box) {\n      var dateStr = document.getElementById(\'bk-date\').value;\n      var when = dateStr ? fmtDate(new Date(dateStr)) : \'le jour de l\\u2019\\u00e9v\\u00e9nement\';\n      box.innerHTML =\n        \'<p style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin:0 0 10px;">Votre \\u00e9ch\\u00e9ancier</p>\'\n      + \'<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(0,30,43,0.06);">\'\n      + \'<span style="font-size:12.5px;color:var(--text);font-weight:600;">Aujourd\\u2019hui \\u00b7 bloque la date</span>\'\n      + \'<span style="font-family:\\u0027Sora\\u0027,sans-serif;font-size:13px;font-weight:700;color:var(--teal);">CHF \' + fmtChf(half1) + \'</span></div>\'\n      + \'<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;">\'\n      + \'<span style="font-size:12.5px;color:var(--muted);">\' + when + \'</span>\'\n      + \'<span style="font-family:\\u0027Sora\\u0027,sans-serif;font-size:13px;font-weight:700;color:var(--text);">CHF \' + fmtChf(half2) + \'</span></div>\'\n      + \'<div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid rgba(0,30,43,0.1);">\'\n      + \'<span style="font-size:12px;font-weight:600;color:var(--text);">Total</span>\'\n      + \'<span style="font-family:\\u0027Sora\\u0027,sans-serif;font-size:13px;font-weight:800;color:var(--text);">CHF \' + fmtChf(BASE) + \'</span></div>\';\n    }\n\n    var btn = document.getElementById(\'bk-pay-btn\');\n    if (btn) btn.innerHTML = \'Payer CHF \' + fmtChf(half1) + \' aujourd\\u2019hui \\u2192\';\n    var note = document.getElementById(\'bk-balance-note\');\n    if (note) note.textContent = \'Total CHF \' + fmtChf(BASE) + \' \\u00b7 Paiement s\\u00e9curis\\u00e9 Stripe\';\n  }\n\n  window.setSplit = function () {};\n\n  window.updateSchedule = function () { renderSchedule(); };\n\n  window.openBooking = function (pkg) {\n    BASE = window.currentPrice || 770;\n    document.getElementById(\'modal-pkg-label\').textContent = pkg.toUpperCase();\n    var tier = document.getElementById(\'bk-tier-label\');\n    if (tier) tier.textContent = ({standard:\'Prestation 3h\',classic:\'Prestation 4h\',super:\'Prestation 5h\'}[window.currentTier] || \'Prestation\') + \'\';\n    document.getElementById(\'bk-total\').textContent = \'CHF \' + fmtChf(BASE);\n    var dateInput = document.getElementById(\'bk-date\');\n    if (dateInput) {\n      var t = new Date();\n      dateInput.min = t.toISOString().split(\'T\')[0];\n      dateInput.value = \'\';\n    }\n    var cb = document.getElementById(\'bk-conditions\');\n    if (cb) cb.checked = false;\n    renderSchedule();\n    togglePayBtn();\n    modal.style.display = \'flex\';\n    document.body.style.overflow = \'hidden\';\n  };\n\n  window.closeBooking = function () {\n    modal.style.display = \'none\';\n    document.body.style.overflow = \'\';\n  };\n\n  window.togglePayBtn = function () {\n    var btn = document.getElementById(\'bk-pay-btn\');\n    var ok  = document.getElementById(\'bk-conditions\').checked;\n    btn.disabled = !ok;\n    btn.style.background = ok ? \'var(--teal-dark)\' : \'#e5e7eb\';\n    btn.style.color      = ok ? \'#fff\'             : \'#9ca3af\';\n    btn.style.cursor     = ok ? \'pointer\'          : \'not-allowed\';\n    if (ok) {\n      btn.onmouseover = function () { this.style.background = \'var(--teal-mid)\'; };\n      btn.onmouseout  = function () { this.style.background = \'var(--teal-dark)\'; };\n    } else {\n      btn.onmouseover = null; btn.onmouseout = null;\n    }\n  };\n\n  document.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Escape\') closeBooking();\n  });\n\n  window.handlePayment = function () {\n    if (!document.getElementById(\'bk-conditions\').checked) return;\n    alert(\'Paiement s\\u00e9curis\\u00e9 Stripe \\u2014 int\\u00e9gration en cours.\\n\\nPour r\\u00e9server d\\u00e8s maintenant : hello@coffez.ch\');\n  };\n})();\n\n\n(function () {\n  var selDay = null, selSlot = null;\n  var MOIS = [\'janv.\',\'f\\u00e9vr.\',\'mars\',\'avr.\',\'mai\',\'juin\',\'juil.\',\'ao\\u00fbt\',\'sept.\',\'oct.\',\'nov.\',\'d\\u00e9c.\'];\n  var JOURS = [\'dim.\',\'lun.\',\'mar.\',\'mer.\',\'jeu.\',\'ven.\',\'sam.\'];\n  var SLOTS = [\'08:00\',\'08:30\',\'09:00\',\'09:30\',\'16:00\',\'16:30\',\'17:00\',\'17:30\',\'18:00\',\'18:30\'];\n\n  function buildDays() {\n    var box = document.getElementById(\'rdv-days\');\n    box.innerHTML = \'\';\n    var d = new Date(); d.setHours(0,0,0,0);\n    var added = 0;\n    while (added < 8) {\n      d.setDate(d.getDate() + 1);\n      var dow = d.getDay();\n      if (dow < 2 || dow > 5) continue;  /* mardi(2) -> vendredi(5) */\n      var btn = document.createElement(\'button\');\n      btn.type = \'button\';\n      var dd = new Date(d);\n      btn.textContent = JOURS[dow] + \' \' + dd.getDate() + \' \' + MOIS[dd.getMonth()];\n      btn.style.cssText = \'padding:10px 14px;border:1.5px solid var(--border);border-radius:100px;background:#fff;cursor:pointer;font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:var(--text);transition:all 0.15s;\';\n      btn.onclick = (function (date, el) {\n        return function () {\n          selDay = date;\n          var all = document.getElementById(\'rdv-days\').children;\n          for (var i = 0; i < all.length; i++) { all[i].style.borderColor = \'var(--border)\'; all[i].style.background = \'#fff\'; all[i].style.color = \'var(--text)\'; }\n          el.style.borderColor = \'var(--teal)\'; el.style.background = \'var(--sky)\'; el.style.color = \'var(--teal-dark)\';\n          updateConfirm();\n        };\n      })(dd, btn);\n      box.appendChild(btn);\n      added++;\n    }\n  }\n\n  function buildSlots() {\n    var box = document.getElementById(\'rdv-slots\');\n    box.innerHTML = \'\';\n    SLOTS.forEach(function (s) {\n      var btn = document.createElement(\'button\');\n      btn.type = \'button\';\n      btn.textContent = s;\n      btn.style.cssText = \'padding:11px 6px;border:1.5px solid var(--border);border-radius:10px;background:#fff;cursor:pointer;font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:var(--text);transition:all 0.15s;\';\n      btn.onclick = function () {\n        selSlot = s;\n        var all = box.children;\n        for (var i = 0; i < all.length; i++) { all[i].style.borderColor = \'var(--border)\'; all[i].style.background = \'#fff\'; all[i].style.color = \'var(--text)\'; }\n        btn.style.borderColor = \'var(--teal)\'; btn.style.background = \'var(--sky)\'; btn.style.color = \'var(--teal-dark)\';\n        updateConfirm();\n      };\n      box.appendChild(btn);\n    });\n  }\n\n  function updateConfirm() {\n    var b = document.getElementById(\'rdv-confirm\');\n    var ok = selDay && selSlot;\n    b.disabled = !ok;\n    b.style.background = ok ? \'var(--teal-dark)\' : \'#e5e7eb\';\n    b.style.color = ok ? \'#fff\' : \'#9ca3af\';\n    b.style.cursor = ok ? \'pointer\' : \'not-allowed\';\n  }\n\n  window.openRdv = function () {\n    selDay = null; selSlot = null;\n    buildDays(); buildSlots(); updateConfirm();\n    document.getElementById(\'rdv-modal\').style.display = \'flex\';\n    document.body.style.overflow = \'hidden\';\n  };\n  window.closeRdv = function () {\n    document.getElementById(\'rdv-modal\').style.display = \'none\';\n    document.body.style.overflow = \'\';\n  };\n  window.confirmRdv = function () {\n    if (!selDay || !selSlot) return;\n    var dateStr = JOURS[selDay.getDay()] + \' \' + selDay.getDate() + \' \' + MOIS[selDay.getMonth()] + \' \' + selDay.getFullYear();\n    var msg = \'Je souhaite un call de 30 min le \' + dateStr + \' \\u00e0 \' + selSlot + \'.\';\n    try {\n      var form = document.querySelector(\'.ask-form\');\n      if (form) {\n        var msgEl = form.querySelector(\'textarea\');\n        if (msgEl) {\n          var proto = Object.getPrototypeOf(msgEl);\n          var setter = Object.getOwnPropertyDescriptor(proto, \'value\').set;\n          setter.call(msgEl, msg);\n          msgEl.dispatchEvent(new Event(\'input\', { bubbles: true }));\n        }\n      }\n    } catch (err) {}\n    closeRdv();\n    var target = document.getElementById(\'contact\');\n    if (target) target.scrollIntoView({ behavior: \'smooth\', block: \'start\' });\n  };\n  document.addEventListener(\'keydown\', function (e) { if (e.key === \'Escape\') closeRdv(); });\n})();\n\n\n(function(){\n  var m=document.getElementById(\'vplay\'), stage=m.querySelector(\'.vplay-stage\'),\n      strip=m.querySelector(\'.vplay-strip\'), t=document.getElementById(\'vplay-t\'),\n      items=[], last=null;\n\n  // 1) marquage automatique des cartes selon leur contenu\n  document.querySelectorAll(\'.photo-card[data-media]\').forEach(function(c){\n    var list; try{ list=JSON.parse(c.dataset.media);}catch(e){ return; }\n    var vids=list.filter(function(x){return x.t===\'v\';}).length;\n    if(vids) c.classList.add(\'is-video\');\n    else if(list.length>1){\n      var b=document.createElement(\'span\'); b.className=\'photo-badge\';\n      b.textContent=list.length+\' photos\'; c.appendChild(b);\n    }\n  });\n\n  function show(i){\n    var it=items[i];\n    stage.innerHTML = it.t===\'v\'\n      ? \'<video src="\'+it.src+\'" controls autoplay playsinline preload="none"></video>\'\n      : \'<img src="\'+it.src+\'" alt="">\';\n    strip.querySelectorAll(\'button\').forEach(function(b,k){ b.classList.toggle(\'on\',k===i); });\n  }\n  function open(card){\n    try{ items=JSON.parse(card.dataset.media);}catch(e){ return; }\n    if(!items.length) return;\n    last=card; t.innerHTML=card.dataset.mediaTitle||\'\';\n    strip.innerHTML=\'\';\n    if(items.length>1){\n      items.forEach(function(it,i){\n        var b=document.createElement(\'button\');\n        b.innerHTML=\'<img src="\'+(it.poster||it.src)+\'" alt="">\'+(it.t===\'v\'?\'<span class="tv">&#9658;</span>\':\'\');\n        b.onclick=function(){ show(i); };\n        strip.appendChild(b);\n      });\n      strip.hidden=false;\n    } else strip.hidden=true;\n    show(0);\n    m.hidden=false; document.body.style.overflow=\'hidden\';\n    m.querySelector(\'.vplay-x\').focus();\n  }\n  function close(){ m.hidden=true; stage.innerHTML=\'\'; document.body.style.overflow=\'\'; if(last) last.focus(); }\n\n  document.addEventListener(\'click\',function(e){\n    var c=e.target.closest(\'.photo-card[data-media]\');\n    if(c && !e.target.closest(\'.vplay\')){ open(c); return; }\n    if(e.target.closest(\'.vplay-x\') || e.target===m) close();\n  });\n  document.addEventListener(\'keydown\',function(e){\n    if(e.key===\'Escape\' && !m.hidden) close();\n    var c=e.target.closest && e.target.closest(\'.photo-card[data-media]\');\n    if(c && (e.key===\'Enter\'||e.key===\' \')){ e.preventDefault(); open(c); }\n  });\n})();\n\n/* expose handlers used by inline attributes */\ntry{ if(typeof openChat!==\'undefined\') window.openChat=openChat; }catch(e){}\ntry{ if(typeof closeChat!==\'undefined\') window.closeChat=closeChat; }catch(e){}\ntry{ if(typeof sendChat!==\'undefined\') window.sendChat=sendChat; }catch(e){}\ntry{ if(typeof toggleSound!==\'undefined\') window.toggleSound=toggleSound; }catch(e){}\ntry{ if(typeof handlePayment!==\'undefined\') window.handlePayment=handlePayment; }catch(e){}\ntry{ if(typeof closeRdv!==\'undefined\') window.closeRdv=closeRdv; }catch(e){}\ntry{ if(typeof confirmRdv!==\'undefined\') window.confirmRdv=confirmRdv; }catch(e){}\ntry{ if(typeof closeBooking!==\'undefined\') window.closeBooking=closeBooking; }catch(e){}\ntry{ if(typeof updateSchedule!==\'undefined\') window.updateSchedule=updateSchedule; }catch(e){}\ntry{ if(typeof togglePayBtn!==\'undefined\') window.togglePayBtn=togglePayBtn; }catch(e){}\ntry{ if(typeof openRdv!==\'undefined\') window.openRdv=openRdv; }catch(e){}\ntry{ if(typeof openBooking!==\'undefined\') window.openBooking=openBooking; }catch(e){}\ntry{ if(typeof setTier!==\'undefined\') window.setTier=setTier; }catch(e){}\ntry{ if(typeof setSplit!==\'undefined\') window.setSplit=setSplit; }catch(e){}\ntry{ if(typeof switchTab!==\'undefined\') window.switchTab=switchTab; }catch(e){}\ntry{ if(typeof goTo!==\'undefined\') window.goTo=goTo; }catch(e){}\n')
  try { run() } catch (e) { console.error('[riviera] script error', e) }
})
</script>

<style>

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --sky:        #E0F5FA;
      --white:      #FFFFFF;
      --gold:       #C9A24B;
      --gold-light: #F5EDD5;
      --teal:       #1ABFBF;
      --teal-mid:   #138A8A;
      --teal-dark:  #001e2b;
      /* --coral: unused — removed */
      --text:       #0F1923;
      --muted:      #6B7280; --grey-cool:#F4F6F8;
      --border:     #E5E7EB;
      --shadow:     0 2px 16px rgba(0,0,0,0.06);
      --shadow-md:  0 8px 32px rgba(0,0,0,0.10);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--white);
      color: var(--text);
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 300;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, .sora { font-family: 'Sora', sans-serif; }

    .wrap {
      max-width: 1080px;
      margin: 0 auto;
      padding: 0 48px;
    }
    @media (max-width: 600px) { .wrap { padding: 0 20px; } }

    /* ── NAVIGATION ──────────────────────── */
    /* Ancien bloc nav (position:fixed) supprimé le 16 août — il entrait en conflit avec le vrai bloc
       .nav plus bas (position:sticky), qui reste l'unique source de vérité pour le menu. */
    .nav-logo {
      font-family: 'Sora', sans-serif;
      font-size: 17px;
      font-weight: 700;
      color: var(--text);
      text-decoration: none;
      letter-spacing: -0.02em;
    }
    .nav-logo span { color: var(--teal); }
    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
    }
    .nav-links a {
      font-size: 13px;
      font-weight: 400;
      color: var(--muted);
      text-decoration: none;
      transition: color 0.18s;
    }
    .nav-links a:hover { color: var(--teal); }
    .nav-cta {
      background: var(--teal);
      color: #fff !important;
      font-weight: 600 !important;
      padding: 8px 20px;
      border-radius: 100px;
      font-size: 13px !important;
      transition: background 0.18s !important;
    }
    .nav-cta:hover { background: var(--teal-mid) !important; color: #fff !important; }
    @media (max-width: 700px) { .nav-links { display:none; } }

    /* ── A. HERO ─────────────────────────── */
    .hero {
      min-height: 100vh;
      padding-top: 64px;
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      overflow: hidden;
      position: relative;
    }
    .hero-left {
      padding: 80px 48px 80px 72px;
      display: flex;
      flex-direction: column;
      gap: 0;
      position: relative;
      z-index: 2;
    }
    .hero-location {
      font-family: 'Sora', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--teal);
      margin-bottom: 20px;
    }
    .hero-joy-row {
      display: flex;
      align-items: flex-end;
      gap: 4px;
      margin-bottom: 24px;
    }
    .hero-mascot {
      height: clamp(88px, 12vw, 158px);
      width: auto;
      display: block;
      /* mix-blend-mode: multiply; — plus nécessaire, fond transparent */
      flex-shrink: 0;
    }
    .hero-h1 {
      font-family: 'Sora', sans-serif;
      font-size: clamp(72px, 10vw, 130px);
      font-weight: 800;
      color: var(--text);
      letter-spacing: -0.04em;
      line-height: 1;
      margin-bottom: 0;
    }
    .hero-h1 em {
      font-style: italic;
      color: var(--teal);
    }
    .hero-sub {
      font-size: 16px;
      font-weight: 400;
      color: var(--muted);
      line-height: 1.6;
      max-width: 380px;
      margin-bottom: 40px;
    }
    .hero-ctas {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }
    .btn-hero-primary {
      background: var(--teal);
      color: #fff;
      font-family: 'Sora', sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 14px 28px;
      border-radius: 100px;
      text-decoration: none;
      transition: background 0.18s, transform 0.18s;
      display: inline-block;
    }
    .btn-hero-primary:hover { background: var(--teal-mid); transform: translateY(-1px); }
    .btn-hero-secondary {
      background: transparent;
      color: var(--text);
      font-family: 'Sora', sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 14px 28px;
      border-radius: 100px;
      border: 2px solid var(--border);
      text-decoration: none;
      transition: border-color 0.18s, color 0.18s;
      display: inline-block;
    }
    .btn-hero-secondary:hover { border-color: var(--teal); color: var(--teal); }
    .hero-socials {
      margin-top: 40px;
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .hero-social-link {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Sora', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: var(--teal);
      text-decoration: none;
      letter-spacing: 0.02em;
      transition: color 0.2s, opacity 0.2s;
    }
    .hero-social-link:hover { opacity: 0.7; }

    /* HERO VIDEO SIDE */
    .hero-right {
      position: relative;
      height: 100%;
      min-height: 100vh;
      overflow: hidden;
    }
    .hero-video-wrap {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
    .hero-video-wrap video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: opacity 0.6s ease;
    }
    /* Gradient fade on left edge — blends into hero left */
    .hero-video-wrap::before {
      content: '';
      position: absolute;
      inset: 0;
      left: 0;
      background: linear-gradient(to right, #F0F8FC 0%, transparent 30%);
      z-index: 2;
      pointer-events: none;
    }
    /* Gradient top fade */
    .hero-video-wrap::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 120px;
      background: linear-gradient(to bottom, #F0F8FC 0%, transparent 100%);
      z-index: 2;
      pointer-events: none;
    }
    /* Sound toggle button */
    .hero-sound-btn {
      position: absolute;
      top: 18px;
      right: 18px;
      z-index: 20;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1.5px solid rgba(255,255,255,0.55);
      background: rgba(12,30,30,0.45);
      backdrop-filter: blur(8px);
      color: #fff;
      font-size: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s, transform 0.15s;
      line-height: 1;
    }
    .hero-sound-btn:hover {
      background: rgba(26,191,191,0.35);
      border-color: var(--teal);
      transform: scale(1.08);
    }
    /* Video dots indicator */
    .hero-vid-dots {
      position: absolute;
      bottom: 28px;
      right: 28px;
      z-index: 10;
      display: flex;
      gap: 6px;
    }
    .hero-vid-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;
    }
    .hero-vid-dot.active {
      background: var(--teal);
      transform: scale(1.4);
    }
    /* Decorative blobs */
    .hero-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      pointer-events: none;
      opacity: 0.25;
      z-index: 1;
    }
    .hero-blob-1 {
      width: 300px; height: 300px;
      background: radial-gradient(circle, #1ABFBF44, transparent);
      top: 10%; left: 10%;
    }
    .hero-blob-2 {
      width: 200px; height: 200px;
      background: radial-gradient(circle, #C9A24B33, transparent);
      bottom: 20%; left: 30%;
    }
    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; min-height: auto; }
      .hero-left { padding: 32px 24px 24px; }
      .hero-h1 { font-size: clamp(52px, 14vw, 80px); margin-bottom: 12px; }
      .hero-sub { margin-bottom: 20px; }
      .hero-ctas { margin-bottom: 0; }
      .hero-socials { margin-top: 20px; }
      .hero-right { aspect-ratio: 9/16; min-height: unset; max-height: unset; }
    }

    /* ── SECTION COMMONS ────────────────── */
    .section {
      padding: 100px 0;
    }
    .section-label {
      display: block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--teal);
      margin-bottom: 16px;
      text-align: left;
    }
    .section-label-dark {
      display: block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 20px;
      text-align: left;
    }
    .bg-sky   { background: #ffffff; }
    .bg-white { background: var(--white); }

    /* ── B. TRUSTED BY ───────────────────── */
    .section-warm-dark {
      background: var(--teal-dark);
      padding: 100px 24px;
      display: flex;
      justify-content: center;
    }
    .trusted-headline {
      font-family: 'Sora', sans-serif;
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 700;
      color: #fff;
      text-align: left;
      line-height: 1.15;
      margin: 0 0 40px;
    }
    .trusted-headline em {
      font-style: italic;
      color: var(--gold);
      font-family: Georgia, serif;
    }
    .trusted-rule {
      width: 48px;
      height: 1px;
      background: var(--gold);
      margin: 0 0 40px;
      opacity: 0.5;
    }
    .trusted-names-block {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 10px;
      max-width: 880px;
      margin: 40px 0 0;
    }
    .trusted-names-block .trusted-name {
      font-family: 'Sora', sans-serif;
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: var(--text);
      white-space: nowrap;
      background: #fff;
      border: 1px solid rgba(15,25,35,0.08);
      border-radius: 10px;
      padding: 9px 16px;
      opacity: 0.82;
      cursor: default;
      transition: opacity .15s ease, border-color .15s ease, box-shadow .15s ease;
    }
    .trusted-names-block .trusted-name:hover {
      opacity: 1;
      border-color: var(--teal);
      box-shadow: 0 2px 10px rgba(26,191,191,0.15);
    }
    .trusted-names-block .trusted-dot {
      display: none;
    }

    /* ── C. PHOTO GRID ───────────────────── */
    .ctx-group {
      margin-bottom: 56px;
    }
    .ctx-label {
      font-family: 'Sora', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--teal);
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .context-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 48px;
      justify-content: center;
    }
    .ctx-pill {
      font-size: 12px;
      font-weight: 500;
      padding: 6px 16px;
      border-radius: 100px;
      background: rgba(26,191,191,0.1);
      color: var(--teal-mid);
      border: 1px solid rgba(26,191,191,0.2);
    }
    /* En-tête de grille : titre à gauche, « Voir plus » à droite */
    .grid-head { display:flex; flex-direction:row; align-items:flex-end; justify-content:space-between; text-align:left; gap:20px; margin-bottom:40px; }
    /* Lien secondaire discret (style Scarlett "VOIR PLUS") — plus de bouton pilule, un texte + flèche qui ne rivalise pas avec le titre */
    .grid-more {
      display:inline-flex; align-items:center; gap:6px; flex-shrink:0; margin-bottom:4px;
      font-family:'Sora',sans-serif; font-size:12.5px; font-weight:800;
      letter-spacing:0.12em; text-transform:uppercase; color:var(--teal);
      background:none; text-decoration:none; border:none; padding:0;
      transition:opacity .15s, transform .15s;
    }
    .grid-more::after { content:'\2192'; font-size:14px; transition:transform .15s; }
    .grid-more:hover { opacity:.7; }
    .grid-more:hover::after { transform:translateX(3px); }
    @media (max-width:600px) { .grid-head { flex-direction:column; align-items:flex-start; gap:10px; } .grid-more { margin-bottom:0; } }

    /* Grille bord à bord — nom au survol (motif Scarlett) */
    /* Grille uniforme : une carte = un événement. Plus de paires ni de bandeaux de catégorie
       (ceux-ci sont désormais regroupés dans le chapô sous le titre) — meilleure lisibilité iPhone. */
    .viv { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    /* Chapô des types d'événements, sous le titre de section */
    .viv-chapo { font-family:'Sora',sans-serif; font-size:13px; font-weight:700;
      letter-spacing:0.06em; line-height:1.7; color:var(--muted);
      margin:-22px 0 34px; max-width:820px; }
    /* Sur mobile, les 2 photos s'empilent en pleine largeur : le bandeau (Congress, Trade Fair…) placé
       APRÈS elles se retrouve trop loin pour qu'on comprenne encore à quoi il se rapporte.
       On l'affiche donc en premier sur mobile (comme un kicker qui annonce les photos), sans toucher au HTML. */
    @media (max-width: 640px) {
      .viv { grid-template-columns: 1fr; gap: 8px; }
      .viv-chapo { font-size:12px; letter-spacing:0.05em; margin:-16px 0 26px; }
    }
    .photo-card {
      position: relative;
      overflow: hidden;
      background: var(--text);
      line-height: 0;
    }
    .photo-card img {
      width: 100%;
      aspect-ratio: 4/3;
      object-fit: cover;
      display: block;
      /* harmonisation colorimétrique — même rendu pour toutes les sources */
      filter: contrast(1.08) saturate(0.86) brightness(1.03);
      transition: transform .5s ease, filter .3s ease;
    }
    .photo-card:hover img { transform: scale(1.05); filter: contrast(1.08) saturate(1) brightness(0.78); }

    /* Bandeau plein, hauteur fixe : tous les noms alignés.
       Le type d'événement fait grandir le bandeau au survol. */
    .photo-caption {
      position: absolute;
      inset: auto 0 0 0;
      padding: 9px 16px 10px;
      background: rgba(0,30,43,0.94);
      line-height: 1.25;
      pointer-events: none;
    }
    .photo-event {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height .28s ease, opacity .22s ease, margin-top .28s ease;
      margin-top: 0;
    }
    .photo-card:hover .photo-event { max-height: 44px; opacity: 1; margin-top: 5px; }
    /* écrans tactiles : pas de survol, tout reste visible */
    @media (hover: none) {
      .photo-event { max-height: 44px; opacity: 1; margin-top: 5px; }
      .photo-card:hover img { transform: none; }
    }

    /* Bouton play — n'apparaît que sur les vignettes marquées .has-video */
    .photo-card .photo-play { display: none; }
    .photo-card.has-video .photo-play {
      display: flex; align-items: center; justify-content: center;
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 64px; height: 64px; border-radius: 50%;
      background: rgba(255,255,255,0.92); color: var(--text);
      box-shadow: 0 6px 24px rgba(0,0,0,0.25);
      transition: transform .2s ease;
    }
    .photo-card.has-video:hover .photo-play { transform: translate(-50%,-50%) scale(1.08); }

    /* ── OPTIONS (papier) ──────────────────────── */
    .options-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    @media (max-width: 860px) { .options-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .options-grid { grid-template-columns: 1fr; } }
    .option-card { border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: #fff; transition: transform 0.2s, box-shadow 0.2s; }
    .option-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
    .option-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; filter: contrast(1.06) saturate(0.9); }
    .option-card-body { padding: 16px; }
    .option-card-title { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: var(--text); margin-bottom: 6px; letter-spacing: -0.01em; }
    .option-card-text { font-size: 13px; color: var(--muted); line-height: 1.55; min-height: 40px; }
    /* CTA pilule, motif Tiny Box */
    .option-cta {
      display: inline-block; margin-top: 16px;
      padding: 12px 26px; border-radius: 100px;
      background: var(--text); color: #fff;
      font-family: 'Sora', sans-serif; font-size: 11.5px; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none;
      transition: background .15s, transform .15s;
    }
    .option-cta:hover { background: var(--teal-dark); transform: translateY(-1px); }
    .option-link {
      display: inline-flex; align-items: center; gap: 10px;
      font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--text); text-decoration: none;
      border-bottom: 1px solid var(--text); padding-bottom: 3px;
      transition: color .15s, border-color .15s;
    }
    .option-link:hover { color: var(--teal-dark); border-color: var(--teal-dark); }
    .option-link-arrow {
      width: 22px; height: 22px; border-radius: 50%;
      border: 1px solid currentColor; display: inline-flex;
      align-items: center; justify-content: center; font-size: 11px;
    }
    /* slot photo dans une carte option */
    .option-card .photo-slot { border: none; border-bottom: 1px dashed var(--border); border-radius: 0; }

    /* ── FORFAITS (cartes Tiny Box) ──────────────── */
    .pkg-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:40px 32px 32px;display:flex;flex-direction:column;box-shadow:var(--shadow);position:relative;transition:transform .18s ease,box-shadow .18s ease;}
    .pkg-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);}
    .pkg-card--featured{border:2px solid var(--teal-dark);box-shadow:var(--shadow-md);}
    .pkg-badge{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:var(--gold);color:var(--teal-dark);border-radius:100px;padding:7px 20px;font-family:'Sora',sans-serif;font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;box-shadow:0 4px 14px rgba(201,162,75,.35);}
    .pkg-tier{display:inline-block;align-self:flex-start;background:var(--teal-dark);color:#fff;border-radius:100px;padding:9px 20px;margin-bottom:18px;font-family:'Sora',sans-serif;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;}
    .pkg-price{font-family:'Sora',sans-serif;font-size:38px;font-weight:800;color:var(--text);letter-spacing:-.02em;line-height:1;}
    .pkg-split{display:inline-block;background:var(--gold-light);border-radius:10px;padding:8px 14px;margin-top:12px;font-family:'Sora',sans-serif;font-size:13px;color:var(--muted);font-weight:600;}
    .pkg-split b{font-size:16px;color:var(--text);font-weight:800;}
    .pkg-duration{margin:16px 0 0;font-size:14px;}
    .pkg-duration strong{font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:var(--text);}
    .pkg-duration span{color:var(--muted);}
    .pkg-divider{height:1px;background:var(--border);margin:22px 0;}
    .pkg-list-label{font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin:0 0 14px;}
    .pkg-list{list-style:none;padding:0;margin:0 0 28px;display:flex;flex-direction:column;gap:13px;flex:1;}
    .pkg-list li{display:flex;gap:12px;align-items:flex-start;font-size:14.5px;font-weight:600;color:var(--text);line-height:1.5;}
    .pkg-check{flex-shrink:0;width:20px;height:20px;border-radius:50%;background:var(--sky);color:var(--teal);display:flex;align-items:center;justify-content:center;margin-top:2px;}
    .pkg-cta{display:block;text-align:center;padding:16px 20px;background:var(--teal-dark);color:#fff;border-radius:100px;font-family:'Sora',sans-serif;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:.02em;transition:opacity .15s;}
    .pkg-cta:hover{opacity:.86;}
    .pkg-note{text-align:center;font-size:11.5px;color:var(--muted);margin:14px 0 0;line-height:1.6;}

    /* ── AIGUILLAGE deux publics (liseré CFF) ────── */
    .split-strip { background:#fff; border-bottom:1px solid var(--border); }
    .split-inner { max-width:1080px; margin:0 auto; display:flex; align-items:center; justify-content:center; gap:0; padding:0; }
    .split-link { flex:1; text-align:center; padding:20px 16px; font-family:'Sora',sans-serif; font-size:12.5px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); text-decoration:none; border-top:3px solid transparent; transition:color .15s, border-color .15s; }
    .split-link:hover { color:var(--text); border-top-color:var(--teal); }
    .split-link-pro:hover { border-top-color:var(--gold); }
    .split-sep { width:1px; align-self:stretch; background:var(--border); }
    @media (max-width:600px) { .split-link { font-size:11px; letter-spacing:0.08em; padding:16px 8px; } }

    /* ── BADGE PRÉSENCE / LIVE ────────────────────── */
    .live-badge { display:inline-flex; align-items:center; gap:12px; background:#fff; border:1px solid var(--border); border-radius:100px; padding:16px 28px; font-family:'Sora',sans-serif; font-size:14px; font-weight:700; color:var(--text); letter-spacing:0.01em; }
    .live-dot { width:10px; height:10px; border-radius:50%; background:var(--muted); flex-shrink:0; }
    .live-badge.is-live { background:var(--teal-dark); border-color:var(--teal-dark); color:#fff; box-shadow:0 10px 30px rgba(0,30,43,0.22); }
    .live-badge.is-live .live-dot { background:#37e6a0; animation:livePulse 1.6s ease-in-out infinite; }
    @keyframes livePulse { 0%,100% { box-shadow:0 0 0 0 rgba(55,230,160,0.6); } 50% { box-shadow:0 0 0 8px rgba(55,230,160,0); } }
    @media (prefers-reduced-motion:reduce) { .live-badge.is-live .live-dot { animation:none; } }

    /* ── POP MONTREUX ─────────────────────────────── */
    .pop-wrap {
      position: fixed; inset: 0; z-index: 700;
      display: flex; align-items: center; justify-content: center;
      padding: 24px; box-sizing: border-box;
      background: rgba(0,30,43,0.55); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      opacity: 0; pointer-events: none;
      transition: opacity .35s ease;
    }
    .pop-wrap.is-open { opacity: 1; pointer-events: auto; }
    .pop-card {
      position: relative; width: min(680px, 100%);
      background: #fff; border-radius: 22px; overflow: hidden;
      box-shadow: 0 30px 80px rgba(0,30,43,0.45);
      transform: translateY(16px) scale(0.985);
      transition: transform .35s cubic-bezier(.2,.8,.3,1);
    }
    .pop-wrap.is-open .pop-card { transform: translateY(0) scale(1); }
    .pop-card img { width: 100%; height: auto; display: block; }
    .pop-close {
      position: absolute; top: 12px; right: 12px; z-index: 2;
      width: 34px; height: 34px; border-radius: 50%; border: none; cursor: pointer;
      background: rgba(255,255,255,0.92); color: var(--text);
      font-size: 20px; line-height: 1; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 14px rgba(0,0,0,0.18);
    }
    .pop-close:hover { background: #fff; }
    .pop-bar { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 16px 20px; }
    .pop-cta {
      flex: 1; text-align: center; padding: 15px 26px; border-radius: 100px;
      background: var(--teal-dark); color: #fff; text-decoration: none;
      font-family: 'Sora', sans-serif; font-weight: 700; font-size: 14.5px;
      transition: opacity .15s;
    }
    .pop-cta:hover { opacity: .88; }
    .pop-skip {
      background: none; border: none; cursor: pointer; flex-shrink: 0;
      font-family: 'Sora', sans-serif; font-size: 12.5px; font-weight: 600; color: var(--muted);
    }
    .pop-skip:hover { color: var(--text); }
    @media (max-width: 520px) {
      .pop-wrap { padding: 16px; }
      .pop-bar { flex-direction: column-reverse; gap: 10px; padding: 14px 16px; }
      .pop-cta { width: 100%; box-sizing: border-box; }
    }
    @media (prefers-reduced-motion: reduce) {
      .pop-wrap, .pop-card { transition: none; }
    }

    /* ── CARTOUCHE LIVE IN MONTREUX ───────────────── */
    .montreux-banner { display:block; max-width:1080px; margin:0 auto var(--s3); padding:0 40px; line-height:0; }
    .montreux-banner img { width:100%; height:auto; display:block; border-radius:22px;
                           box-shadow:0 20px 56px rgba(15,25,35,0.13); transition:transform .3s ease; }
    .montreux-banner:hover img { transform:translateY(-3px); }
    @media (max-width:700px) { .montreux-banner { padding:0 20px; } }

    /* ── PLAN / EMPLACEMENT ───────────────────────── */
    .map-block { display:grid; grid-template-columns:1.6fr 1fr; gap:22px; align-items:stretch; }
    @media (max-width:820px) { .map-block { grid-template-columns:1fr; } }
    .map-frame { border-radius:20px; overflow:hidden; box-shadow:0 14px 46px rgba(15,25,35,0.12); background:#fff; min-height:380px; }
    .map-frame iframe { width:100%; height:100%; min-height:380px; border:0; display:block; }
    .map-side { background:#fff; border-radius:20px; padding:32px 28px; display:flex; flex-direction:column; justify-content:center; gap:12px; box-shadow:0 14px 46px rgba(15,25,35,0.12); }
    .map-addr { font-size:14px; color:var(--muted); line-height:1.7; margin-bottom:12px; }
    .map-addr strong { display:block; font-family:'Sora',sans-serif; font-size:19px; font-weight:800; color:var(--text); letter-spacing:-0.02em; margin-bottom:6px; }
    .map-btn { display:block; text-align:center; padding:15px 22px; border-radius:100px; border:1.5px solid var(--border); background:#fff; color:var(--text); font-family:'Sora',sans-serif; font-size:13.5px; font-weight:700; text-decoration:none; transition:border-color .15s, transform .15s; }
    .map-btn:hover { border-color:var(--teal-dark); transform:translateY(-1px); }
    .map-btn-primary { background:var(--teal-dark); border-color:var(--teal-dark); color:#fff; }
    .map-btn-primary:hover { border-color:var(--teal-dark); opacity:.9; }
    .map-hint { font-size:12px; color:var(--muted); margin:8px 0 0; text-align:center; }

    /* ── SLOT PHOTO À REMPLIR ─────────────────────── */
    .photo-slot { display:flex; align-items:center; justify-content:center; background:#fafbfc; border:2px dashed var(--border); border-radius:16px; aspect-ratio:4/3; color:var(--muted); font-family:'Sora',sans-serif; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; text-align:center; padding:12px; box-sizing:border-box; }
    .photo-slot-tall { aspect-ratio:3/4; }

    /* ── L'ÉCRIN (argument majeur EMM) ────────────── */
    .ecrin-duo { display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-bottom:28px; }
    @media (max-width:820px) { .ecrin-duo { grid-template-columns:1fr; } }
    .ecrin-card { margin:0; background:#fff; border-radius:20px; overflow:hidden; box-shadow:0 14px 46px rgba(15,25,35,0.10); transition:transform .25s ease, box-shadow .25s ease; }
    .ecrin-card:hover { transform:translateY(-5px); box-shadow:0 22px 60px rgba(15,25,35,0.16); }
    .ecrin-card img { width:100%; aspect-ratio:4/3; object-fit:cover; display:block; }
    .ecrin-card figcaption { padding:20px 26px 24px; font-size:12.5px; color:var(--muted); line-height:1.6; letter-spacing:0.01em; }
    .ecrin-card figcaption strong { font-family:'Sora',sans-serif; font-size:11px; font-weight:800; letter-spacing:0.18em; color:var(--text); }

    .ecrin-proof { display:grid; grid-template-columns:1fr 1fr 1fr 1.25fr; gap:20px; align-items:stretch; }
    @media (max-width:1100px) { .ecrin-proof { grid-template-columns:1fr 1fr 1fr; } .ecrin-proof-text { grid-column:1 / -1; } }
    @media (max-width:820px) { .ecrin-proof { grid-template-columns:1fr 1fr; } }
    @media (max-width:600px) { .ecrin-proof { grid-template-columns:1fr; } }
    .ecrin-proof-item { margin:0; border-radius:20px; overflow:hidden; box-shadow:0 14px 46px rgba(15,25,35,0.10); background:#fff; }
    .ecrin-proof-item img { width:100%; height:100%; min-height:340px; object-fit:cover; display:block; }
    .ecrin-proof-video { position:relative; background:var(--text); display:flex; flex-direction:column; }
    .ecrin-proof-video video { width:100%; height:100%; min-height:340px; object-fit:cover; display:block; background:var(--text); }
    .ecrin-proof-video figcaption { position:absolute; left:0; right:0; bottom:0; padding:14px 16px; background:linear-gradient(180deg,rgba(0,30,43,0) 0%,rgba(0,30,43,0.85) 100%); color:rgba(255,255,255,0.9); font-family:'Sora',sans-serif; font-size:10.5px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; pointer-events:none; }
    .ecrin-proof-text { background:#fff; border-radius:20px; padding:40px 36px; display:flex; flex-direction:column; justify-content:center; box-shadow:0 14px 46px rgba(15,25,35,0.10); border-top:4px solid var(--gold); }
    .ecrin-proof-text h3 { font-family:'Sora',sans-serif; font-size:clamp(24px,2.6vw,32px); font-weight:800; color:var(--text); letter-spacing:-0.03em; line-height:1.05; margin:0 0 16px; }
    .ecrin-proof-text p { font-size:14.5px; color:var(--muted); line-height:1.7; margin:0 0 28px; }
    .ecrin-proof-text a { display:inline-block; align-self:flex-start; padding:16px 30px; background:var(--gold); color:var(--teal-dark); border-radius:100px; font-family:'Sora',sans-serif; font-weight:800; font-size:14px; text-decoration:none; box-shadow:0 10px 28px rgba(201,162,75,0.3); transition:transform .15s; }
    .ecrin-proof-text a:hover { transform:translateY(-2px); }

    /* ── DIGITAL — fonctionnement (4 étapes) ──────── */
    .lpd-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
    @media (max-width:860px) { .lpd-steps { grid-template-columns:repeat(2,1fr); } }
    @media (max-width:480px) { .lpd-steps { grid-template-columns:1fr; } }
    .lpd-step { text-align:center; padding:26px 18px; background:#fff; border:1px solid var(--border); border-radius:16px; transition:transform 0.2s, box-shadow 0.2s; }
    .lpd-step:hover { transform:translateY(-3px); box-shadow:var(--shadow-md); }
    .lpd-step-num { width:34px; height:34px; border-radius:50%; background:var(--teal); color:#fff; font-family:'Sora',sans-serif; font-size:14px; font-weight:800; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; }
    .lpd-step-title { font-family:'Sora',sans-serif; font-size:13.5px; font-weight:800; color:var(--text); margin-bottom:6px; line-height:1.3; }
    .lpd-step-desc { font-size:12px; color:var(--muted); line-height:1.5; }

    /* ── COMING SOON — vidéo IA (à venir) ─────────── */
    .cs-h2 { font-family:'Sora',sans-serif; font-size:clamp(26px,4vw,38px); font-weight:700; color:var(--text); letter-spacing:-0.02em; margin:0 0 14px; }
    .cs-lead { font-size:15px; color:var(--muted); line-height:1.7; max-width:460px; margin:0 auto 48px; }
    .cs-mock-wrap { display:flex; flex-direction:column; align-items:center; gap:18px; margin-bottom:22px; }
    .cs-badge { display:inline-flex; align-items:center; gap:6px; font-family:'Sora',sans-serif; font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); background:var(--gold-light); border:1px dashed var(--gold); padding:7px 16px; border-radius:100px; }
    .cs-phone { width:168px; aspect-ratio:9/16; border-radius:28px; border:2px dashed var(--border); background:repeating-linear-gradient(135deg, rgba(107,114,128,0.06) 0 10px, transparent 10px 20px); position:relative; display:flex; align-items:center; justify-content:center; opacity:0.7; }
    .cs-phone-notch { position:absolute; top:10px; left:50%; transform:translateX(-50%); width:46px; height:5px; border-radius:100px; background:var(--border); }
    .cs-phone-screen { display:flex; flex-direction:column; align-items:center; gap:10px; }
    .cs-play { width:46px; height:46px; border-radius:50%; background:rgba(107,114,128,0.14); color:var(--muted); display:flex; align-items:center; justify-content:center; }
    .cs-duration { font-size:10.5px; font-weight:600; color:var(--muted); letter-spacing:0.04em; }
    .cs-note { font-size:12.5px; color:var(--muted); font-style:italic; margin:0 0 20px; }
    .cs-link { display:inline-block; font-family:'Sora',sans-serif; font-size:13px; font-weight:600; color:var(--teal); text-decoration:none; border-bottom:1px solid transparent; transition:border-color 0.18s; }
    .cs-link:hover { border-color:var(--teal); }

    /* ── LOGO COLOR ROW ─────────────────── */
    .logo-color-bg {
      background: #fff;
      padding: 30px 0;
    }
    .logo-color-bg .logo-item img {
      mix-blend-mode: normal !important;
      opacity: 1 !important;
      height: 36px !important;
      max-width: 160px !important;
      object-fit: contain;
    }
    .logo-color-bg .logo-name { color: var(--muted) !important; }
    /* Tailles individuelles */
    .logo-color-bg .logo-item.lg img   { height: 50px !important; max-width: 200px !important; }
    .logo-color-bg .logo-item.xl img   { height: 64px !important; max-width: 240px !important; }
    .logo-color-bg .logo-item.xxl img  { height: 88px !important; max-width: 300px !important; }
    .logo-color-bg .logo-item.manor img { height: 130px !important; max-width: 340px !important; }
    .logo-color-bg .logo-item.sm img   { height: 18px !important; max-width: 68px !important; }
    .photo-brand { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .photo-event { font-size: 10.5px; font-weight: 600; color: rgba(255,255,255,0.78); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 5px; line-height: 1.35; }
    .photo-context { display: none; }

    /* ── TABS RÉFÉRENCES ───────────────────── */
    .ref-tabs {
      display: flex;
      gap: 8px;
      justify-content: center;
      margin-bottom: 40px;
    }
    .ref-tab {
      font-family: 'Sora', sans-serif;
      font-size: 13px;
      font-weight: 600;
      padding: 10px 28px;
      border-radius: 100px;
      border: 1.5px solid rgba(0,0,0,0.12);
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.02em;
    }
    .ref-tab:hover { border-color: var(--teal); color: var(--teal); }
    .ref-tab.active { background: var(--teal); border-color: var(--teal); color: #fff; }
    .photo-placeholder {
      aspect-ratio: 3/2;
      background: #eef4f7;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      color: var(--muted);
      font-style: italic;
    }

    /* ── D. PACKAGES / GRILLE ───────────────── */
    .pricing-grid { display: grid; }
    @media (max-width: 860px) { .pricing-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }

    /* ── BESPOKE ────────────────────────────── */
    .bespoke-band { }
    .bespoke-logos img { filter: grayscale(1); }
    @media (max-width: 860px) {
      #bespoke .bespoke-band { flex-direction: column; align-items: flex-start !important; gap: 28px !important; padding: 0 !important; }
      #bespoke .bespoke-band > div:last-child { width: 100%; min-width: 0 !important; }
      #bespoke .bespoke-band > div:last-child a { width: 100%; box-sizing: border-box; }
      #bespoke .bespoke-logos { gap: 22px !important; }
    }

    /* ── BRAND MARQUEE ──────────────────────── */
    .brand-marquee-wrap { overflow: hidden; width: 100%; margin-top: 40px; }
    .brand-row { display: flex; align-items: center; gap: 48px; width: max-content; padding: 4px 0; }
    .brand-row img {
      height: 104px; width: auto; max-width: 240px; min-width: 120px;
      object-fit: contain; display: block; background: #fff;
      border: 1px solid var(--border); border-radius: 14px;
      padding: 20px 28px; box-sizing: border-box;
    }
    .brand-row img.logo-lg { padding: 10px 22px; max-width: 280px; }
    .brand-row img.logo-xl { padding: 8px 20px; }
    .brand-row img.logo-xxl { padding: 4px 12px; max-width: 300px; }
    .brand-txt {
      font-family: 'Sora', sans-serif; font-size: 26px; font-weight: 800;
      letter-spacing: 0.01em; color: var(--text); white-space: nowrap;
      display: inline-flex; align-items: center; justify-content: center;
      height: 104px; background: #fff; border: 1px solid var(--border);
      border-radius: 14px; padding: 0 28px; box-sizing: border-box;
    }
    .brand-txt.brand-txt-lg { font-size: 32px; }
    .brand-txt.brand-txt-srg { font-size: 32px; color:#fff; background:#c8102e; border-color:#c8102e; letter-spacing:0.02em; }
    @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .track-left { animation: marquee-left 30s steps(15, end) infinite; }
    @media (max-width: 860px) {
      .brand-row img { height: 76px; padding: 14px 20px; max-width: 180px; min-width: 92px; }
      .brand-row img.logo-lg { padding: 7px 16px; max-width: 210px; }
      .brand-row img.logo-xxl { padding: 3px 9px; max-width: 225px; }
      .brand-row { gap: 28px; }
      .brand-txt { height: 76px; font-size: 20px; padding: 0 20px; }
      .brand-txt.brand-txt-lg, .brand-txt.brand-txt-srg { font-size: 24px; }
    }

    /* ── TRUSTED BY ─────────────────────────── */
    .trusted-headline { font-family: 'Sora', sans-serif; font-size: clamp(30px,4.6vw,50px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; margin: 14px 0 0; text-align: left; }
    .trusted-rule { width: 60px; height: 3px; border-radius: 2px; background: var(--gold); margin: 26px 0 0; opacity: 0.5; }

    /* ── BANDEAU ACTUALITÉ (au-dessus du nav, défile avec la page) ── */
    .promo-bar { background: var(--teal); color:#fff; text-align:center; padding:11px 20px; }
    .promo-bar-text { font-family:'Sora',sans-serif; font-size:13.5px; font-weight:600; letter-spacing:0.01em; }
    .promo-bar-text strong { font-weight:800; }
    .promo-bar a { color:#fff; font-weight:800; text-decoration:underline; text-underline-offset:3px; margin-left:6px; white-space:nowrap; }
    @media (max-width:640px) { .promo-bar { padding:10px 14px; } .promo-bar-text { font-size:12px; display:block; line-height:1.4; } .promo-bar a { display:inline-block; margin-left:0; margin-top:2px; } }

    /* ── NAV ────────────────────────────────── */
    nav { position: sticky; top: 0; z-index: 400; background: rgba(255,255,255,0.92); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 14px 40px; gap: 24px; }
    .nav-logo { font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); text-decoration: none; letter-spacing: -0.02em; flex-shrink: 0; }
    .nav-logo span { color: var(--teal); }
    .nav-right { display: flex; align-items: center; gap: 18px; flex-shrink: 0; }
    .nav-lang { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: var(--muted); letter-spacing: 0.06em; display: flex; align-items: center; gap: 5px; }
    .nav-lang b { color: var(--teal); }
    .nav-lang button { font: inherit; background: none; border: none; padding: 2px 1px; cursor: pointer; color: var(--muted); transition: color .15s; }
    .nav-lang button.active { color: var(--teal); }
    .nav-lang button:hover { color: var(--teal-dark); }
    .nav-lang span { color: var(--border); }
    .nav-cta { display: inline-block; padding: 11px 24px; background: var(--teal); color: #fff; border-radius: 100px; font-family: 'Sora', sans-serif; font-size: 13.5px; font-weight: 700; text-decoration: none; transition: opacity .15s; }
    .nav-cta:hover { opacity: .88; }
    .nav-live { display: inline-flex; align-items: center; gap: 8px; padding: 9.5px 22px; background: var(--text); border: 1.5px solid var(--text); border-radius: 100px; font-family: 'Sora', sans-serif; font-size: 13.5px; font-weight: 800; letter-spacing: 0.02em; color: #fff; text-decoration: none; transition: opacity .15s, transform .15s; }
    .nav-live:hover { opacity: .85; transform: translateY(-1px); }
    .nav-live .dot { width: 8px; height: 8px; border-radius: 50%; background: #e63946; flex-shrink: 0; box-shadow: 0 0 0 3px rgba(230,57,70,0.25); animation: livepulse 1.6s ease-in-out infinite; }
    @keyframes livepulse { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
    @media (max-width: 640px) { .nav-live span:not(.dot) { display: none; } .nav-live { padding: 9.5px 12px; } }
    @media (max-width: 860px) { nav { padding: 12px 18px; } .nav-lang { display: none; } }

    /* ── HERO ───────────────────────────────── */
    .hero { position: relative; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; max-width: 1180px; margin: 0 auto; padding: 56px 40px 64px; overflow: hidden; }
    .hero-blob { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; pointer-events: none; }
    .hero-blob-1 { width: 380px; height: 380px; background: var(--sky); top: -80px; left: -120px; }
    .hero-blob-2 { width: 320px; height: 320px; background: var(--gold-light); bottom: -100px; right: -80px; }
    .hero-left { position: relative; z-index: 2; }
    .hero-joy-row { display: flex; align-items: center; gap: 16px; }
    .hero-h1 { font-family: 'Sora', sans-serif; font-size: clamp(52px,8vw,104px); font-weight: 800; letter-spacing: -0.045em; line-height: 0.95; color: var(--text); margin: 0; }
    .hero-mascot { height: clamp(56px,8vw,96px); width: auto; }
    .hero-sub { font-size: 17px; color: var(--muted); line-height: 1.6; margin: 20px 0 30px; max-width: 420px; }
    .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
    .btn-hero-primary { display: inline-block; padding: 16px 34px; background: var(--teal); color: #fff; border-radius: 100px; font-family: 'Sora', sans-serif; font-weight: 700; font-size: 14.5px; text-decoration: none; transition: opacity .15s; }
    .btn-hero-primary:hover { opacity: .88; }
    .btn-hero-secondary { display: inline-block; padding: 16px 34px; background: transparent; color: var(--text); border: 1.5px solid var(--border); border-radius: 100px; font-family: 'Sora', sans-serif; font-weight: 700; font-size: 14.5px; text-decoration: none; transition: border-color .15s; }
    .btn-hero-secondary:hover { border-color: var(--teal-dark); }
    .hero-socials { display: flex; gap: 22px; }
    .hero-social-link { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); text-decoration: none; font-size: 13px; font-weight: 600; transition: color .15s; }
    .hero-social-link:hover { color: var(--teal); }
    .hero-right { position: relative; z-index: 2; }
    .hero-video-wrap { border-radius: 24px; overflow: hidden; box-shadow: var(--shadow-md); aspect-ratio: 9/16; max-height: 560px; margin: 0 auto; background: var(--teal-dark); }
    .hero-video-wrap video, .hero-video-wrap img { width: 100%; height: 100%; object-fit: contain; display: block; background: var(--teal-dark); }
    .hero-sound-btn { position: absolute; right: 16px; bottom: 16px; width: 40px; height: 40px; border-radius: 50%; border: none; background: rgba(255,255,255,0.9); cursor: pointer; font-size: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.18); }
    .hero-vid-dots { display: flex; gap: 7px; justify-content: center; margin-top: 16px; }
    @media (max-width: 900px) { .hero { grid-template-columns: 1fr; gap: 40px; padding: 48px 20px 60px; } }

    /* ── SPLASH ─────────────────────────────── */
    #splash { position: fixed; inset: 0; z-index: 900; background: var(--teal); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; transition: opacity .65s ease; }
    .splash-joy { font-family: 'Sora', sans-serif; font-size: clamp(48px,9vw,96px); font-weight: 800; color: #fff; letter-spacing: -0.04em; }
    .splash-sub { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.75); }
    #splash.splash-out { opacity: 0; pointer-events: none; }

    /* ── QUOTE / STARTED ────────────────────── */
    .started-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    .started-img-wrap { border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-md); }
    .started-img-wrap img { width: 100%; display: block; }
    .quote-grid { }
    @media (max-width: 860px) { .started-grid, .quote-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }

    /* ── CALENDRIER / EMPLACEMENT ───────────── */
    .cal-title { font-family: 'Sora', sans-serif; font-size: clamp(30px,4.6vw,50px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; color: var(--text); margin: 14px 0 0; }
    .cal-subtitle { font-size: 14px; color: var(--muted); line-height: 1.7; margin: 0; }
    .cal-footer { text-align: center; }
    .cal-note { font-size: 12px; color: var(--muted); margin: 0 0 18px; }
    .cal-share-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
    .cal-share-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border: 1.5px solid var(--border); border-radius: 100px; background: #fff; color: var(--text); text-decoration: none; font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700; transition: border-color .15s; }
    .cal-share-btn:hover { border-color: var(--teal-dark); }
    .cal-share-primary { background: var(--teal-dark); border-color: var(--teal-dark); color: #fff; }

    /* ── FAQ ────────────────────────────────── */
    .faq-list { display: flex; flex-direction: column; gap: 14px; max-width: 780px; margin: 0 auto; }
    .faq-item { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 22px 26px; }
    .faq-q { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
    .faq-a { font-size: 14px; color: var(--muted); line-height: 1.65; }

    /* ── CTA CONTACT ────────────────────────── */
    .cta-section { background: var(--teal-dark); padding: 100px 24px; text-align: center; }
    .cta-section h2 { font-family: 'Sora', sans-serif; font-size: clamp(34px,5vw,58px); font-weight: 800; color: #fff; letter-spacing: -0.03em; margin: 0 0 30px; }
    .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .btn-white { display: inline-block; padding: 17px 36px; background: #fff; color: var(--teal-dark); border-radius: 100px; font-family: 'Sora', sans-serif; font-weight: 700; font-size: 14.5px; text-decoration: none; transition: transform .15s; }
    .btn-white:hover { transform: translateY(-2px); }

    /* ── FOOTER ─────────────────────────────── */
    footer { background: var(--teal-dark); color: rgba(255,255,255,0.7); padding: 76px 24px 32px; }
    .footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr; gap: 48px; max-width: 1080px; margin: 0 auto 48px; }
    @media (max-width: 780px) { .footer-grid { grid-template-columns: 1fr; gap: 32px; } }
    .footer-brand { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; color: #fff; letter-spacing: -0.02em; text-decoration: none; display: inline-block; }
    .footer-brand span { color: var(--teal); }
    .footer-tagline { font-size: 13.5px; line-height: 1.7; margin: 12px 0 18px; }
    .footer-contact { font-size: 13.5px; line-height: 1.9; }
    .footer-contact a { color: rgba(255,255,255,0.85); text-decoration: none; }
    .footer-heading { font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 16px; }
    .footer-link { display: block; color: rgba(255,255,255,0.75); text-decoration: none; font-size: 13.5px; line-height: 2.1; transition: color .15s; }
    .footer-link:hover { color: #fff; }
    .footer-social-pill { display: inline-block; margin: 0 8px 8px 0; }
    .footer-bottom { max-width: 1080px; margin: 0 auto; padding-top: 26px; border-top: 1px solid rgba(255,255,255,0.12); display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 12px; color: rgba(255,255,255,0.5); }
    .footer-ccaa { color: rgba(201,162,75,0.7); text-decoration: none; }

    /* ── WIDGET CONTACT (façon chat) ────────────────── */
    .chat-launcher { position: fixed; bottom: 24px; right: 24px; z-index: 600; display: inline-flex; align-items: center; gap: 12px; padding: 16px 26px 16px 22px; border: none; cursor: pointer; background: var(--teal); color: #fff; border-radius: 100px; font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; box-shadow: 0 10px 34px rgba(26,191,191,0.32); transition: transform .18s ease, box-shadow .18s ease; }
    .chat-launcher:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(0,30,43,0.40); }
    .chat-launcher svg { flex-shrink: 0; }
    .chat-launcher.is-open { display: none; }
    .chat-panel { position: fixed; bottom: 24px; right: 24px; z-index: 601; width: 360px; max-width: calc(100vw - 32px); background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 24px 70px rgba(0,30,43,0.30); display: none; }
    .chat-panel.is-open { display: block; }
    .chat-head { background: var(--teal); color: #fff; padding: 20px 22px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
    .chat-head h4 { font-family:'Sora',sans-serif; font-size: 16px; font-weight: 800; margin: 0 0 4px; }
    .chat-head p  { font-size: 12px; margin: 0; color: rgba(255,255,255,0.72); }
    .chat-close { background: none; border: none; color: rgba(255,255,255,0.8); font-size: 22px; line-height: 1; cursor: pointer; padding: 0 2px; }
    .chat-close:hover { color: #fff; }
    .chat-body { padding: 22px; }
    .chat-bubble { background: var(--sky); border-radius: 4px 16px 16px 16px; padding: 14px 16px; font-size: 13.5px; color: var(--text); line-height: 1.6; margin-bottom: 20px; }
    .chat-field { margin-bottom: 14px; }
    .chat-field label { display: block; font-family:'Sora',sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 7px; }
    .chat-field input, .chat-field textarea, .chat-field select { width: 100%; box-sizing: border-box; padding: 13px 15px; border: 1px solid var(--border); border-radius: 12px; font-family: inherit; font-size: 14px; color: var(--text); background: #fff; }
    .chat-field textarea { resize: vertical; min-height: 84px; }
    .chat-field input:focus, .chat-field textarea:focus, .chat-field select:focus { outline: none; border-color: var(--teal); box-shadow: 0 0 0 3px rgba(26,191,191,0.15); }
    .chat-send { width: 100%; padding: 15px; border: none; cursor: pointer; background: var(--teal); color: #fff; border-radius: 100px; font-family:'Sora',sans-serif; font-size: 14.5px; font-weight: 700; transition: opacity .15s; }
    .chat-send:hover { opacity: .88; }
    .chat-foot { text-align: center; font-size: 11px; color: var(--muted); margin: 14px 0 0; }
    @media (max-width: 480px) {
      .chat-launcher { bottom: 16px; right: 16px; padding: 14px 22px 14px 18px; font-size: 14px; }
      .chat-panel { bottom: 16px; right: 16px; left: 16px; width: auto; }
    }

  
    /* ── HERO : photo pleine hauteur a droite (version 24 juillet) ── */
    .hero { min-height: 100vh !important; align-items: center !important; }
    .hero-right { position: relative !important; min-height: 100vh !important; height: 100% !important;
                  aspect-ratio: auto !important; max-height: none !important; overflow: hidden !important; }
    .hero-video-wrap { position: absolute !important; inset: 0 !important; aspect-ratio: auto !important;
                       max-height: none !important; margin: 0 !important; border-radius: 0 !important;
                       background: transparent !important; overflow: hidden !important; }
    .hero-video-wrap img, .hero-video-wrap video { width: 100% !important; height: 100% !important;
                       object-fit: cover !important; display: block !important; background: transparent !important; }
    .hero-blob-2 { left: auto !important; }
    nav { height: auto !important; }
    section[id], .ask[id] { scroll-margin-top: 110px; }
    @media (max-width: 900px) {
      .hero { min-height: auto !important; }
      .hero-right { min-height: 0 !important; height: auto !important; aspect-ratio: 4/5 !important; }
      .hero-video-wrap { position: absolute !important; inset: 0 !important; }
    }

    /* ── Grille photos : lecture EMM ── */
    .photo-card { position: relative; }
    .photo-caption { z-index: 2; }
    .photo-brand { font-family:'Sora',sans-serif; font-size:15.5px; font-weight:800; color:#fff;
                   letter-spacing:0.01em; white-space:normal !important; overflow:visible !important; }
    .photo-event, .photo-context { display: none !important; }
    /* Bandeau permanent (style Scarlett) : toujours visible, fond sombre, texte blanc — pas de survol requis, donc lisible sur iPhone */
    .photo-hover { position:absolute; left:0; right:0; bottom:0; z-index:5;
                   background:linear-gradient(to top, rgba(0,10,16,0.94) 0%, rgba(0,10,16,0.80) 60%, rgba(0,10,16,0) 100%);
                   color:#fff;
                   display:flex; flex-direction:column; justify-content:flex-end; gap:6px;
                   padding:26px 20px 16px; opacity:1; pointer-events:none; }
    .photo-hover-brand { font-family:'Sora',sans-serif; font-size:11.5px; font-weight:800;
                   letter-spacing:0.16em; text-transform:uppercase; color:#fff; line-height:1.45; }
    .photo-hover-title { font-family:'Sora',sans-serif; font-size:clamp(19px,2vw,24px); font-weight:800;
                   letter-spacing:-0.02em; line-height:1.15; }
    .photo-hover-facts { font-size:14.5px; font-weight:600; line-height:1.4; color:rgba(255,255,255,0.94); }
    @media (max-width: 700px) { .photo-hover { padding:20px 16px 14px; gap:5px; } .photo-hover-brand { font-size:11px; } .photo-hover-facts { font-size:15px; line-height:1.38; } }

    @media (max-width: 860px) {
      #bespoke .hc-band { grid-template-columns: 1fr !important; gap: 36px !important; }
      #bespoke .bespoke-logos span { font-size: 11px !important; }
    }

    @media (max-width: 760px) { #aiguillage .aig-grid { grid-template-columns: 1fr !important; } }

    .duo-offre { display:grid; grid-template-columns:1fr 1fr; gap:var(--s3); align-items:center; }
    .duo-offre + .duo-offre { margin-top:var(--s4); }
    .duo-offre figure { margin:0; border-radius:22px; overflow:hidden; box-shadow:0 20px 56px rgba(15,25,35,0.13); }
    .duo-offre figure img { width:100%; height:100%; object-fit:cover; display:block; aspect-ratio:4/3; }
    .offre-label { display:inline-flex; align-items:center; gap:10px; font-family:'Sora',sans-serif; font-size:10px;
                   font-weight:700; letter-spacing:0.44em; text-transform:uppercase; color:var(--muted); margin-bottom:18px; }
    .offre-label::before { content:''; width:8px; height:8px; border-radius:50%; background:var(--teal); }
    
    .offre-p { font-size:var(--t-body); color:var(--muted); line-height:1.7; margin:0 0 var(--s2); max-width:46ch; }
    .offre-meta { font-family:'Sora',sans-serif; font-size:var(--t-meta); font-weight:700; color:var(--text);
                  letter-spacing:0.1em; text-transform:uppercase; line-height:2; margin:0 0 var(--s2); }
    .offre-cta { display:inline-block; text-align:center; padding:18px 34px; background:var(--teal); color:#fff;
                 border-radius:100px; font-family:'Sora',sans-serif; font-weight:800; font-size:14.5px;
                 text-decoration:none; box-shadow:0 12px 30px rgba(26,191,191,0.32); transition:transform .15s; }
    .offre-cta:hover { transform:translateY(-2px); }
    .offre-cta2 { display:inline-block; margin-left:12px; font-family:'Sora',sans-serif; font-size:13.5px; font-weight:700;
                  color:var(--text); text-decoration:underline; text-underline-offset:5px; }
    @media (max-width:860px) {
      .duo-offre { grid-template-columns:1fr !important; gap:28px; }
      .duo-offre + .duo-offre { margin-top:72px; }
      .duo-offre .col-img { order:-1; }
    }

    /* ── RÉCAP OFFRES — deux cartes vers Formules / Sur mesure ── */
    .offer-duo { display:grid; grid-template-columns:1fr 1fr; gap:var(--s3); }
    @media (max-width:860px) { .offer-duo { grid-template-columns:1fr; gap:var(--s3); } }
    .offer-card { display:block; text-decoration:none; color:var(--text); background:#fff;
                  border:1px solid var(--border); border-radius:22px; padding:38px 34px;
                  transition:transform .25s ease, box-shadow .25s ease; }
    .offer-card:hover { transform:translateY(-4px); box-shadow:0 20px 56px rgba(15,25,35,0.13); }
    .offer-card h3 { font-family:'Sora',sans-serif; font-size:var(--t-h3); font-weight:800;
                     letter-spacing:-0.03em; margin:0 0 8px; }
    .offer-card p { font-size:var(--t-body); color:var(--muted); line-height:1.6; margin:0 0 14px; max-width:38ch; }
    .offer-card .offer-link { display:inline-block; font-family:'Sora',sans-serif; font-size:13px;
                              font-weight:700; color:var(--teal); }

    /* ══════════════ SYSTÈME TYPO & ESPACES — VERROUILLÉ ══════════════
       5 tailles de texte. 4 espaces. Rien d'autre. */
    :root{
      --t-display: clamp(48px, 7vw, 84px);   /* titre de page */
      --t-h2:      clamp(34px, 4.4vw, 54px); /* titre de section */
      --t-h3:      clamp(24px, 2.6vw, 32px); /* titre de bloc */
      --t-body:    17px;
      --t-meta:    13px;
      --t-label:   10px;
      --s1: 16px; --s2: 32px; --s3: 64px; --s4: 112px;
    }
    .lbl{ display:inline-flex; align-items:center; gap:10px; font-family:'Sora',sans-serif;
          font-size:var(--t-label); font-weight:700; letter-spacing:0.44em; text-transform:uppercase;
          color:var(--muted); margin:0 0 var(--s1); }
    .lbl::before{ content:''; width:8px; height:8px; border-radius:50%; background:var(--teal); flex-shrink:0; }
    .lbl.is-plain::before{ display:none; }
    h1.d, .d{ font-family:'Sora',sans-serif; font-size:var(--t-display); font-weight:800;
              letter-spacing:-0.05em; line-height:0.94; color:var(--text); margin:0 0 var(--s2); }
    h2.h2, .h2{ font-family:'Sora',sans-serif; font-size:var(--t-h2); font-weight:800;
                letter-spacing:-0.04em; line-height:1.12; color:var(--text); margin:0 0 var(--s1); }
    h3.h3, .h3{ font-family:'Sora',sans-serif; font-size:var(--t-h3); font-weight:800;
                letter-spacing:-0.03em; line-height:1.1; color:var(--text); margin:0 0 var(--s1); }
    .txt{ font-size:var(--t-body); line-height:1.7; color:var(--muted); margin:0 0 var(--s2); max-width:46ch; }
    .meta{ font-family:'Sora',sans-serif; font-size:var(--t-meta); font-weight:700; letter-spacing:0.1em;
           text-transform:uppercase; line-height:2; color:var(--text); margin:0 0 var(--s2); }
    .sec{ padding:var(--s4) 0; }
    .sec-head{ text-align:left; margin-bottom:var(--s3); }
    .sec-head .txt{ margin-left:0; margin-right:0; }
    @media (max-width:700px){ :root{ --s3:44px; --s4:72px; } }



    .tem{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);
         border:1px solid var(--border);border-radius:20px;overflow:hidden;}
    @media(max-width:900px){.tem{grid-template-columns:1fr 1fr;}}
    @media(max-width:620px){.tem{grid-template-columns:1fr;}}
    .tem > figure{background:#fff;margin:0;padding:34px 30px;display:flex;flex-direction:column;justify-content:space-between;gap:var(--s2);}
    .tem-f{display:none;}
    .tem-q{font-family:'Sora',sans-serif;font-size:16.5px;font-weight:700;font-style:italic;line-height:1.45;
           letter-spacing:-0.015em;color:var(--text);margin:0;}
    .tem-s{font-size:12.5px;line-height:1.6;color:var(--muted);margin:0;}

    .themes{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
    @media(max-width:760px){.themes{grid-template-columns:1fr;}}
    .themes figure{margin:0;}
    .themes img{width:100%;height:100%;object-fit:cover;display:block;aspect-ratio:3/4;
                border-radius:18px;box-shadow:0 14px 40px rgba(15,25,35,0.12);}
    .themes figcaption{font-family:'Sora',sans-serif;font-size:11px;font-weight:800;letter-spacing:0.2em;
                       text-transform:uppercase;color:var(--teal);margin-top:var(--s1);}


  .actu-noel-card { display:grid; grid-template-columns: 0.85fr 1.15fr; gap:44px; align-items:center; background:var(--grey-cool); border-radius:24px; padding:36px; }
  .actu-noel-media { border-radius:16px; overflow:hidden; aspect-ratio:4/3; box-shadow:0 14px 40px rgba(15,25,35,0.10); }
  .actu-noel-media img { width:100%; height:100%; object-fit:cover; display:block; }
  .actu-noel-date { display:block; font-family:'Sora',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.08em; color:var(--muted); margin-bottom:14px; }
  .actu-noel-proof { display:flex; flex-wrap:wrap; gap:10px; margin:22px 0 26px; }
  .actu-noel-card [data-placeholder] { color:var(--teal-mid); font-style:italic; font-weight:700; }
  @media (max-width:760px) { .actu-noel-card { grid-template-columns:1fr; gap:22px; padding:22px; } .actu-noel-media { aspect-ratio:16/9; } }


  .envergure-duo{display:grid;grid-template-columns:1fr 1fr;gap:var(--s2);}
  .envergure-quad{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:var(--s2);margin-top:var(--s2);}
  @media(max-width:900px){.envergure-quad{grid-template-columns:1fr 1fr;}}
  @media(max-width:600px){.envergure-duo,.envergure-quad{grid-template-columns:1fr;}}

  /* ── MUR DE LOGOS (Trusted by) ─────────────── */
  .logo-wall{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:20px;
    width:100%;margin:var(--s3) 0 0;}
  .logo-wall .lw-cell{background:#fff;border:1px solid var(--border);border-radius:14px;
    height:104px;display:flex;align-items:center;justify-content:center;
    padding:20px 28px;box-sizing:border-box;}
  .logo-wall img{max-width:100%;max-height:100%;width:auto;object-fit:contain;display:block;}
  .logo-wall .lw-cell.lw-lg{padding:10px 22px;}
  .logo-wall .lw-cell.lw-xl{padding:8px 20px;}
  .logo-wall .lw-cell.lw-xxl{padding:4px 12px;}
  .logo-wall .lw-txt{font-family:'Sora',sans-serif;font-size:22px;font-weight:800;
    letter-spacing:-0.01em;color:var(--text);text-align:center;line-height:1.15;}
  @media(max-width:980px){.logo-wall{grid-template-columns:repeat(4,1fr);gap:18px;}
    .logo-wall .lw-cell{height:88px;padding:14px 20px;}
    .logo-wall .lw-txt{font-size:18px;}}
  @media(max-width:760px){.logo-wall{grid-template-columns:repeat(3,1fr);gap:14px;}
    .logo-wall .lw-cell{height:78px;padding:12px 16px;}
    .logo-wall .lw-txt{font-size:15px;}}
  @media(max-width:460px){.logo-wall{grid-template-columns:repeat(2,1fr);}}

  .equipe-duo{display:grid;grid-template-columns:1fr 1fr;gap:var(--s2);margin-top:var(--s2);}
  .equipe-duo figure{margin:0;}
  .equipe-duo img,.equipe-duo video{width:100%;height:420px;object-fit:cover;display:block;
    border-radius:20px;box-shadow:0 16px 44px rgba(15,25,35,0.14);background:var(--grey-cool);}
  @media(max-width:700px){.equipe-duo{grid-template-columns:1fr;}
    .equipe-duo img,.equipe-duo video{height:340px;}}


  .emporte{display:flex;justify-content:center;margin:0 0 60px;}
  .emporte figure{margin:0;border-radius:20px;overflow:hidden;background:#fff;box-shadow:0 14px 46px rgba(15,25,35,0.10);transition:transform .25s ease, box-shadow .25s ease;}
  .emporte figure:hover{transform:translateY(-5px);box-shadow:0 22px 60px rgba(15,25,35,0.16);}
  .emporte img{width:100%;height:100%;object-fit:cover;display:block;}
  .emporte-hero{width:min(430px,86%);}
  .emporte-hero img{aspect-ratio:3/4;}
  @media(max-width:820px){
    .emporte{margin-bottom:44px;}
    .emporte-hero{width:100%;}
  }


  .ask{background:linear-gradient(180deg,#fff 0%,var(--sky) 100%);border-top:2px solid var(--gold);
    padding:96px 24px 100px;text-align:center;}
  .ask-in{max-width:560px;margin:0 auto;}
  .ask-h{font-family:'Sora',sans-serif;font-size:clamp(32px,4.6vw,54px);font-weight:800;
    letter-spacing:-0.035em;color:var(--text);margin:0 0 16px;}
  .ask-h em{font-style:normal;color:var(--teal);}
  .ask-p{font-size:17px;line-height:1.6;color:var(--muted);margin:0 auto 34px;max-width:44ch;}

  .ask-form{background:#fff;border:1.5px solid var(--border);border-radius:20px;padding:28px;
    text-align:left;box-shadow:0 20px 50px rgba(15,25,35,0.08);}
  .ask-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
  .ask-form input,.ask-form textarea{width:100%;box-sizing:border-box;padding:13px 15px;
    border:1.5px solid var(--border);border-radius:10px;font-family:'Inter',sans-serif;
    font-size:14.5px;color:var(--text);background:#fafbfc;}
  .ask-form input:focus,.ask-form textarea:focus{outline:none;border-color:var(--teal);background:#fff;}
  .ask-form textarea{min-height:88px;resize:vertical;margin-bottom:16px;font-family:inherit;}
  .ask-send{width:100%;padding:15px;border:none;border-radius:10px;background:var(--teal);color:#fff;
    font-family:'Sora',sans-serif;font-weight:800;font-size:14.5px;cursor:pointer;
    box-shadow:0 12px 30px rgba(26,191,191,0.28);transition:transform .15s;}
  .ask-send:hover{transform:translateY(-2px);}
  .ask-note{font-size:11.5px;color:var(--muted);text-align:center;margin:12px 0 0;}
  .ask-alt{font-size:13.5px;color:var(--muted);margin:20px 0 0;}
  .ask-alt a{color:var(--teal-dark);font-weight:700;text-decoration:none;}
  @media (max-width:520px){ .ask-row{grid-template-columns:1fr;} }


  footer .foot-wrap{max-width:1080px;margin:0 auto;padding:0 40px 34px;display:grid;
    grid-template-columns:repeat(4,1fr);gap:34px;text-align:left;}
  footer .foot-col{display:flex;flex-direction:column;gap:9px;}
  footer .foot-h{font-family:'Sora',sans-serif;font-size:10px;font-weight:800;letter-spacing:0.22em;
    text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:3px;}
  footer .foot-col a{color:rgba(255,255,255,0.86);font-size:13.5px;text-decoration:none;line-height:1.5;}
  footer .foot-col a:hover{color:#1ABFBF;}
  footer .foot-legal{color:rgba(255,255,255,0.5);font-size:12.5px;margin:0;padding:22px 40px 0;
    border-top:1px solid rgba(255,255,255,0.12);max-width:1080px;margin:0 auto;text-align:center;}
  @media(max-width:860px){footer .foot-wrap{grid-template-columns:1fr 1fr;gap:26px;padding:0 20px 26px;}}
  @media(max-width:520px){footer .foot-wrap{grid-template-columns:1fr;}}


  .photo-card[data-media]{cursor:pointer;}
  .photo-card .photo-play{display:none;}
  .photo-card[data-media].is-video .photo-play{
    display:flex;align-items:center;justify-content:center;position:absolute;
    top:50%;left:50%;transform:translate(-50%,-50%);width:62px;height:62px;border-radius:50%;
    z-index:4;background:rgba(255,255,255,0.94);color:var(--text);padding-left:4px;
    box-shadow:0 6px 24px rgba(0,0,0,0.28);transition:transform .2s ease;}
  .photo-card[data-media].is-video:hover .photo-play{transform:translate(-50%,-50%) scale(1.09);}
  .photo-badge{position:absolute;right:12px;top:12px;z-index:4;
    background:rgba(0,30,43,0.86);color:#fff;border-radius:100px;padding:5px 11px;
    font-family:'Sora',sans-serif;font-size:11px;font-weight:800;letter-spacing:0.06em;}
  .vplay{position:fixed;inset:0;z-index:900;background:rgba(0,30,43,0.93);
    display:flex;align-items:center;justify-content:center;padding:28px;}
  .vplay[hidden]{display:none;}
  .vplay-box{width:min(980px,100%);background:#000;border-radius:14px;overflow:hidden;
    box-shadow:0 30px 80px rgba(0,0,0,0.5);}
  .vplay-head{display:flex;align-items:center;justify-content:space-between;gap:16px;
    padding:13px 18px;background:#001e2b;color:#fff;
    font-family:'Sora',sans-serif;font-size:13px;font-weight:800;letter-spacing:0.02em;}
  .vplay-x{background:none;border:0;color:#fff;font-size:26px;line-height:1;cursor:pointer;padding:0 4px;}
  .vplay-x:hover{color:var(--teal);}
  .vplay-stage video,.vplay-stage img{width:100%;max-height:70vh;display:block;background:#000;object-fit:contain;}
  .vplay-strip{display:flex;gap:8px;overflow-x:auto;padding:12px;background:#00131c;}
  .vplay-strip button{flex:0 0 auto;width:92px;height:62px;border:2px solid transparent;border-radius:7px;
    overflow:hidden;padding:0;cursor:pointer;background:#000;position:relative;}
  .vplay-strip button.on{border-color:var(--teal);}
  .vplay-strip img{width:100%;height:100%;object-fit:cover;display:block;}
  .vplay-strip .tv{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
    color:#fff;font-size:19px;text-shadow:0 1px 6px rgba(0,0,0,.7);}


/* ── Contact Riviera (remplace l'ancien bloc sombre) ── */
.ask{background:linear-gradient(180deg,#fff 0%,var(--sky) 100%);border-top:2px solid var(--gold);
  padding:96px 24px 100px;text-align:center;}
.ask-in{max-width:560px;margin:0 auto;}
.ask-h{font-family:'Sora',sans-serif;font-size:clamp(32px,4.6vw,54px);font-weight:800;
  letter-spacing:-0.035em;color:var(--text);margin:0 0 16px;}
.ask-h em{font-style:normal;color:var(--teal);}
.ask-p{font-size:17px;line-height:1.6;color:var(--muted);margin:0 auto 34px;max-width:44ch;}
.ask-form{background:#fff;border:1.5px solid var(--border);border-radius:20px;padding:28px;
  text-align:left;box-shadow:0 20px 50px rgba(15,25,35,0.08);}
.ask-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
.ask-form input,.ask-form textarea{width:100%;box-sizing:border-box;padding:13px 15px;
  border:1.5px solid var(--border);border-radius:10px;font-family:'Inter',sans-serif;
  font-size:14.5px;color:var(--text);background:#fafbfc;}
.ask-form input:focus,.ask-form textarea:focus{outline:none;border-color:var(--teal);background:#fff;}
.ask-form textarea{min-height:88px;resize:vertical;margin-bottom:16px;font-family:inherit;}
.ask-send{width:100%;padding:15px;border:none;border-radius:10px;background:var(--teal);color:#fff;
  font-family:'Sora',sans-serif;font-weight:800;font-size:14.5px;cursor:pointer;
  box-shadow:0 12px 30px rgba(26,191,191,0.28);transition:transform .15s;}
.ask-send:hover{transform:translateY(-2px);}
.ask-send:disabled{opacity:.6;cursor:not-allowed;transform:none;}
.ask-note{font-size:12px;color:#b45309;text-align:center;margin:12px 0 0;}
.ask-done{background:#fff;border:1.5px solid var(--border);border-radius:20px;padding:40px 28px;
  box-shadow:0 20px 50px rgba(15,25,35,0.08);}
.ask-done-h{font-family:'Sora',sans-serif;font-size:22px;font-weight:800;color:var(--text);margin:0 0 8px;}
.ask-done-p{font-size:15px;color:var(--muted);margin:0;}
.ask-alt{font-size:13.5px;color:var(--muted);margin:20px 0 0;}
.ask-alt a{color:var(--teal-dark);font-weight:700;text-decoration:none;}
@media (max-width:520px){ .ask-row{grid-template-columns:1fr;} }

</style>
