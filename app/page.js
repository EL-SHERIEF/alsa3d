import Image from "next/image";
import Hero from "./components/hero";
import Bento from "./components/BentoGrids";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Safety from "./components/safety";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Hero />
    <Stats/>
    <Bento />
    <Values/>
    <Safety/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
      </>
  );
}
