import type { Metadata } from "next";

const pageTitle = "History of the Land | Cherokee Heritage & Ecusta Origins | Ecusta Land";
const pageDescription =
  "The Cherokee called these waters Ecusta — rippling waters. For millennia, this was Cherokee hunting ground. Explore 10,000 years of indigenous history, the Estatoe Path, the Davidson River, and the journey from sacred land to paper mill to a new vision rooted in ancestral wisdom.";
const pageUrl = "https://www.ecustaland.org/history";
const pageImage = "/images/history/cherokee-hunting-grounds.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Ecusta Land",
    type: "website",
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: "Cherokee hunters along the Davidson River — 10,000 years of indigenous history on the Ecusta land.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

/* ── data ── */

const timeline = [
  {
    era: "10,000+ Years Ago",
    title: "First Peoples of the Blue Ridge",
    text: "The ancestors of the Cherokee sparsely occupied 140,000 square miles across the southeastern United States. They were among the first inhabitants of North America, developing a civilization that would persist for millennia in these ancient mountains — among the oldest on Earth, with rocks dating to over 1 billion years.",
  },
  {
    era: "Before 1000 CE",
    title: "Cherokee Culture Takes Root",
    text: "The Cherokee developed linguistics, agriculture, and sophisticated land management across the Blue Ridge. They cultivated the 'Three Sisters' — corn, beans, and squash — and built extensive knowledge of the medicinal plants that thrived in one of the most biodiverse temperate forests on Earth.",
  },
  {
    era: "Ancient Trade Routes",
    title: "The Estatoe Path",
    text: "The Cherokee established the Estatoe Path — a major trading route connecting mountain settlements to the village of Estatoe and into South Carolina. The path crossed the mountains and waterways at the Davidson River, the exact site where the Ecusta mill would later stand. This was also a primary trail for annual hunting trips through Transylvania County.",
  },
  {
    era: "For Millennia",
    title: "Cherokee Hunting Grounds",
    text: "The Davidson River valley and surrounding mountains served as Cherokee hunting land for thousands of years. The forests teemed with deer, elk, bear, and turkey. The river provided fish and the purest water in the region. The Cherokee did not merely use the land — they were its keepers.",
  },
  {
    era: "1540",
    title: "First European Contact",
    text: "Spaniard Hernando De Soto arrived seeking riches and converts, beginning two centuries of increasing pressure on Cherokee lands. The encounter would fundamentally alter the trajectory of indigenous life in the Blue Ridge.",
  },
  {
    era: "1700s–1800s",
    title: "Settlement & Displacement",
    text: "European settlers arrived in the Davidson River area. Benjamin Allison built his house near the Davidson River in 1815 — today the oldest frame building in Western North Carolina. Small communities formed around Cathy's Creek, Dunn's Rock, and the river.",
  },
  {
    era: "1830–1838",
    title: "The Indian Removal Act & Trail of Tears",
    text: "Congress passed the Indian Removal Act in 1830. Beginning in 1838, the government forcibly relocated the Cherokee from North Carolina to Oklahoma — an event known as the Trail of Tears. Some Cherokee refused to leave and were later recognized in 1868 as the Eastern Band of Cherokee Indians, who remain in western North Carolina to this day.",
  },
  {
    era: "1850s",
    title: "Davidson River Iron Works",
    text: "Charles Moore, James W. Patton, and Thomas Miller established the Davidson River Iron Works — one of the area's first major industrial operations on what had been Cherokee land.",
  },
  {
    era: "1938–1939",
    title: "Ecusta Paper Corporation Founded",
    text: "Harry Hans Straus, a German immigrant, chose the Davidson River site for the same reason the Cherokee had valued it for millennia — the extraordinary purity of its water. Straus held a naming contest, and the founders deliberately chose 'Ecusta' — a Cherokee word meaning 'rippling waters' — to honor the indigenous heritage of the land they were building on. 225 acres were acquired for approximately $50,000.",
  },
  {
    era: "1939–2002",
    title: "The Mill Era",
    text: "For over 60 years, the Ecusta mill produced fine cigarette paper, Bible paper, and specialty products — once the largest employer in Transylvania County. Olin Mathieson acquired the company in 1949. The mill changed hands multiple times before closing in 2002, leaving environmental contamination and an uncertain future.",
  },
  {
    era: "2002–Present",
    title: "The Land Waits",
    text: "Since the mill's closure, the Ecusta site has sat largely dormant — contaminated soil, uncertain ownership, community debate. But the land remembers. The Davidson River still flows with some of the purest water in the eastern United States. The mountains still hold their ancient medicine. The Cherokee word remains: Ecusta. Rippling waters.",
  },
  {
    era: "The Future",
    title: "Ecusta Tohi — The Return to Healing",
    text: "The Ecusta Tohi vision proposes what the Cherokee always knew: this land is a healer. Through sunflower phytoremediation, Cherokee medicine walks, wellness experiences, and sacred architecture, the vision is to return the Ecusta site to its original purpose — a place of balance, vitality, and deep connection to the Earth.",
  },
];

