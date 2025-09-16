import React, { createContext, useContext } from 'react';

// Content data from the original project
const CONTENT_DATA = {
  "meta": {
    "title": "Trivium - Building a Better Future",
    "description": "Trivium - Building a Better Future. We help you create sustainable, innovative solutions for tomorrow's challenges.",
    "keywords": "Trivium, innovation, sustainability, technology, consulting, digital transformation",
    "author": "Trivium Team",
    "og": {
      "type": "website",
      "url": "https://trivium-demo.netlify.app/",
      "title": "Trivium - Building a Better Future",
      "description": "We help you create sustainable, innovative solutions for tomorrow's challenges",
      "image": "https://trivium-demo.netlify.app/og-image.jpg"
    },
    "twitter": {
      "card": "summary_large_image",
      "url": "https://trivium-demo.netlify.app/",
      "title": "Trivium - Building a Better Future",
      "description": "We help you create sustainable, innovative solutions for tomorrow's challenges",
      "image": "https://trivium-demo.netlify.app/og-image.jpg"
    }
  },
  "navigation": {
    "logo": "Trivium",
    "links": [
      { "href": "/", "text": "Home" },
      { "href": "/#about", "text": "About" },
      { "href": "/services", "text": "Services" },
      { "href": "/#contact", "text": "Contact" }
    ]
  },
  "hero": {
    "slides": [
      {
        "service": "construction",
        "subtitle": "CONSTRUCTION • BUILDING • INFRASTRUCTURE",
        "title": "Building Tomorrow's Infrastructure",
        "description": "From residential complexes to commercial towers, we deliver construction excellence with sustainable practices and cutting-edge technology.",
        "cta": {
          "text": "Explore Construction",
          "href": "/#services"
        },
        "background": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
      },
      {
        "service": "trading",
        "subtitle": "TRADING • COMMERCE • GLOBAL MARKETS",
        "title": "Connecting Global Markets",
        "description": "Navigate the complexities of international trade with our comprehensive trading solutions and global market expertise.",
        "cta": {
          "text": "Discover Trading",
          "href": "/#services"
        },
        "background": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        "service": "manufacturing",
        "subtitle": "MANUFACTURING • AUTOMATION • INNOVATION",
        "title": "Advanced Manufacturing Solutions",
        "description": "Transform your production with smart manufacturing, automation, and process optimization for maximum efficiency.",
        "cta": {
          "text": "Learn Manufacturing",
          "href": "/#services"
        },
        "background": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    "subtitle": "INNOVATION • SUSTAINABILITY • TECHNOLOGY",
    "title": "Building a Better Future",
    "description": "We help you create sustainable, innovative solutions for tomorrow's challenges through cutting-edge technology and expert consultation.",
    "cta": {
      "text": "Get Started",
      "href": "/#contact"
    },
    "video": {
      "src": "https://quadranteglobal.com/quupload/2024/06/Home_Page-3.mp4",
      "type": "video/mp4"
    }
  },
  "about": {
    "title": "Designing. Delivering. Adding Value",
    "subtitle": "Partnering with our clients to Create and Build Sustainable, Responsible and Lasting Solutions for a Better World.",
    "content": [
      "We have proudly assumed a leading position in the global market through continuous work and dedication, becoming a trusted partner in a world that constantly presents us with considerable complex challenges.",
      "Join us in building a better future. Our mission is to deliver cutting-edge solutions and services that enable organizations to make data-driven decisions on their full lifecycle."
    ],
    "image": {
      "text": "Innovation & Excellence",
      "background": "var(--accent-color)"
    }
  },
  "services": {
    "title": "Sectors we work in",
    "subtitle": "Discover more about our solutions in each sector:",
    "items": [
      {
        "number": "01",
        "title": "Construction",
        "description": "Comprehensive construction services including project management, engineering, and sustainable building solutions for residential, commercial, and infrastructure projects.",
        "link": {
          "text": "See more",
          "href": "/services#construction"
        }
      },
      {
        "number": "02",
        "title": "Trading",
        "description": "Global trading solutions with expertise in commodities, logistics, and supply chain management to optimize your business operations worldwide.",
        "link": {
          "text": "See more",
          "href": "/services#trading"
        }
      },
      {
        "number": "03",
        "title": "Manufacturing",
        "description": "Advanced manufacturing solutions with focus on automation, quality control, and process optimization for increased efficiency and productivity.",
        "link": {
          "text": "See more",
          "href": "/services#manufacturing"
        }
      }
    ]
  },
  "testimonials": {
    "title": "What Our Clients Say",
    "subtitle": "Hear from our satisfied clients about their experience working with Trivium.",
    "items": [
      {
        "content": "Trivium's innovative approach transformed our construction projects. Their expertise is unmatched.",
        "author": {
          "name": "John Lee",
          "position": "CEO, Global Construction",
          "avatar": "JL"
        }
      },
      {
        "content": "Trivium delivers complex projects on time and within budget. Truly remarkable team.",
        "author": {
          "name": "Maria Smith",
          "position": "Managing Director, Trading Firm",
          "avatar": "MS"
        }
      },
      {
        "content": "Trivium's manufacturing solutions improved our efficiency significantly. Highly recommended!",
        "author": {
          "name": "Alex Kim",
          "position": "Founder, Manufacturing Solutions",
          "avatar": "AK"
        }
      },
      {
        "content": "Working with Trivium has been a game-changer. Their attention to detail is exceptional.",
        "author": {
          "name": "Robert Davis",
          "position": "Project Manager, Urban Development",
          "avatar": "RD"
        }
      },
      {
        "content": "Trivium's trading solutions streamlined our operations and improved competitiveness.",
        "author": {
          "name": "Sarah Wilson",
          "position": "Operations Director, Global Trade",
          "avatar": "SW"
        }
      }
    ]
  },
  "stats": {
    "items": [
      {
        "number": 500,
        "label": "Global Projects",
        "suffix": "+"
      },
      {
        "number": 50,
        "label": "Countries",
        "suffix": "+"
      },
      {
        "number": 98,
        "label": "Success Rate",
        "suffix": "%"
      },
      {
        "number": 24,
        "label": "Global Support",
        "suffix": "/7"
      }
    ]
  },
  "contact": {
    "title": "Ready to Transform?",
    "description": "Let's discuss how Trivium can revolutionize your business. Our team of experts is ready to turn your vision into reality. Visit us in Riyadh, Saudi Arabia.",
    "map": {
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2b5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s",
      "title": "Trivium Office - Riyadh, Saudi Arabia"
    },
    "form": {
      "action": "/",
      "method": "POST",
      "netlify": true,
      "fields": [
        {
          "type": "text",
          "name": "name",
          "placeholder": "Your Name",
          "required": true
        },
        {
          "type": "email",
          "name": "email",
          "placeholder": "Your Email",
          "required": true
        },
        {
          "type": "select",
          "name": "service",
          "placeholder": "Select Service",
          "required": true,
          "options": [
            { "value": "", "text": "Select Service" },
            { "value": "construction", "text": "Construction" },
            { "value": "trading", "text": "Trading" },
            { "value": "manufacturing", "text": "Manufacturing" }
          ]
        },
        {
          "type": "textarea",
          "name": "message",
          "placeholder": "Tell us about your project",
          "rows": 5,
          "required": false
        }
      ],
      "submit": {
        "text": "Start Your Project",
        "type": "submit"
      }
    }
  },
  "footer": {
    "logo": "Trivium",
    "description": "Building tomorrow's infrastructure today",
    "sections": [
      {
        "title": "Services",
        "links": [
          { "href": "/services#construction", "text": "Construction" },
          { "href": "/services#trading", "text": "Trading" },
          { "href": "/services#manufacturing", "text": "Manufacturing" }
        ]
      },
      {
        "title": "Company",
        "links": [
          { "href": "/#about", "text": "About Us" },
          { "href": "/#contact", "text": "Contact" }
        ]
      },
      {
        "title": "Resources",
        "links": [
          { "href": "/#news", "text": "News" }
        ]
      }
    ],
    "copyright": "© 2024 Trivium. All rights reserved."
  }
};

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  return (
    <ContentContext.Provider value={CONTENT_DATA}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export default ContentContext;
