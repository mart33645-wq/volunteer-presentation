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
    type: "orgchart_rich",
    part: 1,
    title: "الهيكل التنظيمي لإدارة التطوع",
    subtitle: "جامعة الابتكار",
    committees: [
      {
        name: "لجنة الاستكشاف",
        points: [
          "تم عمل استكشاف لـ ٨٥ حالة، ما بين حالات تم استكشافها من خلال القوافل وحالات فردية."
        ]
      },
      {
        name: "لجنة القوافل العينية",
        points: [
          "تم مساعدة ٢٤٠ أسرة عبر: كامب أسوان، كامب المنيا، وقوافل أثر (١ ههيا، ٢ الإسماعيلية، ٣ الصف، ٤ الإسماعيلية).",
          "تغطية حالات فردية في العاشر من رمضان وبلبيس (عدد ١٥ حالة فردية).",
          "تم مساعدة وتجهيز ٨ عرايس في السنة."
        ]
      },
      {
        name: "لجنة الأسقف",
        points: [
          "تم عمل ٣٣ سقفاً لحماية وتأمين منازل الأسر الأكثر احتياجاً."
        ]
      },
      {
        name: "لجنة المياه",
        points: [
          "تم عمل ٣ وصلات مياه صالحة للشرب للأسر المستحقة."
        ]
      },
      {
        name: "لجنة القوافل الطبية",
        points: [
          "المساعدة في الكشف على ٧٠ حالة من أفراد الجامعة.",
          "التبرع بالدم بعدد ٥٠ كيس دم.",
          "تغطية متطلبات أكثر من ١٠ أفراد بعلاج شهري بإجمالي مساعدات وصل إلى ١٣٠ فرداً.",
          "تم منح ٨٠ شهادة إسعافات أولية لمتطوعي إدارة التطوع."
        ]
      },
      {
        name: "لجنة زيارات الأيتام والمسنين",
        points: [
          "٦ زيارات دار أيتام منهم احتفال بيوم اليتيم.",
          "زيارتين دار مسنات.",
          "حفلة أطفال وزيارة مسنات في قافلة أثر ٤."
        ]
      }
    ]
  },
  {
    type: "orgchart_rich",
    part: 2,
    title: "الهيكل التنظيمي لإدارة التطوع",
    subtitle: "جامعة الابتكار",
    committees: [
      {
        name: "لجنة فرز وتوزيع الملابس والمعارض",
        points: [
          "تم استلام أكثر من ٥٠٠ قطعة تبرعات.",
          "تم توزيع الملابس على الأسر في قافلة أثر ٣ وتوزيعات فردية.",
          "تم عمل معرض ملابس خلال كامب المنيا.",
          "تم إقامة معرض ملابس في قافلة أثر ٤.",
          "تم إقامة معرض ملابس وكساء مدارس داخل الجامعة."
        ]
      },
      {
        name: "لجنة الإطعام",
        points: [
          "مائدة الطعام ٣٠ يوم بعدد (١٨,٥٠٠) وجبة.",
          "تم تعبئة ٥٠٠ كرتونة مواد غذائية أساسية.",
          "تم تعبئة شنط غذائية لقوافل رمضان بعدد (٢٨٠ شنطة) + تعبئة عدد (١٠٠ شنطة) أخرى.",
          "تم توزيع في كامب أسوان والمنيا بعدد (٤٠٠ شنطة).",
          "تم توزيع في الـ ٤ قوافل أثر بعدد (٦٠٠ شنطة)."
        ]
      },
      {
        name: "لجنة إعمار المساجد",
        points: [
          "الصيانة الشاملة للمرافق والكهرباء والسباكة والصوتيات، وفرش المساجد والمصاحف وأجهزة التهوية."
        ]
      },
      {
        name: "لجنة الميديا",
        points: [
          "تغطية احتفال روح واحدة.",
          "تغطية جميع قوافل السنة أثر (١ / ٢ / ٣ / ٤).",
          "تغطية جميع زيارات الأيتام والمسنين والاستكشافات والتوزيعات الفردية.",
          "تغطية جميع ما تم في لجنة الإطعام من زيارة بنك الطعام والمائدة والأضحية وتعبئة الشنط.",
          "تم تغطية كامب المنيا وكامب أسوان.",
          "تم تغطية دورة الإسعافات الأولية وحملة التبرع بالدم."
        ]
      },
      {
        name: "لجنة الاتصالات",
        points: [
          "قامت بتغطية والتنسيق الفعال لكافة الإيفنتات والفعاليات القائمة بإدارة التطوع."
        ]
      },
      {
        name: "لجنة المشتريات",
        points: [
          "قامت بالمشاركة وتوفير وتجهيز المشتريات لكافة الإيفنتات والفعاليات القائمة بإدارة التطوع."
        ]
      },
      {
        name: "لجنة HR (الموارد البشرية)",
        points: [
          "تنظيم وإدارة شؤون المتطوعين، إجراء المقابلات، التقييم، وبناء وتطوير مهارات الفريق."
        ]
      }
    ]
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
      "إقامة حفلات ترفيهية وتوزيع الهدايا وترسيخ قيم التراحم والتكافل."
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
      "توزيع كراتين المواد الغذائية الأساسية الجافة على الأسر المتعففة.",
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
    title: "لجنة الميديا",
    eyebrow: "اللجان التطوعية والإنتاج المرئي",
    description: "لجنة الميديا هي عين إدارة التطوع؛ نوثّق كل لحظة وكل إنجاز بصورة وفيديو يوصل أثر الخير للناس، ونحوّل مجهود المتطوعين وقصصهم الملهمة لمحتوى إبداعي يخلّي رسالة التطوع تصل إلى قلوب الجميع وتلهم غيرنا بالعطاء.",
    bullets: [
      "التوثيق الفوتوغرافي والسينمائي الاحترافي لكافة الأنشطة والقوافل الميدانية.",
      "صناعة وتصميم المحتوى المرئي والرقمي الإبداعي ونشر قصص النجاح الملهمة.",
      "إبراز الهوية البصرية لإدارة التطوع ونشر ثقافة العمل التطوعي مجتمعيًا."
    ],
    images: ["images/media.jpeg"]
  },
  {
    title: "لجنة الاتصالات",
    eyebrow: "اللجان التطوعية والتنسيق والمتابعة",
    description: "تهدف إلى التواصل المستمر والفعال مع المتطوعين ومتابعتهم وإبلاغهم بكل ما يخص الأنشطة والفعاليات، والرد على استفساراتهم وتنظيم قنوات التواصل بينهم وبين باقي لجان إدارة التطوع بكل سلاسة وتنظيم.",
    bullets: [
      "التواصل المباشر والمستمر مع المتطوعين ومتابعة جاهزيتهم للفعاليات.",
      "إدارة قنوات التواصل الرسمية والرد السريع على استفسارات وتساؤلات الأعضاء.",
      "تنسيق الاتصال والربط التنفيذي بين كافة اللجان لضمان انسيابية العمل الميداني."
    ],
    images: ["images/itisalat.jpeg"]
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
    eyebrow: "اللجان التطوعية وبناء وتطوير الفريق",
    description: "تهدف إلى متابعة وتنظيم شؤون المتطوعين من خلال استقبال الأعضاء الجدد والتواصل معهم ومتابعة مشاركتهم وتفاعلهم، وبناء روح الفريق، وحل المشكلات، وتوفير بيئة تطوعية مريحة تشجع الجميع على الاستمرار والعطاء.",
    bullets: [
      "استقبال وتأهيل وتسكين المتطوعين الجدد وتنمية قدراتهم القيادية.",
      "متابعة التفاعل والتواصل الإيجابي وحل أي معوقات تواجه أعضاء الفريق.",
      "خلق بيئة تطوعية محفزة ومريحة وتنظيم فعاليات التكريم والتقدير للمتميزين."
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

  if (s.type === "orgchart_rich") {
    const renderCards = (arr) => arr.map(c => `
      <div class="ocr-card">
        <h3 class="ocr-card-title">${c.name}</h3>
        <div class="ocr-team-boxes-row">
          <span class="ocr-box leader">ليدر</span>
          <span class="ocr-box members">أعضاء</span>
        </div>
        <div class="ocr-achievements-badge">✨ الإنجازات :</div>
        <ul class="ocr-bullets">
          ${c.points.map(p => `<li><span>${p}</span></li>`).join("")}
        </ul>
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
            <div class="oc-ht-main">${s.title}</div>
            <div class="oc-ht-sub">${s.subtitle}</div>
          </div>
        </div>
        <div class="oc-spine">
          <div class="oc-vline"></div>
          <div class="oc-pill vp">نائب رئيس الجامعة لخدمة المجتمع</div>
          <div class="oc-vline"></div>
          <div class="oc-pill dir">مدير إدارة التطوع</div>
          <div class="oc-vline"></div>
          <div class="oc-pill comm">اللجان التطوعية</div>
          <div class="oc-vline"></div>
        </div>
        <div class="ocr-grid count-${s.committees.length}">
          ${renderCards(s.committees)}
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
