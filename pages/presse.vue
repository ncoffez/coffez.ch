<!--
  ============================================================
  PRESSE — revue de presse coffez.ch   ·   Route : /presse
  Coupures reproduites avec l'autorisation de la redaction
  des Schaffhauser Nachrichten.
  ============================================================
-->
<template>
  <div class="presse-root">

<nav>
  <a href="/riviera" class="nav-logo">Coffez<span>.ch</span></a>
  <ul class="nav-links">
    <li><a href="/riviera#preuve">{{ $t('siteNav.references') }}</a></li>
    <li><a href="/formules">{{ $t('siteNav.formules') }}</a></li>
    <li><a href="/sur-mesure">{{ $t('siteNav.surMesure') }}</a></li>
    <li><a href="/presse">{{ $t('siteNav.presse') }}</a></li>
    <li><a href="/riviera#faq">{{ $t('siteNav.faq') }}</a></li>
  </ul>
  <div class="nav-right">
    <div class="nav-lang">
      <button type="button" :class="{ active: locale === 'fr' }" @click="setLocale('fr')">FR</button><span>|</span><button type="button" :class="{ active: locale === 'de' }" @click="setLocale('de')">DE</button><span>|</span><button type="button" :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
    </div>
    <a href="/formules#offre" class="nav-cta">{{ $t('siteNav.reserver') }}</a>
  </div>
</nav>

<section class="sec" style="padding-bottom:0;">
  <div class="wrap">
    <span class="lbl">{{ $t('presse.eyebrow') }}</span>
    <h1 class="d">{{ $t('presse.title') }}</h1>
    <p class="txt">{{ $t('presse.intro') }}</p>
  </div>
</section>

<!-- ══ 27 AOUT 2026 ══════════════════════════════ -->
<section class="sec" id="shn-2026">
  <div class="wrap">
    <article class="art">

      <div class="art-src">
        <span class="art-journal">Schaffhauser Nachrichten</span>
        <span class="art-date">{{ $t('presse.shnDate') }}</span>
      </div>

      <h2 class="art-title">Sein Lachen ist sein Wunderstift</h2>
      <p class="art-lead">Er besitzt einen schnellen Stift, drei Minuten, dann hat Pascal Coffez ein Portr&auml;t gezeichnet. Vorausgesetzt, sein Lachen, sein Temperament, seine Musik und seine Lebensfreude wirken ansteckend.</p>
      <p class="art-by">Text&nbsp;: Andreas Schiendorfer &middot; Bilder&nbsp;: Jeannette Vogel</p>

      <button class="clip" type="button" @click="zoom({ src:'/riviera/presse/shn-2026-08-27-doublepage.jpg', cap:'Schaffhauser Nachrichten, ' + $t('presse.shnDate') + ' \u00b7 ' + $t('presse.page') + ' 18\u201319' })">
        <img src="/riviera/presse/shn-2026-08-27-article.jpg" alt="Double page des Schaffhauser Nachrichten du 27 aout 2026 : Sein Lachen ist sein Wunderstift" loading="lazy">
        <span class="clip-hint">{{ $t('presse.zoomHint') }}</span>
      </button>

      <div class="thumbs">
        <button type="button" @click="zoom({ src:'/riviera/presse/shn-2026-08-27-une.jpg', cap:'Schaffhauser Nachrichten, ' + $t('presse.shnDate') + ' \u00b7 ' + $t('presse.une') })">
          <img src="/riviera/presse/shn-2026-08-27-une.jpg" alt="Une du 27 aout 2026" loading="lazy">
          <span class="tl">{{ $t('presse.une') }}</span>
        </button>
        <button type="button" @click="zoom({ src:'/riviera/presse/shn-2026-08-27-manchette.jpg', cap:'\u00abPortr\u00e4t in drei Minuten\u00bb \u00b7 ' + $t('presse.shnDate') })">
          <img src="/riviera/presse/shn-2026-08-27-manchette.jpg" alt="Manchette du 27 aout 2026 avec Pascal Coffez" loading="lazy">
          <span class="tl">{{ $t('presse.manchette') }}</span>
        </button>
        <button type="button" @click="zoom({ src:'/riviera/presse/shn-2026-08-27-doublepage.jpg', cap:'Schaffhauser Nachrichten, ' + $t('presse.shnDate') + ' \u00b7 ' + $t('presse.page') + ' 18\u201319' })">
          <img src="/riviera/presse/shn-2026-08-27-doublepage.jpg" alt="Pages 18 et 19 du 27 aout 2026" loading="lazy">
          <span class="tl">{{ $t('presse.page') }} 18&ndash;19</span>
        </button>
      </div>

      <button class="read-btn" :class="{ 'is-open': openAug }" type="button" @click="openAug = !openAug">
        <span class="chev">&#9660;</span>{{ openAug ? $t('presse.hideArticle') : $t('presse.readArticle') }}
      </button>

      <div class="read-body" v-show="openAug">
