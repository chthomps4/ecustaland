import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision Gallery | Ecusta Land",
  description:
    "Concept gallery for the Ecusta Land sunflower, wellness, trails, sacred geometry, harvest, and community revitalization vision in Brevard / Pisgah Forest, North Carolina.",
  alternates: {
    canonical: "https://ecustaland.org/vision-gallery",
  },
};

const petitionUrl = "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

const galleryItems = [
  {
    title: "The Sunflower Field",
    image: "/images/ecusta-sunflower-geometry.svg",
    alt: "Sunflower field, mountain, river, and sacred geometry concept for Ecusta Land",
    text: "The central public symbol: a visible field of renewal where the old industrial memory begins to feel beautiful, photographed, visited, and cared for again.",
  },
  {
    title: "Wellness by Design",
    image: "/images/wellness-sacred-geometry.svg",
    alt: "Sacred geometry wellness center concept with sunflower pattern, mountains, and gathering space",
    text: "A wellness-center design language built around circles, spirals, sunflower geometry, gardens, quiet gathering, walking paths, and mountain calm.",
  },
  {
    title: "Trails Through Bloom",
    image: "/images/ecusta-trail-recreation.svg",
    alt: "Walking and biking trail through sunflowers, native grasses, river, and Blue Ridge mountains",
    text: "A recreation-forward future connected to the Ecusta Trail, Pisgah Forest, cycling, walking, families, water, and outdoor access.",
  },
  {
    title: "Bloom to Benefit",
    image: "/images/ecusta-harvest-reuse.svg",
    alt: "Sunflower harvest, seed baskets, education, and regenerative reuse concept",
    text: "A seasonal cycle where bloom leads to learning, stewardship, seed saving, community events, and carefully explored reuse opportunities.",
  },
];

export default function VisionGalleryPage() {
  return (
    <main className="take-action-page">
      <section className="section action-hero">
        <nav className="nav page-nav" aria-label="Page navigation">
          <a href="/">Home</a>
          <a href="/vision-gallery">Gallery</a>
          <a href="/take-action">Take Action</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="section-heading">
          <p className="eyebrow">Vision Gallery</p>
          <h1>See the Ecusta Land vision in pictures.</h1>
          <p className="hero-copy">
            These are concept visuals, not final site plans. They help people picture the direction:
            sunflowers, trails, wellness, sacred geometry, native planting, water, mountains, harvest,
            and public access.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
            <a className="button secondary" href="/contact">Contact Amy Turner</a>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="gallery-grid full-gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
            <li><a href="/take-action">Open the Take Action page</a></li>
            <li><a href="/contact">Contact Amy Turner</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
