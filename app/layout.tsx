import type { Metadata } from "next";
import SiteNav from "./components/SiteNav";
import "./globals.css";
import "./visuals.css";
import "./seo.css";
import "./audit-fixes.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecustaland.org"),
  title: {
    default: "Ecusta Land | Sunflower Power for Brevard",
    template: "%s",
  },
  description:
    "A sunflower, trails, wellness, and revitalization vision for the former Ecusta mill site in Brevard and Pisgah Forest, NC.",
  keywords: [
    "Ecusta Land",
    "Ecusta",
    "Ecusta mill",
    "Brevard NC",
    "Pisgah Forest",
    "sunflower fields",
    "brownfield revitalization",
    "community revitalization",
    "wellness center",
    "sacred geometry design",
    "Ecusta Trail",
    "data center moratorium",
    "phytomanagement",
    "native planting",
    "Blue Ridge Mountains",
  ],
  alternates: {
    canonical: "https://ecustaland.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ecusta Land | Sunflower Power for Brevard",
    description:
      "A sunflower, trails, wellness, and revitalization vision for the former Ecusta mill site in Brevard and Pisgah Forest, NC.",
    url: "https://ecustaland.org",
    siteName: "Ecusta Land",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ecusta-photo-hero-valley.png",
        width: 1672,
        height: 941,
        alt: "Sunflower fields, walking paths, stream, restored mill buildings, mountains, and sacred geometry at golden hour in the Ecusta Land vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecusta Land | Sunflower Power for Brevard",
    description:
      "A sunflower, trails, wellness, and revitalization vision for the former Ecusta mill site in Brevard and Pisgah Forest, NC.",
    images: ["/images/ecusta-photo-hero-valley.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ecusta Land",
  url: "https://ecustaland.org",
  description:
    "A wellness, beautification, trails, sunflowers, and community revitalization vision for the former Ecusta mill site in Brevard / Pisgah Forest, North Carolina.",
  inLanguage: "en-US",
  about: [
    "Ecusta mill site",
    "Brevard North Carolina",
    "brownfield revitalization",
    "sunflower fields",
    "wellness-centered public space",
    "data center moratorium",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ecustaland.org/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <div id="main-content" tabIndex={-1}>{children}</div>
      </body>
    </html>
  );
}
