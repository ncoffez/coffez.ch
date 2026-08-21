<!--
  ============================================================
  FORMULES — portage du mockup design-preview-formules.html
  Branche : riviera-pop   ·   Route : /formules
  ============================================================
-->
<template>
  <div class="formules-root">

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
    <a href="#offre" class="nav-cta">{{ $t('siteNav.reserver') }}</a>
  </div>
</nav>

<section class="sec" style="padding-bottom:0;">
  <div class="wrap" style="max-width:1080px;">
    <span class="lbl">{{ $t('formules.eyebrow') }}</span>
    <h1 class="d">{{ $t('formules.title') }}</h1>
  </div>
</section>

<!-- ── D. PACKAGES ──────────────────────────────── -->
<section class="sec section" id="offre" style="background:#fff;scroll-margin-top:90px">
  <div class="wrap" style="max-width:1080px;">

    <div class="pricing-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;align-items:stretch;">

      <!-- STANDARD (Populaire) -->
      <div class="pkg-card pkg-card--featured">
        <div class="pkg-badge">{{ $t('formules.populaire') }}</div>
        <span class="pkg-tier">{{ $t('formules.tierStandard') }}</span>
        <div class="pkg-price">CHF 770</div>
        <div class="pkg-split">{{ $t('formules.splitStandard') }}</div>
        <p class="pkg-duration"><strong>{{ $t('formules.durationStandard') }}</strong> <span>&middot; {{ $t('formules.animationLive') }}</span></p>
        <div class="pkg-divider"></div>
        <p class="pkg-list-label">{{ $t('formules.included') }}</p>
        <ul class="pkg-list">
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature1') }}</span></li>
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature2') }}</span></li>
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature3') }}</span></li>
        </ul>
        <a href="#" class="pkg-cta" onclick="setTier('standard');openBooking('Standard');return false;">{{ $t('formules.reserveStandard') }}</a>
        <p class="pkg-note">{{ $t('formules.noSupplement') }}<br>{{ $t('formules.paymentNote') }}</p>
      </div>

      <!-- CLASSIC -->
      <div class="pkg-card">
        <span class="pkg-tier">{{ $t('formules.tierClassic') }}</span>
        <div class="pkg-price">CHF 880</div>
        <div class="pkg-split">{{ $t('formules.splitClassic') }}</div>
        <p class="pkg-duration"><strong>{{ $t('formules.durationClassic') }}</strong> <span>&middot; {{ $t('formules.animationLive') }}</span></p>
        <div class="pkg-divider"></div>
        <p class="pkg-list-label">{{ $t('formules.included') }}</p>
        <ul class="pkg-list">
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature1') }}</span></li>
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature2') }}</span></li>
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature3') }}</span></li>
        </ul>
        <a href="#" class="pkg-cta" onclick="setTier('classic');openBooking('Classic');return false;">{{ $t('formules.reserveClassic') }}</a>
        <p class="pkg-note">{{ $t('formules.noSupplement') }}<br>{{ $t('formules.paymentNote') }}</p>
      </div>

      <!-- SUPER -->
      <div class="pkg-card">
        <span class="pkg-tier">{{ $t('formules.tierSuper') }}</span>
        <div class="pkg-price">CHF 990</div>
        <div class="pkg-split">{{ $t('formules.splitSuper') }}</div>
        <p class="pkg-duration"><strong>{{ $t('formules.durationSuper') }}</strong> <span>&middot; {{ $t('formules.animationLive') }}</span></p>
        <div class="pkg-divider"></div>
        <p class="pkg-list-label">{{ $t('formules.included') }}</p>
        <ul class="pkg-list">
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature1') }}</span></li>
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature2') }}</span></li>
          <li><span class="pkg-check"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5L4.8 9.2L10 3.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>{{ $t('formules.feature3') }}</span></li>
        </ul>
        <a href="#" class="pkg-cta" onclick="setTier('super');openBooking('Super');return false;">{{ $t('formules.reserveSuper') }}</a>
        <p class="pkg-note">{{ $t('formules.noSupplement') }}<br>{{ $t('formules.paymentNote') }}</p>
      </div>

    </div>

    <p style="text-align:center;font-size:15px;color:var(--muted);line-height:1.7;max-width:660px;margin:44px auto 0;">{{ $t('formules.footNote') }}<br>{{ $t('formules.footNote2Pre') }} <a href="/sur-mesure" style="color:var(--text);font-weight:700;text-decoration:none;border-bottom:2px solid var(--teal);">{{ $t('formules.surDevisLink') }}</a> {{ $t('formules.footNote2Post') }}</p>
  </div>
