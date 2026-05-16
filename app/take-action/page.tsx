import type { Metadata } from "next";

const pageTitle = "Take Action | Ecusta Land";
const pageDescription =
  "Sign the petition, ask for records, and support a community-centered future for the former Ecusta mill site.";
const pageUrl = "https://www.ecustaland.org/take-action";
const pageImage = "/images/ecusta-photo-trail-stream.png";

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
    images: [{ url: pageImage, width: 1672, height: 941, alt: "Ecusta Land trail and stream vision with sunflowers and mountain views." }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
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
      <a className="floating-petition" href={petitionUrl} target="_blank" rel="noopener noreferrer">
        Sign Petition
      </a>

      <section className="section action-hero">
        <div className="section-heading">
          <p className="eyebrow">Take Action</p>
          <h1>Support the Sunflower Vision.</h1>
          <p className="hero-copy">
            The most useful public action is calm, specific, and evidence-based: sign the petition,
            ask for documents, ask for comparisons, and ask whether each proposal truly fits Brevard’s future.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">
              Sign the Change.org petition
            </a>
            <a className="button secondary" href="/research">Research & documents</a>
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

      <section className="section photo-feature-section">
        <div className="photo-feature-grid">
          <img
            className="feature-photo"
            src="/images/ecusta-photo-trail-stream.png"
            alt="Walking and biking trail beside a clear stream with sunflowers, native grasses, wildflowers, and mountain views."
          />
          <div>
            <p className="eyebrow">Make the Ask Visible</p>
            <h2>People support what they can picture.</h2>
            <p>
              The trail-and-stream vision gives supporters a concrete image to share: a public landscape where beauty, movement, water, native planting, and community access are part of the future.
            </p>
            <a className="seo-link-card" href="/vision-gallery">Open Vision Gallery</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Public Questions</p>
          <h2>What to ask before any high-impact use moves forward.</h2>
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
            src="/images/ecusta-photo-wellness-garden.png"
            alt="Sacred-geometry wellness garden with meditation circle, sunflower plantings, stream, pavilion, and Blue Ridge mountain views."
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

      <section className="section photo-feature-section">
        <div className="photo-feature-grid reverse">
          <div>
            <p className="eyebrow">Community Benefit</p>
            <h2>Harvest, education, gathering, and reuse belong in the public conversation.</h2>
            <p>
              A community-centered Ecusta can include seasonal events, seed education, stewardship, local partnerships, and carefully evaluated reuse paths — all guided by site-specific safety and environmental controls.
            </p>
          </div>
          <img
            className="feature-photo"
            src="/images/ecusta-photo-harvest-community.png"
            alt="Community sunflower harvest and gathering space with baskets, pavilion, sacred geometry plaza, and mountain sunset."
          />
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
          <h3>Useful links:</h3>
          <ul>
            <li><a href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the Change.org petition</a></li>
            <li><a href="/vision-gallery">View the Vision Gallery</a></li>
            <li><a href="/research">Open Research & Documents</a></li>
            <li><a href="/contact">Contact Amy Turner</a></li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>Ecusta Land</p>
        <p><a href={petitionUrl} target="_blank" rel="noopener noreferrer">Petition</a> · <a href="/vision-gallery">Gallery</a> · <a href="/research">Research</a> · <a href="/take-action">Take Action</a> · <a href="/contact">Contact Amy Turner</a></p>
      </footer>
    </main>
  );
}
