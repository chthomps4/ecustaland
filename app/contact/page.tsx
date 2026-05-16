import type { Metadata } from "next";

const pageTitle = "Contact | Ecusta Land";
const pageDescription =
  "Contact Amy Turner about the Ecusta Land sunflower, wellness, trails, and community revitalization vision.";
const pageUrl = "https://www.ecustaland.org/contact";
const pageImage = "/images/ecusta-photo-harvest-community.webp";

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
    images: [{ url: pageImage, width: 1672, height: 941, alt: "Ecusta Land sunflower harvest and community gathering concept." }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";
const emailUrl = "mailto:vibetribewellness.studio@gmail.com?subject=Ecusta%20Land%20Vision";

const contactReasons = [
  "Share public records, meeting notes, or official documents related to the Ecusta site.",
  "Offer support for the Sunflower Power, wellness, beautification, trails, and education vision.",
  "Connect local partners for native planting, wellness design, arts, recreation, or responsible land stewardship.",
  "Ask how to help communicate the community-centered alternative to high-impact digital infrastructure.",
];

const sharePrompts = [
  {
    title: "Simple share message",
    text: "I support a better future for the former Ecusta property: sunflowers, trails, wellness, native planting, education, beauty, and public access. Please look at the vision and sign the petition.",
  },
  {
    title: "Public records message",
    text: "Before any high-impact use moves forward at Ecusta, the public deserves clear records, utility estimates, brownfield details, and a real comparison with a community-centered revitalization plan.",
  },
  {
    title: "Positive vision message",
    text: "Ecusta can become a place people visit, walk, photograph, learn from, and feel proud of again. Sunflower Power is about restoration, beautification, wellness, and community benefit.",
  },
];

export default function ContactPage() {
  return (
    <main className="take-action-page">
      <a className="floating-petition" href={petitionUrl} target="_blank" rel="noopener noreferrer">
        Sign Petition
      </a>

      <section className="section action-hero">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h1>Connect about the Ecusta Land vision.</h1>
          <p className="hero-copy">
            For questions, documents, partnership ideas, wellness-center concepts, public support, or local collaboration, contact Amy Turner.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={emailUrl}>Email Amy Turner</a>
            <a className="button secondary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
            <a className="button secondary" href="/research">Research & documents</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="geometry-grid">
          <img
            className="wellness-image"
            src="/images/ecusta-photo-wellness-garden.webp"
            alt="Sacred-geometry wellness garden with meditation circle, sunflower plantings, stream, pavilion, and Blue Ridge mountain views."
          />
          <div>
            <p className="eyebrow">Amy Turner</p>
            <h2>Vibe Tribe Wellness Studio</h2>
            <p>
              The Ecusta Land vision is centered on a better community fit: sunflowers, wellness, beautification, trails, education, native planting, arts, and public benefit.
            </p>
            <p>
              Use this contact for collaboration, questions, local input, public records, wellness-center ideas, sacred-geometry design inspiration, and support for the revitalization vision.
            </p>
            <div className="contact-card">
              <span>Email</span>
              <a href={emailUrl}>vibetribewellness.studio@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section photo-feature-section">
        <div className="photo-feature-grid reverse">
          <div>
            <p className="eyebrow">Picture the Ask</p>
            <h2>Share the vision as a place, not just an idea.</h2>
            <p>
              The most persuasive version of Ecusta Land is visible: trails, stream edges, sunflowers, wellness gardens, gathering spaces, education, and careful public benefit.
            </p>
            <a className="seo-link-card" href="/vision-gallery">Open Vision Gallery</a>
          </div>
          <img
            className="feature-photo"
            src="/images/ecusta-photo-hero-valley.webp"
            alt="Sunflower fields, walking paths, stream, restored mill buildings, mountains, and sacred geometry at golden hour in the Ecusta vision."
          />
        </div>
      </section>

      <section className="section asks-section">
        <div className="section-heading centered">
          <p className="eyebrow">What to Send</p>
          <h2>Useful messages are specific, constructive, and evidence-aware.</h2>
        </div>
        <div className="resource-grid">
          {contactReasons.map((reason) => (
            <article className="resource-card" key={reason}>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading centered">
          <p className="eyebrow">Share the Vision</p>
          <h2>Copy a short message and point people to the site, gallery, and petition.</h2>
        </div>
        <div className="resource-grid share-grid">
          {sharePrompts.map((item) => (
            <article className="resource-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section action">
        <div>
          <p className="eyebrow">Useful Links</p>
          <h2>Send people to one clear next step.</h2>
          <p>
            The homepage explains the full idea, the gallery helps people picture it, the research page supports careful claims, the petition lets supporters act, and this contact page gives partners a direct path to Amy.
          </p>
        </div>
        <div className="action-card">
          <h3>Links:</h3>
          <ul>
            <li><a href="/">Ecusta Land homepage</a></li>
            <li><a href="/vision-gallery">Vision Gallery</a></li>
            <li><a href="/research">Research & Documents</a></li>
            <li><a href="/take-action">Take Action page</a></li>
            <li><a href={petitionUrl} target="_blank" rel="noopener noreferrer">Change.org petition</a></li>
            <li><a href={emailUrl}>Email Amy Turner</a></li>
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
