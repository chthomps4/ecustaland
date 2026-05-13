export default function Head() {
  const title = "Ecusta Tohi Plan | Ecusta Land";
  const description = "Source images and principles for the Ecusta Tohi restoration, beautification, tourism, and vitality plan.";
  const url = "https://ecustaland.org/tohi-plan";
  const image = "https://ecustaland.org/images/tohi-plan/page-01.svg";

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
