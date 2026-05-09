import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Take Action | Ecusta Land",
  description:
    "Ways to support the Ecusta Land vision: sign the sunflower petition, ask for public records, compare the data-center path with wellness-centered revitalization, and explore sacred-geometry wellness design resources.",
  alternates: {
    canonical: "https://ecustaland.org/take-action",
  },
};

const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

const actionItems = [
  {
    title: "Sign the sunflower petition",
    text: "Support the public request to explore transforming the old Ecusta Paper Mill property into a sunflower field and community green space for Brevard and Transylvania County.",
  },
  {
    title: "Ask for public records",
    text: "Request Ecusta-specific permit filings, utility estimates, water-use projections, noise studies, backup generator plans, heat analysis, traffic impacts, brownfields restrictions, and any public incentive or subsidy documents.",
  },
  {
    title: "Ask for a real comparison",
    text: "Decision-makers should compare the full community value of a data-center path against a wellness-centered revitalization plan built around trails, sunflowers, native planting, education, tourism, and public access.",
  },
  {
    title: "Ask what fits Brevard",
    text: "The next chapter of Ecusta should be measured against Brevard’s identity: outdoor recreation, Pisgah Forest, the Ecusta Trail, waterfalls, arts, wellness, small business, and long-term public benefit.",
  },
];

const wellnessPrinciples = [
  "Use sacred geometry as a design language for harmony, orientation, proportion, and beauty — not as a medical promise.",
  "Shape paths, gardens, gathering spaces, and wellness areas around circles, spirals, sunflower geometry, and natural ratios.",
  "Connect the wellness center idea to sunlight, movement, native planting, quiet gathering, art, water, and mountain views.",
  "Keep the concept evidence-aware: public health, recreation, beauty, access, and calm civic design are the grounded benefits.",
];

export default function TakeActionPage() {
  return (
    <main className="take-action-page">
      <section className="section action-hero">
        <nav className="nav page-nav" aria-label="Page navigation">
          <a href="/">Home</a>
          <a href="/take-action">Take Action</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="section-heading">
          <p className="eyebrow">Take Action</p>
          <h1>Help make Ecusta a place of wellness, beauty, trails, education, and public benefit.</h1>
          <p className="hero-copy">
            The most useful public action is calm, specific, and evidence-based: sign the petition,
            ask for documents, ask for comparisons, and ask whether each proposal truly fits Brevard’s future.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">
              Sign the Change.org petition
            </a>
            <a className="button secondary" href="https://livingdesigntechnology.com/harmonypt" target="_blank" rel="noopener noreferrer">
              Explore HarmonyPT
            </a>
            <a className="button secondary" href="/contact">Contact Amy Turner</a>
          </div>
        </div>
      </section>

      <section className="section petition-section">
        <div className="petition-card">
          <div>
            <p className="eyebrow">Petition</p>
            <h2>Beautifying Ecusta Paper Mill Field</h2>
            <p>
              The petition gives supporters a simple first step: back the idea of a sunflower field and
              community-centered green space as a better future for the former Ecusta property.
            </p>
          </div>
          <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">
            Open petition
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Public Questions</p>
          <h2>What to ask decision-makers before any high-impact use moves forward.</h2>
        </div>
        <div className="resource-grid">
          {actionItems.map((item) => (
            <article className="resource-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.title === "Sign the sunflower petition" ? (
                <a className="seo-link-card" href={petitionUrl} target="_blank" rel="noopener noreferrer">
                  Sign petition
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section geometry-section">
        <div className="geometry-grid">
          <img
            className="wellness-image"
            src="/images/wellness-sacred-geometry.svg"
            alt="Sacred geometry wellness center concept with sunflower pattern, mountain landscape, river, and gathering design"
          />
          <div>
            <p className="eyebrow">Wellness Center Vision</p>
            <h2>Sacred geometry can give the wellness concept a visual language.</h2>
            <p>
              A wellness center at Ecusta should feel calm, intentional, and rooted in nature. Sacred-geometry-inspired design can help organize gardens, paths, gathering circles, water features, and quiet spaces around harmony, proportion, and beauty.
            </p>
            <p>
              The safe public framing is design-oriented: sacred geometry as visual structure, wayfinding, garden layout, and symbolic connection to sunflowers, spirals, circles, and natural patterns — not as a health claim.
            </p>
            <ul>
              {wellnessPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="seo-link-card" href="https://livingdesigntechnology.com/harmonypt" target="_blank" rel="noopener noreferrer">
              Visit livingdesigntechnology.com/harmonypt
            </a>
          </div>
        </div>
      </section>

      <section className="section action">
        <div>
          <p className="eyebrow">Suggested Public Message</p>
          <h2>We are not against change. We are asking for the right kind of change.</h2>
          <p>
            Ecusta can become a community-serving landscape of sunflowers, trails, wellness, education, arts, native planting, and public access. Before any data-center or high-impact digital infrastructure path moves forward, the public deserves a transparent comparison.
          </p>
        </div>
        <div className="action-card">
          <h3>Share this idea:</h3>
          <ul>
            <li>Ecusta should be revitalized in a way people can use and enjoy.</li>
            <li>Public records should be easy to find and understand.</li>
            <li>Sunflowers and native planting can support beauty, education, habitat, and land stewardship.</li>
            <li>A wellness-centered plan better matches Brevard’s identity than a closed industrial data center.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
