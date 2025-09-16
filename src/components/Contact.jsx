import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import './Contact.css';

const Contact = () => {
  const { contact } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{contact.title}</h2>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="contact-description">{contact.description}</p>
            
            <div className="map-container">
              <iframe 
                src={contact.map.src}
                allowFullScreen
                loading="lazy"
                title={contact.map.title}
              ></iframe>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            name="contact"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            {contact.form.fields.map((field, index) => (
              <div key={index} className="form-group">
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={field.rows || 5}
                    required={field.required}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                ) : field.type === 'select' ? (
                  <select
                    name={field.name}
                    required={field.required}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  >
                    {field.options.map((option, optIndex) => (
                      <option key={optIndex} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            ))}
            
            <button type="submit" className="submit-btn">
              {contact.form.submit.text}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
