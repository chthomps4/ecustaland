const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

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

const interestCards = [
  ["Walk through bloom season", "Imagine a public trail moving through sunflower fields, native grasses, pollinator habitat, mountain views, and interpretive signs that explain the land’s past and future."],
  ["Make Ecusta a destination", "Families, photographers, cyclists, seniors, school groups, wellness visitors, artists, and local businesses could all have a reason to gather around the site."],
  ["Turn a scar into a classroom", "Instead of hiding the brownfield story, Ecusta could teach phytomanagement, ecology, responsible reuse, local history, and how communities repair complicated places."],
  ["Create a seasonal economy", "Bloom walks, harvest festivals, bike rentals, local art markets, wellness classes, educational tours, and sunflower products could support small local opportunity."],
];

const visionGallery = [
  {
    title: "The Sunflower Field",
    image: "/images/ecusta-sunflower-geometry.svg",
    alt: "Sunflower field, mountain, river, and sacred geometry concept for Ecusta Land",
    text: "A highly visible landscape of sunflowers, native planting, pollinator habitat, and public beauty — something people can recognize, photograph, visit, and support.",
  },
  {
    title: "Wellness by Design",
    image: "/images/wellness-sacred-geometry.svg",
    alt: "Sacred geometry wellness center concept with sunflower pattern, mountains, and gathering space",
    text: "A calm wellness-center concept using circles, spirals, sunflower geometry, gardens, paths, and gathering spaces as a design language for harmony and orientation.",
  },
  {
    title: "Trails, Water, and Public Access",
    image: "/images/ecusta-trail-recreation.svg",
    alt: "Walking and biking trail through sunflowers, native grasses, river, and mountains",
    text: "A future tied to the Ecusta Trail, Pisgah Forest, waterfalls, walking paths, biking, family recreation, education, and outdoor connection.",
  },
  {
    title: "Bloom to Benefit",
    image: "/images/ecusta-harvest-reuse.svg",
    alt: "Sunflower harvest, seed baskets, education, and regenerative reuse concept",
    text: "A seasonal cycle where bloom leads to learning, stewardship, seed saving, community events, and carefully explored reuse opportunities.",
  },
];

const moratoriumFacts = [
  ["What happened", "Brevard adopted Ordinance No. 2026-11 on March 16, 2026, creating a temporary moratorium on accepting, processing, and approving applications for data centers, cryptomining facilities, server farms, and similar high-impact digital infrastructure."],
  ["Why it happened", "The ordinance says data centers and similar facilities were not specifically addressed in Brevard’s Unified Development Ordinance and can create significant demands on electrical and water infrastructure, noise, heat, and land-use impacts."],
  ["How long it lasted", "The ordinance states that the moratorium expires July 2, 2026 unless City Council ends it earlier."],
  ["What it means here", "The moratorium does not prove an Ecusta data center is approved. It does show that the city considered this category of development important enough to pause while zoning standards were reviewed."],
];