</section>

<!-- ── OCCASIONS — offre grand public ── -->
<section class="sec section" style="background:var(--grey-cool);">
  <div class="wrap">
    <div style="text-align:center;margin-bottom:40px;">
      <h2 class="h2">{{ $t('formules.occasionsTitle') }}</h2>
      <p style="font-size:16px;color:var(--muted);margin:14px auto 0;max-width:46ch;line-height:1.6;">{{ $t('formules.occasionsIntro') }}</p>
    </div>
    <div class="occ">
      <div>
        <h3>{{ $t('formules.occPrive') }}</h3>
        <ul>
          <li v-for="item in $tm('formules.occPriveItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
      <div>
        <h3>{{ $t('formules.occEntreprise') }}</h3>
        <ul>
          <li v-for="item in $tm('formules.occEntrepriseItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
      <div>
        <h3>{{ $t('formules.occSpecial') }}</h3>
        <ul>
          <li v-for="item in $tm('formules.occSpecialItems')" :key="item">{{ $rt(item) }}</li>
        </ul>
      </div>
    </div>
  </div>
</section>

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
  <p class="foot-legal">{{ $t('siteFooter.legal') }} &middot; <AdminFooterLink /></p>
</footer>

<div id="booking-modal" onclick="if(event.target===this)closeBooking()" style="display:none;position:fixed;inset:0;z-index:500;background:rgba(0,30,43,0.80);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);align-items:center;justify-content:center;padding:20px;box-sizing:border-box;">
  <div style="background:#fff;border-radius:24px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 48px 120px rgba(0,0,0,0.38);display:flex;flex-direction:column;max-height:92vh;">

    <div style="background:var(--teal-dark);padding:32px 40px 26px;flex-shrink:0;position:relative;">
      <button onclick="closeBooking()" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.10);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;color:rgba(255,255,255,0.65);font-size:22px;line-height:1;display:flex;align-items:center;justify-content:center;transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.18)'" onmouseout="this.style.background='rgba(255,255,255,0.10)'">&times;</button>
      <p id="modal-pkg-label" style="font-family:'Sora',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.36em;text-transform:uppercase;color:rgba(201,162,75,0.65);margin:0 0 12px;">MARIAGE</p>
      <h3 class="h3" style="color:#fff">R&eacute;server votre date</h3>
      <p style="font-size:13px;color:rgba(255,255,255,0.8);margin:0;">50 % &agrave; la r&eacute;servation &middot; 50 % le jour de l&rsquo;&eacute;v&eacute;nement</p>
    </div>

    <div style="padding:26px 40px 34px;overflow-y:auto;flex:1;">

      <div style="background:var(--sky);border-radius:14px;padding:16px 20px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;">
        <span id="bk-tier-label" style="font-size:13px;color:var(--muted);">Prestation 3h</span>
        <span id="bk-total" style="font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:var(--text);">CHF 770</span>
      </div>

      <div style="margin-bottom:20px;">
        <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:12px;">
          <div>
            <label style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Date de l'&eacute;v&eacute;nement *</label>
            <input type="date" id="bk-date" onchange="updateSchedule(); window.dateChecked=false; var m=document.getElementById('bk-check-msg'); if(m) m.style.display='none';" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Heure de d&eacute;but *</label>
            <input type="time" id="bk-time" step="900" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
          </div>
        </div>
        <p style="font-size:12px;color:var(--muted);margin:9px 0 0;line-height:1.5;">L'artiste arrive <strong style="color:var(--text);">au minimum 30 minutes avant</strong> l'heure de d&eacute;but, installation comprise.</p>
        <button type="button" id="bk-check-btn" onclick="checkDate()" style="width:100%;margin-top:14px;padding:13px 18px;background:#fff;color:var(--teal-dark);border:1.5px solid var(--teal);border-radius:11px;font-family:'Sora',sans-serif;font-weight:700;font-size:13.5px;cursor:pointer;transition:all .18s;">V&eacute;rifier si cette date est libre</button>
        <div id="bk-check-msg" style="display:none;margin-top:12px;padding:14px 16px;border-radius:11px;font-size:13.5px;line-height:1.6;"></div>
      </div>

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

      <div id="bk-schedule" style="background:var(--sky);border-radius:12px;padding:16px 18px;margin-bottom:22px;"></div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div>
          <label style="display:block;font-size:11px;font-weight:600;color:var(--muted);margin-bottom:7px;">Pr&eacute;nom &amp; Nom *</label>
          <input type="text" id="bk-name" placeholder="Jean Dupont" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
        </div>
        <div>
          <label style="display:block;font-size:11px;font-weight:600;color:var(--muted);margin-bottom:7px;">Email *</label>
          <input type="email" id="bk-email" placeholder="votre@email.com" style="width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;color:var(--text);box-sizing:border-box;" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='var(--border)'">
        </div>
      </div>

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

      <label id="bk-cond-label" style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;margin-bottom:16px;padding:12px 14px;border:1.5px solid var(--border);border-radius:10px;">
        <input type="checkbox" id="bk-conditions" onchange="togglePayBtn()" style="width:17px;height:17px;accent-color:var(--teal);cursor:pointer;flex-shrink:0;margin-top:2px;">
        <span style="font-size:13px;color:var(--text);line-height:1.5;">J'ai lu et j'accepte les conditions de r&eacute;servation ci-dessus.</span>
      </label>

      <button id="bk-pay-btn" onclick="handlePayment()" disabled style="width:100%;padding:18px 24px;background:#e5e7eb;color:#9ca3af;border:none;border-radius:14px;font-family:'Sora',sans-serif;font-weight:700;font-size:15px;cursor:not-allowed;letter-spacing:0.01em;transition:all 0.18s;">
        Payer CHF 385 aujourd&rsquo;hui &rarr;
      </button>
      <p id="bk-balance-note" style="font-size:11px;color:var(--muted);text-align:center;margin:12px 0 0;line-height:1.6;">
        Total CHF 770 &middot; Paiement s&eacute;curis&eacute; Stripe
      </p>

    </div>
  </div>