const cherokeeDirections = [
  { direction: "East", color: "#c0392b", colorName: "Red", meaning: "Victory, power, success. Spring — the re-awakening after a long sleep. The Cherokee word for East is ka-lv-gv." },
  { direction: "North", color: "#2471a3", colorName: "Blue", meaning: "Defeat, trouble, endurance. Winter — a season of survival and waiting. The Cherokee word for North means 'cold' — u-yv-tlv." },
  { direction: "West", color: "#2c3e50", colorName: "Black", meaning: "Death, the final passage. Autumn — the end of Life's Cycle. The Cherokee word for West is wu-de-li-gv." },
  { direction: "South", color: "#f0f0f0", colorName: "White", meaning: "Peace, happiness, serenity. Summer — a time of plenty. The Cherokee word for South means 'warm' — u-ga-no-wa." },
];

const additionalDirections = [
  { direction: "Up Above", colorName: "Yellow", meaning: "The sky world, the sun, the source of light and vision." },
  { direction: "Down Below", colorName: "Brown", meaning: "The earth, the ground beneath us, the flesh of Mother Earth." },
  { direction: "Here in the Center", colorName: "Green", meaning: "The self, the present moment, the eternal fire — where all directions meet." },
];

const keeperQuotes = [
  "The Great One intended humans to be keeper of the Earth.",
  "Only 10% of 350,000 plant species are known. The rest are gifts of nature waiting to be understood.",
  "She is the source of life. Not the resource.",
  "How do we begin our spiritual relationship with Mother Earth? Cherokee wisdom is part of that answer.",
];

const plantMedicine = [
  { name: "Ginseng", use: "Energy, vitality, immune support — one of the most sought-after medicinal roots in the world, native to these mountains." },
  { name: "Goldenseal", use: "Antimicrobial, digestive health, wound healing — a cornerstone of Cherokee herbal medicine." },
  { name: "Black Cohosh", use: "Women's health, pain relief, anti-inflammatory — used by Cherokee healers for centuries." },
  { name: "Bloodroot", use: "Skin conditions, respiratory health, ceremonial use — a powerful and sacred plant." },
  { name: "Wild Yam", use: "Digestive wellness, muscle relief — gathered along the forest floor of the Appalachian understory." },
  { name: "Sunflower", use: "Cherokee used an infusion of sunflower leaves to treat kidneys. Seeds for food and oil for over 3,000 years. Now: phytoremediation to heal the land itself." },
];

