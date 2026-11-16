(function () {
  const DICT = {
    en: {
      "nav.tagline": "Doors and Gates",
      "nav.products": "Products",
      "nav.about": "About Us",
      "nav.work": "Our Work",
      "nav.contact": "Contact",
      "hero.badge": "25 Years of Doors and Gates",
      "hero.title1": "Doors and Gates,",
      "hero.title2": "Done Right.",
      "hero.years": "25 Years",
      "hero.yearsLabel": "of experience making and installing doors, gates and windows",
      "hero.cta": "See Our Products",
      "hero.card1n": "Gates",
      "hero.card1p": "Made to measure",
      "hero.card2n": "Windows",
      "hero.card2p": "Measured, made, installed",
      "stats.1": "Years making and installing doors and gates",
      "stats.2": "Product lines: doors, gates and windows",
      "stats.3": "Made to measure for your opening",
      "cta.call": "Call Us",
      "cta.email": "Email Us",
      "cta.instagram": "Instagram",
      "products.title": "Doors, Gates and Windows",
      "products.all": "All",
      "products.doors": "Doors",
      "products.gates": "Gates",
      "products.garage": "Garage Doors",
      "products.windows": "Windows",
      "products.quote": "Get a free quote →",
      "products.p1n": "Entrance Doors",
      "products.p1p": "Wood, steel and glass, made to your opening.",
      "products.p2n": "Sliding Gates",
      "products.p2p": "Measured and installed by our team.",
      "products.p3n": "Garage Doors",
      "products.p3p": "Sectional and swing doors for any garage.",
      "products.p4n": "Aluminium Windows",
      "products.p4p": "Clean lines, built for Kosovo's climate.",
      "products.p5n": "Security Doors",
      "products.p5p": "Reinforced steel for homes and businesses.",
      "products.p6n": "Pedestrian Gates",
      "products.p6p": "Matched to your fence and sliding gate.",
      "about.caption": "Every door starts with a careful measurement.",
      "about.eyebrow": "Our Principles",
      "about.title": "Why Choose Us",
      "about.body": "25 years of making and installing doors, gates and windows in Kosovo. We measure, we make, and we install, so the result fits the first time.",
      "about.a1t": "25 Years of Experience",
      "about.a1b": "For 25 years we have made and installed doors, gates and windows, one job at a time, with the same attention to detail.",
      "about.a2t": "Made to Measure",
      "about.a2b": "Every door, gate and window is measured on site and made for that exact opening, not pulled off a shelf.",
      "about.a3t": "Measure, Make, Install",
      "about.a3b": "One company handles all three steps, so there is one point of contact from the first measurement to the finished installation.",
      "about.a4t": "Doors, Gates and Windows",
      "about.a4b": "Whatever the opening in your home or business, we have a door, gate or window solution for it.",
      "how.eyebrow": "How We Work",
      "how.title": "Measure.<br>Make. Install.",
      "how.body": "Three steps, handled by the same team from start to finish, so what we measure is exactly what gets installed.",
      "how.s1n": "We Measure",
      "how.s1s": "On site, for your exact opening",
      "how.s2n": "We Make",
      "how.s2s": "Built to that measurement, not a standard size",
      "how.s3n": "We Install",
      "how.s3s": "Fitted by our own team, not a subcontractor",
      "how.badgeSub": "years of experience",
      "work.cta": "Call for a Quote ↗",
      "work.title": "25 Years of Doors and Gates, Made and Installed by Us",
      "work.getInTouch": "Get in Touch",
      "inside.eyebrow": "Inside Toni Pro AS",
      "inside.t1": "Made to",
      "inside.t2": "Measure,",
      "inside.t3": "Built to Last.",
      "inside.body": "25 years in, the job has not changed: measure carefully, build it properly, and install it ourselves. That is still how every door, gate and window leaves our workshop.",
      "inside.h1t": "Solid Materials",
      "inside.h1d": "Wood, steel, aluminium and glass chosen for the job, not the cheapest option on the shelf.",
      "inside.h2t": "Made to Measure",
      "inside.h2d": "We measure your opening on site, then build to that exact size. Nothing is forced to fit.",
      "inside.h3t": "Installed By Us",
      "inside.h3d": "The same team that measures and makes it also installs it, so nothing gets lost between steps.",
      "contact.title": "Get a Free Quote",
      "contact.sub": "Tell us what you need and we will get back to you. No obligation.",
      "contact.placeholder": "What do you need? (e.g. entrance door, 90x210cm)",
      "contact.send": "Send",
      "footer.tagline": "25 years of doors and gates done right.",
      "footer.linksLbl": "Links",
      "footer.contactLbl": "Contact",
      "footer.copy": "© 2026 Toni Pro AS. All rights reserved.",
    },
    sq: {
      "nav.tagline": "Dyer dhe Kapi",
      "nav.products": "Produktet",
      "nav.about": "Rreth Nesh",
      "nav.work": "Punët Tona",
      "nav.contact": "Kontakt",
      "hero.badge": "25 Vjet Dyer dhe Kapi",
      "hero.title1": "Dyer dhe Kapi,",
      "hero.title2": "Të Punuara si Duhet.",
      "hero.years": "25 Vjet",
      "hero.yearsLabel": "përvojë në prodhimin dhe instalimin e dyerve, kapive dhe dritareve",
      "hero.cta": "Shiko Produktet Tona",
      "hero.card1n": "Kapi",
      "hero.card1p": "Të punuara sipas masës",
      "hero.card2n": "Dritare",
      "hero.card2p": "Matje, prodhim, instalim",
      "stats.1": "Vjet duke prodhuar dhe instaluar dyer e kapi",
      "stats.2": "Linja produktesh: dyer, kapi dhe dritare",
      "stats.3": "Të punuara sipas masës për hapësirën tënde",
      "cta.call": "Na Thirr",
      "cta.email": "Na Shkruaj",
      "cta.instagram": "Instagram",
      "products.title": "Dyer, Kapi dhe Dritare",
      "products.all": "Të Gjitha",
      "products.doors": "Dyer",
      "products.gates": "Kapi",
      "products.garage": "Dyer Garazhi",
      "products.windows": "Dritare",
      "products.quote": "Kërko ofertë falas →",
      "products.p1n": "Dyer Hyrëse",
      "products.p1p": "Dru, çelik dhe xham, të punuara sipas hapësirës tënde.",
      "products.p2n": "Kapi Rrëshqitëse",
      "products.p2p": "Të matura dhe instaluara nga ekipi ynë.",
      "products.p3n": "Dyer Garazhi",
      "products.p3p": "Dyer segmentale dhe me hapje për çdo garazh.",
      "products.p4n": "Dritare Alumini",
      "products.p4p": "Linja të pastra, të ndërtuara për klimën e Kosovës.",
      "products.p5n": "Dyer Sigurie",
      "products.p5p": "Çelik i përforcuar për shtëpi dhe biznese.",
      "products.p6n": "Kapi Këmbësorësh",
      "products.p6p": "Të përshtatura me gardhin dhe kapinë tënde rrëshqitëse.",
      "about.caption": "Çdo derë fillon me një matje të kujdesshme.",
      "about.eyebrow": "Parimet Tona",
      "about.title": "Pse Na Zgjidhni",
      "about.body": "25 vjet duke prodhuar dhe instaluar dyer, kapi dhe dritare në Kosovë. Matim, prodhojmë dhe instalojmë, që rezultati të përshtatet që në herën e parë.",
      "about.a1t": "25 Vjet Përvojë",
      "about.a1b": "Për 25 vjet kemi prodhuar dhe instaluar dyer, kapi dhe dritare, një punë në herë, me të njëjtën kujdes për detaje.",
      "about.a2t": "Sipas Masës",
      "about.a2b": "Çdo derë, kapi dhe dritare matet në vend dhe prodhohet për atë hapësirë të saktë, jo e marrë nga rafti.",
      "about.a3t": "Matje, Prodhim, Instalim",
      "about.a3b": "Një kompani kujdeset për të tri hapat, kështu që ka një pikë kontakti nga matja e parë deri te instalimi përfundimtar.",
      "about.a4t": "Dyer, Kapi dhe Dritare",
      "about.a4b": "Cilado qoftë hapësira në shtëpinë apo biznesin tënd, kemi një zgjidhje dere, kapie apo dritareje për të.",
      "how.eyebrow": "Si Punojmë",
      "how.title": "Matje.<br>Prodhim. Instalim.",
      "how.body": "Tri hapa, të kryera nga i njëjti ekip nga fillimi deri në fund, që ajo që matim të jetë pikërisht ajo që instalohet.",
      "how.s1n": "Matim",
      "how.s1s": "Në vend, për hapësirën tënde të saktë",
      "how.s2n": "Prodhojmë",
      "how.s2s": "Ndërtuar sipas asaj matjeje, jo një masë standarde",
      "how.s3n": "Instalojmë",
      "how.s3s": "Montuar nga ekipi ynë, jo nga nënkontraktorë",
      "how.badgeSub": "vjet përvojë",
      "work.cta": "Thirr për Ofertë ↗",
      "work.title": "25 Vjet Dyer dhe Kapi, Prodhuar dhe Instaluar nga Ne",
      "work.getInTouch": "Na Kontakto",
      "inside.eyebrow": "Brenda Toni Pro AS",
      "inside.t1": "Sipas",
      "inside.t2": "Masës,",
      "inside.t3": "E Qëndrueshme.",
      "inside.body": "Pas 25 vjetësh, puna nuk ka ndryshuar: matje e kujdesshme, ndërtim si duhet dhe instalim nga vetë ne. Kështu del çdo derë, kapi dhe dritare nga punishtja jonë.",
      "inside.h1t": "Materiale Solide",
      "inside.h1d": "Dru, çelik, alumini dhe xham të zgjedhura për punën, jo opsioni më i lirë në raft.",
      "inside.h2t": "Sipas Masës",
      "inside.h2d": "Matim hapësirën tënde në vend, pastaj ndërtojmë sipas asaj mase të saktë. Asgjë nuk futet me forcë.",
      "inside.h3t": "E Instaluar nga Ne",
      "inside.h3d": "I njëjti ekip që mat dhe prodhon gjithashtu instalon, kështu që asgjë nuk humbet mes hapave.",
      "contact.title": "Kërko Ofertë Falas",
      "contact.sub": "Na trego çfarë të duhet dhe do të përgjigjemi. Pa asnjë detyrim.",
      "contact.placeholder": "Çfarë të duhet? (p.sh. derë hyrëse, 90x210cm)",
      "contact.send": "Dërgo",
      "footer.tagline": "25 vjet dyer dhe kapi, të punuara si duhet.",
      "footer.linksLbl": "Lidhje",
      "footer.contactLbl": "Kontakt",
      "footer.copy": "© 2026 Toni Pro AS. Të gjitha të drejtat të rezervuara.",
    },
  };

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = DICT[lang] && DICT[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = DICT[lang] && DICT[lang][key];
      if (val !== undefined) el.setAttribute("placeholder", val);
    });
    document.querySelectorAll(".langsw button").forEach((btn) => {
      btn.classList.toggle("on", btn.dataset.lang === lang);
    });
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }

  function initLang() {
    let saved = "en";
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "sq") saved = stored;
    } catch (e) {}
    applyLang(saved);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    document.querySelectorAll(".langsw button").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  });
})();
