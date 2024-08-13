import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import AdminPage from '../admin/index'; // Import your AdminPage component

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
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
              </>
            } />
           <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
