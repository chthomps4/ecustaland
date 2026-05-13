export default function Head() {
  const title = "Contact | Ecusta Land";
  const description = "Contact Amy Turner about the Ecusta Land sunflower, wellness, trails, and community revitalization vision.";
  const url = "https://ecustaland.org/contact";
  const image = "https://ecustaland.org/images/ecusta-photo-harvest-community.png";

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
