export default function Head() {
  const title = "Vision Gallery | Ecusta Land";
  const description = "Concept images for the Ecusta Land sunflower, trails, wellness, harvest, and community revitalization vision.";
  const url = "https://ecustaland.org/vision-gallery";
  const image = "https://ecustaland.org/images/ecusta-photo-wellness-garden.png";

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
