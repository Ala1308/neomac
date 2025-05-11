import type { Metadata } from "next";
import "./globals.css";
import "@/styles/animations.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NEOMAC - Toitures Commerciales et Résidentielles",
  description: "Experts en solutions de toiture pour projets commerciaux et résidentiels au Québec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Aucun script ici, nous l'ajouterons directement dans le body */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
