const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

const quickFacts = [
  ["Location", "Former Ecusta mill site • Brevard / Pisgah Forest, NC"],
  ["Vision", "Sunflowers, trails, wellness, education, native planting, and public access"],
  ["Public action", "Petition now live"],
  ["Guardrail", "Hopeful vision, careful claims, transparent records"],
];

const visionPillars = [
  ["Beauty", "Turn a hard industrial legacy into a visible field of renewal people can see, walk, photograph, and care for."],
  ["Wellness", "Create a calm public landscape tied to movement, retreat, fresh air, mountain identity, and community health."],
  ["Recreation", "Connect trails, biking, walking, river access, family use, and the outdoor character of Brevard and Pisgah Forest."],
  ["Education", "Use the land as a living classroom for brownfield history, phytomanagement, native planting, ecology, art, and stewardship."],
];

const visionGallery = [
  {
    title: "The Sunflower Field",
    image: "/images/ecusta-photo-hero-valley.webp",
    alt: "Sunflower fields, walking paths, a stream, restored mill buildings, mountains, and sacred geometry at golden hour in the Ecusta vision.",
    text: "A bright public symbol of renewal: sunflowers, native planting, pollinator habitat, mountain light, and beauty people can recognize immediately.",
  },
  {
    title: "Wellness by Design",
    image: "/images/ecusta-photo-wellness-garden.webp",
    alt: "Sacred-geometry wellness garden with meditation circle, sunflower plantings, stream, pavilion, and Blue Ridge mountain views.",
    text: "A wellness-centered garden shaped by circles, sacred geometry, walking paths, gathering spaces, sunflower beds, and mountain calm.",
  },
  {
    title: "Trails Through Bloom",
    image: "/images/ecusta-photo-trail-stream.webp",
    alt: "Walking and biking trail beside a clear stream with sunflowers, native grasses, wildflowers, and mountain views.",
    text: "A public recreation future tied to the Ecusta Trail, Pisgah Forest, waterways, biking, walking, family use, and outdoor access.",
  },
  {
    title: "Bloom to Benefit",
    image: "/images/ecusta-photo-harvest-community.webp",
    alt: "Community sunflower harvest and gathering space with baskets, pavilion, sacred geometry plaza, and mountain sunset.",
    text: "A seasonal cycle where planting and bloom lead to learning, stewardship, seed saving, events, and carefully explored reuse opportunities.",
  },
];

const supportQuotes = [
  "Brevard deserves something people can enjoy.",
  "Sunflowers make renewal visible.",
  "Public access matters.",
  "This fits the identity of a mountain community.",
];

const moratoriumFacts = [
  ["What happened", "Brevard adopted Ordinance No. 2026-11 on March 16, 2026, creating a temporary moratorium on accepting, processing, and approving applications for data centers, cryptomining facilities, server farms, and similar high-impact digital infrastructure."],
  ["Why it matters", "The ordinance says these facilities were not specifically addressed in Brevard’s Unified Development Ordinance and raised questions around infrastructure, heat, noise, land use, and public standards."],
  ["How long", "The ordinance states that the moratorium expires July 2, 2026 unless City Council ends it earlier."],
  ["What it does not prove", "The moratorium does not prove an Ecusta data center is approved. It shows the city treated this type of development as serious enough to pause and review."],
];

const whySunflowers = [
  ["Visible hope", "People understand sunflowers immediately. They are bright, memorable, photographic, and emotionally opposite of abandonment."],
  ["Pollinator support", "Sunflower fields and native plantings can support bees, birds, butterflies, and habitat when designed responsibly."],
  ["Education", "They create an easy entry point for soil health, phytomanagement, seed cycles, brownfield caution, and land stewardship."],
  ["Harvest potential", "Seed heads may support education, seed saving, partnerships, events, and carefully explored biodiesel feasibility."],
];

