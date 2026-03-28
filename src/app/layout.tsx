import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IESR — Institute of Energy Studies & Research",
  description:
    "Powering Africa's Energy Future through skills, research & innovation. IESR offers capacity building, research, and professional development in the energy sector.",
  keywords: [
    "IESR",
    "energy studies",
    "research",
    "Africa",
    "engineering",
    "professional courses",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