export default function HistoryPage() {
  return (
    <main className="history-page">
      <style>{`
        .history-page { background: #f6f2e7; color: #17231d; overflow-wrap: anywhere; }
        .history-page * { min-width: 0; }

        /* hero */
        .hist-hero { min-height: 80vh; display: grid; grid-template-columns: 1fr 1fr; position: relative; overflow: hidden; }
        .hist-hero-text { padding: clamp(3rem,7vw,6rem) clamp(1.5rem,5vw,5rem); display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg,#102016,#1c3424); color: #fffaf0; }
        .hist-hero-img { position: relative; }
        .hist-hero-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .hist-hero-img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, #102016 0%, transparent 30%); }

        /* type */
        .eyebrow { color: #d1a436; text-transform: uppercase; letter-spacing: .16em; font-weight: 900; font-size: .78rem; margin: 0 0 1rem; }
        .history-page h1 { font-size: clamp(2.8rem,7vw,7rem); line-height: .92; letter-spacing: -.06em; margin: 0 0 1.5rem; text-wrap: balance; }
        .history-page h2 { font-size: clamp(1.9rem,4vw,4rem); line-height: 1; letter-spacing: -.04em; margin: 0 0 1rem; text-wrap: balance; }
        .history-page h3 { margin: 0 0 .5rem; font-size: 1.25rem; line-height: 1.15; }
        .history-page p { color: #58655d; line-height: 1.7; }
        .hist-hero p { color: rgba(255,250,240,.76); }
        .hero-subtitle { font-size: clamp(1.05rem,1.8vw,1.35rem); max-width: 680px; }

        /* sections */
        .section { padding: clamp(4rem,9vw,8rem) clamp(1rem,5vw,6rem); }
        .section-heading { max-width: 980px; margin: 0 auto clamp(2rem,5vw,4rem); text-align: center; }
        .section-heading p { max-width: 780px; margin-left: auto; margin-right: auto; }

        /* card base */
        .card { border: 1px solid rgba(23,35,29,.16); border-radius: 24px; box-shadow: 0 24px 80px rgba(16,32,22,.10); background: rgba(255,250,240,.82); padding: 1.5rem; }

        /* timeline */
        .timeline-section { background: linear-gradient(180deg,#fffaf0,#f6f2e7); }
        .timeline { max-width: 900px; margin: 0 auto; position: relative; }
        .timeline::before { content: ''; position: absolute; left: 24px; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg,#d1a436,#496b43,#102016); }
        .tl-item { position: relative; padding-left: 64px; margin-bottom: 2.5rem; }
        .tl-dot { position: absolute; left: 14px; top: 6px; width: 22px; height: 22px; border-radius: 50%; background: #d1a436; border: 3px solid #f6f2e7; box-shadow: 0 0 0 2px #d1a436; }
        .tl-era { color: #d1a436; font-weight: 900; font-size: .82rem; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .25rem; }
        .tl-item h3 { color: #17231d; }
        .tl-item:last-child .tl-dot { background: #496b43; box-shadow: 0 0 0 2px #496b43; }

        /* sacred directions */
        .directions-section { background: linear-gradient(180deg,#102016,#183022); color: #fffaf0; }
        .directions-section p { color: rgba(255,250,240,.72); }
        .directions-section .eyebrow { color: #f0d982; }
        .dir-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; max-width: 1100px; margin: 0 auto; }
        .dir-card { border-radius: 24px; padding: 1.5rem; background: rgba(255,250,240,.06); border: 1px solid rgba(255,250,240,.14); text-align: center; }
        .dir-swatch { width: 56px; height: 56px; border-radius: 50%; margin: 0 auto 1rem; border: 3px solid rgba(255,250,240,.25); }
        .dir-card h3 { color: #f0d982; }
        .dir-card p { font-size: .92rem; }
        .extra-dir { display: flex; gap: 1rem; max-width: 1100px; margin: 1.5rem auto 0; justify-content: center; flex-wrap: wrap; }
        .extra-dir-card { border-radius: 999px; padding: .75rem 1.5rem; background: rgba(255,250,240,.06); border: 1px solid rgba(255,250,240,.14); display: flex; align-items: center; gap: .75rem; }
        .extra-dir-dot { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; border: 2px solid rgba(255,250,240,.25); }
        .extra-dir-card span { color: #f0d982; font-weight: 700; font-size: .9rem; }

        /* image feature */
        .feat-section { position: relative; min-height: 60vh; display: flex; align-items: center; overflow: hidden; }
        .feat-bg { position: absolute; inset: 0; }
        .feat-bg img { width: 100%; height: 100%; object-fit: cover; }
        .feat-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(16,32,22,.92) 0%, rgba(16,32,22,.6) 50%, transparent 100%); }
        .feat-content { position: relative; z-index: 1; padding: clamp(3rem,7vw,6rem) clamp(1.5rem,5vw,6rem); max-width: 650px; color: #fffaf0; }
        .feat-content p { color: rgba(255,250,240,.76); }

        /* medicine wheel image */
        .wheel-section { text-align: center; padding: clamp(4rem,9vw,8rem) clamp(1rem,5vw,6rem); background: radial-gradient(circle at 50% 30%, rgba(209,164,54,.12), transparent 25%), linear-gradient(180deg,#f6f2e7,#fffaf0); }
        .wheel-img { max-width: 600px; margin: 0 auto; border-radius: 50%; overflow: hidden; box-shadow: 0 32px 100px rgba(16,32,22,.2); aspect-ratio: 1/1; }
        .wheel-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* plant medicine */
        .plant-section { background: radial-gradient(circle at 15% 20%, rgba(73,107,67,.15), transparent 25%), linear-gradient(180deg,#fffaf0,#f6f2e7); }
        .plant-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1rem; max-width: 1100px; margin: 0 auto; }
        .plant-card { padding: 1.35rem; }
        .plant-card h3 { color: #496b43; }

        /* quotes */
        .quotes-section { background: linear-gradient(135deg,#1a3322,#102016); color: #fffaf0; }
        .quote-grid { max-width: 900px; margin: 0 auto; display: grid; gap: 1.5rem; }
        .quote-card { border-left: 4px solid #d1a436; padding: 1.25rem 1.5rem; background: rgba(255,250,240,.06); border-radius: 0 16px 16px 0; }
        .quote-card p { color: rgba(255,250,240,.82); font-size: 1.15rem; font-style: italic; line-height: 1.6; }

        /* naming */
        .naming-section { background: linear-gradient(180deg,#f6f2e7,#fffaf0); }
        .naming-card { max-width: 900px; margin: 0 auto; padding: clamp(2rem,4vw,3rem); background: rgba(240,217,130,.2); border: 1px solid rgba(209,164,54,.3); border-radius: 24px; text-align: center; }
        .naming-card h2 { color: #17231d; }
        .cherokee-word { font-size: clamp(4rem,10vw,8rem); font-weight: 900; letter-spacing: -.06em; line-height: 1; color: #496b43; margin: .5rem 0; }
        .cherokee-meaning { font-size: 1.3rem; color: #d1a436; font-weight: 700; margin-bottom: 1rem; }

        /* cta */
        .button { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; border-radius: 999px; padding: .9rem 1.5rem; text-decoration: none; font-weight: 900; text-align: center; }
        .primary { background: #d1a436; color: #102016; }
        .secondary { border: 1px solid rgba(255,250,240,.25); color: #fffaf0; }
        .actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; }

        /* footer */
        .hist-footer { display: flex; justify-content: space-between; gap: 2rem; padding: 2rem clamp(1rem,5vw,6rem); background: #0b140f; color: #fffaf0; }
        .hist-footer p, .hist-footer a { color: rgba(255,250,240,.72); }
        .hist-footer p:last-child { display: flex; flex-wrap: wrap; gap: .35rem .65rem; }

        /* responsive */
        @media (max-width: 1000px) { .dir-grid, .plant-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
        @media (max-width: 800px) {
          .hist-hero { grid-template-columns: 1fr; }
          .hist-hero-img { max-height: 50vh; }
          .hist-hero-img::after { background: linear-gradient(to top, #102016 0%, transparent 40%); }
          .hist-footer { flex-direction: column; }
        }
        @media (max-width: 620px) {
          .dir-grid, .plant-grid { grid-template-columns: 1fr; }
          .extra-dir { flex-direction: column; align-items: stretch; }
          .actions { flex-direction: column; align-items: stretch; }
          .button { width: 100%; border-radius: 18px; }
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section className="hist-hero">
        <div className="hist-hero-text">
          <p className="eyebrow">10,000 Years of Sacred Ground</p>
          <h1>This was Cherokee hunting land.</h1>
          <p className="hero-subtitle">
            For millennia before the paper mill, before the settlers, before the trading posts — this land along the Davidson River
            was Cherokee territory. They called these waters <em>Ecusta</em> — rippling waters. They walked these forests
            as keepers, not owners. This is that story.
          </p>
          <div className="actions">
            <a className="button primary" href="#timeline">Full Timeline</a>
            <a className="button secondary" href="#directions">Seven Sacred Directions</a>
            <a className="button secondary" href="/tohi-plan">Ecusta Tohi Vision</a>
          </div>
        </div>
        <div className="hist-hero-img">
          <img
            src="/images/history/cherokee-hunting-grounds.webp"
            alt="Cherokee hunters along the Davidson River in the ancient Appalachian forest — the land that would become the Ecusta site"
          />
        </div>
      </section>

      {/* ═══ THE NAME ECUSTA ═══ */}
      <section className="section naming-section">
        <div className="naming-card">
          <p className="eyebrow">The Name That Remembers</p>
          <div className="cherokee-word">Ecusta</div>
          <div className="cherokee-meaning">"Rippling Waters" — Cherokee</div>
          <p>
            When Harry Straus founded the paper mill on the Davidson River in 1939, the company held a naming contest.
            The founders knew they were building on Cherokee hunting land, and they chose to honor that heritage.
            The winning name was <strong>Ecusta</strong> — a Cherokee word meaning "rippling waters" — for the crystal-clear
            Davidson River that had drawn both the Cherokee and the mill to this exact place.
          </p>
          <p>
            The name was not an accident. It was a recognition. And today, as we envision the future of this land,
            that name still speaks — calling us back to the waters, the forest, and the wisdom that was here first.
          </p>
        </div>
      </section>

      {/* ═══ ESTATOE PATH FEATURE IMAGE ═══ */}
      <section className="feat-section">
        <div className="feat-bg">
          <img
            src="/images/history/estatoe-path.webp"
            alt="The ancient Estatoe Path — Cherokee trading route through the Blue Ridge Mountains and Davidson River"
            loading="lazy"
          />
        </div>
        <div className="feat-overlay" />
        <div className="feat-content">
          <p className="eyebrow">The Estatoe Path</p>
          <h2>A trading route that crossed these mountains for centuries.</h2>
          <p>
            The Cherokee established the Estatoe Path as a major trade route connecting their mountain settlements
            to the village of Estatoe and into South Carolina. The path crossed the Davidson River — the exact location
            of the future Ecusta mill site. Hunters and traders followed this route through the dense rhododendron
            forests and along the waterways for generations.
          </p>
          <p>
            A North Carolina Highway Historical Marker (P-48) still marks the Estatoe Path at the US 64/276
            bridge over the Davidson River, northeast of Brevard — recognizing that Transylvania County's
            earliest inhabitants were Cherokee.
          </p>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section id="timeline" className="section timeline-section">
        <div className="section-heading">
          <p className="eyebrow">A Timeline of the Land</p>
          <h2>From Cherokee hunting ground to paper mill to a new vision.</h2>
          <p>10,000 years of history on 225 acres along the Davidson River.</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="tl-item" key={item.era}>
              <div className="tl-dot" />
              <div className="tl-era">{item.era}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ MEDICINE WHEEL ═══ */}
      <section className="wheel-section">
        <p className="eyebrow">The Sacred Circle</p>
        <h2>The Cherokee Medicine Wheel</h2>
        <p style={{ maxWidth: 700, margin: "0 auto 2rem", color: "#58655d" }}>
          The Medicine Wheel symbolizes the individual journey we each must take to find our own path.
          Within it are the four cardinal directions, the four sacred colors, and the Circle of Life.
          At the center burns the Eternal Fire.
        </p>
        <div className="wheel-img">
          <img
            src="/images/history/cherokee-medicine-wheel.webp"
            alt="Cherokee Medicine Wheel with four sacred colors — Red (East), Blue (North), Black (West), White (South) — in the Blue Ridge Mountains"
            loading="lazy"
          />
        </div>
      </section>

      {/* ═══ SEVEN SACRED DIRECTIONS ═══ */}
      <section id="directions" className="section directions-section">
        <div className="section-heading">
          <p className="eyebrow">Seven Sacred Directions</p>
          <h2>The Cherokee honor seven directions — not four.</h2>
          <p>Each direction carries a color, a season, a teaching, and a Cherokee word. Together they form the complete map of existence.</p>
        </div>
        <div className="dir-grid">
          {cherokeeDirections.map((d) => (
            <article className="dir-card" key={d.direction}>
              <div className="dir-swatch" style={{ background: d.color }} />
              <h3>{d.direction} — {d.colorName}</h3>
              <p>{d.meaning}</p>
            </article>
          ))}
        </div>
        <div className="extra-dir">
          {additionalDirections.map((d) => (
            <div className="extra-dir-card" key={d.direction}>
              <div
                className="extra-dir-dot"
                style={{
                  background:
                    d.colorName === "Yellow" ? "#f0d982" :
                    d.colorName === "Brown" ? "#8B6914" : "#496b43",
                }}
              />
              <span>{d.direction} ({d.colorName}) — {d.meaning}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ KEEPER OF THE EARTH QUOTES ═══ */}
      <section className="section quotes-section">
        <div className="section-heading">
          <p className="eyebrow" style={{ color: "#f0d982" }}>Keeper of the Earth</p>
          <h2 style={{ color: "#fffaf0" }}>The Great One intended humans to be keeper of the Earth.</h2>
        </div>
        <div className="quote-grid">
          {keeperQuotes.map((q, i) => (
            <div className="quote-card" key={i}>
              <p>"{q}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ DAVIDSON RIVER FEATURE ═══ */}
      <section className="feat-section">
        <div className="feat-bg">
          <img
            src="/images/history/davidson-river-rippling.webp"
            alt="The Davidson River flowing through Pisgah National Forest — Ecusta, rippling waters"
            loading="lazy"
          />
        </div>
        <div className="feat-overlay" />
        <div className="feat-content">
          <p className="eyebrow">Rippling Waters</p>
          <h2>The Davidson River — the reason everything is here.</h2>
          <p>
            The Cherokee valued this river for its purity. Harry Straus chose this site in 1939 for the same reason —
            the water quality rivaled anything in France, where the world's finest paper had been made.
            Water is the blood of Mother Earth. This river is why the Cherokee hunted here,
            why the mill was built here, and why the healing vision belongs here.
          </p>
          <p>
            H₂O — two hydrogen molecules combine in a specific way to create the most essential substance on Earth.
            Water is good medicine.
          </p>
        </div>
      </section>

      {/* ═══ PLANT MEDICINE ═══ */}
      <section className="section plant-section">
        <div className="section-heading">
          <p className="eyebrow">Gifts of Nature — Cherokee Plant Medicine</p>
          <h2>Only 10% of 350,000 plant species are known. The rest are gifts waiting.</h2>
          <p>The Blue Ridge Mountains hold one of the most biodiverse temperate forests on Earth. The Cherokee have known these plants for millennia. Here are some of the most significant.</p>
        </div>
        <div className="plant-grid">
          {plantMedicine.map((p) => (
            <article className="card plant-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.use}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ SPIRIT & NATURAL HARMONY ═══ */}
      <section className="section" style={{ background: "linear-gradient(180deg,#102016,#183022)", color: "#fffaf0" }}>
        <div className="section-heading">
          <p className="eyebrow" style={{ color: "#f0d982" }}>Spirit — Natural Harmony & Balance</p>
          <h2 style={{ color: "#fffaf0" }}>The natural organization of the universe is harmony. Humans introduced suffering.</h2>
          <p style={{ color: "rgba(255,250,240,.72)" }}>
            Greed. Violence. Corruption. Cruelty. "What's in it for me?" — these are the questions of a disconnected world.
            The Cherokee understood that spirit is the natural harmony and balance of the universe.
            When we lost our connection to the land, we lost our connection to ourselves.
            The sacred hoop teaches us to get back in balance.
          </p>
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
          <article className="card" style={{ background: "rgba(255,250,240,.06)", borderColor: "rgba(255,250,240,.14)" }}>
            <h3 style={{ color: "#f0d982" }}>Deep Spiritual Energy</h3>
            <p style={{ color: "rgba(255,250,240,.72)" }}>
              The heartbeat of Mother Earth. Holding space for people to heal themselves.
              How do we begin our spiritual relationship with Mother Earth?
              Through discipline. Through natural faith. Through deep spiritual connection
              to the land beneath our feet.
            </p>
          </article>
          <article className="card" style={{ background: "rgba(255,250,240,.06)", borderColor: "rgba(255,250,240,.14)" }}>
            <h3 style={{ color: "#f0d982" }}>The Sun Is Medicine</h3>
            <p style={{ color: "rgba(255,250,240,.72)" }}>
              Look at the supplements you take — vitamin D, the gift of the sun.
              The sun is medicine. Harmony, recipe, city, balance — these are not separate ideas.
              They are one continuous circle. The medicine wheel teaches that
              all things return to the center.
            </p>
          </article>
        </div>
      </section>

      {/* ═══ EARTH MEDICINE / PISGAH ═══ */}
      <section className="section" style={{ background: "linear-gradient(180deg,#fffaf0,#f6f2e7)" }}>
        <div className="section-heading">
          <p className="eyebrow">Earth Medicine — Trips into Pisgah</p>
          <h2>Soil is soothing. The forest strengthens. Think more deeply.</h2>
          <p>
            The ancient Appalachian mountains teach us to slow down. Winter reminds us to organize our lives,
            plant our reflections and intentions. Each season decides our discipline. The forest floor holds
            earth medicine — grounding, strengthening, healing.
          </p>
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
          <article className="card">
            <h3 style={{ color: "#496b43" }}>Forest Immersion</h3>
            <p>Trips into Pisgah National Forest — guided walks through the ancient Appalachian hardwoods. Soil soothing beneath your feet. The forest strengthens what the city weakens.</p>
          </article>
          <article className="card">
            <h3 style={{ color: "#496b43" }}>Seasonal Discipline</h3>
            <p>Each season teaches something different. Winter: slow down, reflect, organize. Spring: plant intentions. Summer: grow in abundance. Autumn: harvest wisdom and let go.</p>
          </article>
          <article className="card">
            <h3 style={{ color: "#496b43" }}>Grounding Practice</h3>
            <p>Bare feet on forest floor. Hands in soil. Breath among the trees. The Cherokee understood that healing the land and healing ourselves are the same act.</p>
          </article>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-heading">
          <p className="eyebrow">Continue the Journey</p>
          <h2>The land remembers. So should we.</h2>
          <p>Read the full Ecusta Tohi wellness vision — Cherokee medicine, sacred architecture, sunflower healing, and the future of this land.</p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <a className="button primary" href="/tohi-plan">Ecusta Tohi Vision</a>
            <a className="button" style={{ background: "#102016", color: "#fffaf0" }} href="/research">Research & Science</a>
            <a className="button" style={{ border: "1px solid #17231d", color: "#17231d" }} href="/take-action">Take Action</a>
          </div>
        </div>
      </section>

      <footer className="hist-footer">
        <p>Ecusta Land — History of the Land</p>
        <p>
          <a href="/">Home</a> <span style={{ color: "rgba(255,250,240,.4)" }}>·</span>{" "}
          <a href="/tohi-plan">Tohi Plan</a> <span style={{ color: "rgba(255,250,240,.4)" }}>·</span>{" "}
          <a href="/research">Research</a> <span style={{ color: "rgba(255,250,240,.4)" }}>·</span>{" "}
          <a href="/take-action">Take Action</a> <span style={{ color: "rgba(255,250,240,.4)" }}>·</span>{" "}
          <a href="/contact">Contact</a>
        </p>
              <p style={{ fontSize: "0.72rem", opacity: 0.45 }}>Site by <a href="https://localsignalwebsites.studio" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>Local Signal Websites</a></p>
      </footer>
    </main>
  );
}
