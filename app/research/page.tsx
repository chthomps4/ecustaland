import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Documents | Ecusta Land",
  description:
    "Research posture, public-record priorities, evidence labels, and careful claim language for the Ecusta Land sunflower, wellness, and community revitalization vision.",
  alternates: {
    canonical: "https://ecustaland.org/research",
  },
};

const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

const evidenceLabels = [
  ["A", "Official federal regulatory record"],
  ["B", "Official local government record"],
  ["C", "Official state brownfields record"],
  ["D", "Reputable local history or local news source"],
  ["E", "Peer-reviewed, technical, or national-lab source"],
  ["F", "Research limitation or carefully framed inference"],
];

const documentRequests = [
  "Ecusta-specific development applications, permits, site plans, or rezoning materials",
  "Electrical demand estimates, utility upgrade requirements, and grid-impact information",
  "Water use, cooling, wastewater, heat, and stormwater information for any high-intensity use",
  "Backup generator, fuel storage, noise, traffic, and emergency-response plans",
  "Brownfields tract restrictions, environmental controls, remediation obligations, and agency correspondence",
  "Public incentives, subsidies, tax agreements, infrastructure commitments, or community-benefit promises",
];

const claimRules = [
  {
    title: "Say this",
    text: "Sunflowers and native plantings can support phytomanagement, demonstration planting, soil stabilization, habitat, education, and visible land stewardship when guided by site-specific conditions.",
  },
  {
    title: "Do not say this",
    text: "Do not claim sunflowers alone will clean the entire Ecusta site or replace qualified environmental testing, remediation, and agency-approved controls.",
  },
  {
    title: "Say this",
    text: "Brevard adopted a temporary moratorium on data centers, cryptomining facilities, server farms, and similar uses while reviewing how to regulate them.",
  },
  {
    title: "Do not say this",
    text: "Do not claim that a data center has been officially approved for Ecusta unless a verified Ecusta-specific approval record is produced.",
  },
];

export default function ResearchPage() {
  return (
    <main className="take-action-page">
      <section className="section action-hero">
        <nav className="nav page-nav" aria-label="Page navigation">
          <a href="/">Home</a>
          <a href="/vision-gallery">Gallery</a>
          <a href="/research">Research</a>
          <a href="/take-action">Take Action</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="section-heading">
          <p className="eyebrow">Research & Documents</p>
          <h1>Hopeful vision. Careful claims. Public records.</h1>
          <p className="hero-copy">
            Ecusta Land is built around a positive community vision, but the public conversation still needs evidence, source labels, brownfield caution, and transparent documents.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
            <a className="button secondary" href="/take-action">Ask for records</a>
            <a className="button secondary" href="/contact">Send documents</a>
          </div>
        </div>
      </section>

      <section className="section records-section">
        <div className="section-heading centered">
          <p className="eyebrow">Source Posture</p>
          <h2>The site should be inspiring without overclaiming.</h2>
          <p>
            A strong public campaign does not need exaggerated claims. It needs a clear vision, careful language, and a visible path for records that residents can understand.
          </p>
        </div>
        <div className="label-panel compact research-label-panel">
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
      </section>

      <section className="section asks-section">
        <div className="section-heading centered">
          <p className="eyebrow">Documents to Request</p>
          <h2>Before any high-impact use moves forward, the public deserves the full picture.</h2>
        </div>
        <div className="resource-grid research-grid">
          {documentRequests.map((item) => (
            <article className="resource-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading centered">
          <p className="eyebrow">Careful Claim Language</p>
          <h2>Use language that is strong, accurate, and defensible.</h2>
        </div>
        <div className="resource-grid claim-grid">
          {claimRules.map((item) => (
            <article className="resource-card" key={`${item.title}-${item.text}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section action">
        <div>
          <p className="eyebrow">Send Records</p>
          <h2>Help build the public record trail.</h2>
          <p>
            If you have official documents, meeting notes, public-record responses, agency letters, development filings, utility information, or brownfield documents related to Ecusta, send them to Amy Turner for review.
          </p>
        </div>
        <div className="action-card">
          <h3>Contact:</h3>
          <ul>
            <li><a href="mailto:vibetribewellness.studio@gmail.com?subject=Ecusta%20Land%20Documents">Email Amy Turner</a></li>
            <li><a href="/contact">Open contact page</a></li>
            <li><a href="/take-action">Open take action page</a></li>
            <li><a href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
