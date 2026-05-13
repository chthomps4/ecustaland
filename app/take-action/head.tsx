export default function Head() {
  const title = "Take Action | Ecusta Land";
  const description = "Sign the petition, ask for records, and support a community-centered future for the former Ecusta mill site.";
  const url = "https://ecustaland.org/take-action";
  const image = "https://ecustaland.org/images/ecusta-photo-trail-stream.png";

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