<div v-if="locale === 'de'">
<p>Pascal Coffez, seit 2013 mit dem Zeichenstift f&uuml;r die &laquo;Schaffhauser Nachrichten&raquo; t&auml;tig, redet schnell, mit charmantem franz&ouml;sischem Akzent. Im ersten Moment wirkt alles etwas wirr. Aber sehr bald merkt man, es geht ihm nicht um seine Biografie, es geht um seine Philosophie, die er unbedingt vermitteln m&ouml;chte, sich best&auml;ndig wiederholend. Vielleicht, weil sie so v&ouml;llig anders ist, als man sie von einem politischen Karikaturisten erwarten w&uuml;rde. Dieser muss ja Woche f&uuml;r Woche den Finger auf wunde Punkte der Gesellschaft legen. &laquo;Das entspricht aber nicht meinem Wesen als K&uuml;nstler und als Mensch. Eigentlich m&ouml;chte ich niemandem wehtun&raquo;, erkl&auml;rt Pascal Coffez. Jemanden nur aufgrund seines Aussehens, seiner Hautfarbe oder seiner Religion mit einer Karikatur aufs Korn zu nehmen, ist nicht sein Stil. Seine Kritik setzt er in aller Regel sehr behutsam an, mit einem eigenen, sympathischen Schalk, wie es fr&uuml;her, auf eine ganz andere Art, Fritz B&uuml;nzli mit seinem M&auml;uschen getan hat.</p>

      <h3>Ein vielseitiger Autodidakt</h3>

      <p>Eigentlich ist man versucht, ihn einfach Pascal zu nennen, doch Coffez ist nicht nur sein Familien-, sondern auch sein K&uuml;nstlername. Coffez also lacht regelm&auml;ssig, lacht laut, lacht eindringlich, lacht ansteckend. Vor allem, wenn man gleichzeitig seinem Blick begegnet, und das verlangt er, wenn man von ihm gezeichnet werden will.</p>

      <blockquote>&laquo;Man muss mit mir kommunizieren, dann geht es sehr schnell, schwupps, ich fange einen Schmetterling und bringe ihn auf das Papier.&raquo;</blockquote>

      <p>&laquo;Aber ohne dieses Miteinander versagt mein Stift, ein Portr&auml;t nach einem Foto, damit tue ich mich unheimlich schwer.&raquo;</p>

      <p>Geboren ist Coffez in Nordfrankreich, in einem kleinen Kaff namens Sainghin-en-Weppes in der N&auml;he von Lille. &laquo;Oft bin ich dort vor der &Eacute;cole des beaux-arts gesessen, aber ich habe mich nicht getraut, die eindrucksvollen Marmortreppen hinaufzusteigen&raquo;, blickt der SN-Karikaturist zur&uuml;ck. Er hat zwar von Kind auf gemalt und gezeichnet, aber nie Kunstunterricht genossen. &laquo;Das ist insofern speziell, da ich sp&auml;ter im Leben an der Kunstschule Winterthur einige Jahre unterrichtet habe.&raquo;</p>

      <p>Als Autodidakt hat er f&uuml;r franz&ouml;sische Zeitungen gearbeitet sowie als Cartoonist f&uuml;r Firmenkunden und auf belebten &ouml;ffentlichen Pl&auml;tzen. 2004 ist er in die Schweiz nach Uhwiesen gekommen, hat am Rheinfall und auf Schloss Laufen gezeichnet und seit 2007 auch f&uuml;r die &laquo;Andelfinger Zeitung&raquo;. Bis 2023 zauberte er f&uuml;r sie den &laquo;Coffez der Woche&raquo; aufs Papier. &laquo;Das Weinland hat mich inspiriert, ich habe gezeichnet, was ich dort erlebt habe, beim Hilari beispielsweise.&raquo; Daneben habe er weiterhin bei Firmenanl&auml;ssen gezeichnet, aber auch beim Schloss Laufen, &laquo;wo man mich vielleicht schon einmal gesehen hat&raquo;.</p>

      <h3>Es geht um Emotionen</h3>

      <p>Und wenn nicht gesehen, dann wenigstens geh&ouml;rt. Denn sein Portr&auml;tieren ist ein telegenes beziehungsweise ein bei Instagram beliebtes Spektakel, immer l&auml;uft Musik. Coffez h&uuml;pft und t&auml;nzelt um die darzustellende Person herum, bis diese sich ganz vergisst und ebenfalls tanzt, lacht, singt und dabei ihr Innerstes preisgibt. Das wiederum erhascht Coffez im Nu, eben wie den Schmetterling, und bringt es auf das Papier. Er strebt also nicht ein fotografisch genaues Portr&auml;t an, sondern eines, das zeigt, was er in diesem Moment des Miteinanders gesehen und gef&uuml;hlt hat. Und als i-T&uuml;pfelchen setzt er den portr&auml;tierten Damen ein Kr&ouml;nchen aufs Haupt. Emotionen pur.</p>

      <p>Besucht man seine zweisprachige Webseite, dann wird beim ersten Klick klar, worum es geht: Joy beziehungsweise Freude. Angeboten wird nichts weniger als eine Live-Portr&auml;t-Show. &laquo;Die Webseite und den Instagram-Account hat mein Sohn Nicolas gemacht, mit dem ich hervorragend zusammenarbeite. Wegen ihm bin ich vor einiger Zeit nach Bern gezogen. Aber dem Weinland bleibe ich f&uuml;r immer verbunden, zumal mein anderer Sohn Manuel noch in Schaffhausen wohnt.&raquo;</p>

      <h3>Der Maler Don S.</h3>

      <p>Weil das Portr&auml;tieren im Freien in Bern kaum m&ouml;glich ist &ndash; man darf wegen des Betteleiverbots nie l&auml;nger an einem Standort verweilen &ndash;, ist er vor Kurzem weiter nach Montreux gezogen. Dort hat er mit C&eacute;cilia Harris seine grosse Liebe gefunden. Sie habe in ihm eine neue Offenheit in Bezug auf ein weiteres k&uuml;nstlerisches Standbein bewirkt. Im Jahr 2020 hat er in seinem Atelier im Schloss Laufen pl&ouml;tzlich &ndash; wie Sternschnuppen &ndash; fertige Bilder vor sich gesehen, eine ganze Serie, erz&auml;hlt er.</p>

      <p>&laquo;Ich habe gesp&uuml;rt, dass ich eigentlich ein Maler bin. Doch mit &Ouml;l zu malen, dauert mir zu lange, bei mir muss auch dies schnell, schnell gehen.&raquo; Er habe dann seine Bildvisionen zun&auml;chst kleinformatig festgehalten. Und dann in einem komplexen fotografischen Belichtungsverfahren umgesetzt. Das so entwickelte Bild kommt sp&auml;ter unter Plexiglas auf einen Aluminiumtr&auml;ger. Jedes Bild ist ein Unikat. &laquo;Die Sch&ouml;pfung ist handgemacht. Die Offenbarung durch das Licht und die Montage erfolgen im Atelier&raquo;, erkl&auml;rt Don S. alias Pascal Coffez. &laquo;Ich habe die Bilder jahrelang niemandem gezeigt ausser zwei englischen Kuratorinnen. Nun aber bin ich bereit, auch diese andere Seite von mir mit der &Ouml;ffentlichkeit zu teilen.&raquo; Zu sehen sind die Bilder bereits auf einer Webseite, m&ouml;glich werden k&ouml;nnten nun auch Ausstellungen.</p>

      <p>Und Coffez weiss auch, wie eine zuk&uuml;nftige Vernissage ablaufen w&uuml;rde: &laquo;Ein Ausstellungsraum w&auml;re ganz leer, und ich w&uuml;rde ihn f&uuml;llen mit 3-Minuten-Portr&auml;ts der Vernissageg&auml;ste &hellip;&raquo;</p>
      </div>

      <div v-else-if="locale === 'fr'">
      <p>Pascal Coffez, qui tient le crayon des &laquo;&nbsp;Schaffhauser Nachrichten&nbsp;&raquo; depuis 2013, parle vite, avec un charmant accent fran&ccedil;ais. Au premier abord, tout para&icirc;t un peu d&eacute;sordonn&eacute;. Mais on comprend tr&egrave;s vite que ce n'est pas sa biographie qui l'int&eacute;resse&nbsp;: c'est sa philosophie, qu'il tient absolument &agrave; transmettre et qu'il r&eacute;p&egrave;te sans se lasser. Peut-&ecirc;tre parce qu'elle est si &eacute;loign&eacute;e de ce qu'on attendrait d'un caricaturiste politique. Celui-ci doit, semaine apr&egrave;s semaine, mettre le doigt sur les plaies de la soci&eacute;t&eacute;. &laquo;&nbsp;Cela ne correspond ni &agrave; ma nature d'artiste ni &agrave; ma nature d'homme. Au fond, je ne veux faire de mal &agrave; personne&nbsp;&raquo;, explique Pascal Coffez. Prendre quelqu'un pour cible &agrave; cause de son apparence, de sa couleur de peau ou de sa religion, ce n'est pas son style. Sa critique se pose en g&eacute;n&eacute;ral avec beaucoup de d&eacute;licatesse, avec une malice bien &agrave; lui, sympathique, comme le faisait autrefois, d'une tout autre mani&egrave;re, Fritz B&uuml;nzli avec sa petite souris.</p>

      <h3>Un autodidacte aux multiples talents</h3>

      <p>On est tent&eacute; de l'appeler simplement Pascal, mais Coffez n'est pas seulement son nom de famille&nbsp;: c'est aussi son nom d'artiste. Coffez, donc, rit souvent, rit fort, rit intens&eacute;ment, rit de fa&ccedil;on contagieuse. Surtout quand on croise son regard en m&ecirc;me temps &ndash; et c'est ce qu'il exige de qui veut se faire dessiner.</p>

      <blockquote>&laquo;&nbsp;Il faut communiquer avec moi, alors cela va tr&egrave;s vite, hop, j'attrape un papillon et je le pose sur le papier.&nbsp;&raquo;</blockquote>

      <p>&laquo;&nbsp;Mais sans cet &eacute;change, mon crayon ne suit plus. Un portrait d'apr&egrave;s photo, j'ai un mal fou &agrave; le faire.&nbsp;&raquo;</p>

      <p>Coffez est n&eacute; dans le nord de la France, dans un petit patelin nomm&eacute; Sainghin-en-Weppes, pr&egrave;s de Lille. &laquo;&nbsp;Je me suis souvent assis devant l'&Eacute;cole des beaux-arts, mais je n'ai jamais os&eacute; monter ces impressionnants escaliers de marbre&nbsp;&raquo;, se souvient le caricaturiste des SN. Il a peint et dessin&eacute; depuis l'enfance, mais n'a jamais suivi de cours d'art. &laquo;&nbsp;C'est d'autant plus particulier que j'ai enseign&eacute; plus tard plusieurs ann&eacute;es &agrave; l'&eacute;cole d'art de Winterthour.&nbsp;&raquo;</p>

      <p>En autodidacte, il a travaill&eacute; pour des journaux fran&ccedil;ais, comme dessinateur pour des entreprises et sur des places publiques anim&eacute;es. En 2004, il arrive en Suisse, &agrave; Uhwiesen&nbsp;; il dessine aux chutes du Rhin et au ch&acirc;teau de Laufen, et depuis 2007 aussi pour l'&laquo;&nbsp;Andelfinger Zeitung&nbsp;&raquo;. Jusqu'en 2023, il y a fait para&icirc;tre le &laquo;&nbsp;Coffez de la semaine&nbsp;&raquo;. &laquo;&nbsp;Le Weinland m'a inspir&eacute;&nbsp;: j'ai dessin&eacute; ce que j'y ai v&eacute;cu, le Hilari par exemple.&nbsp;&raquo; Parall&egrave;lement, il a continu&eacute; &agrave; dessiner lors d'&eacute;v&eacute;nements d'entreprise, mais aussi au ch&acirc;teau de Laufen, &laquo;&nbsp;o&ugrave; l'on m'a peut-&ecirc;tre d&eacute;j&agrave; crois&eacute;&nbsp;&raquo;.</p>

      <h3>Tout est affaire d'&eacute;motions</h3>

      <p>Et si on ne l'a pas vu, on l'a au moins entendu. Car sa mani&egrave;re de portraiturer est un spectacle t&eacute;l&eacute;g&eacute;nique, tr&egrave;s appr&eacute;ci&eacute; sur Instagram, et la musique tourne toujours. Coffez saute et danse autour de la personne qu'il repr&eacute;sente, jusqu'&agrave; ce qu'elle s'oublie compl&egrave;tement et se mette elle aussi &agrave; danser, &agrave; rire, &agrave; chanter, livrant ainsi ce qu'elle a de plus intime. C'est cela que Coffez saisit en un instant, comme le papillon, et qu'il porte sur le papier. Il ne cherche donc pas un portrait photographiquement exact, mais un portrait qui montre ce qu'il a vu et ressenti dans ce moment partag&eacute;. Et, cerise sur le g&acirc;teau, il pose une petite couronne sur la t&ecirc;te des dames qu'il dessine. De l'&eacute;motion pure.</p>

      <p>En visitant son site bilingue, on comprend d&egrave;s le premier clic de quoi il s'agit&nbsp;: joy, autrement dit la joie. Ce qui y est propos&eacute; n'est rien de moins qu'un spectacle de portrait en direct. &laquo;&nbsp;Le site et le compte Instagram, c'est mon fils Nicolas qui les a faits, et je travaille excellemment avec lui. C'est &agrave; cause de lui que j'ai d&eacute;m&eacute;nag&eacute; &agrave; Berne il y a quelque temps. Mais je reste attach&eacute; au Weinland pour toujours, d'autant que mon autre fils Manuel habite encore &agrave; Schaffhouse.&nbsp;&raquo;</p>

      <h3>Le peintre Don S.</h3>

      <p>Comme il est presque impossible de portraiturer en plein air &agrave; Berne &ndash; l'interdiction de la mendicit&eacute; emp&ecirc;che de rester longtemps au m&ecirc;me endroit &ndash;, il est r&eacute;cemment parti plus loin, &agrave; Montreux. C'est l&agrave; qu'il a trouv&eacute; son grand amour, C&eacute;cilia Harris. Elle a suscit&eacute; en lui une nouvelle ouverture vers un second pilier artistique. En 2020, dans son atelier du ch&acirc;teau de Laufen, il a soudain vu devant lui des tableaux achev&eacute;s, comme des &eacute;toiles filantes, toute une s&eacute;rie, raconte-t-il.</p>

      <p>&laquo;&nbsp;J'ai senti que j'&eacute;tais au fond un peintre. Mais peindre &agrave; l'huile me prend trop de temps&nbsp;: chez moi, cela aussi doit aller vite, vite.&nbsp;&raquo; Il a d'abord fix&eacute; ses visions en petit format. Puis il les a r&eacute;alis&eacute;es par un proc&eacute;d&eacute; photographique d'exposition complexe. L'image ainsi d&eacute;velopp&eacute;e est ensuite plac&eacute;e sous plexiglas sur un support en aluminium. Chaque image est une pi&egrave;ce unique. &laquo;&nbsp;La cr&eacute;ation est faite &agrave; la main. La r&eacute;v&eacute;lation par la lumi&egrave;re et le montage se font &agrave; l'atelier&nbsp;&raquo;, explique Don S., alias Pascal Coffez. &laquo;&nbsp;Pendant des ann&eacute;es, je n'ai montr&eacute; ces images &agrave; personne, sauf &agrave; deux conservatrices anglaises. Mais aujourd'hui, je suis pr&ecirc;t &agrave; partager avec le public cette autre facette de moi.&nbsp;&raquo; Les images sont d&eacute;j&agrave; visibles sur un site&nbsp;; des expositions pourraient d&eacute;sormais devenir possibles.</p>

      <p>Et Coffez sait aussi comment se d&eacute;roulerait un futur vernissage&nbsp;: &laquo;&nbsp;Une salle d'exposition serait enti&egrave;rement vide, et je la remplirais avec les portraits en trois minutes des invit&eacute;s du vernissage&hellip;&nbsp;&raquo;</p>
        <p class="trad-note">{{ $t('presse.tradNote') }}</p>
      </div>

      <div v-else>
      <p>Pascal Coffez, who has been drawing for the &laquo;Schaffhauser Nachrichten&raquo; since 2013, speaks fast, with a charming French accent. At first everything seems a little scattered. But you quickly realise that his biography is not what interests him: it is his philosophy, which he absolutely wants to pass on, and which he repeats tirelessly. Perhaps because it is so far from what one would expect of a political cartoonist. Week after week, that job means putting a finger on society's sore points. &laquo;But that matches neither my nature as an artist nor my nature as a man. Deep down, I don't want to hurt anyone,&raquo; Pascal Coffez explains. Taking aim at someone because of their looks, their skin colour or their religion is not his style. His criticism is usually applied with great care, with a mischief of his own, a likeable one, much as Fritz B&uuml;nzli once did, in a completely different way, with his little mouse.</p>

      <h3>A versatile self-taught artist</h3>

      <p>One is tempted to call him simply Pascal, but Coffez is not only his family name: it is also his artist's name. So Coffez laughs often, laughs loudly, laughs intensely, laughs infectiously. Above all when you meet his gaze at the same time &ndash; and that is what he requires of anyone who wants to be drawn by him.</p>

      <blockquote>&laquo;You have to communicate with me, then it goes very fast, whoosh, I catch a butterfly and put it on the paper.&raquo;</blockquote>

      <p>&laquo;But without that exchange my pencil fails me. A portrait from a photograph &ndash; I find that terribly hard.&raquo;</p>

      <p>Coffez was born in northern France, in a small place called Sainghin-en-Weppes, near Lille. &laquo;I often sat in front of the &Eacute;cole des beaux-arts, but I never dared climb those impressive marble stairs,&raquo; the SN cartoonist recalls. He painted and drew from childhood, but never took an art class. &laquo;Which is all the more curious, since later in life I taught for several years at the Winterthur art school.&raquo;</p>

      <p>Self-taught, he worked for French newspapers, as a cartoonist for corporate clients and in busy public squares. In 2004 he came to Switzerland, to Uhwiesen; he drew at the Rhine Falls and at Laufen Castle, and from 2007 also for the &laquo;Andelfinger Zeitung&raquo;. Until 2023 he conjured up the &laquo;Coffez of the week&raquo; for them. &laquo;The Weinland inspired me: I drew what I experienced there, the Hilari for instance.&raquo; Alongside that he kept drawing at corporate events, and at Laufen Castle too, &laquo;where people may well have seen me already&raquo;.</p>

      <h3>It is all about emotion</h3>

      <p>And if you haven't seen him, you have at least heard him. His way of portraying people is a telegenic spectacle &ndash; a favourite on Instagram &ndash; and the music is always playing. Coffez hops and dances around the person he is drawing until they forget themselves entirely and start dancing, laughing and singing too, giving away their innermost self. That is what Coffez catches in an instant, just like the butterfly, and brings onto the paper. So he is not after a photographically accurate portrait, but one that shows what he saw and felt in that shared moment. And as the finishing touch, he places a little crown on the heads of the women he draws. Pure emotion.</p>

      <p>Visit his bilingual website and the first click makes it clear what this is about: joy. What is on offer is nothing less than a live portrait show. &laquo;My son Nicolas made the website and the Instagram account, and I work outstandingly well with him. He is the reason I moved to Bern some time ago. But I remain attached to the Weinland forever, all the more so since my other son Manuel still lives in Schaffhausen.&raquo;</p>

      <h3>Don S. the painter</h3>

      <p>Because outdoor portrait work is barely possible in Bern &ndash; the ban on begging means you can never stay long in one spot &ndash; he recently moved further on, to Montreux. There he found his great love, C&eacute;cilia Harris. She brought about in him a new openness towards a second artistic pillar. In 2020, in his studio at Laufen Castle, he suddenly saw finished pictures in front of him &ndash; like shooting stars &ndash; a whole series, he says.</p>

      <p>&laquo;I felt that I am really a painter. But painting in oils takes me too long: with me, this too has to go fast, fast.&raquo; He first captured his visions in small format. Then he realised them through a complex photographic exposure process. The developed image is later mounted under Plexiglas on an aluminium support. Each picture is unique. &laquo;The creation is handmade. The revelation through light and the mounting happen in the studio,&raquo; explains Don S., alias Pascal Coffez. &laquo;For years I showed the pictures to no one except two English curators. But now I am ready to share this other side of me with the public.&raquo; The pictures can already be seen on a website; exhibitions could now become possible.</p>

      <p>And Coffez also knows how a future opening would go: &laquo;An exhibition room would be completely empty, and I would fill it with three-minute portraits of the guests at the opening&hellip;&raquo;</p>
        <p class="trad-note">{{ $t('presse.tradNote') }}</p>
      </div>
        <div class="art-note">
          <p><strong>Schaffhauser Nachrichten</strong>, {{ $t('presse.shnDate') }} &middot; {{ $t('presse.credit') }}</p>
        </div>
      </div>

    </article>
  </div>