const whySunflowers = [
  ["Visible hope", "People understand sunflowers immediately. They are bright, memorable, photographic, and emotionally opposite of abandonment."],
  ["Pollinator support", "Sunflower fields and native plantings can support bees, birds, butterflies, and habitat when designed responsibly."],
  ["Educational value", "They create a simple entry point for explaining soil health, phytomanagement, seed cycles, land stewardship, and brownfield caution."],
  ["Harvest potential", "At season’s end, seed heads can become part of educational programming, seed saving, local partnerships, and biodiesel feasibility exploration."],
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

const localFit = [
  "Brevard is already known for outdoor access, trails, waterfalls, music, arts, and small-town character.",
  "The Ecusta Trail and Pisgah Forest connection make public recreation a natural fit.",
  "A wellness and beautification project gives residents and visitors something they can actually experience.",
  "A revitalized landscape can honor industrial history while moving the site toward health, usefulness, and public pride.",
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
    q: "Why would people care about sunflowers?",
    a: "Because they make renewal visible. A sunflower field can become a landmark, a seasonal destination, a learning tool, a pollinator habitat, a photography site, and a symbol that the land is being brought back into public life.",
  },
  {
    q: "Is a data center officially approved for Ecusta?",
    a: "Based on the current research dossier and official records checked so far, the answer is not confirmed. What is confirmed is that Brevard adopted a temporary moratorium while reviewing how to regulate data centers and similar facilities.",
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

function SceneGraphic({ variant }: { variant: "hero" | "trail" | "wellness" | "harvest" }) {
  return (
    <div className={`scene-graphic scene-${variant}`} aria-hidden="true">
      <div className="mountains" />
      <div className="sun" />
      <div className="river" />
      <div className="path" />
      <div className="mill"><span /><span /><span /></div>
      <div className="sunflowers"><span /><span /><span /><span /><span /></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a href="#vision">Vision</a>
          <a href="#gallery">Gallery</a>
          <a href="#moratorium">Moratorium</a>
          <a href="#two-futures">Two Futures</a>
          <a href="#bloom">Bloom to Benefit</a>
          <a href="/take-action">Take Action</a>
          <a href="/contact">Contact</a>
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
              <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
              <a className="button secondary" href="/vision-gallery">View the vision gallery</a>
              <a className="button secondary" href="/contact">Contact Amy</a>
            </div>
          </div>

          <aside className="hero-card sunflower-card">
            <SceneGraphic variant="hero" />
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

      <section id="gallery" className="section gallery-section">
        <div className="section-heading centered">
          <p className="eyebrow">Vision Gallery</p>
          <h2>What Ecusta could feel like when the land becomes public, beautiful, and useful again.</h2>
          <p>
            These concept visuals are not final site plans. They show the design direction: sunflowers,
            sacred geometry, wellness gardens, trails, native planting, water, mountain identity, and public access.
          </p>
        </div>
        <div className="gallery-grid">
          {visionGallery.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="gallery-cta">
          <a className="button primary" href="/vision-gallery">Open full vision gallery</a>
        </div>
      </section>

      <section id="imagine" className="section imagine-section">
        <div className="section-heading centered">
          <p className="eyebrow">Imagine Ecusta Differently</p>
          <h2>Not a fenced-off utility burden. A place people can actually use.</h2>
          <p>
            The vision becomes powerful when people can picture themselves there: walking, learning,
            taking photos, riding bikes, listening to music, bringing kids, meeting friends, and seeing
            the former mill land become beautiful again.
          </p>
        </div>
        <div className="image-row">
          <figure><SceneGraphic variant="trail" /><figcaption>Trails through sunflowers and native planting.</figcaption></figure>
          <figure><SceneGraphic variant="wellness" /><figcaption>Wellness, gathering, arts, and public use.</figcaption></figure>
          <figure><SceneGraphic variant="harvest" /><figcaption>Seasonal harvest, education, and reuse potential.</figcaption></figure>
        </div>
        <div className="interest-grid">
          {interestCards.map(([title, text]) => (
            <article className="interest-card" key={title}>
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
          <h2>Brevard already paused to study data centers and similar high-impact digital uses.</h2>
          <p>
            Ordinance No. 2026-11 is important because it shows this is not just a matter of taste.
            The city formally recognized that data centers, cryptomining, server farms, and similar facilities
            needed clearer rules before new approvals moved forward.
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

      <section className="section local-fit-section">
        <div className="local-fit-card">
          <p className="eyebrow">Why This Fits Brevard</p>
          <h2>Ecusta’s next chapter should feel like it belongs here.</h2>
          <ul>
            {localFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
              City records show that Brevard treated data centers and similar facilities as a serious
              land-use question because of infrastructure, utility, heat, noise, and regulatory concerns.
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
          <h2>Sign the petition and ask decision-makers to compare the full community value of each path.</h2>
          <p>
            Ask for public records, tract-specific clarity, utility estimates, noise and heat analysis,
            brownfields restrictions, and a genuine comparison between a high-intensity data-center path
            and a wellness-centered revitalization plan.
          </p>
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
        <p><a href={petitionUrl} target="_blank" rel="noopener noreferrer">Petition</a> · <a href="/vision-gallery">Gallery</a> · <a href="/take-action">Take Action</a> · <a href="/contact">Contact Amy Turner</a></p>
      </footer>
    </main>
  );
}
