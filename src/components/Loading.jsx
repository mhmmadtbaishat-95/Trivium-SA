import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="content-loading"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-container">
        <motion.div 
          className="trivium-loader"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="logo-text-animated"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "power2.out" }}
          >
            TRIVIUM
          </motion.div>
          
          <div className="loading-dots">
            {[0, 1, 2].map((index) => (
              <motion.span 
                key={index}
                className="dot"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + (index * 0.2),
                  ease: "back.out(1.7)"
                }}
              />
            ))}
          </div>
          
          <div className="loading-progress">
            <motion.div 
              className="progress-bar"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
