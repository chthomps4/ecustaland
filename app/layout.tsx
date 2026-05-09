import type { Metadata } from "next";
import "./globals.css";
import "./visuals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecustaland.org"),
  title: {
    default: "Ecusta Land | Sunflower Power for Brevard",
    template: "%s | Ecusta Land",
  },
  description:
    "A wellness, beautification, and community revitalization vision for the former Ecusta mill site in Brevard / Pisgah Forest, North Carolina.",
  openGraph: {
    title: "Ecusta Land | Sunflower Power for Brevard",
    description:
      "A positive community vision for restoration, wellness, trails, native planting, education, and a better fit for the former Ecusta mill site.",
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
