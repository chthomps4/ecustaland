import type { Metadata } from "next";

const pageTitle = "Vision Gallery | Ecusta Land";
const pageDescription =
  "Concept images for the Ecusta Land sunflower, trails, wellness, harvest, and community revitalization vision.";
const pageUrl = "https://www.ecustaland.org/vision-gallery";
const pageImage = "/images/ecusta-photo-wellness-garden.png";

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
    images: [{ url: pageImage, width: 1672, height: 941, alt: "Ecusta Land wellness garden concept with sunflower plantings and mountain views." }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

const galleryItems = [
  {
    title: "Sunflower Power Hero",
    image: "/images/ecusta-photo-hero-valley.png",
    alt: "Sunflower fields, walking paths, a stream, restored mill buildings, mountains, and sacred geometry at golden hour in the Ecusta vision.",
    text: "The central public image: a restored landscape where the former mill identity becomes beauty, access, water, mountain light, and community pride.",
  },
  {
    title: "Wellness Garden",
    image: "/images/ecusta-photo-wellness-garden.png",
    alt: "Sacred-geometry wellness garden with meditation circle, sunflower plantings, stream, pavilion, and Blue Ridge mountain views.",
    text: "A wellness-centered garden with circular paths, sunflower beds, sacred-geometry design, calm gathering space, and a retreat-like pavilion.",
  },
  {
    title: "Trail + Stream",
    image: "/images/ecusta-photo-trail-stream.png",
    alt: "Walking and biking trail beside a clear stream with sunflowers, native grasses, wildflowers, and mountain views.",
    text: "A recreation-forward future connected to the Ecusta Trail, Pisgah Forest, cycling, walking, water, native planting, and everyday public use.",
  },
  {
    title: "Harvest Community Center",
    image: "/images/ecusta-photo-harvest-community.png",
    alt: "Community sunflower harvest and gathering space with baskets, pavilion, sacred geometry plaza, and mountain sunset.",
    text: "A seasonal public gathering place where bloom leads to learning, seed saving, events, stewardship, and careful reuse exploration.",
  },
];

const conceptItems = [
  {
    title: "Sunflower Geometry Concept",
    image: "/images/ecusta-sunflower-geometry.svg",
    alt: "Sunflower field, mountain, river, and sacred geometry concept for Ecusta Land",
  },
  {
    title: "Wellness Design Concept",
    image: "/images/wellness-sacred-geometry.svg",
    alt: "Sacred geometry wellness center concept with sunflower pattern, mountains, and gathering space",
  },
  {
    title: "Trail Recreation Concept",
    image: "/images/ecusta-trail-recreation.svg",
    alt: "Walking and biking trail through sunflowers, native grasses, river, and Blue Ridge mountains",
  },
  {
    title: "Harvest Reuse Concept",
    image: "/images/ecusta-harvest-reuse.svg",
    alt: "Sunflower harvest, seed baskets, education, and regenerative reuse concept",
  },
];

export default function VisionGalleryPage() {
  return (
    <main className="take-action-page">
      <a className="floating-petition" href={petitionUrl} target="_blank" rel="noopener noreferrer">
        Sign Petition
      </a>

      <section className="section action-hero">
        <div className="section-heading">
          <p className="eyebrow">Vision Gallery</p>
          <h1>See the future before it is decided.</h1>
          <p className="hero-copy">
            These are concept visuals, not final site plans. They help people picture the direction:
            sunflowers, trails, wellness, sacred geometry, native planting, water, mountains, harvest,
            and public access.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
            <a className="button secondary" href="/research">Research & documents</a>
            <a className="button secondary" href="/contact">Contact Amy Turner</a>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading centered">
          <p className="eyebrow">Primary Vision Images</p>
          <h2>Four visual anchors for the Ecusta Land campaign.</h2>
        </div>
        <div className="gallery-grid full-gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card photo-gallery-card" key={item.title}>
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section concept-gallery-section">
        <div className="section-heading centered">
          <p className="eyebrow">Design Concepts</p>
          <h2>Supporting graphics for sacred geometry, trails, harvest, and land-use education.</h2>
        </div>
        <div className="gallery-grid concept-gallery-grid">
          {conceptItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section action">
        <div>
          <p className="eyebrow">From Image to Action</p>
          <h2>The gallery gives people something to imagine — the petition gives them something to do.</h2>
          <p>
            Share the gallery when people need to understand the vision quickly. Share the petition when
            they are ready to support the sunflower field and community green space idea directly.
          </p>
        </div>
        <div className="action-card">
          <h3>Useful links:</h3>
          <ul>
            <li><a href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the Change.org petition</a></li>
            <li><a href="/research">Open Research & Documents</a></li>
            <li><a href="/take-action">Open the Take Action page</a></li>
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