</section>

<!-- ══ 5 SEPTEMBRE 2026 ══════════════════════════ -->
<section class="sec" id="shn-first-friday" style="border-top:1px solid var(--border);">
  <div class="wrap">
    <article class="art">

      <div class="art-src">
        <span class="art-journal">Schaffhauser Nachrichten</span>
        <span class="art-date">{{ $t('presse.ffDate') }}</span>
      </div>

      <h2 class="art-title">First Friday bei den SN</h2>
      <p class="art-lead">&laquo;Einmal ehrlich hinschauen&raquo; &mdash; Pascal Coffez hielt den G&auml;sten am First Friday den Spiegel vor.</p>
      <p class="art-by">Bilder&nbsp;: Roger Hofstetter</p>

      <button class="clip" type="button" @click="zoom({ src:'/riviera/presse/shn-2026-09-05-firstfriday.jpg', cap:'Schaffhauser Nachrichten, ' + $t('presse.ffDate') + ' \u00b7 \u00abHeute sind wir die News\u00bb' })">
        <img src="/riviera/presse/shn-2026-09-05-firstfriday.jpg" alt="Page Heute sind wir die News : les portraits realises au First Friday des Schaffhauser Nachrichten" loading="lazy">
        <span class="clip-hint">{{ $t('presse.zoomHint') }}</span>
      </button>

      <div class="thumbs">
        <button type="button" @click="zoom({ src:'/riviera/presse/shn-2026-09-05-une.jpg', cap:'Schaffhauser Nachrichten, ' + $t('presse.ffDate') + ' \u00b7 ' + $t('presse.une') })">
          <img src="/riviera/presse/shn-2026-09-05-une.jpg" alt="Une du 5 septembre 2026" loading="lazy">
          <span class="tl">{{ $t('presse.une') }}</span>
        </button>
        <button type="button" @click="zoom({ src:'/riviera/presse/shn-2026-09-05-manchette.jpg', cap:'\u00abEinmal ehrlich hinschauen\u00bb \u00b7 ' + $t('presse.ffDate') })">
          <img src="/riviera/presse/shn-2026-09-05-manchette.jpg" alt="Photo de Une : Pascal Coffez dessinant au First Friday" loading="lazy">
          <span class="tl">{{ $t('presse.photoUne') }}</span>
        </button>
      </div>

      <button class="read-btn" :class="{ 'is-open': openFF }" type="button" @click="openFF = !openFF">
        <span class="chev">&#9660;</span>{{ openFF ? $t('presse.hideArticle') : $t('presse.readArticle') }}
      </button>

      <div class="read-body" v-show="openFF">
        <p class="art-lead">Wer schon immer wissen wollte, wie er als Karikatur aussieht, bekam gestern Abend die Gelegenheit dazu: SN-Karikaturist Pascal Coffez zeichnete am First Friday Besucherinnen und Besucher der &laquo;Schaffhauser Nachrichten&raquo;. Vielen Dank f&uuml;r Ihren Besuch&nbsp;!</p>
        <blockquote>&laquo;Einmal ehrlich hinschauen&raquo;</blockquote>
        <p>Pascal Coffez hielt den G&auml;sten am First Friday den Spiegel vor &ndash; allerdings einen, der so manche Nase etwas gr&ouml;sser und manches L&auml;cheln etwas breiter erscheinen liess. Der SN-Karikaturist sorgte damit f&uuml;r viel Vergn&uuml;gen im Zunftsaal.</p>
        <div class="art-note">
          <p><strong>Schaffhauser Nachrichten</strong>, {{ $t('presse.ffDate') }} &middot; {{ $t('presse.ffCredit') }}</p>
        </div>
      </div>

    </article>
  </div>
