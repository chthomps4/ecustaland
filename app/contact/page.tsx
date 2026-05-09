import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ecusta Land",
  description:
    "Contact Amy Turner about the Ecusta Land vision for wellness, beautification, sunflowers, trails, education, and community revitalization in Brevard / Pisgah Forest, North Carolina.",
  alternates: {
    canonical: "https://ecustaland.org/contact",
  },
};

const contactReasons = [
  "Share public records, meeting notes, or official documents related to the Ecusta site.",
  "Offer support for the Sunflower Power, wellness, beautification, trails, and education vision.",
  "Connect local partners for native planting, wellness design, arts, recreation, or responsible land stewardship.",
  "Ask how to help communicate the community-centered alternative to high-impact digital infrastructure.",
];

export default function ContactPage() {
  return (
    <main className="take-action-page">
      <section className="section action-hero">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h1>Connect about the Ecusta Land vision.</h1>
          <p className="hero-copy">
            For questions, documents, partnership ideas, wellness-center concepts, or community support, contact Amy Turner.
          </p>
          <a className="button primary" href="mailto:vibetribewellness.studio@gmail.com?subject=Ecusta%20Land%20Vision">
            Email Amy Turner
          </a>
        </div>
      </section>

      <section className="section">
        <div className="geometry-grid">
          <div className="geometry-art" aria-hidden="true">
            <div className="geometry-flower" />
          </div>
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
              <a href="mailto:vibetribewellness.studio@gmail.com?subject=Ecusta%20Land%20Vision">
                vibetribewellness.studio@gmail.com
              </a>
            </div>
          </div>
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
    </main>
  );
}
