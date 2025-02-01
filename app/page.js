// page.js

import Home from "./Home";

export const metadata = {
  title: "توصيل موظفات غرب الرياض - راحة وأمان في طويق والعوالي ونجم الدين",
  description: "الخدمة رقم #1 في المملكة - توصيل الموظفات في غرب الرياض، حي طويق، العوالي ونجم الدين. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - نقل الموظفات بأعلى معايير الأمان.",
  keywords: [
    "نقل موظفات غرب الرياض", "توصيل موظفات حي طويق", "توصيل موظفات حي العوالي",
    "توصيل موظفات نجم الدين", "باصات نقل الموظفات غرب الرياض", "خدمة توصيل الموظفات في طويق والعوالي",
    "سائق خاص للموظفات غرب الرياض", "توصيل الموظفات في نجم الدين", "النقل الآمن للموظفات غرب الرياض",
    "توصيل موظفات بأسعار مناسبة", "خدمة نقل الموظفات حي طويق", "توصيل الموظفات في غرب الرياض",
    "موظفات المولات", "موظفات المستشفيات",
  ],
  referrer: "origin-when-cross-origin",
  canonical: "https://abohassan.vercel.app/",
  openGraph: {
    title: "توصيل موظفات غرب الرياض - راحة وأمان في طويق والعوالي ونجم الدين",
    description: "الخدمة رقم #1 في المملكة - توصيل الموظفات في غرب الرياض، حي طويق، العوالي ونجم الدين. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - نقل الموظفات بأعلى معايير الأمان.",
    siteName: "ابو حســن",
    images: [
      {
        url: "https://abohassan.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "خدمة التوصيل الموسمي الأعلى أمانًا",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://abohassan.vercel.app/", // Replace with the actual handle
    title: "خدمة نقل الموظفات غرب الرياض - النقل الآمن للموظفات في طويق والعوالي",
    description: "خدمة نقل الموظفات بأعلى معايير الأمان في غرب الرياض، حي طويق، العوالي ونجم الدين. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - توصيل الموظفات.",
    images: ["https://abohassan.vercel.app/opengraph-image.jpg"],
  },
  additionalMetaTags: [
    { name: "author", content: "ابو حســن" },
    { name: "theme-color", content: "#ffffff" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {}
  ],
  alternates: {
    canonical: `https://abohassan.vercel.app/`,
  }
};

export default async function Page() {
  return <Home />;
}
