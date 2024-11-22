'use client';

export default function StructuredData() {
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
      "longitude": 46.6753,
    },
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA",
      "postalCode": "14951",
      "streetAddress": "طويق، محافظة الرياض السعودية",
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966 59 474 0105",
      "contactType": "Customer Service",
      "areaServed": "SA",
      "availableLanguage": ["Arabic"],
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
        },
        "author": {
          "@type": "Person",
          "name": "ام عبدالرحمن",
        },
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
        },
        "author": {
          "@type": "Person",
          "name": "امينة المحمدي",
        },
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 451,
    },
    "image": ["https://abohassan.vercel.app/opengraph-image.jpg"],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "خدمة توصيل الكلية التقنية",
        "description": "توصيل الطالبات إلى الكلية التقنية يومياً بأسعار تنافسية وأعلى معايير السلامة.",
        "url": "https://abohassan.vercel.app/",
        "image": "https://abohassan.vercel.app/images/s1.jpg",
        "price": "Contact for pricing",
        "priceCurrency": "SAR",
      },
      {
        "@type": "Offer",
        "name": "خدمة توصيل الكلية الرقمية",
        "description": "خدمة موثوقة لتوصيل الطالبات إلى الكلية الرقمية بسرعة وأمان.",
        "url": "https://abohassan.vercel.app/",
        "image": "https://abohassan.vercel.app/images/s2.jpg",
        "price": "Contact for pricing",
        "priceCurrency": "SAR",
      },
      {
        "@type": "Offer",
        "name": "خدمة توصيل الموظفات",
        "description": "توصيل الموظفات إلى مكان العمل مع ضمان الراحة والالتزام بالمواعيد.",
        "url": "https://abohassan.vercel.app/",
        "image": "https://abohassan.vercel.app/images/s3.jpg",
        "price": "Contact for pricing",
        "priceCurrency": "SAR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
    />
  );
}