const twoFutures = [
  {
    title: "Sunflower Power Vision",
    tone: "Community-scale revitalization",
    points: [
      "Sunflower fields and native plantings",
      "Public trails, bike routes, and outdoor access",
      "Wellness, arts, photography, music, and education",
      "Tourism destination connected to Pisgah Forest and Brevard",
      "Seasonal harvest and reuse education",
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
  ["Harvest", "Collect seed heads where appropriate and safe, with handling guided by site conditions and qualified partners."],
  ["Reuse", "Explore seed saving, education, local partnerships, and biodiesel potential as part of a regenerative cycle."],
];

const communityAsks = [
  ["Show the documents", "Publish Ecusta-specific filings, utility estimates, environmental reviews, noise studies, heat plans, and brownfield constraints in plain language."],
  ["Compare the futures", "Require a real side-by-side comparison between high-impact digital infrastructure and a community-serving revitalization plan."],
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
    q: "Can sunflowers clean the whole site?",
    a: "No public-facing claim should say that. Sunflowers and native plantings may support phytomanagement, demonstration planting, soil stabilization, habitat, and education, but a complex brownfield still depends on tract-specific testing and approved remediation.",
  },
  {
    q: "Is a data center officially approved for Ecusta?",
    a: "Based on the current research dossier and official records checked so far, the answer is not confirmed. What is confirmed is that Brevard adopted a temporary moratorium while reviewing how to regulate data centers and similar facilities.",
  },
  {
    q: "Could harvested sunflowers be used for biodiesel?",
    a: "Sunflower seed oil can be explored as part of an end-of-season educational and regenerative-use cycle. For Ecusta, that idea should be developed carefully with site-specific safety guidance, harvest handling protocols, and qualified partners.",
  },
];

export default function Home() {
  return (
    <main>
      <a className="floating-petition" href={petitionUrl} target="_blank" rel="noopener noreferrer">
        Sign Petition
      </a>

      <section className="hero hero-with-photo hero-split-polish">
        <nav className="nav" aria-label="Main navigation">
          <a href="#vision">Vision</a>
          <a href="#gallery">Gallery</a>
          <a href="#data-center">Data Center</a>
          <a href="#moratorium">Moratorium</a>
          <a href="/research">Research</a>
          <a href="/take-action">Take Action</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Ecusta Land • Brevard / Pisgah Forest, NC</p>
            <h1>Sunflower Power for Ecusta.</h1>
            <p className="hero-copy">
              A public-facing vision for the former Ecusta mill site: sunflowers, trails, wellness,
              education, native planting, beauty, and community benefit.
            </p>
            <p className="microcopy">Join the growing community asking for a more beautiful future for Ecusta.</p>
            <div className="hero-actions">
              <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
              <a className="button secondary" href="/vision-gallery">View the vision</a>
              <a className="button secondary" href="/research">See the research</a>
            </div>
          </div>

          <aside className="hero-card photo-hero-card elevated-photo-card">
            <img
              className="hero-photo"
              src="/images/ecusta-photo-hero-valley.webp"
              alt="Sunflower fields, walking paths, stream, restored mill buildings, mountains, and sacred geometry at golden hour in the Ecusta vision."
            />
            <p className="card-label">The focal point</p>
            <h2>Restoration. Beautification. Vitality.</h2>
            <p>
              Ecusta can become a place people visit, walk, learn from, photograph, and feel proud of again.
            </p>
          </aside>
        </div>
      </section>

      <section className="visual-band" aria-label="Ecusta Land visual preview">
        <img
          src="/images/ecusta-photo-hero-valley.webp"
          alt="Wide view of the Ecusta Land sunflower, stream, trail, wellness, restored mill, and mountain vision at golden hour."
        />
      </section>

      <section className="quick-facts" aria-label="Quick facts">
        {quickFacts.map(([label, text]) => (
          <article key={label}>
            <strong>{label}</strong>
            <span>{text}</span>
          </article>
        ))}
      </section>

      <section className="section data-center-alert" id="data-center">
        <div className="alert-inner">
          <div className="alert-icon">⚠️</div>
          <div className="alert-content">
            <p className="alert-kicker">Data Center Threat</p>
            <h2>This land could become a closed data center instead of a public space.</h2>
            <p>
              Brevard adopted <strong>Ordinance No. 2026-11</strong> — a temporary moratorium on data centers,
              cryptomining facilities, and server farms — because these high-impact uses raised serious questions
              about power, water, noise, heat, and community fit. The moratorium expires <strong>July 2, 2026</strong>.
              The community deserves to see and compare both futures before anything is approved.
            </p>
            <div className="alert-actions">
              <a className="button primary" href="#two-futures">Compare the two futures</a>
              <a className="button secondary" href="/research">See the research</a>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="section intro-section">
        <div className="section-heading centered">
          <p className="eyebrow">The Better Fit</p>
          <h2>A future people can actually experience.</h2>
          <p>
            This is not just about opposing one use. It is about naming a better one: a restorative landscape
            that supports wellness, recreation, tourism, education, arts, public access, and long-term pride.
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

      <section className="section photo-feature-section">
        <div className="photo-feature-grid">
          <img
            className="feature-photo"
            src="/images/ecusta-photo-trail-stream.webp"
            alt="Walking and biking trail beside a clear stream with sunflowers, native grasses, wildflowers, and mountain views."
          />
          <div>
            <p className="eyebrow">Trails • Water • Public Access</p>
            <h2>The vision becomes real when people can walk through it.</h2>
            <p>
              Sunflowers are the invitation. Trails, stream edges, native plantings, gathering places, and careful public access are what turn that invitation into a living community space.
            </p>
            <a className="seo-link-card" href="/vision-gallery">View more imagery</a>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-heading centered">
          <p className="eyebrow">Vision Gallery</p>
          <h2>See the future before it is decided.</h2>
          <p>
            These concept visuals are not final site plans. They help people picture the direction:
            sunflowers, sacred geometry, wellness gardens, trails, water, mountains, harvest, and access.
          </p>
        </div>
        <div className="gallery-grid">
          {visionGallery.map((item) => (
            <article className="gallery-card photo-gallery-card" key={item.title}>
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="gallery-cta">
          <a className="button primary" href="/vision-gallery">Open full gallery</a>
        </div>
      </section>

      <section className="section support-section">
        <div className="section-heading centered">
          <p className="eyebrow">Why People Support This</p>
          <h2>A simple idea with a strong emotional center.</h2>
        </div>
        <div className="support-grid">
          {supportQuotes.map((quote) => (
            <blockquote key={quote}>“{quote}”</blockquote>
          ))}
        </div>
      </section>

      <section className="section sunflower power-section">
        <div className="section-heading">
          <p className="eyebrow">Sunflower Power</p>
          <h2>Visible hope, rooted in responsible land stewardship.</h2>
        </div>
        <div className="two-column">
          <p>
            Sunflowers give Ecusta a clear public identity: bright, memorable, hopeful, and practical.
            They can help shift the feeling of the land from abandonment toward seasonal beauty,
            pollinator habitat, walking paths, and civic renewal.
          </p>
          <div className="callout warm">
            <span className="evidence-badge">Evidence A / E / F</span>
            <p>
              Sunflowers and native plantings should be described as phytomanagement, demonstration planting,
              habitat support, soil stabilization, and education — not as a stand-alone promise to clean the entire site.
            </p>
          </div>
        </div>
        <div className="why-grid">
          {whySunflowers.map(([title, text]) => (
            <article className="why-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="moratorium" className="section moratorium-section">
        <div className="section-heading centered">
          <p className="eyebrow">2026 Moratorium</p>
          <h2>Brevard already paused to study high-impact digital uses.</h2>
          <p>
            Ordinance No. 2026-11 matters because it shows data centers, cryptomining facilities,
            server farms, and similar uses raised serious local planning questions.
          </p>
        </div>
        <div className="moratorium-grid">
          {moratoriumFacts.map(([title, text]) => (
            <article className="moratorium-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="two-futures" className="section contrast-section">
        <div className="section-heading centered">
          <p className="eyebrow">Two Futures</p>
          <h2>Community revitalization or closed industrial infrastructure?</h2>
          <p>
            A fair public conversation should compare what each path gives to Brevard, what it asks from infrastructure,
            and whether it fits the character of the community.
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
        <div className="photo-feature-grid reverse">
          <div>
            <p className="eyebrow">Bloom to Benefit</p>
            <h2>A seasonal cycle of beauty, learning, harvest, and reuse.</h2>
            <p>
              Harvest should be framed carefully: education, stewardship, seed saving, events, local partnerships, and biodiesel feasibility exploration only where site-specific safety and handling are verified.
            </p>
          </div>
          <img
            className="feature-photo"
            src="/images/ecusta-photo-harvest-community.webp"
            alt="Community sunflower harvest and gathering space with baskets, pavilion, sacred geometry plaza, and mountain sunset."
          />
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
          <h2>Hopeful does not mean careless.</h2>
        </div>
        <div className="two-column">
          <div>
            <p>
              The former Ecusta Mill is a documented brownfield with a long industrial history, multiple state brownfields
              tracts, and cleanup controls that still matter. Any public proposal should respect tract-specific restrictions,
              agency-approved remediation, and transparent records.
            </p>
            <p>
              The vision can be inspiring and still be careful: no overclaiming, no unsupported accusations, and no pretending
              sunflowers alone solve a complex site.
            </p>
            <a className="seo-link-card" href="/research">Open Research & Documents</a>
          </div>
          <div className="label-panel compact">
            <h3>Source posture</h3>
            <div className="label-grid">
              <div><strong>A</strong><p>Official federal record</p></div>
              <div><strong>B</strong><p>Official local record</p></div>
              <div><strong>C</strong><p>Official state brownfields record</p></div>
              <div><strong>E</strong><p>Peer-reviewed or technical source</p></div>
              <div><strong>F</strong><p>Carefully framed inference</p></div>
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
          <h2>Support the Sunflower Vision.</h2>
          <p>
            Sign the petition and ask decision-makers for public records, brownfields clarity, utility estimates,
            and a real comparison between a high-impact data-center path and a wellness-centered public vision.
          </p>
          <p className="microcopy">A beautiful future will not happen by accident. It has to be asked for clearly.</p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
            <a className="button secondary" href="/take-action">Open the action page</a>
            <a className="button secondary" href="/contact">Contact Amy Turner</a>
          </div>
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
        <p><a href={petitionUrl} target="_blank" rel="noopener noreferrer">Petition</a> · <a href="/vision-gallery">Gallery</a> · <a href="/research">Research</a> · <a href="/take-action">Take Action</a> · <a href="/contact">Contact Amy Turner</a></p>
              <p style={{ fontSize: "0.72rem", opacity: 0.45 }}>Site by <a href="https://localsignalwebsites.studio" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>Local Signal Websites</a></p>
      </footer>
    </main>
  );
}
