export default function Head() {
  const title = "Research & Documents | Ecusta Land";
  const description = "Evidence labels, public records, and careful claim language for the Ecusta Land sunflower and revitalization vision.";
  const url = "https://ecustaland.org/research";
  const image = "https://ecustaland.org/images/ecusta-photo-hero-valley.png";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
