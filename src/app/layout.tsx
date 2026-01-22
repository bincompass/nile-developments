import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import StructuredData from "@/components/shared/StructuredData";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nile Developments | The pioneer of skyscrapers",
  description: "Nile Developments is an Egyptian joint stock company listed on the Stock Exchange and the Investment Authority. It established by Eng. Mohamed Taher and Mr. Mahmoud Taher",
  keywords: [
    "Nile Developments",
    "Egyptian real estate",
    "skyscrapers Egypt",
    "New Administrative Capital",
    "New Cairo",
    "Al Mansoura",
    "real estate developer",
    "Tycoon Center",
    "31 North Tower",
    "Nile Business City",
    "Nile Boulevard",
    "commercial towers Egypt",
    "residential compounds Egypt",
  ],
  authors: [{ name: "Nile Developments" }],
  creator: "Nile Developments",
  publisher: "Nile Developments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nile-developments.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nile Developments | The pioneer of skyscrapers",
    description: "Nile Developments is an Egyptian joint stock company listed on the Stock Exchange and the Investment Authority. It established by Eng. Mohamed Taher and Mr. Mahmoud Taher",
    url: "https://nile-developments.com",
    siteName: "Nile Developments",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/heros/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Nile Developments - Pioneer of Skyscrapers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nile Developments | The pioneer of skyscrapers",
    description: "Nile Developments is an Egyptian joint stock company listed on the Stock Exchange and the Investment Authority. It established by Eng. Mohamed Taher and Mr. Mahmoud Taher",
    images: ["/assets/images/heros/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "mKPew9mPrvWBPJBpkivwnRSKuc_hwbqSPE5YbxXmtak",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`
            /* Ensure all content is visible when JavaScript is disabled */
            * {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body className={`${roboto.variable} antialiased font-sans`}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
