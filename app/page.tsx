const evidenceLabels = [
  ["A", "Official federal regulatory record"],
  ["B", "Official local government record"],
  ["C", "Official state brownfields record"],
  ["D", "Reputable local history / local news source"],
  ["E", "Peer-reviewed or national-lab technical source"],
  ["F", "Research limitation or carefully framed inference"],
];

const visionPillars = [
  ["Beautification", "A visible field of renewal that turns a hard industrial legacy into a place people want to see, walk, photograph, and care for."],
  ["Wellness", "A calm public landscape connected to movement, retreat, fresh air, education, and the healing identity of the Blue Ridge region."],
  ["Recreation", "Trails, bike access, greenways, river connections, and family-friendly outdoor experiences tied to Pisgah Forest and Brevard."],
  ["Education", "A living classroom for phytomanagement, native planting, brownfield history, ecology, art, and practical land stewardship."],
];

const twoFutures = [
  {
    title: "Sunflower Power Vision",
    tone: "Community-scale revitalization",
    points: [
      "Sunflower fields and native plantings",
      "Public trails, bike routes, and outdoor access",
      "Wellness retreat, arts, photography, music, and education",
      "Tourism destination connected to Pisgah Forest and Brevard",
      "End-of-season harvest potential for seeds, education, and biodiesel exploration",
      "A future people can visit, understand, and take pride in",
    ],
  },
  {
    title: "Data Center Path",
    tone: "High-intensity digital infrastructure",
    points: [
      "Heavy power demand and utility questions",
      "Potential water, cooling, heat, and wastewater concerns depending on design",
      "Noise from cooling systems, fans, and backup infrastructure",
      "Limited public-facing access or cultural value",
      "Industrial use that may not match Brevard’s outdoor, arts, and wellness identity",
      "A future that requires stronger public scrutiny before approval",
    ],
  },
];

const bloomCycle = [
  ["Plant", "Prepare safe, approved areas for sunflowers, native plants, pollinator support, and visible land repair."],
  ["Bloom", "Create a seasonal destination for walking, photography, families, local events, and community pride."],
  ["Harvest", "Collect seed heads at the end of the season where appropriate and safe, with handling guided by site conditions."],
  ["Reuse", "Explore seed saving, education, local partnerships, and biodiesel potential as part of a regenerative cycle."],
];

const programElements = [
  "Sunflower fields and pollinator habitat",
  "Native plant demonstration areas",
  "Ecusta Trail and Pisgah Forest connections",
  "Bike rentals, walking paths, and family recreation",
  "Wellness retreat and Blue Zone-inspired programming",
  "Arts, music, photography, pottery, and aromatherapy classes",
  "Senior and workforce housing concepts",
  "Education on brownfields, phytomanagement, and land stewardship",
  "Seasonal events, harvest festivals, and local business opportunity",
];

const communityAsks = [
  ["Show the documents", "Publish any Ecusta-specific development filings, utility estimates, environmental reviews, noise studies, heat plans, and brownfields constraints in plain language."],
  ["Compare the futures", "Require a real side-by-side comparison between a high-impact data-center use and a community-serving revitalization plan."],
  ["Protect the fit", "Measure each proposal against Brevard’s identity: outdoor recreation, arts, wellness, tourism, natural beauty, and long-term public benefit."],
];

const timeline = [
  ["1938", "Davidson River site selected and land assembled."],
  ["1939", "Ecusta plant construction completed and operations begin."],
  ["2002", "Facility closes after bankruptcy-related collapse."],
  ["2007–2008", "Cleanup, demolition, and redevelopment phase begins."],
  ["2011–2015", "NC brownfields tract agreements roll out across the property."],
  ["2026", "Brevard adopts a temporary moratorium on data centers and similar facilities."],
];

