const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

const slides = [
  ["Ecusta Tohi", "/images/tohi-plan/page-01.svg", "A Native American revitalization plan built around beautification, rejuvenation, and an ancestral approach to cleaning up the land."],
  ["Mission", "/images/tohi-plan/page-02.svg", "Leverage the Native American sunflower for environmental remediation and transform the Ecusta property into a premier trail destination."],
  ["Meaning of Tohi", "/images/tohi-plan/page-03.svg", "Tohi is presented as peace, balance, wellness, and harmony - similar to water flowing gently."],
  ["Environmental Contaminants", "/images/tohi-plan/page-04.svg", "The Ecusta Paper Mill closure left environmental challenges involving land and water risk."],
  ["The Solution", "/images/tohi-plan/page-05.svg", "Phytoremediation uses plants to help filter, stabilize, extract, degrade, and manage pollutants."],
  ["Four Outcomes", "/images/tohi-plan/page-06.svg", "Restoration, beautification, tourism, and vitality become the public story for the land."],
  ["Restoration", "/images/tohi-plan/page-07.svg", "Sunflowers are framed as a sustainable green approach for visible land repair and public education."],
  ["Beautification", "/images/tohi-plan/page-08.svg", "Sunflower fields are presented as symbols of hope, strength, resilience, trails, lodging, and civic pride."],
  ["Tourism", "/images/tohi-plan/page-09.svg", "The plan connects white squirrels, waterfalls, the Ecusta Trail, boardwalks, lodging, and seasonal events."],
  ["Vitality", "/images/tohi-plan/page-10.svg", "Healthy land, healthy water, and community well-being are treated as inseparable."],
  ["Conclusion", "/images/tohi-plan/page-11.svg", "The closing message is direct: doing nothing is not an answer, and the land must be remediated."],
];

const principles = [
  ["Restoration", "Use sunflowers and native plantings as a visible, careful phytomanagement and stewardship symbol."],
  ["Beautification", "Transform an unsightly industrial legacy into a place people can walk, photograph, paint, and value."],
  ["Tourism", "Connect the Ecusta Trail, mountain views, white squirrels, waterfalls, biking, events, and local business energy."],
  ["Vitality", "Tie healthy land, clean water, movement, outdoor access, and community well-being into one public vision."],
];

