import Image from "next/image";
import Hero from "./components/hero";
import Bento from "./components/BentoGrids";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Safety from "./components/safety";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* Structured data for SEO */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ابو حســن",
              "description": "خدمة توصيل لكلية التقنية و توصيل الكلية الرقمية بالرياض",
              "url": "https://abohassan.vercel.app/",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966 59 474 0105",
                "contactType": "Customer Service",
                "areaServed": "SA",
                "availableLanguage": ["Arabic"]
              }
            })
          }} 
        />
      </Head>
      <Hero />
      <Stats />
      <Bento />
      <Values />
      <Safety />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}
