import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const { services } = useContent();

  return (
    <div className="services-page">
      <Header />
      
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="services-hero-title">{services.title}</h1>
            <p className="services-hero-subtitle">{services.subtitle}</p>
            <p className="services-hero-description">
              Explore our comprehensive range of services designed to meet your business needs 
              and drive sustainable growth across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {services.items.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="service-number">{service.number}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={`#${service.title.toLowerCase()}`} className="service-link">
                  {service.link.text}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Sections */}
      <section className="service-details" id="construction">
        <div className="service-details-container">
          <div className="service-details-content">
            <motion.div 
              className="service-details-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Construction Excellence</h2>
              <p>
                Our construction division delivers world-class infrastructure projects with a focus on 
                sustainability, innovation, and quality. From residential complexes to commercial towers, 
                we bring your vision to life with cutting-edge technology and expert project management.
              </p>
              <ul>
                <li>Project Management & Engineering</li>
                <li>Sustainable Building Solutions</li>
                <li>Quality Control & Safety</li>
                <li>Infrastructure Development</li>
              </ul>
            </motion.div>
            <motion.div 
              className="service-details-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-image-placeholder">
                Construction Excellence
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-details" id="trading">
        <div className="service-details-container">
          <div className="service-details-content reverse">
            <motion.div 
              className="service-details-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Global Trading Solutions</h2>
              <p>
                Navigate the complexities of international trade with our comprehensive trading solutions. 
                We provide expertise in commodities, logistics, and supply chain management to optimize 
                your business operations worldwide.
              </p>
              <ul>
                <li>Commodities Trading</li>
                <li>Supply Chain Management</li>
                <li>Logistics Optimization</li>
                <li>Market Analysis & Insights</li>
              </ul>
            </motion.div>
            <motion.div 
              className="service-details-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-image-placeholder">
                Global Trading
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-details" id="manufacturing">
        <div className="service-details-container">
          <div className="service-details-content">
            <motion.div 
              className="service-details-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Advanced Manufacturing</h2>
              <p>
                Transform your production with smart manufacturing, automation, and process optimization. 
                Our manufacturing solutions focus on efficiency, quality control, and innovation to 
                maximize productivity and reduce costs.
              </p>
              <ul>
                <li>Process Automation</li>
                <li>Quality Control Systems</li>
                <li>Production Optimization</li>
                <li>Smart Manufacturing</li>
              </ul>
            </motion.div>
            <motion.div 
              className="service-details-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-image-placeholder">
                Advanced Manufacturing
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta-container">
          <motion.div 
            className="services-cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how our services can help transform your business.</p>
            <a href="#contact" className="cta-button">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