</div>

  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { locale, setLocale, t } = useI18n()

useHead({
  title: () => t('formules.seoTitle'),
  meta: [
    { name: 'description', content: () => t('formules.seoDescription') }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" }
  ]
})

onMounted(() => {
  const src = `
    window.currentPrice = 770;
    window.currentTier  = 'standard';
    window.setTier = function(tier) {
      var prices = { standard: 770, classic: 880, super: 990 };
      window.currentTier  = tier;
      window.currentPrice = prices[tier] || 770;
    };
    (function () {
      var BASE  = 770;
      var modal = document.getElementById('booking-modal');
      function fmtChf(n) {
        n = Math.round(n * 100) / 100;
        return (n % 1 === 0) ? String(n) : n.toFixed(2);
      }
      function roundTo05(n) { return Math.round(n * 20) / 20; }
      var HOLIDAYS = ['01-01', '01-02', '08-01', '12-25', '12-26'];
      function isBizDay(d) {
        var day = d.getDay();
        if (day === 0 || day === 6) return false;
        var mmdd = ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
        return HOLIDAYS.indexOf(mmdd) === -1;
      }
      function prevBizDay(d) {
        var x = new Date(d);
        while (!isBizDay(x)) x.setDate(x.getDate() - 1);
        return x;
      }
      function fmtDate(d) {
        var mois = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
        return d.getDate() + ' ' + mois[d.getMonth()] + ' ' + d.getFullYear();
      }
      function renderSchedule() {
        var half1 = Math.round(BASE / 2 * 20) / 20;
        var half2 = Math.round((BASE - half1) * 100) / 100;
        var e1 = document.getElementById('bk-half-1');
        var e2 = document.getElementById('bk-half-2');
        if (e1) e1.textContent = 'CHF ' + fmtChf(half1);
        if (e2) e2.textContent = 'CHF ' + fmtChf(half2);
        var box = document.getElementById('bk-schedule');
        if (box) {
          var dateStr = document.getElementById('bk-date').value;
          var when = dateStr ? fmtDate(new Date(dateStr)) : 'le jour de l\\u2019événement';
          box.innerHTML =
            '<p style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);margin:0 0 10px;">Votre échéancier</p>'
          + '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(0,30,43,0.06);">'
          + '<span style="font-size:12.5px;color:var(--text);font-weight:600;">Aujourd’hui · bloque la date</span>'
          + '<span style="font-family:\\'Sora\\',sans-serif;font-size:13px;font-weight:700;color:var(--teal);">CHF ' + fmtChf(half1) + '</span></div>'
          + '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;">'
          + '<span style="font-size:12.5px;color:var(--muted);">' + when + '</span>'
          + '<span style="font-family:\\'Sora\\',sans-serif;font-size:13px;font-weight:700;color:var(--text);">CHF ' + fmtChf(half2) + '</span></div>'
          + '<div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid rgba(0,30,43,0.1);">'
          + '<span style="font-size:12px;font-weight:600;color:var(--text);">Total</span>'
          + '<span style="font-family:\\'Sora\\',sans-serif;font-size:13px;font-weight:800;color:var(--text);">CHF ' + fmtChf(BASE) + '</span></div>';
        }
        var btn = document.getElementById('bk-pay-btn');
        if (btn) btn.innerHTML = 'Payer CHF ' + fmtChf(half1) + ' aujourd’hui →';
        var note = document.getElementById('bk-balance-note');
        if (note) note.textContent = 'Total CHF ' + fmtChf(BASE) + ' · Paiement sécurisé Stripe';
      }
      window.setSplit = function () {};
      window.updateSchedule = function () { renderSchedule(); };
      window.openBooking = function (pkg) {
        BASE = window.currentPrice || 770;
        document.getElementById('modal-pkg-label').textContent = pkg.toUpperCase();
        var tier = document.getElementById('bk-tier-label');
        if (tier) tier.textContent = ({standard:'Prestation 3h',classic:'Prestation 4h',super:'Prestation 5h'}[window.currentTier] || 'Prestation') + '';
        document.getElementById('bk-total').textContent = 'CHF ' + fmtChf(BASE);
        var dateInput = document.getElementById('bk-date');
        if (dateInput) {
          var t = new Date();
          dateInput.min = t.toISOString().split('T')[0];
          dateInput.value = '';
        }
        var cb = document.getElementById('bk-conditions');
        if (cb) cb.checked = false;
        renderSchedule();
        togglePayBtn();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      };
      window.closeBooking = function () {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      };
      window.togglePayBtn = function () {
        var btn = document.getElementById('bk-pay-btn');
        var ok  = document.getElementById('bk-conditions').checked;
        btn.disabled = !ok;
        btn.style.background = ok ? 'var(--teal-dark)' : '#e5e7eb';
        btn.style.color      = ok ? '#fff'             : '#9ca3af';
        btn.style.cursor     = ok ? 'pointer'          : 'not-allowed';
        if (ok) {
          btn.onmouseover = function () { this.style.background = 'var(--teal-mid)'; };
          btn.onmouseout  = function () { this.style.background = 'var(--teal-dark)'; };
        } else {
          btn.onmouseover = null; btn.onmouseout = null;
        }
      };
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeBooking();
      });
      window.dateChecked = false;

      window.checkDate = async function () {
        var input = document.getElementById('bk-date');
        var box   = document.getElementById('bk-check-msg');
        var btn   = document.getElementById('bk-check-btn');
        var date  = input ? input.value : '';
        if (!date) {
          box.style.display = 'block';
          box.style.background = '#FFF4D6';
          box.style.color = '#7A5B00';
          box.innerHTML = 'Choisissez d\\'abord une date.';
          return;
        }
        btn.disabled = true;
        btn.textContent = 'V\\u00e9rification\\u2026';
        try {
          var res  = await fetch('/api/check-date', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: date })
          });
          var data = await res.json();
          box.style.display = 'block';
          if (data.available) {
            window.dateChecked = true;
            box.style.background = '#E6F7F7';
            box.style.color = '#0B6E6E';
            box.innerHTML = '<strong>Cette date est libre.</strong><br>Sous r\\u00e9serve d\\'une r\\u00e9servation re\\u00e7ue entre-temps aujourd\\'hui m\\u00eame. Le paiement de l\\'acompte bloque d\\u00e9finitivement la date.';
          } else if (data.reason === 'past') {
            window.dateChecked = false;
            box.style.background = '#FFF4D6';
            box.style.color = '#7A5B00';
            box.innerHTML = 'Cette date est d\\u00e9j\\u00e0 pass\\u00e9e. Choisissez une date \\u00e0 venir.';
          } else {
            window.dateChecked = false;
            box.style.background = '#FDECEC';
            box.style.color = '#9B2C2C';
            box.innerHTML = '<strong>Cette date est d\\u00e9j\\u00e0 r\\u00e9serv\\u00e9e.</strong><br>Mais selon l\\'horaire, c\\'est peut-\\u00eatre encore possible\\u00a0: une soir\\u00e9e reste souvent libre apr\\u00e8s un \\u00e9v\\u00e9nement de journ\\u00e9e. <strong>Appelez-moi, on regarde ensemble.</strong><br><a href="tel:+41791237833" style="color:#9B2C2C;font-weight:800;font-size:15px;">079 123 78 33</a> &middot; <a href="mailto:pascalcoffez@gmail.com" style="color:#9B2C2C;font-weight:700;">pascalcoffez@gmail.com</a>';
          }
        } catch (e) {
          box.style.display = 'block';
          box.style.background = '#FFF4D6';
          box.style.color = '#7A5B00';
          box.innerHTML = 'V\\u00e9rification indisponible. \\u00c9crivez-nous\\u00a0: pascalcoffez@gmail.com';
        }
        btn.disabled = false;
        btn.textContent = 'V\\u00e9rifier si cette date est libre';
      };

      window.handlePayment = async function () {
        if (!document.getElementById('bk-conditions').checked) return;
        var btn   = document.getElementById('bk-pay-btn');
        var date  = (document.getElementById('bk-date')  || {}).value;
        var time  = (document.getElementById('bk-time')  || {}).value;
        var name  = (document.getElementById('bk-name')  || {}).value;
        var email = (document.getElementById('bk-email') || {}).value;
        if (!date || !time || !name || !email) {
          alert('Merci de remplir la date, l\\'heure, votre nom et votre e-mail.');
          return;
        }
        if (!window.dateChecked) {
          alert('Merci de v\\u00e9rifier d\\'abord que votre date est libre.');
          return;
        }
        var original = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Redirection vers le paiement…';
        try {
          var res = await fetch('/api/stripe-checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tier: window.currentTier, date: date, time: time, name: name, email: email })
          });
          var data = await res.json();
          if (data && data.url) { window.location.href = data.url; return; }
          throw new Error((data && (data.statusMessage || data.message)) || 'Erreur inconnue');
        } catch (e) {
          alert('Le paiement en ligne est momentanément indisponible.\\n\\nÉcrivez-nous : pascalcoffez@gmail.com');
          btn.disabled = false;
          btn.textContent = original;
        }
      };
    })();
  `
  try { const run = new Function(src); run() } catch (e) { console.error('[formules] script error', e) }
})
</script>

