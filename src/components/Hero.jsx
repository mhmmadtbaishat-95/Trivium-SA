import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import './Hero.css';

const Hero = () => {
  const { hero } = useContent();
  const [currentService, setCurrentService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const serviceDuration = 10000; // 10 seconds per service

  const serviceData = [
    {
      subtitle: "CONSTRUCTION • BUILDING • INFRASTRUCTURE",
      title: "Building Tomorrow's Infrastructure",
      description: "From residential complexes to commercial towers, we deliver construction excellence with sustainable practices and cutting-edge technology.",
      cta: "Explore Construction",
      bgColor: "#ff6b35",
      bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80"
    },
    {
      subtitle: "TRADING • COMMERCE • GLOBAL MARKETS",
      title: "Connecting Global Markets",
      description: "Navigate the complexities of international trade with our comprehensive trading solutions and global market expertise.",
      cta: "Discover Trading",
      bgColor: "#00d4aa",
      bgImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      subtitle: "MANUFACTURING • AUTOMATION • INNOVATION",
      title: "Advanced Manufacturing Solutions",
      description: "Transform your production with smart manufacturing, automation, and process optimization for maximum efficiency.",
      cta: "Learn Manufacturing",
      bgColor: "#9c27b0",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const goToService = (index) => {
    setCurrentService(index);
    setProgress(0);
    startProgress();
  };

  const nextService = () => {
    const nextIndex = (currentService + 1) % serviceData.length;
    goToService(nextIndex);
  };

  const startProgress = () => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }
    
    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      if (!isPaused) {
        const elapsed = Date.now() - startTime;
        const newProgress = (elapsed / serviceDuration) * 100;
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          nextService();
        }
      }
    }, 50);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    startProgress();
    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [currentService, isPaused]);

  const currentData = serviceData[currentService];

  return (
    <section className="hero" id="home">
      {/* Main Hero Background */}
      <div className="hero-background">
        {/* Background Video */}
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          onLoadedData={() => {
            const video = document.querySelector('.hero-video');
            if (video) video.classList.add('loaded');
          }}
        >
          <source src={hero.video.src} type={hero.video.type} />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      {/* Main Hero Content */}
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          key={currentService}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {currentData.subtitle}
          </motion.p>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="title-line">{currentData.title.split(' ').slice(0, -2).join(' ')}</span>
            <span className="title-line gradient-text">{currentData.title.split(' ').slice(-2).join(' ')}</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {currentData.description}
          </motion.p>
          
          <motion.a 
            href="#contact" 
            className="hero-cta"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="cta-text">{currentData.cta}</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="cta-icon">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </motion.a>
          
          {/* Hero Stats Section */}
          <div className="hero-stats">
            <div className="hero-services-row">
              {serviceData.map((service, index) => (
                <div 
                  key={index}
                  className={`service-item ${index === currentService ? 'active' : ''}`}
                  onClick={() => goToService(index)}
                >
                  <div className="service-timer-line">
                    <div 
                      className="timer-progress" 
                      style={{ 
                        width: index === currentService ? `${progress}%` : '0%' 
                      }}
                    ></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      {service.title.split(' ')[0]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pause/Play Button */}
      <div className="hero-controls">
        <button 
          className={`pause-play-btn ${isPaused ? 'paused' : ''}`}
          onClick={togglePause}
          aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
        >
          <svg className="circular-loader" viewBox="0 0 50 50">
            <circle 
              className="loader-bg" 
              cx="25" 
              cy="25" 
              r="20" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2"
            />
            <circle 
              className="loader-progress" 
              cx="25" 
              cy="25" 
              r="20" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
              strokeDasharray="126"
              strokeDashoffset={126 - (progress * 1.26)}
              style={{ 
                transition: isPaused ? 'none' : 'stroke-dashoffset 0.1s linear' 
              }}
            />
          </svg>
          <div className="btn-icons">
            <svg className="pause-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
            <svg className="play-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