</section>

<!-- ══ VISIONNEUSE ═══════════════════════════════ -->
<div class="vz" v-if="viewer" @click.self="viewer = null">
  <button class="vz-x" type="button" @click="viewer = null" :aria-label="$t('presse.close')">&times;</button>
  <div class="vz-scroll">
    <img :src="viewer.src" :class="{ zoomed: big }" @click="big = !big" alt="">
  </div>
  <p class="vz-cap">{{ viewer.cap }} &middot; {{ big ? $t('presse.zoomOut') : $t('presse.zoomIn') }}</p>
</div>

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
      <a href="/presse">{{ $t('siteFooter.presse') }}</a>
      <a href="/riviera#contact">{{ $t('siteFooter.meTrouver') }}</a>
      <a href="/riviera#faq">{{ $t('siteFooter.faq') }}</a>
      <a href="mailto:pascalcoffez@gmail.com">pascalcoffez@gmail.com</a>
    </div>
  </div>
  <p class="foot-legal">{{ $t('siteFooter.legal') }} &middot; <AdminFooterLink /></p>
</footer>

  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { locale, setLocale, t } = useI18n()

const openFF  = ref(false)
const openAug = ref(true)
const viewer  = ref(null)
const big     = ref(false)

function zoom (payload) {
  big.value = false
  viewer.value = payload
}

