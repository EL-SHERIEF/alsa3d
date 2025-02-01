// page.js

import Home from "./Home";

export const metadata = {
  title: "توصيل موظفات الرياض - توصيل بكل راحة وامان",
  description: "الخدمة رقم #1 في المملكة - توصيل الموظفات. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - نقل الموظفات بأعلى معايير الأمان في الرياض",
  keywords: [
    "نقل موظفات في الرياض", "ابلكيشن توصيل موظفات", "توصيل الموظفات",
    "باصات نقل الموظفات", "توصيل الموظفات في الرياض", "سائق خاص للموظفات",
    "نقل الموظفات في الرياض", "باصات للموظفات", "خدمة توصيل موظفات",
    "سائق للموظفات", "النقل الآمن للموظفات", "توصيل الرياض للموظفات"
  ],
  referrer: "origin-when-cross-origin",
  canonical: "https://abohassan.vercel.app/",
  openGraph: {
    title: "توصيل موظفات الرياض - توصيل بكل راحة وامان",
    description: "الخدمة رقم #1 في المملكة - توصيل الموظفات. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - نقل الموظفات بأعلى معايير الأمان في الرياض",
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
    title: "خدمة نقل الموظفات رقم #1 في المملكة - النقل الآمن للموظفات",
    description: "خدمة نقل الموظفات بأعلى معايير الأمان في المملكة. انضمي إلينا لتجربة مريحة وآمنة مع سائقين محترفين - توصيل الموظفات في الرياض",
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
