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
  title: "شركة النيل للتطوير العقاري | رواد ناطحات السحاب",
  description:
    "نايل للتطوير العقاري هي شركة مساهمة مصرية ومقيدة بالبورصة وهيئة الاستثمار أسست بواسطة المهندس محمد طاهر و الأستاذ محمود طاهر.",
  icons: {
    icon: '/fav-icon.png',
    shortcut: '/fav-icon.png',
    apple: '/fav-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/fav-icon.png',
    },
  },
  keywords: [
    "نايل للتطوير العقاري",
    "شركة نايل",
    "العقارات المصرية",
    "ناطحات السحاب مصر",
    "العاصمة الإدارية الجديدة",
    "القاهرة الجديدة",
    "المنصورة",
    "مطور عقاري",
    "برج تايكون",
    "31 نورث تاور",
    "نايل بيزنس سيتي",
    "نايل بوليفارد",
    "الأبراج التجارية مصر",
    "المجمعات السكنية مصر",
    "Nile Developments",
    "Egyptian real estate",
    "New Administrative Capital",
  ],
  authors: [{ name: "Nile Developments" }],
  creator: "Nile Developments",
  publisher: "Nile Developments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: "شركة النيل للتطوير العقاري | رواد ناطحات السحاب",
    description:
      "نايل للتطوير العقاري هي شركة مساهمة مصرية ومقيدة بالبورصة وهيئة الاستثمار أسست بواسطة المهندس محمد طاهر و الأستاذ محمود طاهر.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Nile Developments",
    locale: "ar_AR",
    type: "website",
    images: [
      {
        url: "/assets/images/heros/hero.jpg",
        width: 1200,
        height: 630,
        alt: "شركة نايل للتطوير العقاري - رائدة ناطحات السحاب",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة النيل للتطوير العقاري | رواد ناطحات السحاب",
    description:
      "نايل للتطوير العقاري هي شركة مساهمة مصرية ومقيدة بالبورصة وهيئة الاستثمار أسست بواسطة المهندس محمد طاهر و الأستاذ محمود طاهر.",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
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
