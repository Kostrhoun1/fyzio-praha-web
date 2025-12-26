import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fyzio-praha.cz'),
  title: "Fyzio Praha - Bc. Veronika Jansová | Fyzioterapie na míru",
  description: "Fyzioterapie Praha 8 - Libeň ✓ Bolesti zad a páteře, rehabilitace po úrazech, bolesti kloubů ✓ Individuální péče 45-60 min ✓ 7 min od Palmovky ☎ 604 477 935",
  keywords: "fyzioterapie Praha, rehabilitace Praha, fyzioterapeut, dětská fyzioterapie, bolesti zad, vertebrogenní obtíže, Praha 8 Libeň",
  authors: [{ name: "Bc. Veronika Jansová" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.fyzio-praha.cz',
  },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9GPFE8G4MJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9GPFE8G4MJ');
          `}
        </Script>
        <StructuredData />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
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