const faqs = [
  {
    q: "Is this mainly a protest site?",
    a: "No. The primary focus is a positive revitalization vision: sunflowers, wellness, beautification, recreation, education, and public benefit. Data-center concerns are included so the community can compare two very different futures for the land.",
  },
  {
    q: "Is a data center officially approved for Ecusta?",
    a: "Based on the current research dossier, official sources confirm city-level discussion and a temporary moratorium while regulations were studied. They do not confirm a public Ecusta-specific permit package, named developer, or approved data-center project.",
  },
  {
    q: "Can sunflowers clean the whole site?",
    a: "No public-facing claim should say that. Sunflowers and native plantings may support phytomanagement, demonstration planting, soil stabilization, habitat, and education, but a complex brownfield still depends on tract-specific testing and approved remediation.",
  },
  {
    q: "Could harvested sunflowers be used for biodiesel?",
    a: "Sunflower seed oil can be explored as part of an end-of-season educational and regenerative-use cycle. For Ecusta, that idea should be developed carefully with site-specific safety guidance, harvest handling protocols, and qualified partners.",
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
          <a href="#two-futures">Two Futures</a>
          <a href="#bloom">Bloom to Benefit</a>
          <a href="#records">Records</a>
          <a href="#action">Take Action</a>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Ecusta Land • Brevard / Pisgah Forest, NC</p>
            <h1>Sunflower Power for Ecusta.</h1>
            <p className="hero-copy">
              A wellness and beautification vision for the former Ecusta mill site — rooted in
              sunflowers, native planting, trails, education, recreation, and community-scale
              revitalization instead of high-impact digital infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#vision">Explore the vision</a>
              <a className="button secondary" href="#two-futures">Compare the two futures</a>
            </div>
          </div>

          <aside className="hero-card sunflower-card">
            <p className="card-label">The focal point</p>
            <h2>Restoration. Beautification. Vitality.</h2>
            <p>
              Ecusta can become a place people visit, heal, learn from, and feel proud of — a
              public-facing destination where the land’s next chapter is visible in bloom.
            </p>
          </aside>
        </div>
      </section>

      <section id="vision" className="section intro-section">
        <div className="section-heading centered">
          <p className="eyebrow">The Better Fit</p>
          <h2>The question is not whether Ecusta should change. It is what kind of future best serves this community.</h2>
          <p>
            This project centers a positive alternative: a restorative landscape that supports wellness,
            beautification, recreation, tourism, education, arts, opportunity, and long-term civic pride.
          </p>
        </div>

        <div className="pillar-grid">
          {visionPillars.map(([title, text]) => (
            <article className="pillar-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sunflower power-section">
        <div className="section-heading">
          <p className="eyebrow">Sunflower Power</p>
          <h2>One of nature’s most effective symbols for a healthier, more beautiful future.</h2>
        </div>
        <div className="two-column">
          <p>
            Sunflowers give the project a clear public identity: bright, visible, hopeful, and practical.
            They can help transform how people feel when they approach the land — from abandoned
            industrial memory to seasonal beauty, pollinator habitat, walking paths, and civic renewal.
          </p>
          <div className="callout warm">
            <EvidenceBadge>A / E / F</EvidenceBadge>
            <p>
              Sunflowers and native plantings should be described as part of phytomanagement,
              demonstration planting, habitat support, and education — not as a stand-alone promise
              to clean the entire brownfield site.
            </p>
          </div>
        </div>
      </section>

      <section id="two-futures" className="section contrast-section">
        <div className="section-heading centered">
          <p className="eyebrow">Two Futures for Ecusta</p>
          <h2>Community revitalization or high-intensity digital infrastructure?</h2>
          <p>
            A fair public conversation should compare what each future gives to Brevard, what it asks
            from local infrastructure, and whether it fits the character of the community.
          </p>
        </div>

        <div className="future-grid">
          {twoFutures.map((future) => (
            <article className="future-card" key={future.title}>
              <p className="card-label">{future.tone}</p>
              <h3>{future.title}</h3>
              <ul>
                {future.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="bloom" className="section bloom-section">
        <div className="section-heading">
          <p className="eyebrow">From Bloom to Benefit</p>
          <h2>A seasonal cycle of beauty, education, harvest, and regenerative reuse.</h2>
        </div>
        <div className="cycle-grid">
          {bloomCycle.map(([title, text], index) => (
            <article className="cycle-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="note">
          Biodiesel should be framed as a potential partnership and education pathway, not a guaranteed
          revenue source, until crop safety, yields, processing, and site-specific handling are verified.
        </p>
      </section>

      <section className="section program-section">
        <div className="section-heading centered">
          <p className="eyebrow">What the Plan Can Encompass</p>
          <h2>A seal of opportunity: industry, flowers, recreation, arts, education, and humanity.</h2>
        </div>
        <div className="program-cloud">
          {programElements.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section asks-section">
        <div className="section-heading centered">
          <p className="eyebrow">Public Clarity</p>
          <h2>Before any high-impact use moves forward, the community deserves the full picture.</h2>
        </div>
        <div className="asks-grid">
          {communityAsks.map(([title, text]) => (
            <article className="ask-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="records" className="section records-section">
        <div className="section-heading">
          <p className="eyebrow">Evidence-Backed, Not Overstated</p>
          <h2>The vision is hopeful. The claims still need to stay careful.</h2>
        </div>
        <div className="two-column">
          <div>
            <p>
              The former Ecusta Mill is a documented brownfield with a long industrial history,
              multiple state brownfields tracts, and cleanup controls that still matter. Any public
              proposal should respect tract-specific restrictions, agency-approved remediation,
              and transparent records.
            </p>
            <p>
              City records also show that Brevard has treated data centers and similar facilities as
              a serious land-use question because of potential demands involving power, water, heat,
              noise, and infrastructure.
            </p>
          </div>
          <div className="label-panel compact">
            <h3>Evidence labels</h3>
            <div className="label-grid">
              {evidenceLabels.map(([label, meaning]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <p>{meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline records-timeline">
          {timeline.map(([year, text]) => (
            <article className="timeline-item" key={year}>
              <strong>{year}</strong>
              <p>{text}</p>
            </article>
          ))}
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
          <h2>Ask decision-makers to compare the full community value of each path.</h2>
          <p>
            Ask for public records, tract-specific clarity, utility estimates, noise and heat analysis,
            brownfields restrictions, and a genuine comparison between a high-intensity data-center path
            and a wellness-centered revitalization plan.
          </p>
        </div>
        <div className="action-card">
          <h3>Ask for:</h3>
          <ul>
            <li>Ecusta-specific permit filings</li>
            <li>Water and electrical demand estimates</li>
            <li>Backup generator, noise, and heat plans</li>
            <li>Brownfields tract restrictions</li>
            <li>Public access, recreation, wellness, and tourism alternatives</li>
            <li>Sunflower harvest and biodiesel feasibility partners</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>Ecusta Land</p>
        <p>Sunflower Power for restoration, beautification, wellness, and community revitalization.</p>
      </footer>
    </main>
  );
}