<style>
.formules-root {
    --sky:        #E0F5FA;
    --white:      #FFFFFF;
    --gold:       #C9A24B;
    --gold-light: #F5EDD5;
    --teal:       #1ABFBF;
    --teal-mid:   #138A8A;
    --teal-dark:  #001e2b;
    --text:       #0F1923;
    --muted:      #6B7280; --grey-cool:#F4F6F8;
    --border:     #E5E7EB;
    --shadow:     0 2px 16px rgba(0,0,0,0.06);
    --shadow-md:  0 8px 32px rgba(0,0,0,0.10);
    --t-display: clamp(48px, 7vw, 84px);
    --t-h2:      clamp(34px, 4.4vw, 54px);
    --t-h3:      clamp(24px, 2.6vw, 32px);
    --t-body:    17px;
    --t-meta:    13px;
    --t-label:   10px;
    --s1: 16px; --s2: 32px; --s3: 64px; --s4: 112px;

    background: var(--white);
    color: var(--text);
    font-family: 'Inter', system-ui, sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
}
.formules-root h1, .formules-root h2, .formules-root h3, .formules-root h4, .formules-root .sora { font-family: 'Sora', sans-serif; }
.formules-root .wrap { max-width: 1080px; margin: 0 auto; padding: 0 48px; }
@media (max-width: 600px) { .formules-root .wrap { padding: 0 20px; } }