watch(viewer, (v) => {
  if (typeof document !== 'undefined') document.body.style.overflow = v ? 'hidden' : ''
})

function onKey (e) { if (e.key === 'Escape') viewer.value = null }
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})

useHead({
  title: () => t('presse.seoTitle'),
  meta: [
    { name: 'description', content: () => t('presse.seoDescription') }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" }
  ]
})
</script>

<style>
.presse-root {
  --teal:#1ABFBF; --teal-dark:#001e2b; --sky:#E0F5FA;
  --text:#0F1923; --muted:#6B7280; --border:#E5E7EB; --grey-cool:#F4F6F8;
  --t-display: clamp(48px,7vw,84px); --t-h2: clamp(34px,4.4vw,54px); --t-h3: clamp(24px,2.6vw,32px);
  --t-body:17px; --t-meta:13px; --t-label:10px;
  --s1:16px; --s2:32px; --s3:64px; --s4:112px;
  font-family:'Inter',sans-serif;color:var(--text);background:#fff;-webkit-font-smoothing:antialiased;
}
.presse-root .wrap{max-width:1080px;margin:0 auto;padding:0 40px;}
@media(max-width:700px){.presse-root .wrap{padding:0 20px;} .presse-root{--s3:44px;--s4:72px;}}

.presse-root nav{position:sticky;top:0;z-index:400;background:rgba(255,255,255,0.94);backdrop-filter:blur(12px);
    border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:14px 40px;}
