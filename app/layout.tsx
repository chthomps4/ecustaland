import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecusta Land | A Restorative Future for a Former Mill Site",
  description:
    "An evidence-first public website exploring a regenerative alternative for the former Ecusta mill site in Brevard / Pisgah Forest, North Carolina.",
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
