import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import PrelineScript from "./components/PrelineScript";
import Head from 'next/head';
import Footer from "./components/Footer";
import WaBtn from "./components/shared/whatsappbtn";

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

export const metadata = {
  title: "ابو حســن | توصيل الكلية التقنية و توصيل الكلية الرقمية",
  description: "خدمة توصيل الطالبات وتوصيل الموظفات الأعلى أمانًا في المملكة, توصيل طالبات كلية التقنية وتوصيل الكلية الرقمية في الرياض #حضورك_مهمتنا",
  referrer: 'origin-when-cross-origin',
  canonical: 'https://abohassan.vercel.app/',
  siteName: 'ابو حســن',
  keywords: [
    'خدمة توصيل طالبات بالرياض', 'توصيل طالبات في حي طويق', 'توصيل طالبات حي العوالي بالرياض',
    'توصيل طالبات كلية التقنية', 'توصيل طالبات الكلية الرقمية في الرياض', 'توصيل الطالبات غرب الرياض',
    'توصيل الطالبات في حي الغروب', 'خدمة توصيل طالبات حي نجم الدين', 'توصيل موظفات غرب الرياض',
    'توصيل موظفات حي الموسى بالرياض', 'توصيل الطالبات والموظفات في الرياض', 'خدمة توصيل في حي طويق بالرياض'
  ],
  openGraph: {
    title: 'ابو حسن | توصيل الكلية التقنية و توصيل الكلية الرقمية',
    description: "خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",
    url: 'https://abohassan.vercel.app/',
    siteName: 'ابو حســن',
    images: [
      { url: '/opengraph-image.jpg', width: 200, height: 150, alt: "خدمة التوصيل الموسمي الأعلى أمانًا" },
      { url: '/opengraph-image.jpg', width: 800, height: 600, alt: "خدمة التوصيل الموسمي الأعلى أمانًا" },
      { url: '/opengraph-image.jpg', width: 1800, height: 1600, alt: '"خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",' },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  article: {
    modified_time: today,
  },
};

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
                "addressCountry": "SA"
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
              "image": "https://abohassan.vercel.app/opengraph-image.jpg"
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
      </body>
    </html>
  );
}
