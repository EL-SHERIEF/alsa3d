import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import PrelineScript from "./components/PrelineScript";
import Footer from "./components/Footer";
import WaBtn from "./components/shared/whatsappbtn";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';
import Script from "next/script";
import Unavailable from "./components/unavailable";
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
  "@id": "https://abohassan.vercel.app/#organization",
  "name": "النمور الماسية لخدمات توصيل الموظفات في الرياض",
  "alternateName": [
    "توصيل موظفات غرب الرياض",
    "نقل معلمات الرياض",
    "سائقات توصيل الرياض"
  ],
  "description": "خدمة توصيل موظفات ومعلمات آمنة وموثوقة في غرب الرياض، تشمل حي طويق، العوالي، ونجم الدين. نقدم نقل آمن ومريح مع سائقين وسائقات محترفين بأسعار تنافسية.",
  "url": "https://abohassan.vercel.app/",
  "logo": "https://abohassan.vercel.app/logo.png",
  "telephone": "+966536965023",
  "email": "nmoormasia@gmail.com",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.7136,
    "longitude": 46.6753
  },
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "حي طويق، محافظة الرياض",
    "addressLocality": "الرياض",
    "addressRegion": "منطقة الرياض",
    "postalCode": "14951",
    "addressCountry": {
      "@type": "Country",
      "name": "SA"
    }
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "غرب الرياض"
    },
    {
      "@type": "Place",
      "name": "حي طويق"
    },
    {
      "@type": "Place",
      "name": "العوالي"
    },
    {
      "@type": "Place",
      "name": "نجم الدين"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966536965023",
    "email": "nmoormasia@gmail.com",
    "contactType": "Customer Service",
    "areaServed": "SA",
    "availableLanguage": [
      {
        "@type": "Language",
        "name": "Arabic"
      },
      {
        "@type": "Language",
        "name": "English"
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/nmoormasia/",
    "https://x.com/NmorMasia"
  ],
  "image": [
    "https://abohassan.vercel.app/images/opengraph-image.jpg",
    "https://abohassan.vercel.app/images/vehicle-safety.jpg",
    "https://abohassan.vercel.app/images/driver-team.jpg"
  ],
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": "أم عبدالله"
      },
      "reviewBody": "خدمة توصيل موظفات غرب الرياض رائعة! السائقون محترفون وملتزمون بالمواعيد، أشعر بالأمان أثناء التنقل إلى العمل في حي طويق. أنصح بها بشدة!",
      "datePublished": "2025-04-10T00:00:00+03:00",
      "publisher": {
        "@type": "Organization",
        "name": "النمور الماسية"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": "أم محمد"
      },
      "reviewBody": "أفضل خدمة نقل معلمات في الرياض! يوفرون توصيلًا آمنًا ومريحًا إلى المدرسة في نجم الدين يوميًا، والأسعار مناسبة جدًا.",
      "datePublished": "2025-04-15T00:00:00+03:00",
      "publisher": {
        "@type": "Organization",
        "name": "النمور الماسية"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": "سارة العتيبي"
      },
      "reviewBody": "خدمة سائقات توصيل غرب الرياض ممتازة! السائقة ودودة ومحترفة، وتضمن الخصوصية والأمان أثناء نقلي إلى الكلية التقنية. تجربة رائعة!",
      "datePublished": "2025-05-01T00:00:00+03:00",
      "publisher": {
        "@type": "Organization",
        "name": "النمور الماسية"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": "نورة الشمري"
      },
      "reviewBody": "توصيل موظفات حي العوالي لا مثيل له! الخدمة موثوقة، والسيارات نظيفة ومريحة، مما يجعل تنقلاتي اليومية سلسة وآمنة.",
      "datePublished": "2025-05-05T00:00:00+03:00",
      "publisher": {
        "@type": "Organization",
        "name": "النمور الماسية"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.9,
    "reviewCount": 480,
    "bestRating": 5,
    "worstRating": 1
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "توصيل موظفات غرب الرياض",
      "description": "نقل موظفات آمن ومريح في غرب الرياض، يشمل حي طويق، العوالي، ونجم الدين بأسعار تنافسية وسائقين محترفين.",
      "url": "https://abohassan.vercel.app/services/employee-transport",
      "image": "https://abohassan.vercel.app/images/employee-transport.jpg",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "نقل معلمات الرياض",
      "description": "خدمة توصيل معلمات إلى المدارس في غرب الرياض، مع التركيز على السلامة والدقة في المواعيد.",
      "url": "https://abohassan.vercel.app/services/teacher-transport",
      "image": "https://abohassan.vercel.app/images/teacher-transport.jpg",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "توصيل الكلية التقنية",
      "description": "نقل موظفات وطالبات إلى الكلية التقنية في غرب الرياض بأمان وراحة.",
      "url": "https://abohassan.vercel.app/services/technical-college-transport",
      "image": "https://abohassan.vercel.app/images/college-transport.jpg",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "سائقات توصيل غرب الرياض",
      "description": "خدمة نقل بقيادة سائقات محترفات للموظفات والمعلمات في غرب الرياض، مع ضمان الخصوصية والأمان.",
      "url": "https://abohassan.vercel.app/services/female-driver-transport",
      "image": "https://abohassan.vercel.app/images/female-driver.jpg",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    }
  ],
  "hasService": [
    {
      "@type": "Service",
      "serviceType": "توصيل موظفات",
      "description": "خدمة نقل موظفات آمنة وموثوقة في غرب الرياض، تشمل حي طويق والعوالي.",
      "areaServed": [
        {
          "@type": "Place",
          "name": "غرب الرياض"
        }
      ],
      "provider": {
        "@id": "https://abohassan.vercel.app/#organization"
      }
    },
    {
      "@type": "Service",
      "serviceType": "نقل معلمات",
      "description": "توصيل معلمات إلى المدارس في غرب الرياض بأمان ودقة في المواعيد.",
      "areaServed": [
        {
          "@type": "Place",
          "name": "غرب الرياض"
        }
      ],
      "provider": {
        "@id": "https://abohassan.vercel.app/#organization"
      }
    }
  ],
  "datePublished": "2025-05-08T00:00:00+03:00",
  "dateModified": "2025-05-08T00:00:00+03:00"
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="alternate" hrefLang="ar-SA" href="https://abohassan.vercel.app/" />
        <meta name="keywords" content="نقل موظفات في الرياض, توصيل موظفات حي طويق, سائق خاص للموظفات, خدمة نقل الموظفات العوالي, توصيل الموظفات في نجم الدين, باصات نقل الموظفات, خدمات توصيل موظفات آمنة" />
        <Script key="structured-data" type="application/ld+json">{JSON.stringify(articleStructuredData)}</Script>
      </head>
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        <GoogleTagManager gtmId="AW-16770249218" />
        {children}
        <WaBtn link={'https://wa.me/966536965023'}/>
        <Footer />
        <PrelineScript />
        <Analytics />
      </body>
    </html>
  );
}
