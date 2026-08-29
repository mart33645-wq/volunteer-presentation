"use strict";

/* ═══════════════════════════════════════════════════════════════
   PRESENTATION DATA (AUTHENTIC & DETAILED TEXTS)
═══════════════════════════════════════════════════════════════ */
const logo = "images/logo.png";

const slides = [
  {
    type: "title",
    title: "إدارة التطوع بجامعة الابتكار",
    subtitle: "عرض تعريفي شامل بالهيكل التنظيمي واللجان التطوعية ومجالات الخدمة المجتمعية",
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
    description: "تُعد لجنة الاستكشاف هي العين الميدانية وبوصلة العمل التطوعي؛ حيث تهدف إلى النزول الميداني واستكشاف المساجد والبيوت التي تحتاج إلى أعمال إعمار وترميم، وحصر احتياجاتها الأساسية بدقة، والتعرّف على الأسر والأشخاص الأكثر احتياجًا لتوجيه الدعم الأنسب لهم.",
    bullets: [
      "الاستكشاف الميداني الشامل للمساجد والمنازل المتضررة وتوثيق حالتها الإنشائية.",
      "حصر دقيق لاحتياجات الأسر الأولى بالرعاية وترتيب الأولويات الإغاثية.",
      "التنسيق الكامل مع اللجان التنفيذية لتوجيه الدعم المباشر للحالات المستحقة."
    ],
    images: ["images/istikshaf.jpeg"]
  },
  {
    title: "لجنة القوافل العينية",
    eyebrow: "اللجان التطوعية والإغاثية",
    description: "تعمل اللجنة على توفير وتجهيز المساعدات العينية وتوصيلها إلى الحالات الأكثر احتياجًا لتلبية احتياجاتهم المعيشية، وتنظيم جهود التبرع والتوزيع بنظام محكم يضمن وصول الدعم لمستحقيه بأفضل صورة ممكنة وبأعلى درجات الكفاءة.",
    bullets: [
      "استقبال وتجهيز الحزم الإغاثية والمساعدات العينية وفرزها بعناية فائقة.",
      "تنظيم قوافل إغاثية دورية تصل إلى القرى والمناطق النائية والأشد فقرًا.",
      "إدارة خطط توزيع عادلة ومنظمة تضمن الكفاءة والسرعة في إيصال الدعم."
    ],
    images: ["images/qawafil-ayni.jpeg"]
  },
  {
    title: "لجنة الأسقف",
    eyebrow: "اللجان التطوعية والإعمار",
    description: "تنطلق اللجنة من رسالة إنسانية تهدف إلى ترميم وتجهيز أسقف المنازل للأسر الأكثر احتياجًا، لتوفير بيئة سكنية آمنة ومستقرة، وتخفيف معاناة الأسر وحمايتها من مخاطر الأمطار والعوامل الجوية بروح عالية من التكافل والعطاء.",
    bullets: [
      "معاينة المنازل ذات الأسقف المتهالكة ووضع خطط ترميم وعزل هندسية محكمة.",
      "توفير مواد البناء والعزل الخشبي والخرساني عالية الجودة لحماية المنازل.",
      "تنفيذ أعمال التسقيف بسواعد متطوعين مدربين لتحقيق الأمان السكني الكامل."
    ],
    images: ["images/osqof.jpeg"]
  },
  {
    title: "لجنة المياه",
    eyebrow: "اللجان التطوعية وشريان الحياة",
    description: "تختص اللجنة بتوفير وتوصيل مصادر المياه النقية والصالحة للشرب للأسر والمناطق الأكثر احتياجًا، بما يضمن تدفق المياه بشكل آمن ومستمر ومستدام، مساهمةً في تحسين ظروف المعيشة وتوفير أهم مقومات الحياة الكريمة.",
    bullets: [
      "مد خطوط ووصلات مياه الشرب النقية للمنازل المحرومة من شبكات المياه.",
      "تركيب الخزانات ومحطات التنقية والمتابعة الدورية لجودة وصلاحية المياه.",
      "تخفيف الأعباء اليومية عن كاهل الأسر وتوفير شريان حياة مستمر ونظيف."
    ],
    images: ["images/miyah.jpeg"]
  },
  {
    title: "لجنة القوافل والحملات الطبية",
    eyebrow: "اللجان التطوعية والرعاية الصحية",
    description: "تهدف اللجنة إلى الاطمئنان على الحالة الصحية للأهالي وتقديم الفحوصات الطبية والعلاج اللازم مجانًا، ونشر الوعي والتثقيف الصحي في المجتمعات المحلية، ورصد وتحويل الحالات الحرجة التي تحتاج إلى رعاية ومتابعة طبية متخصصة.",
    bullets: [
      "تسيير قوافل طبية متكاملة تضم استشاريين وأطباء في مختلف التخصصات.",
      "تقديم الكشف السريري والتحاليل وصرف الأدوية والعلاجات مجانًا للمرضى.",
      "تنظيم حملات توعية صحية شاملة للوقاية من الأمراض الشائعة والمزمنة."
    ],
    images: ["images/qawafil-tibbiya.jpeg"]
  },
  {
    type: "gallery",
    title: "لجنة زيارات الأيتام والمسنين",
    eyebrow: "اللجان التطوعية والرعاية الإنسانية",
    bullets: [
      "تنظيم زيارات ميدانية دورية إلى دور الأيتام ودور رعاية المسنين.",
      "تقديم الدعم النفسي والمعنوي والاجتماعي وتعزيز مشاعر الألفة والاهتمام.",
      "إقامة مهرجانات ترفيهية وتوزيع الهدايا وترسيخ قيم التراحم والتكافل."
    ],
    gallery: [
      {
        src: "images/ayatam-1.jpeg",
        label: "زيارات الأيتام — إدخال البهجة والسرور",
        text: "نهدف إلى إدخال البهجة والسرور إلى قلوب أطفالنا الأيتام من خلال تنظيم فعاليات ترفيهية وأنشطة تفاعلية محفزة، وتقديم الهدايا التي تعيد رسم الابتسامة على وجوههم، ليعلموا أنهم دائمًا في قلب واهتمام المجتمع."
      },
      {
        src: "images/ayatam-2.jpeg",
        label: "زيارات المسنين — بر ووفاء وتقدير",
        text: "نمد جسور المحبة والوفاء لآبائنا وأمهاتنا في دور رعاية كبار السن، بالجلوس معهم ومؤانستهم والاستماع إلى تجاربهم، وتقديم كامل الدعم النفسي والاجتماعي تقديرًا لمسيرتهم وعطائهم الممتد في الحياة."
      }
    ],
    images: ["images/ayatam-1.jpeg", "images/ayatam-2.jpeg"]
  },
  {
    title: "لجنة فرز وتوزيع الملابس والمعارض",
    eyebrow: "اللجان التطوعية والمعارض الخيرية",
    description: "تختص بجمع وفرز الملابس وتجهيزها وكيّها وتنظيمها بعناية فائقة حسب الفئات والأعمار والاحتياجات، وإقامة معارض توزيع راقية للأسر الأكثر احتياجًا بما يصون كرامتهم وينشر روح التكافل والعطاء في المجتمع.",
    bullets: [
      "استقبال وتصنيف الملابس وتجهيزها بأحدث معايير النظافة والترتيب.",
      "إقامة معارض خيرية مجانية تتيح للأسر اختيار ما يناسبهم بكل عزة وكرامة.",
      "تغطية احتياجات كسوة الأعياد وبداية المواسم الدراسية للطلاب والأسر."
    ],
    images: ["images/malabis.jpeg"]
  },
  {
    title: "لجنة الإطعام",
    eyebrow: "اللجان التطوعية والأمن الغذائي",
    description: "تعمل لجنة الإطعام على إعداد وتجهيز وتوزيع وجبات غذائية متكاملة وصحية ومطهوة بأعلى معايير الجودة للمستحقين بكل حب واهتمام، وتساهم بفاعلية في مكافحة الجوع ونشر روح التراحم والتكافل الغذائي داخل المجتمع.",
    bullets: [
      "إعداد وتجهيز وجبات غذائية طازجة ومتكاملة القيمة الغذائية يوميًا ودوريًا.",
      "توزيع كراتين وسلال المواد الغذائية الأساسية الجافة على الأسر المتعففة.",
      "تنظيم موائد الإطعام الرمضانية وحملات الإغاثة الغذائية في المناسبات."
    ],
    images: ["images/itaam.jpeg"]
  },
  {
    title: "لجنة إعمار المساجد",
    eyebrow: "اللجان التطوعية وخدمة بيوت الله",
    description: "تهدف إلى صيانة وتجديد وتهيئة المساجد وتوفير كافة احتياجاتها الأساسية من سجاد وتكييف وإنارة وصوتيات، لتكون أكثر راحةً ونظافةً وخشوعًا للمصلين، والحفاظ على مكانة المسجد كمنارة دينية واجتماعية جامعة.",
    bullets: [
      "إجراء الصيانة الشاملة للمرافق، دورات المياه، شبكات الكهرباء والسباكة.",
      "فرش المساجد وتوفير المصاحف والمكتبات وأجهزة التهوية والتكييف والإضاءة.",
      "تنظيم حملات نظافة وتطهير دورية شاملة للمساجد قبيل صلاة الجمعة والمواسم."
    ],
    images: ["images/masajid.jpeg"]
  },
  {
    title: "لجنة الميديا والاتصالات",
    eyebrow: "اللجان التطوعية والإعلام الرقمي",
    description: "تمثل اللجنة الصوت والصورة الحية لإدارة التطوع؛ حيث تختص بالتواصل المستمر مع المتطوعين ومتابعتهم وتنظيم قنوات الاتصال، إلى جانب التغطية الإعلامية الاحترافية لكافة الفعاليات وتوثيق أثر المبادرات التطوعية ونشره.",
    bullets: [
      "التوثيق الفوتوغرافي والسينمائي الاحترافي لكافة الأنشطة والقوافل الميدانية.",
      "إدارة المنصات الرقمية وصناعة محتوى ملهم يجذب المتطوعين والداعمين.",
      "تنظيم قنوات التواصل الفعال والرد على استفسارات المتطوعين وتنسيق الجهود."
    ],
    images: ["images/media.jpeg"]
  },
  {
    title: "لجنة المشتريات",
    eyebrow: "اللجان التطوعية والإسناد اللوجستي",
    description: "تُعد اللجنة هي المحرك اللوجستي لإدارة التطوع؛ والمسؤولة عن حصر وتوفير وشراء كافة الاحتياجات والمستلزمات والمواد الأولية اللازمة للأنشطة والمبادرات التطوعية بأعلى جودة وأفضل تكلفة ممكنة لضمان كفاءة التنفيذ.",
    bullets: [
      "تأمين وتوفير كافة المواد والمستلزمات التشغيلية لجميع اللجان في مواعيدها.",
      "بناء شبكة علاقات قوية مع الموردين والتفاوض لتحقيق أقصى وفر للمبادرات.",
      "إدارة المخزون والتوزيع الداخلي للمواد بما يضمن الانسيابية ومنع الهدر."
    ],
    images: ["images/mushtarayat.jpeg"]
  },
  {
    title: "لجنة HR (الموارد البشرية)",
    eyebrow: "اللجان التطوعية وبناء الفريق",
    description: "تهدف اللجنة إلى متابعة وتنظيم شؤون المتطوعين من خلال استقبال الأعضاء الجدد، وتصنيف مهاراتهم، وتوجيههم للمكان الأنسب، وبناء روح الفريق الواحد، وحل المشكلات، وتوفير بيئة تطوعية محفزة ومريحة تشجع على الاستمرار والعطاء.",
    bullets: [
      "استقبال وتأهيل المتطوعين الجدد وتسكينهم في اللجان وفق شغفهم وخبراتهم.",
      "متابعة تفاعل المتطوعين وقياس مستوى الرضا وبناء العلاقات الإيجابية.",
      "تنظيم البرامج التدريبية والفعاليات التحفيزية وتكريم الكفاءات المتميزة."
    ],
    images: ["images/hr_new.jpg"]
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
let kenBurnsTween = null;

const toArabicNum = (num) => String(num).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[+d]);

/* ═══════════════════════════════════════════════════════════════
   DUAL ROTATING GRADIENT RINGS
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
        <stop offset="0%" stop-color="#d4b5ff" stop-opacity="1"/>
        <stop offset="50%" stop-color="#5f2cb8" stop-opacity="1"/>
        <stop offset="100%" stop-color="#120344" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="gB_${uid}" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#894ed5" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#3b0e91" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#gA_${uid})" stroke-width="2.6" stroke-dasharray="92 200" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#gB_${uid})" stroke-width="1.6" stroke-dasharray="48 240" stroke-linecap="round" stroke-dashoffset="-115"/>
  `;
  gsap.to(svg, { rotation: 360, duration: 7, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
  return svg;
}

/* ═══════════════════════════════════════════════════════════════
   LIGHT SWEEP SHIMMER
═══════════════════════════════════════════════════════════════ */
function triggerLightSweep(slideEl) {
  const sweep = document.createElement("div");
  sweep.className = "slide-shimmer";
  slideEl.appendChild(sweep);
  gsap.fromTo(sweep,
    { x: "-130%", opacity: 0 },
    { x: "190%", opacity: 0.9, duration: 1.1, ease: "power2.inOut", onComplete: () => sweep.remove() }
  );
}

/* ═══════════════════════════════════════════════════════════════
   KEN BURNS PAN / ZOOM
═══════════════════════════════════════════════════════════════ */
function startKenBurns(slideEl) {
  if (kenBurnsTween) kenBurnsTween.kill();
  const img = slideEl.querySelector(".circle-frame figure.active img");
  if (!img) return;
  gsap.set(img, { scale: 1, xPercent: 0, yPercent: 0 });
  const shiftX = (Math.random() > 0.5 ? 1 : -1) * 2.8;
  kenBurnsTween = gsap.to(img, {
    scale: 1.08,
    xPercent: shiftX,
    duration: 14,
    ease: "sine.inOut"
  });
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
      <div class="header-tag">خدمة المجتمع وتنمية البيئة</div>
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
    const r1 = ["الاستكشاف", "القوافل العينية", "الأسقف", "المياه", "القوافل الطبية", "الأيتام والمسنين"];
    const r2 = ["الملابس والمعارض", "الإطعام", "إعمار المساجد", "الميديا والاتصالات", "المشتريات", "HR"];
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
          <img src="${logo}" class="oc-head-logo" alt="شعار" />
          <div class="oc-head-titles">
            <div class="oc-ht-main">الهيكل التنظيمي لإدارة التطوع</div>
            <div class="oc-ht-sub">قطاع خدمة المجتمع وتنمية البيئة · جامعة الابتكار</div>
          </div>
        </div>
        <div class="oc-spine">
          <div class="oc-vline"></div>
          <div class="oc-pill vp">نائب رئيس الجامعة لخدمة المجتمع</div>
          <div class="oc-vline"></div>
          <div class="oc-pill dir">مدير إدارة التطوع</div>
          <div class="oc-vline"></div>
        </div>
        <div class="oc-tree-box">
          <div class="oc-h-connector"></div>
          <div class="oc-row">${renderRow(r1)}</div>
          <div class="oc-h-connector mid"></div>
          <div class="oc-row">${renderRow(r2)}</div>
        </div>
      </section>
    `;
  }

  if (s.type === "gallery") {
    return `
      <section class="slide" data-index="${i}" data-type="gallery">
        ${renderHeader()}
        <div class="slide-body ${dirClass}">
          <div class="copy-col">
            <span class="badge-eyebrow">${s.eyebrow}</span>
            <h2 class="heading-title">${s.title}</h2>
            <div class="heading-bar"></div>
            <h3 class="gallery-subhead">${s.gallery[0].label}</h3>
            <p class="main-desc gallery-dynamic-text">${s.gallery[0].text}</p>
            <span class="section-tag">أبرز مجالات الرعاية والتكافل</span>
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
          <div class="heading-bar"></div>
          <p class="main-desc">${s.description}</p>
          <span class="section-tag">أبرز المهام والاختصاصات</span>
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
    gsap.to([subheadEl, descEl], {
      opacity: 0,
      y: -6,
      duration: 0.15,
      onComplete: () => {
        subheadEl.textContent = activeFig.dataset.label;
        descEl.textContent = activeFig.dataset.text;
        gsap.fromTo([subheadEl, descEl], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
      }
    });
  }
  startKenBurns(slideEl);
}

/* ═══════════════════════════════════════════════════════════════
   ADVANCED CINEMATIC ENTRANCE ANIMATIONS
═══════════════════════════════════════════════════════════════ */
function playSlideEntrance(slideEl, idx) {
  triggerLightSweep(slideEl);
  startKenBurns(slideEl);

  // Title Slide Animation
  if (slideEl.classList.contains("title-slide")) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(slideEl.querySelectorAll(".orb"), { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 2.2, stagger: 0.25 }, 0);
    tl.fromTo(slideEl.querySelector(".hero-logo"), { scale: 0.82, opacity: 0, y: 35, filter: "blur(8px)" }, { scale: 1, opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "back.out(1.1)" }, 0.1);
    tl.fromTo(slideEl.querySelector(".title-heading"), { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8 }, 0.35);
    tl.fromTo(slideEl.querySelector(".title-line"), { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.7, transformOrigin: "center" }, 0.5);
    tl.fromTo(slideEl.querySelector(".title-sub"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.75 }, 0.65);
    return;
  }

  // Org Chart Slide Animation
  if (slideEl.classList.contains("orgchart-slide")) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(slideEl.querySelectorAll(".oc-glow"), { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 2.2, stagger: 0.2 }, 0);
    tl.fromTo(slideEl.querySelector(".oc-head"), { opacity: 0, y: -22 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1);
    tl.fromTo(slideEl.querySelectorAll(".oc-spine .oc-pill"), { opacity: 0, scale: 0.88, y: 12 }, { opacity: 1, scale: 1, y: 0, stagger: 0.16, duration: 0.6 }, 0.3);
    tl.fromTo(slideEl.querySelectorAll(".oc-h-connector"), { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.7, transformOrigin: "center" }, 0.65);
    tl.fromTo(slideEl.querySelectorAll(".oc-branch"), { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.55 }, 0.8);
    return;
  }

  // Committee / About / Gallery Slides Animation
  const isEven = (idx % 2 === 0);
  const mediaX = isEven ? -55 : 55;
  const copyX = isEven ? 40 : -40;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  const mediaCol = slideEl.querySelector(".media-col");
  const eyebrow = slideEl.querySelector(".badge-eyebrow");
  const title = slideEl.querySelector(".heading-title");
  const bar = slideEl.querySelector(".heading-bar");
  const subhead = slideEl.querySelector(".gallery-subhead");
  const desc = slideEl.querySelector(".main-desc, .about-card-box");
  const sectionTag = slideEl.querySelector(".section-tag");
  const bullets = slideEl.querySelectorAll(".bullets-list li");

  // Media entrance (flowing glide with soft blur focus)
  if (mediaCol) {
    tl.fromTo(mediaCol, { opacity: 0, x: mediaX, scale: 0.92, filter: "blur(6px)" }, { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", duration: 0.9 }, 0.05);
  }

  // Sequential typography reveals
  if (eyebrow) {
    tl.fromTo(eyebrow, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.45 }, 0.15);
  }
  if (title) {
    tl.fromTo(title, { opacity: 0, x: copyX, y: 10 }, { opacity: 1, x: 0, y: 0, duration: 0.65 }, 0.2);
  }
  if (bar) {
    tl.fromTo(bar, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.55, transformOrigin: "right center" }, 0.35);
  }
  if (subhead) {
    tl.fromTo(subhead, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 }, 0.4);
  }
  if (desc) {
    tl.fromTo(desc, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.45);
  }
  if (sectionTag) {
    tl.fromTo(sectionTag, { opacity: 0, x: 12 }, { opacity: 1, x: 0, duration: 0.45 }, 0.55);
  }
  if (bullets.length) {
    tl.fromTo(bullets, { opacity: 0, x: 22 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.5 }, 0.65);
  }
}