.presse-root .nav-logo{font-family:'Sora',sans-serif;font-weight:800;font-size:19px;color:var(--text);text-decoration:none;letter-spacing:-0.02em;}
.presse-root .nav-logo span{color:var(--teal);}
.presse-root .nav-links{display:flex;gap:32px;list-style:none;margin:0;padding:0;}
.presse-root .nav-links a{font-size:14.5px;font-weight:500;color:var(--muted);text-decoration:none;}
.presse-root .nav-links a:hover{color:var(--text);}
.presse-root .nav-cta{background:var(--teal);color:#fff;border-radius:100px;padding:11px 24px;
         font-family:'Sora',sans-serif;font-weight:700;font-size:13.5px;text-decoration:none;}
.presse-root .nav-right{display:flex;align-items:center;gap:18px;flex-shrink:0;}
.presse-root .nav-lang{font-family:'Sora',sans-serif;font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.06em;display:flex;align-items:center;gap:5px;}
.presse-root .nav-lang button{font:inherit;background:none;border:none;padding:2px 1px;cursor:pointer;color:var(--muted);transition:color .15s;}
.presse-root .nav-lang button.active{color:var(--teal);}
.presse-root .nav-lang button:hover{color:var(--teal-dark);}
.presse-root .nav-lang span{color:var(--border);}
@media(max-width:860px){.presse-root .nav-links{display:none;} .presse-root nav{padding:12px 20px;} .presse-root .nav-lang{display:none;}}

.presse-root .sec{padding:var(--s4) 0;}
.presse-root .lbl{display:inline-flex;align-items:center;gap:10px;font-family:'Sora',sans-serif;font-size:var(--t-label);
     font-weight:700;letter-spacing:0.44em;text-transform:uppercase;color:var(--muted);margin:0 0 var(--s1);}
.presse-root .lbl::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--teal);flex-shrink:0;}
.presse-root .d{font-family:'Sora',sans-serif;font-size:var(--t-display);font-weight:800;letter-spacing:-0.05em;
   line-height:0.94;margin:0 0 var(--s2);}
.presse-root .h3{font-family:'Sora',sans-serif;font-size:var(--t-h3);font-weight:800;letter-spacing:-0.03em;
    line-height:1.1;margin:0 0 var(--s1);}
.presse-root .meta{font-family:'Sora',sans-serif;font-size:var(--t-meta);font-weight:700;letter-spacing:0.1em;
      text-transform:uppercase;line-height:2;margin:0;}
.presse-root .txt{font-size:var(--t-body);line-height:1.65;color:var(--muted);margin:0 0 var(--s1);max-width:62ch;}





