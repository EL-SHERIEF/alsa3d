import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import PrelineScript from "./components/PrelineScript";
import Head from 'next/head';
import Footer from "./components/Footer";
import WaBtn from "./components/shared/whatsappbtn";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';

const almarai = localFont({
  src: [
    { path: "./fonts/Almarai-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Almarai-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Almarai-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Almarai-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-almarai",
});

export default function RootLayout({ children }) {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ابو حســن لخدمات توصيل الطالبات والموظفات",
    "description": "خدمة توصيل كلية التقنية والكلية الرقمية للطالبات والموظفات بأعلى معايير الأمان.",
    "url": "https://abohassan.vercel.app/",
    "telephone": "+966 59 474 0105",
    "geo": {
  "@type": "GeoCoordinates",
  "latitude": 24.7136,
  "longitude": 46.6753},
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA",
      "postalCode": "14951",
      "streetAddress": "طويق، محافظة الرياض السعودية"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966 59 474 0105",
      "contactType": "Customer Service",
      "areaServed": "SA",
      "availableLanguage": ["Arabic"]
    },
    "review": [{
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      },
      "author": {
        "@type": "Person",
        "name": "ام عبدالرحمن"
      }
     },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      },
      "author": {
        "@type": "Person",
        "name": "امينة المحمدي"
      }
    }],

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 451
    },
    "image": [
      "https://abohassan.vercel.app/opengraph-image.jpg"
    ],
  }
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="alternate" hrefLang="ar" href="https://abohassan.vercel.app/" />
        <link rel="alternate" hrefLang="en" href="https://abohassan.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </head>
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        <GoogleTagManager gtmId="AW-16770249218" />
        {children}
        <WaBtn link={'https://wa.me/966594740105'}/>
        <Footer />
        <PrelineScript />
        <Analytics />
      </body>
    </html>
  );
}
