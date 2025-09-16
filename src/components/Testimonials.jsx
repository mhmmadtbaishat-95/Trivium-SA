import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import './Testimonials.css';

const Testimonials = () => {
  const { testimonials } = useContent();

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials.items, ...testimonials.items];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="testimonials-title">{testimonials.title}</h2>
          <p className="testimonials-subtitle">{testimonials.subtitle}</p>
        </motion.div>
        
        <div className="testimonials-scroll">
          {allTestimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="testimonial-content">
                "{testimonial.content}"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.avatar}
                </div>
                <div className="author-info">
                  <h4>{testimonial.author.name}</h4>
                  <p>{testimonial.author.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