export default function TohiPlanPage() {
  return (
    <main className="tohi-page">
      <style>{`
        .tohi-page { background: #f6f2e7; color: #17231d; overflow-wrap: anywhere; }
        .tohi-page * { min-width: 0; }
        .tohi-hero { min-height: 82vh; padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 6rem) clamp(4rem, 8vw, 7rem); color: #fffaf0; background: radial-gradient(circle at 78% 18%, rgba(240,217,130,.42), transparent 18%), linear-gradient(135deg, #102016, #1c3424); }
        .tohi-nav { display: flex; gap: 1rem; justify-content: flex-end; padding-bottom: clamp(3rem, 7vw, 6rem); color: rgba(255,250,240,.75); overflow-x: auto; }
        .tohi-nav a { color: inherit; text-decoration: none; white-space: nowrap; font-weight: 800; }
        .tohi-hero-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(300px, .9fr); gap: clamp(2rem, 5vw, 5rem); align-items: center; }
        .eyebrow { color: #d1a436; text-transform: uppercase; letter-spacing: .16em; font-weight: 900; font-size: .78rem; margin: 0 0 1rem; overflow-wrap: normal; }
        .tohi-page h1 { font-size: clamp(3.1rem, 8.4vw, 8.5rem); line-height: .9; letter-spacing: -.065em; margin: 0 0 1.5rem; text-wrap: balance; overflow-wrap: normal; hyphens: none; }
        .tohi-page h2 { font-size: clamp(2rem, 4vw, 4.3rem); line-height: 1; letter-spacing: -.045em; margin: 0 0 1rem; text-wrap: balance; overflow-wrap: normal; hyphens: none; }
        .tohi-page h3 { margin: 0 0 .5rem; font-size: 1.25rem; line-height: 1.15; text-wrap: balance; }
        .tohi-page p { color: #58655d; line-height: 1.7; overflow-wrap: break-word; }
        .tohi-hero p { color: rgba(255,250,240,.76); }
        .hero-copy { font-size: clamp(1.08rem, 2vw, 1.38rem); max-width: 850px; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
        .button { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; border-radius: 999px; padding: .9rem 1.15rem; text-decoration: none; font-weight: 900; text-align: center; white-space: normal; line-height: 1.15; }
        .primary { background: #d1a436; color: #102016; }
        .secondary { border: 1px solid rgba(255,250,240,.25); color: #fffaf0; }
        .hero-card, .principle-card, .slide-card, .callout { border: 1px solid rgba(23,35,29,.16); border-radius: 24px; box-shadow: 0 24px 80px rgba(16,32,22,.16); background: rgba(255,250,240,.82); }
        .hero-card { padding: 1rem; background: rgba(255,250,240,.08); border-color: rgba(255,250,240,.18); backdrop-filter: blur(16px); }
        .hero-card img { width: 100%; display: block; border-radius: 18px; background: white; margin-bottom: 1.25rem; }
        .hero-card div { padding: 0 .5rem .5rem; }
        .section { padding: clamp(4rem, 9vw, 8rem) clamp(1rem, 5vw, 6rem); }
        .section-heading { max-width: 980px; margin: 0 auto clamp(2rem, 5vw, 4rem); text-align: center; }
        .section-heading p { max-width: 780px; margin-left: auto; margin-right: auto; }
        .principles { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
        .principle-card { padding: 1.35rem; }
        .principle-card h3 { color: #496b43; }
        .slide-section { background: linear-gradient(180deg, #102016, #183022); color: #fffaf0; }
        .slide-section p { color: rgba(255,250,240,.72); }
        .slide-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
        .slide-card { overflow: hidden; background: rgba(255,250,240,.08); border-color: rgba(255,250,240,.15); }
        .slide-card img { width: 100%; display: block; aspect-ratio: 1 / 1; object-fit: cover; background: #fff; }
        .slide-card div { padding: 1.1rem; }
        .slide-card span { display: inline-grid; place-items: center; width: 38px; height: 38px; border-radius: 999px; background: #d1a436; color: #102016; font-weight: 900; margin-bottom: .8rem; }
        .slide-card h3 { color: #f0d982; }
        .callout { max-width: 1050px; margin: 0 auto; padding: clamp(1.25rem, 3vw, 2rem); background: rgba(240,217,130,.24); }
        .tohi-footer { display: flex; justify-content: space-between; gap: 2rem; padding: 2rem clamp(1rem, 5vw, 6rem); background: #0b140f; color: #fffaf0; }
        .tohi-footer p, .tohi-footer a { color: rgba(255,250,240,.72); }
        .tohi-footer p:last-child { display: flex; flex-wrap: wrap; gap: .35rem .65rem; }
        @media (max-width: 1100px) { .principles, .slide-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 900px) { .tohi-hero-grid { grid-template-columns: 1fr; } .tohi-nav { justify-content: flex-start; } .tohi-footer { flex-direction: column; } }
        @media (max-width: 620px) { .tohi-hero { padding-top: 3rem; } .principles, .slide-grid { grid-template-columns: 1fr; } .tohi-page h1 { font-size: clamp(2.75rem, 14vw, 4.5rem); letter-spacing: -.045em; line-height: .95; } .tohi-page h2 { font-size: clamp(1.85rem, 10vw, 3.2rem); letter-spacing: -.035em; line-height: 1.03; } .hero-actions { flex-direction: column; align-items: stretch; } .button { width: 100%; border-radius: 18px; } .slide-card div, .principle-card { padding: 1rem; } }
      `}</style>

      <section className="tohi-hero">
        <nav className="tohi-nav" aria-label="Ecusta Tohi navigation">
          <a href="/">Home</a>
          <a href="#principles">Principles</a>
          <a href="#slides">Source Images</a>
          <a href="/research">Research</a>
          <a href="/take-action">Take Action</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="tohi-hero-grid">
          <div>
            <p className="eyebrow">Ecusta Tohi - Source Vision</p>
            <h1>Peace, balance, wellness, and land repair.</h1>
            <p className="hero-copy">
              The Ecusta Tohi plan strengthens the site by giving the sunflower vision a deeper identity:
              environmental remediation, beautification, trail tourism, vitality, and a careful ancestral approach to restoring the land.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
              <a className="button secondary" href="#slides">View all images</a>
              <a className="button secondary" href="/">Back to homepage</a>
            </div>
          </div>
          <aside className="hero-card">
            <img src="/images/tohi-plan/page-01.svg" alt="Ecusta Tohi revitalization plan cover" />
            <div>
              <p className="eyebrow">The focal point</p>
              <h2>Doing nothing is not an answer.</h2>
              <p>The source deck is now preserved as a visual gallery so visitors can scan the whole plan quickly.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="principles" className="section">
        <div className="section-heading">
          <p className="eyebrow">Cohesive Site Direction</p>
          <h2>The plan now has four clear public lanes.</h2>
          <p>Using the same tighter structure from the Parallax audit feedback: stronger hero, clearer navigation, scannable proof sections, visual rhythm, and repeated calls to action.</p>
        </div>
        <div className="principles">
          {principles.map(([title, text]) => (
            <article className="principle-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="slides" className="section slide-section">
        <div className="section-heading">
          <p className="eyebrow">Complete Image Set</p>
          <h2>All Ecusta Tohi images are on the site.</h2>
          <p>Each card gives the visual, a plain-language title, and a short explanation so the deck is easier to understand than a loose PDF upload.</p>
        </div>
        <div className="slide-grid">
          {slides.map(([title, image, text], index) => (
            <article className="slide-card" key={title}>
              <img src={image} alt={`${title} - Ecusta Tohi source image`} loading="lazy" />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="callout">
          <p className="eyebrow">Careful Public Wording</p>
          <h2>Inspiring, but not overstated.</h2>
          <p>
            The site should continue to frame sunflowers as part of phytomanagement, education, beautification,
            habitat support, and responsible remediation planning - not as a stand-alone promise that plants alone can clean the entire site.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
            <a className="button secondary" href="/research">Read the research</a>
          </div>
        </div>
      </section>

      <footer className="tohi-footer">
        <p>Ecusta Tohi Plan</p>
        <p><a href="/">Home</a> <span>-</span> <a href="/research">Research</a> <span>-</span> <a href="/take-action">Take Action</a> <span>-</span> <a href="/contact">Contact Amy Turner</a></p>
      </footer>
    </main>
  );
}