.presse-root footer{background:var(--teal-dark);color:rgba(255,255,255,0.7);padding:76px 24px 32px;}
.presse-root footer .foot-wrap{max-width:1080px;margin:0 auto;padding:0 40px 34px;display:grid;
  grid-template-columns:repeat(4,1fr);gap:34px;text-align:left;}
.presse-root footer .foot-col{display:flex;flex-direction:column;gap:9px;}
.presse-root footer .foot-h{font-family:'Sora',sans-serif;font-size:10px;font-weight:800;letter-spacing:0.22em;
  text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:3px;}
.presse-root footer .foot-col a{color:rgba(255,255,255,0.86);font-size:13.5px;text-decoration:none;line-height:1.5;}
.presse-root footer .foot-col a:hover{color:#1ABFBF;}
.presse-root footer .foot-legal{color:rgba(255,255,255,0.5);font-size:12.5px;margin:0;padding:22px 40px 0;
  border-top:1px solid rgba(255,255,255,0.12);max-width:1080px;margin:0 auto;text-align:center;}
@media(max-width:860px){.presse-root footer .foot-wrap{grid-template-columns:1fr 1fr;gap:26px;padding:0 20px 26px;}}
@media(max-width:520px){.presse-root footer .foot-wrap{grid-template-columns:1fr;}}

.presse-root section[id] { scroll-margin-top: 110px; }

/* ── Rubrique presse ─────────────────────────── */
.presse-root .art{max-width:760px;margin:0 auto;}
.presse-root .art-src{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px 16px;
  padding-bottom:16px;border-bottom:2px solid var(--text);margin-bottom:26px;}
.presse-root .art-journal{font-family:'Sora',sans-serif;font-size:17px;font-weight:800;letter-spacing:-0.01em;color:var(--text);}
.presse-root .art-date{font-family:'Sora',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.18em;
  text-transform:uppercase;color:var(--muted);}
.presse-root .art-title{font-family:'Sora',sans-serif;font-size:clamp(30px,4vw,46px);font-weight:800;
  letter-spacing:-0.04em;line-height:1.04;margin:0 0 20px;color:var(--text);}
.presse-root .art-lead{font-size:19.5px;line-height:1.55;font-weight:600;color:var(--text);margin:0 0 20px;}
.presse-root .art-by{font-family:'Sora',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:0.14em;
  text-transform:uppercase;color:var(--muted);margin:0 0 var(--s2);}
.presse-root .art p{font-size:17px;line-height:1.72;color:var(--text);margin:0 0 18px;}
.presse-root .art h3{font-family:'Sora',sans-serif;font-size:21px;font-weight:800;letter-spacing:-0.02em;
  margin:36px 0 14px;color:var(--text);}
.presse-root .art blockquote{margin:30px 0;padding:0 0 0 22px;border-left:3px solid var(--teal);
  font-family:'Sora',sans-serif;font-size:21px;font-weight:700;line-height:1.4;letter-spacing:-0.02em;color:var(--text);}
.presse-root .art-note{background:var(--grey-cool);border-radius:16px;padding:22px 26px;margin:var(--s2) 0 0;}
.presse-root .art-note p{font-size:15px;line-height:1.6;color:var(--muted);margin:0;}
.presse-root .art-note strong{color:var(--text);}

.presse-root .scans{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:var(--s2) 0;}
@media(max-width:700px){.presse-root .scans{grid-template-columns:1fr;}}
.presse-root .scans a{display:block;border:1px solid var(--border);border-radius:14px;overflow:hidden;
  background:#fff;box-shadow:0 10px 30px rgba(15,25,35,0.08);transition:transform .16s, box-shadow .16s;}
.presse-root .scans a:hover{transform:translateY(-3px);box-shadow:0 16px 42px rgba(15,25,35,0.14);}
.presse-root .scans img{width:100%;height:auto;display:block;}
.presse-root .scans figcaption{font-size:12.5px;color:var(--muted);text-align:center;margin-top:9px;}
.presse-root .scans figure{margin:0;}

.presse-root .une-band{display:block;border:1px solid var(--border);border-radius:14px;overflow:hidden;
  background:#fff;box-shadow:0 12px 34px rgba(15,25,35,0.10);margin-bottom:12px;
  transition:transform .16s, box-shadow .16s;}
.presse-root .une-band:hover{transform:translateY(-2px);box-shadow:0 18px 44px rgba(15,25,35,0.16);}
.presse-root .une-band img{width:100%;height:auto;display:block;}
.presse-root .une-cap{font-size:13px;line-height:1.55;color:var(--muted);margin:0 0 var(--s2);}
.presse-root .scans{grid-template-columns:repeat(3,1fr);}
@media(max-width:700px){.presse-root .scans{grid-template-columns:1fr;}}

.presse-root .clip{margin:var(--s2) 0;border:1px solid var(--border);border-radius:16px;overflow:hidden;
  background:#fff;box-shadow:0 14px 38px rgba(15,25,35,0.10);}
.presse-root .clip a{display:block;}
.presse-root .clip img{width:100%;height:auto;display:block;}
.presse-root .clip figcaption{font-size:12.5px;color:var(--muted);text-align:center;padding:12px 16px;border-top:1px solid var(--border);}
.presse-root .scans.scans-2{grid-template-columns:1fr 1fr;}
@media(max-width:700px){.presse-root .scans.scans-2{grid-template-columns:1fr;}}

/* ── Coupure de presse cliquable ─────────────── */
.presse-root .clip{position:relative;margin:0 0 var(--s2);border:1px solid var(--border);border-radius:16px;
  overflow:hidden;background:#fff;box-shadow:0 14px 38px rgba(15,25,35,0.10);cursor:zoom-in;
  transition:transform .16s, box-shadow .16s;padding:0;display:block;width:100%;}
.presse-root .clip:hover{transform:translateY(-3px);box-shadow:0 20px 50px rgba(15,25,35,0.16);}
.presse-root .clip img{width:100%;height:auto;display:block;}
.presse-root .clip-hint{position:absolute;right:14px;bottom:14px;background:rgba(15,25,35,0.86);color:#fff;
  font-family:'Sora',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
  padding:8px 14px;border-radius:100px;pointer-events:none;}

.presse-root .thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:0 0 var(--s2);}
@media(max-width:700px){.presse-root .thumbs{grid-template-columns:1fr 1fr;}}
.presse-root .thumbs button{padding:0;border:1px solid var(--border);border-radius:12px;overflow:hidden;
  background:#fff;cursor:zoom-in;display:block;width:100%;transition:border-color .15s, transform .15s;}
.presse-root .thumbs button:hover{border-color:var(--teal);transform:translateY(-2px);}
.presse-root .thumbs img{width:100%;height:150px;object-fit:cover;object-position:top;display:block;}
.presse-root .thumbs .tl{display:block;font-size:11.5px;color:var(--muted);padding:8px 10px;text-align:center;
  border-top:1px solid var(--border);font-family:'Inter',sans-serif;}

/* ── Bouton lire le texte ────────────────────── */
.presse-root .read-btn{display:inline-flex;align-items:center;gap:10px;background:var(--teal-dark);color:#fff;
  border:none;border-radius:100px;padding:15px 28px;font-family:'Sora',sans-serif;font-weight:700;
  font-size:14px;cursor:pointer;transition:background .16s;}
.presse-root .read-btn:hover{background:var(--teal);}
.presse-root .read-btn .chev{transition:transform .2s;font-size:11px;}
.presse-root .read-btn.is-open .chev{transform:rotate(180deg);}
.presse-root .read-body{margin-top:var(--s2);padding-top:var(--s2);border-top:1px solid var(--border);}

/* ── Visionneuse plein ecran ─────────────────── */
.presse-root .vz{position:fixed;inset:0;z-index:900;background:rgba(6,14,20,0.94);
  display:flex;align-items:center;justify-content:center;padding:56px 24px 72px;}
.presse-root .vz-scroll{max-width:100%;max-height:100%;overflow:auto;-webkit-overflow-scrolling:touch;}
.presse-root .vz img{display:block;max-width:100%;height:auto;margin:0 auto;border-radius:6px;
  background:#fff;cursor:zoom-in;transition:none;}
.presse-root .vz img.zoomed{max-width:none;width:1900px;cursor:zoom-out;}
.presse-root .vz-x{position:absolute;top:14px;right:16px;width:44px;height:44px;border-radius:50%;
  background:rgba(255,255,255,0.14);color:#fff;border:none;font-size:22px;line-height:1;cursor:pointer;}
.presse-root .vz-x:hover{background:rgba(255,255,255,0.26);}
.presse-root .vz-cap{position:absolute;left:0;right:0;bottom:18px;text-align:center;color:rgba(255,255,255,0.8);
  font-size:13px;padding:0 24px;}

/* ── Confort de lecture de l'article ─────────── */
.presse-root .read-body{max-width:66ch;margin-left:auto;margin-right:auto;}
.presse-root .read-body p{font-size:18.5px;line-height:1.82;color:#1B2733;margin:0 0 22px;
  hyphens:auto;-webkit-hyphens:auto;}
.presse-root .read-body h3{font-family:'Sora',sans-serif;font-size:22px;font-weight:800;
  letter-spacing:-0.02em;margin:44px 0 16px;color:var(--text);}
.presse-root .read-body h3::before{content:'';display:block;width:42px;height:3px;
  background:var(--teal);margin-bottom:16px;border-radius:2px;}
.presse-root .read-body > div > p:first-of-type::first-letter{font-family:'Sora',sans-serif;
  font-size:56px;font-weight:800;float:left;line-height:0.86;margin:6px 12px 0 0;color:var(--teal-dark);}
.presse-root .read-body blockquote{margin:34px 0;padding:0 0 0 24px;border-left:3px solid var(--teal);
  font-family:'Sora',sans-serif;font-size:23px;font-weight:700;line-height:1.38;
  letter-spacing:-0.02em;color:var(--text);}
.presse-root .read-body .art-lead{font-size:20px;line-height:1.6;font-weight:600;color:var(--text);}
.presse-root .read-body .art-note{max-width:none;}
@media(max-width:700px){
  .presse-root .read-body p{font-size:17.5px;line-height:1.78;}
  .presse-root .read-body > div > p:first-of-type::first-letter{font-size:46px;}
  .presse-root .read-body blockquote{font-size:20px;}
}

/* ── Resume dans la langue du visiteur ───────── */
.presse-root .resume{background:var(--sky);border-radius:18px;padding:28px 32px;margin:0 0 40px;
  border-left:4px solid var(--teal);}
.presse-root .resume-k{display:inline-flex;align-items:center;gap:9px;font-family:'Sora',sans-serif;
  font-size:10px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;color:var(--teal-dark);
  margin-bottom:14px;}
.presse-root .resume-k::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--teal);}
.presse-root .read-body .resume p{font-size:17px;line-height:1.72;color:#12303a;margin:0;}
.presse-root .read-body .resume p::first-letter{font-size:inherit;float:none;margin:0;font-weight:inherit;
  font-family:inherit;line-height:inherit;color:inherit;}
.presse-root .read-body .resume .resume-note{font-size:12.5px;line-height:1.55;color:var(--muted);
  margin-top:14px;font-style:italic;}
@media(max-width:700px){.presse-root .resume{padding:22px 22px;}
  .presse-root .read-body .resume p{font-size:16.5px;}}

.presse-root .trad-note{font-size:13px;line-height:1.6;color:var(--muted);font-style:italic;
  border-top:1px solid var(--border);padding-top:16px;margin-top:30px;}
.presse-root .read-body .trad-note::first-letter{font-size:inherit;float:none;margin:0;
  font-weight:inherit;font-family:inherit;line-height:inherit;color:inherit;}
</style>


