"use strict";

/* ═══════════════════════════════════════════════════════════════
   PRESENTATION DATA (AUTHENTIC & COMPREHENSIVE)
═══════════════════════════════════════════════════════════════ */
const logo = "images/logo.png";

const slides = [
  {
    type: "title",
    title: "إدارة التطوع بجامعة الابتكار",
    subtitle: "عرض تعريفي شامل بالهيكل التنظيمي واللجان التطوعية وحصاد الإنجازات الميدانية",
    images: [logo]
  },
  {
    type: "about",
    title: "النشأة والتأسيس",
    label: "تاريخ التأسيس الرسمي للإدارة",
    date: "٦ / ١٠ / ٢٠٢٥",
    images: [logo]
  },
  {
    type: "orgchart"
  },
  {
    title: "لجنة الاستكشاف",
    eyebrow: "اللجان التطوعية والميدانية",
    hasTeam: true,
    description: "تُعد لجنة الاستكشاف هي العين الميدانية وبوصلة العمل التطوعي؛ حيث تهدف إلى النزول الميداني وحصر الاحتياجات الأساسية بدقة للمنازل والمساجد والأسر الأكثر احتياجًا لتوجيه الدعم الأنسب.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "إجراء استكشاف وبحث ميداني دقيق وموثق لعدد (٨٥) حالة إنسانية.",
      "شملت الحالات استكشافات القوافل الميدانية الموسعة بالإضافة إلى الحالات الفردية المستحقة.",
      "تحديد الأولويات الإغاثية والإنشائية بدقة لضمان وصول الدعم لمستحقيه الفعليين."
    ],
    images: ["images/istikshaf.jpeg"]
  },
  {
    title: "لجنة القوافل العينية",
    eyebrow: "اللجان التطوعية والإغاثية",
    hasTeam: true,
    description: "تعمل اللجنة على توفير وتجهيز المساعدات العينية وتوصيلها إلى الحالات الأكثر احتياجًا لتلبية احتياجاتهم المعيشية، وتنظيم جهود التوزيع بنظام محكم يضمن وصول الدعم بأعلى درجات الكفاءة.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "تقديم المساعدات العينية الشاملة لعدد (٢٤٠) أسرة مستحقة بمختلف المحافظات.",
      "المشاركة الفعالة في معسكرات كامب أسوان وكامب المنيا.",
      "تنفيذ قوافل: أثر ١ (ههيا)، أثر ٢ (الإسماعيلية)، أثر ٣ (الصف)، وأثر ٤ (الإسماعيلية).",
      "تغطية ودعم (١٥) حالة فردية مستحقة في مدينتي العاشر من رمضان وبلبيس.",
      "المساهمة في تجهيز ودعم (٨) عرايس من الفتيات الأولى بالرعاية خلال العام."
    ],
    images: ["images/qawafil-ayni.jpeg"]
  },
  {
    title: "لجنة الأسقف",
    eyebrow: "اللجان التطوعية والإعمار السكني",
    hasTeam: true,
    description: "تنطلق اللجنة من رسالة إنسانية تهدف إلى ترميم وبناء أسقف المنازل للأسر الأكثر احتياجًا، لتوفير بيئة سكنية آمنة ومستقرة، وتخفيف معاناة الأسر وحمايتها من تقلبات الطقس والأمطار.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "بناء وتسقيف عدد (٣٣) سقفاً للأسر الأكثر احتياجاً بالمناطق والقرى المستهدفة.",
      "توفير العزل الكامل والحماية الشاملة للأهالي من الأمطار وحرارة الصيف.",
      "تنفيذ كافة أعمال الترميم والتسقيف بسواعد وخبرات متطوعي الإدارة."
    ],
    images: ["images/osqof.jpeg"]
  },
  {
    title: "لجنة المياه",
    eyebrow: "اللجان التطوعية وشريان الحياة",
    hasTeam: true,
    description: "تختص اللجنة بتوفير وتوصيل مصادر المياه النقية والصالحة للشرب للأسر والمناطق الأكثر احتياجًا، مساهمةً في تحسين ظروف المعيشة وتوفير أهم مقومات الحياة الكريمة.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "تنفيذ وتركيب عدد (٣) وصلات مياه شرب نقية وصالحة للأسر المستحقة.",
      "مد شريان الحياة وتوفير مياه نقية ومستدامة داخل المنازل المحرومة.",
      "تخفيف المعاناة اليومية وتحسين الظروف الصحية والبيئية للأسر المستفيدة."
    ],
    images: ["images/miyah.jpeg"]
  },
  {
    title: "لجنة القوافل الطبية",
    eyebrow: "اللجان التطوعية والرعاية الصحية",
    hasTeam: true,
    description: "تهدف اللجنة إلى الاطمئنان على الحالة الصحية للأهالي وتقديم الفحوصات الطبية والعلاج اللازم مجانًا، ونشر الوعي الصحي وتدريب الكوادر التطوعية على الإسعافات الأولية.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "المساعدة في الكشف الطبي وتقديم الرعاية لـ (٧٠) حالة من أفراد الجامعة.",
      "تنظيم حملة التبرع بالدم وتوفير (٥٠) كيس دم لصالح المستشفيات وإنقاذ المرضى.",
      "كفالة وتغطية متطلبات علاج شهري لأكثر من (١٠) أفراد بإجمالي مساعدات طبية وصلت إلى (١٣٠) فرداً.",
      "تدريب وتأهيل متطوعي الإدارة ومنح (٨٠) شهادة معتمدة في الإسعافات الأولية."
    ],
    images: ["images/qawafil-tibbiya.jpeg"]
  },
  {
    type: "gallery",
    title: "لجنة زيارات الأيتام والمسنين",
    eyebrow: "اللجان التطوعية والرعاية الإنسانية",
    hasTeam: true,
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "تنفيذ (٦) زيارات ميدانية لدور الأيتام من ضمنها احتفالية يوم اليتيم.",
      "تنفيذ زيارتين (٢) لدور رعاية المسنات لتقديم كامل الدعم النفسي والاجتماعي.",
      "إقامة حفلة ترفيهية للأطفال وزيارة مسنات ضمن فعاليات قافلة «أثر ٤»."
    ],
    gallery: [
      {
        src: "images/ayatam-1.jpeg",
        label: "زيارات الأيتام — إدخال البهجة والسرور",
        text: "تنظيم فعاليات ترفيهية وحفلات مميزة وتقديم الهدايا لرسم الابتسامة على وجوه الأطفال الأيتام وإشعارهم بأنهم دائمًا في قلب واهتمام المجتمع."
      },
      {
        src: "images/ayatam-2.jpeg",
        label: "زيارات المسنين — بر ووفاء وتقدير",
        text: "مد جسور المحبة والوفاء لكبار السن في دور الرعاية، ومؤانستهم والاستماع لتجاربهم، وتقديم الدعم النفسي تقديراً لمسيرتهم وعطائهم الممتد."
      }
    ],
    images: ["images/ayatam-1.jpeg", "images/ayatam-2.jpeg"]
  },
  {
    title: "لجنة فرز وتوزيع الملابس والمعارض",
    eyebrow: "اللجان التطوعية والمعارض الخيرية",
    hasTeam: true,
    description: "تختص بجمع وفرز وتجهيز الملابس بعناية فائقة، وإقامة معارض توزيع راقية للأسر الأكثر احتياجًا بما يصون كرامتهم وينشر روح التكافل والعطاء في المجتمع.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "استقبال وتصنيف وتجهيز أكثر من (٥٠٠) قطعة ملابس تبرعات بأعلى معايير الترتيب.",
      "توزيع الملابس على الأسر المستحقة في قافلة «أثر ٣» بالإضافة لتوزيعات فردية.",
      "إقامة معرض ملابس خيري خلال كامب المنيا.",
      "إقامة معرض ملابس متكامل في قافلة «أثر ٤».",
      "إقامة معرض ملابس وكساء المدارس داخل الحرم الجامعي للأسر والطلاب."
    ],
    images: ["images/malabis.jpeg"]
  },
  {
    title: "لجنة الإطعام",
    eyebrow: "اللجان التطوعية والأمن الغذائي",
    hasTeam: true,
    description: "تعمل لجنة الإطعام على إعداد وتجهيز وتوزيع وجبات وكراتين غذائية متكاملة للمستحقين، وتساهم بفاعلية في مكافحة الجوع ونشر روح التراحم والتكافل الغذائي.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "إقامة مائدة الطعام الرمضانية طوال ٣٠ يوماً بإجمالي (١٨,٥٠٠) وجبة طازجة.",
      "تعبئة وتجهيز (٥٠٠) كرتونة مواد غذائية أساسية جافة.",
      "تعبئة (٢٨٠) شنطة غذائية لقوافل رمضان وتعبئة (١٠٠) شنطة أخرى.",
      "توزيع (٤٠٠) شنطة غذائية في كامب أسوان وكامب المنيا.",
      "توزيع (٦٠٠) شنطة غذائية عبر قوافل «أثر» الأربعة."
    ],
    images: ["images/itaam.jpeg"]
  },
  {
    title: "لجنة إعمار المساجد",
    eyebrow: "اللجان التطوعية وخدمة بيوت الله",
    hasTeam: true,
    description: "تهدف إلى صيانة وتجديد وتهيئة المساجد وتوفير كافة احتياجاتها الأساسية من سجاد وتكييف وإنارة وصوتيات، لتكون أكثر راحةً ونظافةً وخشوعًا للمصلين.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "إجراء الصيانة الشاملة للمرافق، دورات المياه، شبكات الكهرباء والسباكة والصوتيات.",
      "فرش المساجد وتوفير المصاحف وأجهزة التهوية والتكييف والإنارة.",
      "تنظيم حملات نظافة وتطهير دورية شاملة للمساجد قبيل المناسبات والجمع."
    ],
    images: ["images/masajid.jpeg"]
  },
  {
    title: "لجنة الميديا",
    eyebrow: "اللجان التطوعية والإنتاج المرئي",
    hasTeam: true,
    description: "لجنة الميديا هي عين إدارة التطوع؛ نوثّق كل لحظة وكل إنجاز بصورة وفيديو يوصل أثر الخير للناس، ونحوّل مجهود المتطوعين لمحتوى إبداعي ملهم ينشر ثقافة العطاء.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "تغطية وتوثيق احتفال «روح واحدة» بدقة واحترافية عالية.",
      "تغطية شاملة لجميع قوافل السنة «أثر ١، ٢، ٣، ٤» ومعسكرات كامب المنيا وكامب أسوان.",
      "توثيق كافة زيارات الأيتام والمسنين والاستكشافات والتوزيعات الفردية.",
      "تغطية كافة فعاليات لجنة الإطعام (زيارة بنك الطعام، المائدة، الأضحية، تعبئة الشنط).",
      "تغطية وتوثيق دورة الإسعافات الأولية وحملة التبرع بالدم بالجامعة."
    ],
    images: ["images/media.jpeg"]
  },
  {
    title: "لجنة الاتصالات",
    eyebrow: "اللجان التطوعية والتنسيق والمتابعة",
    hasTeam: true,
    description: "تهدف إلى التواصل المستمر والفعال مع المتطوعين ومتابعتهم وإبلاغهم بكل ما يخص الأنشطة والفعاليات، والربط التنفيذي بين كافة اللجان لضمان انسيابية العمل.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "التنسيق والمتابعة المباشرة وتغطية كافة الفعاليات والإيفنتات القائمة بإدارة التطوع.",
      "التواصل المستمر والفعال مع كافة المتطوعين ومتابعة جاهزيتهم للأنشطة.",
      "إدارة قنوات التواصل الرسمية والرد السريع وتنسيق الربط التنفيذي بين مختلف اللجان."
    ],
    images: ["images/itisalat.jpeg"]
  },
  {
    title: "لجنة المشتريات",
    eyebrow: "اللجان التطوعية والإسناد اللوجستي",
    hasTeam: true,
    description: "تُعد اللجنة هي المحرك اللوجستي لإدارة التطوع؛ والمسؤولة عن حصر وتوفير وشراء كافة الاحتياجات والمستلزمات والمواد الأولية اللازمة للأنشطة بأعلى كفاءة وأفضل تكلفة.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "المشاركة وتأمين المتطلبات اللوجستية لكافة الفعاليات والإيفنتات القائمة بإدارة التطوع.",
      "حصر وتوفير وشراء كافة الاحتياجات والمستلزمات والمواد الأولية بأعلى معايير الجودة.",
      "إدارة المخزون والتوزيع الداخلي للمواد بما يضمن الانسيابية ومنع الهدر وتحقيق أعلى وفر."
    ],
    images: ["images/mushtarayat.jpeg"]
  },
  {
    title: "لجنة HR (الموارد البشرية)",
    eyebrow: "اللجان التطوعية وبناء وتطوير الفريق",
    hasTeam: true,
    description: "تهدف إلى متابعة وتنظيم شؤون المتطوعين واستقبال الأعضاء الجدد، وبناء روح الفريق، وتوفير بيئة تطوعية محفزة ومريحة تشجع الجميع على الاستمرار والعطاء.",
    sectionTag: "أبرز الإنجازات الميدانية",
    bullets: [
      "استقبال وتأهيل وإجراء المقابلات وتسكين المتطوعين الجدد بفرق العمل.",
      "متابعة التفاعل والتواصل الإيجابي وحل أي معوقات تواجه أعضاء الإدارة.",
      "بناء وتطوير مهارات الفريق وتنظيم الفعاليات التحفيزية والتكريمية للأعضاء المتميزين."
    ],
    images: ["images/hr.jpeg"]
  }
];

