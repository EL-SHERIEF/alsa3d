import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import PrelineScript from "./components/PrelineScript";
import Footer from "./components/Footer";
import WaBtn from "./components/shared/whatsappbtn";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';
import Script from "next/script";

const almarai = localFont({
  src: [
    { path: "./fonts/Almarai-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Almarai-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Almarai-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Almarai-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-almarai",
});
const today = new Date().toISOString();

 const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ابو حســن لخدمات توصيل الطالبات والموظفات",
    "description": "خدمة نقل الطالبات وتوصيل الموظفات بأعلى معايير أمان في المملكة. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - توصيل كلية التقنية الرقمية للبنات في الرياض",
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
    "dateModified": today,
    "datePublished": today,
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
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "خدمة توصيل الكلية التقنية",
        "description": "توصيل الطالبات إلى الكلية التقنية يومياً بأسعار تنافسية وأعلى معايير السلامة.",
        "url": "https://abohassan.vercel.app/",
        "image": "https://abohassan.vercel.app/images/s1.jpg",
        "price": "Contact for pricing",
        "priceCurrency": "SAR"
      },
      {
        "@type": "Offer",
        "name": "خدمة توصيل الكلية الرقمية",
        "description": "خدمة موثوقة لتوصيل الطالبات إلى الكلية الرقمية بسرعة وأمان.",
        "url": "https://abohassan.vercel.app/",
        "image": "https://abohassan.vercel.app/images/s2.jpg",
        "price": "Contact for pricing",
        "priceCurrency": "SAR"
      },
      {
        "@type": "Offer",
        "name": "خدمة توصيل الموظفات",
        "description": "توصيل الموظفات إلى مكان العمل مع ضمان الراحة والالتزام بالمواعيد.",
        "url": "https://abohassan.vercel.app/",
        "image": "https://abohassan.vercel.app/images/s3.jpg",
        "price": "Contact for pricing",
        "priceCurrency": "SAR"
      }
    ]
  }
export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir="rtl">
   <head>
   <link rel="alternate" hrefLang="ar" href="https://abohassan.vercel.app/" />
            <link rel="alternate" hrefLang="en" href="https://abohassan.vercel.app/" />
            <meta name="keywords" content="نقل طالبات في الرياض, ابلكيشن توصيل طلبات, الكلية الرقمية, باصات كلية التقنية, توصيل طالبات الكلية الرقمية, توصيل الطالبات في الرياض, نقل كلية البنات, سائق كلية بنات, توصيل موظفات الرياض, سائق خاص للموظفات, باصات كلية البنات, توصيل الكلية الرقمية بالرياض" />
            <Script key="structured-data" type="application/ld+json">{JSON.stringify(articleStructuredData)}</Script>
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
