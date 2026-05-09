const evidenceLabels = [
  ["A", "Official federal regulatory record"],
  ["B", "Official local government record"],
  ["C", "Official state brownfields record"],
  ["D", "Reputable local history / local news source"],
  ["E", "Peer-reviewed or national-lab technical source"],
  ["F", "Research limitation or carefully framed inference"],
];

const timeline = [
  ["1938", "Davidson River site selected and land assembled."],
  ["1939", "Ecusta plant construction completed and operations begin."],
  ["2002", "Facility closes after bankruptcy-related collapse."],
  ["2007–2008", "Cleanup, demolition, and redevelopment phase begins."],
  ["2011–2015", "NC brownfields tract agreements roll out across the property."],
  ["2026", "Brevard adopts a temporary moratorium on data centers and similar facilities."],
];

const tracts = [
  ["G", "Former farmland / overflow parking; public records describe mixed redevelopment categories."],
  ["D", "River portion connected to open space, greenways, river recreation, and reuse restrictions."],
  ["A", "Former northern portion of the original plant area west of Davidson River."],
  ["B", "Large former southern plant area with public-record notes on possible soil / groundwater contamination."],
  ["C", "Former electrochemical building area; strongest caution zone for mercury-related public language."],
  ["E", "Associated in short-search records with Process Island Landfill context; needs tract-specific verification."],
  ["F", "Finalized brownfields tract; public-facing detail should wait for full tract narrative verification."],
];

const faqs = [
  {
    q: "Is a data center officially approved for Ecusta?",
    a: "Based on the current research dossier, official sources confirm city-level discussion and a temporary moratorium while regulations were studied. They do not confirm a public Ecusta-specific permit package, named developer, or approved data-center project.",
  },
  {
    q: "Can sunflowers clean the whole site?",
    a: "No public-facing claim should say that. Sunflowers and native plantings may support phytomanagement, demonstration planting, soil stabilization, habitat, and education, but a complex brownfield still depends on tract-specific testing and approved remediation.",
  },
  {
    q: "Is this anti-growth?",
    a: "No. The stronger message is pro-place, pro-transparency, and pro-community-scale reuse. The project asks decision-makers to compare high-intensity digital infrastructure against public access, trails, native planting, education, and long-term civic value.",
  },
];

function EvidenceBadge({ children }: { children: React.ReactNode }) {
  return <span className="evidence-badge">Evidence {children}</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a href="#vision">Vision</a>
          <a href="#site">The Site</a>
          <a href="#records">Records</a>
          <a href="#action">Take Action</a>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Brevard / Pisgah Forest, North Carolina</p>
            <h1>A restorative future for the former Ecusta mill site.</h1>
            <p className="hero-copy">
              Ecusta deserves a future that is transparent, restorative, and rooted in place.
              The former mill site is a documented brownfield with a long industrial history,
              multiple brownfields tracts, and a cleanup legacy that still shapes what can
              safely happen there today.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#action">What you can ask for</a>
              <a className="button secondary" href="#records">View the evidence posture</a>
            </div>
          </div>

          <aside className="hero-card">
            <p className="card-label">Core proposal</p>
            <h2>Land repair, trails, native planting, education, and public benefit.</h2>
            <p>
              This site argues for a community-scale alternative to high-intensity digital
              industrial use: public access, habitat, memory, transparent records, and careful
              land repair.
            </p>
          </aside>
        </div>
      </section>

      <section id="vision" className="section">
        <div className="section-heading">
          <p className="eyebrow">Vision</p>
          <h2>Transform a difficult industrial legacy into a public landscape of access, memory, and ecology.</h2>
        </div>
        <div className="two-column">
          <p>
            The safest and strongest public message is not that the whole site can be easily
            cleaned with sunflowers. The strongest message is that Ecusta has a verified
            brownfield history, Brevard is evaluating high-impact digital infrastructure, and
            a regenerative alternative deserves serious public consideration.
          </p>
          <div className="callout">
            <EvidenceBadge>A / B / C / E / F</EvidenceBadge>
            <p>
              The website will distinguish confirmed facts from limitations, open questions,
              and proposed civic alternatives.
            </p>
          </div>
        </div>
      </section>

      <section id="site" className="section dark">
        <div className="section-heading">
          <p className="eyebrow">Former Ecusta Site</p>
          <h2>A brownfield site is not a blank slate.</h2>
        </div>

        <div className="timeline">
          {timeline.map(([year, text]) => (
            <article className="timeline-item" key={year}>
              <strong>{year}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Data Center Concerns</p>
          <h2>Policy caution is already part of the public record.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Utility demand</h3>
            <p>
              Data centers can create major electrical and water infrastructure questions.
              Impacts vary by size, design, cooling system, and regulation.
            </p>
          </article>
          <article className="feature-card">
            <h3>Noise and heat</h3>
            <p>
              Local planning records identify heat and noise as material concerns for this
              type of use, especially when land-use rules do not yet address it clearly.
            </p>
          </article>
          <article className="feature-card">
            <h3>Public evidence gap</h3>
            <p>
              The current dossier does not confirm an Ecusta-specific public permit package,
              named developer, utility memorandum, or subsidy agreement.
            </p>
          </article>
        </div>
      </section>

      <section className="section sunflower">
        <div className="section-heading">
          <p className="eyebrow">Sunflowers and Land Repair</p>
          <h2>Powerful symbol. Limited tool. Careful claim.</h2>
        </div>
        <div className="two-column">
          <p>
            Sunflowers and native plantings can help tell a visible story of land repair.
            They may also support phytomanagement, demonstration planting, soil stabilization,
            habitat, and education in some contaminated-land settings.
          </p>
          <p>
            But Ecusta’s documented complexity means the website should never say that
            sunflowers can clean the entire site. Cleanup remains tied to tract-specific
            sampling, brownfields controls, agency-approved remediation, and long-term
            property management.
          </p>
        </div>
      </section>

      <section id="records" className="section">
        <div className="section-heading">
          <p className="eyebrow">Brownfield Records</p>
          <h2>Tract-by-tract clarity matters.</h2>
        </div>

        <div className="tract-grid">
          {tracts.map(([tract, text]) => (
            <article className="tract-card" key={tract}>
              <span>Tract {tract}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="label-panel">
          <h3>Evidence labels used on this site</h3>
          <div className="label-grid">
            {evidenceLabels.map(([label, meaning]) => (
              <div key={label}>
                <strong>{label}</strong>
                <p>{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Clear answers without overclaiming.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="action" className="section action">
        <div>
          <p className="eyebrow">Take Action</p>
          <h2>Ask for records. Ask for tract-specific clarity. Ask for a real comparison.</h2>
          <p>
            A better future for Ecusta begins with public scrutiny and evidence-based choices.
            Community members can ask decision-makers to compare any high-intensity proposal
            against a community-scale alternative built around public access, trails, ecology,
            education, culture, and resilient public infrastructure.
          </p>
        </div>
        <div className="action-card">
          <h3>Ask for:</h3>
          <ul>
            <li>Ecusta-specific permit filings</li>
            <li>Water and electrical demand estimates</li>
            <li>Backup generator and noise plans</li>
            <li>Brownfields tract restrictions</li>
            <li>Public benefit and access commitments</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>Ecusta Land</p>
        <p>Evidence-first civic reuse concept. Built for transparency, public benefit, and careful language.</p>
      </footer>
    </main>
  );
}