/* ═══════════════════════════════════════════════════════════════
   PERSPECTIVE DEPTH SHIFT SLIDE ENGINE
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
  gsap.killTweensOf([currentSlide, nextSlide]);
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

  // Outgoing: deep pushback with subtle blur
  tl.to(currentSlide, {
    opacity: 0,
    x: dir * -55,
    scale: 0.95,
    filter: "blur(6px)",
    duration: 0.55,
    ease: "power2.inOut"
  }, 0);

  // Incoming: smooth expansion into focus
  tl.fromTo(nextSlide, {
    opacity: 0,
    x: dir * 55,
    scale: 1.04,
    filter: "blur(6px)"
  }, {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.55,
    ease: "power2.out"
  }, 0.06);
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
   2.5D PARALLAX INTERACTION (LAYER SEPARATION)
═══════════════════════════════════════════════════════════════ */
document.addEventListener("mousemove", (e) => {
  if (isAnimating) return;
  const slide = document.querySelector(".slide.active");
  if (!slide || slide.classList.contains("orgchart-slide")) return;

  const cx = (e.clientX / window.innerWidth) - 0.5;
  const cy = (e.clientY / window.innerHeight) - 0.5;

  const media = slide.querySelector(".media-col");
  const copy = slide.querySelector(".copy-col");

  if (media) gsap.to(media, { x: cx * -22, y: cy * -16, duration: 1.6, ease: "power1.out" });
  if (copy) gsap.to(copy, { x: cx * 14, y: cy * 10, duration: 1.6, ease: "power1.out" });
});

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