/* ═══════════════════════════════════════════════════════════════
   DOM ELEMENTS & VARIABLES
═══════════════════════════════════════════════════════════════ */
const deckEl = document.querySelector(".deck");
const indicatorEl = document.querySelector(".slide-indicator");
const progressFillEl = document.querySelector(".progress-bar-fill");

let activeIdx = 0;
let isAnimating = false;
let galleryImgIdx = 0;

const toArabicNum = (num) => String(num).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[+d]);

/* ═══════════════════════════════════════════════════════════════
   DUAL ROTATING GRADIENT RINGS (GPU-ACCELERATED)
═══════════════════════════════════════════════════════════════ */
function createRingSVG() {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.classList.add("spin-svg");
  const uid = Math.random().toString(36).slice(2, 6);
  svg.innerHTML = `
    <defs>
      <linearGradient id="gA_${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ebd5ff" stop-opacity="1"/>
        <stop offset="50%" stop-color="#7c3aed" stop-opacity="1"/>
        <stop offset="100%" stop-color="#120344" stop-opacity="0.3"/>
      </linearGradient>
      <linearGradient id="gB_${uid}" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a855f7" stop-opacity="1"/>
        <stop offset="100%" stop-color="#3b0e91" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#gA_${uid})" stroke-width="2.8" stroke-dasharray="96 200" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#gB_${uid})" stroke-width="1.8" stroke-dasharray="52 240" stroke-linecap="round" stroke-dashoffset="-115"/>
    <circle cx="50" cy="50" r="47.5" fill="none" stroke="rgba(216,180,254,0.7)" stroke-width="1.2" stroke-dasharray="18 280" stroke-linecap="round" stroke-dashoffset="-210"/>
  `;
  return svg;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER HTML TEMPLATES
═══════════════════════════════════════════════════════════════ */
function renderHeader() {
  return `
    <header class="slide-header">
      <div class="brand-mini">
        <img class="mark-logo" src="${logo}" alt="لوجو جامعة الابتكار" />
        <span>إدارة التطوع · جامعة الابتكار</span>
      </div>
      <div class="header-tag">جامعة الابتكار</div>
    </header>
  `;
}

function renderMediaFrame(images, galleryItems = null) {
  const isGal = !!galleryItems;
  const items = isGal ? galleryItems : images.map(src => ({ src }));
  const figs = items.map((it, i) => `
    <figure class="${i === 0 ? "active" : ""}" data-idx="${i}" ${isGal ? `data-label="${it.label}" data-text="${it.text}"` : ""}>
      <img src="${it.src}" alt="صورة توضيحية" />
    </figure>
  `).join("");

  const dots = isGal ? `
    <div class="dots-bar">
      ${items.map((_, i) => `<span class="dot-btn ${i === 0 ? "active" : ""}" data-idx="${i}"></span>`).join("")}
    </div>
  ` : "";

  return `
    <div class="ring-container">
      <div class="circle-frame">
        ${figs}
        ${dots}
      </div>
    </div>
  `;
}

function buildSlideHTML(s, i) {
  const dirClass = (i % 2 === 0) ? "dir-media-left" : "dir-media-right";

  if (s.type === "title") {
    return `
      <section class="slide title-slide" data-index="${i}">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="title-content">
          <div class="hero-logo-wrap">
            <img class="hero-logo" src="${s.images[0]}" alt="شعار إدارة التطوع" />
          </div>
          <h1 class="title-heading">${s.title}</h1>
          <div class="title-line"></div>
          <p class="title-sub">${s.subtitle}</p>
        </div>
      </section>
    `;
  }

  if (s.type === "about") {
    return `
      <section class="slide" data-index="${i}">
        ${renderHeader()}
        <div class="slide-body ${dirClass}">
          <div class="copy-col">
            <span class="badge-eyebrow">نبذة تعريفية</span>
            <h2 class="heading-title">${s.title}</h2>
            <div class="heading-bar"></div>
            <div class="about-card-box">
              <p class="about-card-label">${s.label}</p>
              <p class="about-card-val">${s.date}</p>
            </div>
          </div>
          <div class="media-col">
            ${renderMediaFrame(s.images)}
          </div>
        </div>
      </section>
    `;
  }

  if (s.type === "orgchart") {
    const r1 = ["لجنة الاستكشاف", "لجنة القوافل العينية", "لجنة الأسقف", "لجنة المياه", "لجنة القوافل الطبية", "لجنة الأيتام والمسنين"];
    const r2 = ["لجنة الملابس والمعارض", "لجنة الإطعام", "لجنة إعمار المساجد", "لجنة الميديا", "لجنة الاتصالات", "لجنة المشتريات", "لجنة HR"];
    const renderRow = (arr) => arr.map(name => `
      <div class="oc-branch">
        <div class="oc-stem-top"></div>
        <div class="oc-card">${name}</div>
        <div class="oc-stem-bot"></div>
        <div class="oc-sub-tags">
          <div class="oc-sub-item"><div class="oc-arrow-down"></div><span>ليدر</span></div>
          <div class="oc-sub-item"><div class="oc-arrow-down"></div><span>أعضاء</span></div>
        </div>
      </div>
    `).join("");

    return `
      <section class="slide orgchart-slide" data-index="${i}">
        <div class="oc-glow g1"></div>
        <div class="oc-glow g2"></div>
        <div class="oc-head">
          <div class="oc-head-logo-box">
            <img src="${logo}" class="oc-head-logo" alt="شعار جامعة الابتكار" />
          </div>
          <div class="oc-head-titles">
            <div class="oc-ht-main">الهيكل التنظيمي لإدارة التطوع</div>
            <div class="oc-ht-sub">جامعة الابتكار</div>
          </div>
        </div>
        <div class="oc-spine">
          <div class="oc-vline"></div>
          <div class="oc-pill vp">نائب رئيس الجامعة لخدمة المجتمع</div>
          <div class="oc-vline"></div>
          <div class="oc-pill dir">مدير إدارة التطوع</div>
          <div class="oc-vline"></div>
          <div class="oc-pill comm">اللجان</div>
          <div class="oc-vline"></div>
        </div>
        <div class="oc-tree-box">
          <div class="oc-h-connector"></div>
          <div class="oc-row row-6">${renderRow(r1)}</div>
          <div class="oc-h-connector mid"></div>
          <div class="oc-row row-7">${renderRow(r2)}</div>
        </div>
      </section>
    `;
  }

  const teamBadge = s.hasTeam ? `
    <div class="team-badge">
      <span class="tb-item leader"><span class="tb-icon">👑</span> ليدر</span>
      <span class="tb-sep">·</span>
      <span class="tb-item members"><span class="tb-icon">👥</span> أعضاء</span>
    </div>
  ` : "";

  if (s.type === "gallery") {
    return `
      <section class="slide" data-index="${i}" data-type="gallery">
        ${renderHeader()}
        <div class="slide-body ${dirClass}">
          <div class="copy-col">
            <span class="badge-eyebrow">${s.eyebrow}</span>
            <h2 class="heading-title">${s.title}</h2>
            ${teamBadge}
            <div class="heading-bar"></div>
            <h3 class="gallery-subhead">${s.gallery[0].label}</h3>
            <p class="main-desc gallery-dynamic-text">${s.gallery[0].text}</p>
            <span class="section-tag">${s.sectionTag || "أبرز الإنجازات الميدانية"}</span>
            <ul class="bullets-list">
              ${s.bullets.map(b => `<li><span>${b}</span></li>`).join("")}
            </ul>
          </div>
          <div class="media-col">
            ${renderMediaFrame(s.images, s.gallery)}
          </div>
        </div>
        <div class="gallery-hint-text">← استخدم مفاتيح الأسهم أو اضغط على النقاط للتبديل بين الفئتين →</div>
      </section>
    `;
  }

  /* Default Committee Slide */
  return `
    <section class="slide" data-index="${i}">
      ${renderHeader()}
      <div class="slide-body ${dirClass}">
        <div class="copy-col">
          <span class="badge-eyebrow">${s.eyebrow || "اللجان التطوعية"}</span>
          <h2 class="heading-title">${s.title}</h2>
          ${teamBadge}
          <div class="heading-bar"></div>
          <p class="main-desc">${s.description}</p>
          <span class="section-tag">${s.sectionTag || "أبرز الإنجازات الميدانية"}</span>
          <ul class="bullets-list">
            ${s.bullets.map(b => `<li><span>${b}</span></li>`).join("")}
          </ul>
        </div>
        <div class="media-col">
          ${renderMediaFrame(s.images)}
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   INITIALIZE PRESENTATION DOM
═══════════════════════════════════════════════════════════════ */
deckEl.innerHTML = slides.map((s, i) => buildSlideHTML(s, i)).join("");

// Attach rotating rings
document.querySelectorAll(".ring-container").forEach(c => {
  c.appendChild(createRingSVG());
});

/* ═══════════════════════════════════════════════════════════════
   GALLERY SWITCHER
═══════════════════════════════════════════════════════════════ */
function switchGalleryItem(slideEl, idx) {
  const figures = slideEl.querySelectorAll(".circle-frame figure");
  const dots = slideEl.querySelectorAll(".dot-btn");
  if (!figures.length) return;

  galleryImgIdx = idx;

  figures.forEach((fig, i) => {
    fig.classList.toggle("active", i === idx);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === idx);
  });

  const activeFig = figures[idx];
  const subheadEl = slideEl.querySelector(".gallery-subhead");
  const descEl = slideEl.querySelector(".gallery-dynamic-text");

  if (activeFig && subheadEl && descEl) {
    subheadEl.textContent = activeFig.dataset.label;
    descEl.textContent = activeFig.dataset.text;
  }
}

/* ═══════════════════════════════════════════════════════════════
   ROCK-SOLID SLIDE ENTRANCE ANIMATION (ZERO JITTER)
═══════════════════════════════════════════════════════════════ */
function playSlideEntrance(slideEl, idx) {
  // Title Slide Animation
  if (slideEl.classList.contains("title-slide")) {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(slideEl.querySelector(".hero-logo"), { scale: 0.9, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.8 }, 0);
    tl.fromTo(slideEl.querySelector(".title-heading"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, 0.2);
    tl.fromTo(slideEl.querySelector(".title-line"), { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "center" }, 0.35);
    tl.fromTo(slideEl.querySelector(".title-sub"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55 }, 0.45);
    return;
  }

  // Org Chart Slide Animation
  if (slideEl.classList.contains("orgchart-slide")) {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(slideEl.querySelector(".oc-head"), { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 }, 0);
    tl.fromTo(slideEl.querySelectorAll(".oc-spine .oc-pill"), { opacity: 0, y: 8 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 }, 0.15);
    tl.fromTo(slideEl.querySelectorAll(".oc-branch"), { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.025, duration: 0.4 }, 0.35);
    return;
  }

  // Committee Slide Animation (Smooth Stagger)
  const isEven = (idx % 2 === 0);
  const mediaX = isEven ? -30 : 30;
  const copyX = isEven ? 20 : -20;

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  const mediaCol = slideEl.querySelector(".media-col");
  const eyebrow = slideEl.querySelector(".badge-eyebrow");
  const title = slideEl.querySelector(".heading-title");
  const bar = slideEl.querySelector(".heading-bar");
  const subhead = slideEl.querySelector(".gallery-subhead");
  const desc = slideEl.querySelector(".main-desc, .about-card-box");
  const sectionTag = slideEl.querySelector(".section-tag");
  const bullets = slideEl.querySelectorAll(".bullets-list li");

  if (mediaCol) {
    tl.fromTo(mediaCol, { opacity: 0, x: mediaX }, { opacity: 1, x: 0, duration: 0.6 }, 0);
  }
  if (eyebrow) {
    tl.fromTo(eyebrow, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35 }, 0.05);
  }
  if (title) {
    tl.fromTo(title, { opacity: 0, x: copyX }, { opacity: 1, x: 0, duration: 0.45 }, 0.1);
  }
  if (bar) {
    tl.fromTo(bar, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.4, transformOrigin: "right center" }, 0.2);
  }
  if (subhead) {
    tl.fromTo(subhead, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.35 }, 0.25);
  }
  if (desc) {
    tl.fromTo(desc, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4 }, 0.28);
  }
  if (sectionTag) {
    tl.fromTo(sectionTag, { opacity: 0, x: 8 }, { opacity: 1, x: 0, duration: 0.35 }, 0.35);
  }
  if (bullets.length) {
    tl.fromTo(bullets, { opacity: 0, x: 14 }, { opacity: 1, x: 0, stagger: 0.05, duration: 0.38 }, 0.4);
  }
}

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SLIDE NAVIGATION (CROSSFADE TRANSITION)
═══════════════════════════════════════════════════════════════ */
function goToSlide(targetIdx, dir = 1) {
  const slideEls = document.querySelectorAll(".slide");
  const total = slideEls.length;
  const nextIdx = ((targetIdx % total) + total) % total;

  if (isAnimating || nextIdx === activeIdx) return;
  isAnimating = true;

  const currentSlide = slideEls[activeIdx];
  const nextSlide = slideEls[nextIdx];

  galleryImgIdx = 0;
  activeIdx = nextIdx;

  // Update Indicator & Progress
  indicatorEl.textContent = `${toArabicNum(activeIdx + 1)} / ${toArabicNum(total)}`;
  progressFillEl.style.width = `${((activeIdx + 1) / total) * 100}%`;

  // Clean tweens
  gsap.killTweensOf(currentSlide);
  gsap.killTweensOf(nextSlide);
  gsap.killTweensOf(currentSlide.querySelectorAll("*"));
  gsap.killTweensOf(nextSlide.querySelectorAll("*"));

  nextSlide.classList.add("active");

  const tl = gsap.timeline({
    onComplete: () => {
      currentSlide.classList.remove("active");
      gsap.set(currentSlide, { clearProps: "all" });
      nextSlide.classList.add("active");
      isAnimating = false;
      playSlideEntrance(nextSlide, activeIdx);
    }
  });

  // Outgoing
  tl.to(currentSlide, {
    opacity: 0,
    x: dir * -30,
    duration: 0.35,
    ease: "power2.inOut"
  }, 0);

  // Incoming
  tl.fromTo(nextSlide, {
    opacity: 0,
    x: dir * 30
  }, {
    opacity: 1,
    x: 0,
    duration: 0.35,
    ease: "power2.out"
  }, 0.04);
}

function handleNext() {
  const currentSlide = document.querySelectorAll(".slide")[activeIdx];
  if (currentSlide && currentSlide.dataset.type === "gallery") {
    const figures = currentSlide.querySelectorAll(".circle-frame figure");
    if (galleryImgIdx < figures.length - 1) {
      switchGalleryItem(currentSlide, galleryImgIdx + 1);
      return;
    }
  }
  goToSlide(activeIdx + 1, 1);
}

function handlePrev() {
  const currentSlide = document.querySelectorAll(".slide")[activeIdx];
  if (currentSlide && currentSlide.dataset.type === "gallery") {
    if (galleryImgIdx > 0) {
      switchGalleryItem(currentSlide, galleryImgIdx - 1);
      return;
    }
  }
  goToSlide(activeIdx - 1, -1);
}

/* ═══════════════════════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════════════════════ */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (btn) {
    if (btn.dataset.action === "next") handleNext();
    if (btn.dataset.action === "prev") handlePrev();
    return;
  }

  const dot = e.target.closest(".dot-btn");
  if (dot) {
    const slide = dot.closest(".slide");
    const idx = parseInt(dot.dataset.idx, 10);
    switchGalleryItem(slide, idx);
  }
});

document.addEventListener("keydown", (e) => {
  if (["ArrowRight", "Space", "PageDown"].includes(e.code) || e.key === "ArrowRight") {
    e.preventDefault();
    handleNext();
  } else if (["ArrowLeft", "PageUp"].includes(e.code) || e.key === "ArrowLeft") {
    e.preventDefault();
    handlePrev();
  } else if (e.key === "Home") {
    e.preventDefault();
    goToSlide(0, -1);
  } else if (e.key === "End") {
    e.preventDefault();
    goToSlide(slides.length - 1, 1);
  }
});

// Touch swipe gestures
let touchStartX = 0;
document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) handleNext();
    else handlePrev();
  }
}, { passive: true });

/* ═══════════════════════════════════════════════════════════════
   INITIAL SETUP & FIRST SLIDE ENTRANCE
═══════════════════════════════════════════════════════════════ */
const firstSlide = document.querySelector(".slide");
if (firstSlide) {
  firstSlide.classList.add("active");
  indicatorEl.textContent = `${toArabicNum(1)} / ${toArabicNum(slides.length)}`;
  progressFillEl.style.width = `${(1 / slides.length) * 100}%`;
  playSlideEntrance(firstSlide, 0);
}