.formules-root nav { position: sticky; top: 0; z-index: 400; background: rgba(255,255,255,0.92); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 14px 40px; gap: 24px; }
.formules-root .nav-logo { font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); text-decoration: none; letter-spacing: -0.02em; flex-shrink: 0; }
.formules-root .nav-logo span { color: var(--teal); }
.formules-root .nav-links { display: flex; gap: 28px; list-style: none; }
.formules-root .nav-links a { font-size: 13px; font-weight: 400; color: var(--muted); text-decoration: none; transition: color 0.18s; }
.formules-root .nav-links a:hover { color: var(--teal); }
.formules-root .nav-right { display: flex; align-items: center; gap: 18px; flex-shrink: 0; }
.formules-root .nav-lang { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: var(--muted); letter-spacing: 0.06em; display: flex; align-items: center; gap: 5px; }
.formules-root .nav-lang b { color: var(--teal); }
.formules-root .nav-lang button { font: inherit; background: none; border: none; padding: 2px 1px; cursor: pointer; color: var(--muted); transition: color .15s; }
.formules-root .nav-lang button.active { color: var(--teal); }
.formules-root .nav-lang button:hover { color: var(--teal-dark); }
.formules-root .nav-lang span { color: var(--border); }
.formules-root .nav-cta { display: inline-block; padding: 11px 24px; background: var(--teal); color: #fff; border-radius: 100px; font-family: 'Sora', sans-serif; font-size: 13.5px; font-weight: 700; text-decoration: none; transition: opacity .15s; }
.formules-root .nav-cta:hover { opacity: .88; }
@media (max-width: 860px) { .formules-root nav { padding: 12px 18px; } .formules-root .nav-lang { display: none; } }
@media (max-width: 700px) { .formules-root .nav-links { display:none; } }

.formules-root .sec { padding: var(--s4) 0; }
.formules-root .lbl { display:inline-flex; align-items:center; gap:10px; font-family:'Sora',sans-serif; font-size:var(--t-label); font-weight:700; letter-spacing:0.44em; text-transform:uppercase; color:var(--muted); margin:0 0 var(--s1); }
.formules-root .lbl::before { content:''; width:8px; height:8px; border-radius:50%; background:var(--teal); flex-shrink:0; }
.formules-root .d { font-family:'Sora',sans-serif; font-size:var(--t-display); font-weight:800; letter-spacing:-0.05em; line-height:0.94; color:var(--text); margin:0 0 var(--s2); }
.formules-root .h2 { font-family:'Sora',sans-serif; font-size:var(--t-h2); font-weight:800; letter-spacing:-0.04em; line-height:1.0; color:var(--text); margin:0 0 var(--s1); }
.formules-root .h3 { font-family:'Sora',sans-serif; font-size:var(--t-h3); font-weight:800; letter-spacing:-0.03em; line-height:1.1; color:var(--text); margin:0 0 var(--s1); }

.formules-root .pricing-grid { display: grid; }
@media (max-width: 860px) { .formules-root .pricing-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
.formules-root .pkg-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:40px 32px 32px;display:flex;flex-direction:column;box-shadow:var(--shadow);position:relative;transition:transform .18s ease,box-shadow .18s ease;}
.formules-root .pkg-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);}
.formules-root .pkg-card--featured{border:2px solid var(--teal-dark);box-shadow:var(--shadow-md);}
.formules-root .pkg-badge{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:var(--gold);color:var(--teal-dark);border-radius:100px;padding:7px 20px;font-family:'Sora',sans-serif;font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;box-shadow:0 4px 14px rgba(201,162,75,.35);}
.formules-root .pkg-tier{display:inline-block;align-self:flex-start;background:var(--teal-dark);color:#fff;border-radius:100px;padding:9px 20px;margin-bottom:18px;font-family:'Sora',sans-serif;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;}
.formules-root .pkg-price{font-family:'Sora',sans-serif;font-size:38px;font-weight:800;color:var(--text);letter-spacing:-.02em;line-height:1;}
.formules-root .pkg-split{display:inline-block;background:var(--gold-light);border-radius:10px;padding:8px 14px;margin-top:12px;font-family:'Sora',sans-serif;font-size:13px;color:var(--muted);font-weight:600;}
.formules-root .pkg-split b{font-size:16px;color:var(--text);font-weight:800;}
.formules-root .pkg-duration{margin:16px 0 0;font-size:14px;}
.formules-root .pkg-duration strong{font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:var(--text);}
.formules-root .pkg-duration span{color:var(--muted);}
.formules-root .pkg-divider{height:1px;background:var(--border);margin:22px 0;}
.formules-root .pkg-list-label{font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin:0 0 14px;}
.formules-root .pkg-list{list-style:none;padding:0;margin:0 0 28px;display:flex;flex-direction:column;gap:13px;flex:1;}
.formules-root .pkg-list li{display:flex;gap:12px;align-items:flex-start;font-size:14.5px;font-weight:600;color:var(--text);line-height:1.5;}
.formules-root .pkg-check{flex-shrink:0;width:20px;height:20px;border-radius:50%;background:var(--sky);color:var(--teal);display:flex;align-items:center;justify-content:center;margin-top:2px;}
.formules-root .pkg-cta{display:block;text-align:center;padding:16px 20px;background:var(--teal-dark);color:#fff;border-radius:100px;font-family:'Sora',sans-serif;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:.02em;transition:opacity .15s;}
.formules-root .pkg-cta:hover{opacity:.86;}
.formules-root .pkg-note{text-align:center;font-size:11.5px;color:var(--muted);margin:14px 0 0;line-height:1.6;}

.formules-root .occ{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:20px;overflow:hidden;}
.formules-root .occ > div{background:#fff;padding:32px 30px;}
.formules-root .occ h3{font-family:'Sora',sans-serif;font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--teal);margin:0 0 14px;}
.formules-root .occ ul{list-style:none;margin:0;padding:0;}
.formules-root .occ li{font-size:15px;line-height:1.5;color:var(--text);padding:8px 0;border-top:1px solid var(--border);}
.formules-root .occ li:first-child{border-top:none;}
@media(max-width:820px){.formules-root .occ{grid-template-columns:1fr;}}

.formules-root footer { background: var(--teal-dark); color: rgba(255,255,255,0.7); padding: 76px 24px 32px; }
.formules-root footer .foot-wrap{max-width:1080px;margin:0 auto;padding:0 40px 34px;display:grid;grid-template-columns:repeat(4,1fr);gap:34px;text-align:left;}
.formules-root footer .foot-col{display:flex;flex-direction:column;gap:9px;}
.formules-root footer .foot-h{font-family:'Sora',sans-serif;font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:3px;}
.formules-root footer .foot-col a{color:rgba(255,255,255,0.86);font-size:13.5px;text-decoration:none;line-height:1.5;}
.formules-root footer .foot-col a:hover{color:#1ABFBF;}
.formules-root footer .foot-legal{color:rgba(255,255,255,0.5);font-size:12.5px;margin:0;padding:22px 40px 0;border-top:1px solid rgba(255,255,255,0.12);max-width:1080px;margin:0 auto;text-align:center;}
@media(max-width:860px){.formules-root footer .foot-wrap{grid-template-columns:1fr 1fr;gap:26px;padding:0 20px 26px;}}
@media(max-width:520px){.formules-root footer .foot-wrap{grid-template-columns:1fr;}}

.formules-root section[id] { scroll-margin-top: 110px; }
</style>
