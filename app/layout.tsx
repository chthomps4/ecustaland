import type { Metadata } from "next";
import "./globals.css";
import "./visuals.css";
import "./seo.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecustaland.org"),
  title: {
    default: "Ecusta Land | Sunflower Power for Brevard",
    template: "%s | Ecusta Land",
  },
  description:
    "Ecusta Land is a wellness, beautification, trails, sunflowers, and community revitalization vision for the former Ecusta mill site in Brevard / Pisgah Forest, North Carolina.",
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
      "A positive community vision for restoration, wellness, trails, native planting, education, sacred-geometry wellness design, and a better fit for the former Ecusta mill site.",
    url: "https://ecustaland.org",
    siteName: "Ecusta Land",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecusta Land | Sunflower Power for Brevard",
    description:
      "A wellness and beautification vision for Ecusta rooted in sunflowers, trails, education, and community revitalization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
