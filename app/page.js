// page.js

import Home from "./Home";

export const metadata = {
  title: "توصيل كلية التقنية بالرياض - توصيل الكلية الرقمية للبنات بكل راحة وامان",
  description: "الخدمة رقم #1 في المملكة - توصيل طالبات الكلية التقنية الرقمية. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - نقل الكلية الرقمية التقنية للبنات في الرياض",
  keywords: [
    "نقل طالبات في الرياض", "ابلكيشن توصيل طلبات", "الكلية الرقمية",
    "باصات كلية التقنية", "توصيل طالبات الكلية الرقمية", "توصيل الطالبات في الرياض",
    "نقل كلية البنات", "سائق كلية بنات", "توصيل موظفات الرياض",
    "سائق خاص للموظفات", "باصات كلية البنات", "توصيل الكلية الرقمية بالرياض"
  ],
  referrer: "origin-when-cross-origin",
  canonical: "https://abohassan.vercel.app/",
  openGraph: {
    title: "توصيل كلية التقنية بالرياض - توصيل الكلية الرقمية للبنات بكل راحة وامان",
    description: "الخدمة رقم #1 في المملكة - توصيل طالبات الكلية التقنية الرقمية. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - نقل الكلية الرقمية التقنية للبنات في الرياض",
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
    title: "خدمة نقل الطالبات رقم #1 في المملكة - نقل طالبات الكلية التقنية الرقمية",
    description: "خدمة نقل الطالبات وتوصيل الموظفات بأعلى معايير أمان في المملكة. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - توصيل كلية التقنية الرقمية للبنات في الرياض",
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
