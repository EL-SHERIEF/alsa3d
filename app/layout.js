import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import PrelineScript from "./components/PrelineScript";
import Head from 'next/head';
import Footer from "./components/Footer";
import WaBtn from "./components/shared/whatsappbtn";
import { Analytics } from "@vercel/analytics/react"

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
  return (
    <html lang="ar" dir="rtl">
      <Head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ابو حســن لخدمات توصيل الطالبات والموظفات",
              "description": "خدمة توصيل كلية التقنية والكلية الرقمية للطالبات والموظفات بأعلى معايير الأمان.",
              "url": "https://abohassan.vercel.app/",
              "telephone": "+966 59 474 0105",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الرياض",
                "addressRegion": "منطقة الرياض",
                "addressCountry": "SA",
                "streetAddress": "طويق، محافظة الرياض السعودية" // replace with actual street if possible
              },
              "openingHours": "Mo-Fr 06:00-18:00",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966 59 474 0105",
                "contactType": "Customer Service",
                "areaServed": "SA",
                "availableLanguage": ["Arabic"]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "image": [
                "https://abohassan.vercel.app/opengraph-image.jpg"
              ]
            })
          }} 
        />
      </Head>
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        {children}
        <WaBtn link={'https://wa.me/966594740105'}/>
        <Footer />
        <PrelineScript />
        <Analytics/>
      </body>
    </html>
  );
}
