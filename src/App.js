// src/App.js
import NavBar from "./Components/navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/aboutSection";
import AboutSection2 from "./Components/aboutSection2";

import Banner from "./Components/Banner";
import './i18n'; 
import { LanguageProvider } from './context/LanguageContext';
import ContentSection from "./Components/contentSection";
import Stats from "./Components/stats";
import Footer from "./Components/footer";
import Banner2 from "./Components/Banner2";
import Offers from "./Components/Offers";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <NavBar />
        <Hero />
        <AboutSection />
        <Stats/>
        <AboutSection2 />
        <Banner />
        <ContentSection />
        <Offers/>
        <Banner2/>
        <Footer/>

      </div>
    </LanguageProvider>
 
  );
}

export default App;
