import Head from "next/head";
import Hero from "./components/hero";
import Bento from "./components/BentoGrids";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Safety from "./components/safety";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import BlogSlider from "./components/blog Slider";
import { getPosts } from './lib/api';

export default async function Home() {
  const posts = await getPosts();

  // Metadata
  const metadata = {
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
    og: {
      title: 'ابو حسن | توصيل الكلية التقنية و توصيل الكلية الرقمية',
      description: "خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",
      url: 'https://abohassan.vercel.app/',
      siteName: 'ابو حســن',
      image: '/opengraph-image.jpg',
    },
  };

  return (
    <>
      <Head>
        {/* Basic Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:type" content="website" />

        {/* Additional Metadata */}
        <meta name="referrer" content={metadata.referrer} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Page Components */}
      <Hero />
      <Stats />
      <Bento />
      <Values />
      <Safety />
      <Testimonials />
      <Pricing />
      <BlogSlider data={posts} title='المدونة' />
    </>
  );
}
