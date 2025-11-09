import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fyzio Praha - Bc. Veronika Jansová | Fyzioterapie na míru",
  description: "Profesionální fyzioterapie v Praze 8. Individuální, cílený a odborný přístup. Specializace na dětskou fyzioterapii, bolesti pohybového aparátu, rehabilitace a více.",
  keywords: "fyzioterapie Praha, rehabilitace Praha, fyzioterapeut, dětská fyzioterapie, bolesti zad, vertebrogenní obtíže, Praha 8 Libeň",
  authors: [{ name: "Bc. Veronika Jansová" }],
  openGraph: {
    title: "Fyzio Praha - Profesionální fyzioterapie",
    description: "Fyzioterapie na míru s individuálním přístupem v Praze 8",
    url: "https://www.fyzio-praha.cz",
    siteName: "Fyzio Praha",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-24 lg:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
