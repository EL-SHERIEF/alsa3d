import Image from "next/image";
import Hero from "../components/hero";
import Bento from "../components/BentoGrids";
import Stats from "../components/Stats";
import Values from "../components/Values";
import Safety from "../components/safety";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import BlogSlider from "../components/blog Slider";
import { getPosts } from '../lib/api';

const today = new Date().toISOString();

// Metadata following Next.js conventions and SEO best practices
export const metadata = {
  title: "ابو حســن - توصيل الكلية التقنية و توصيل الكلية الرقمية",
  description: "خدمة توصيل الطالبات وتوصيل الموظفات الأعلى أمانًا في المملكة, توصيل طالبات كلية التقنية وتوصيل الكلية الرقمية في الرياض #حضورك_مهمتنا",
  keywords: [
    "خدمة توصيل طالبات بالرياض", "توصيل طالبات في حي طويق", "توصيل طالبات حي العوالي بالرياض",
    "توصيل طالبات كلية التقنية", "توصيل طالبات الكلية الرقمية في الرياض", "توصيل الطالبات غرب الرياض",
    "توصيل الطالبات في حي الغروب", "خدمة توصيل طالبات حي نجم الدين", "توصيل موظفات غرب الرياض",
    "توصيل موظفات حي الموسى بالرياض", "توصيل الطالبات والموظفات في الرياض", "خدمة توصيل في حي طويق بالرياض"
  ],
  referrer: "origin-when-cross-origin",
  robots: "index, follow", // Ensures search engines can index and follow links
  canonical: "https://abohassan.vercel.app/",
  openGraph: {
    title: "ابو حســن - توصيل طالبات الكلية التقنية و توصيل طالبات الكلية الرقمية",
    description: "خدمة التوصيل الموسمي الأعلى أمانًا في المملكة #حضورك_مهمتنا",
    url: "https://abohassan.vercel.app/",
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
    title: "ابو حســن - توصيل الكلية التقنية و توصيل الكلية الرقمية",
    description: "خدمة توصيل الطالبات وتوصيل الموظفات الأعلى أمانًا في المملكة",
    images: ["https://abohassan.vercel.app/opengraph-image.jpg"],
  },
  additionalMetaTags: [
    { name: "author", content: "ابو حســن" },
    { name: "theme-color", content: "#ffffff" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  article: {
    modified_time: today,
  },
  alternates: {
    canonical: `https://abohassan.vercel.app/`,
}
};

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <>
      <Hero />
      <Stats />
      <Bento />
      <Values />
      <Safety />
      <Testimonials />
      <Pricing />
      <BlogSlider data={posts} title="المدونة" />
    </>
  );
}
