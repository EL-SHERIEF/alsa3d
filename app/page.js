import Image from "next/image";
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
    
  return (
    <>
      
      <Hero />
      <Stats />
      <Bento />
      <Values />
      <Safety />
      <Testimonials />
      <Pricing />
      <BlogSlider data={posts} title='المدونة'/>
    </>
  );
}
