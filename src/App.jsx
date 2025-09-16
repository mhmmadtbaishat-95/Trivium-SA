import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import AdminLink from './components/AdminLink';
import './styles/globals.css';

// Lazy load the ServicesPage for better performance
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onComplete={handleLoadingComplete} />;
  }

  return (
    <ContentProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/services" element={
              <Suspense fallback={<Loading onComplete={() => {}} />}>
                <ServicesPage />
              </Suspense>
            } />
          </Routes>
          <Footer />
          <AdminLink />
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;