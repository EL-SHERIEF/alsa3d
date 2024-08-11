// src/App.js
import NavBar from "./Components/navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/aboutSection";
import Banner from "./Components/Banner";
import './i18n'; 
import { LanguageProvider } from './context/LanguageContext';
import ContentSection from "./Components/contentSection";
import Stats from "./Components/stats";
import Footer from "./Components/footer";
function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <NavBar />
        <Hero />
        <AboutSection />
        <Stats/>

        <Banner />
        <ContentSection />
        <Footer/>
      </div>
    </LanguageProvider>
 
  );
}

export default App;
