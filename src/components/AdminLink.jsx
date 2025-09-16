import React from 'react';
import { useContent } from '../context/ContentContext';

const AdminLink = () => {
  const { meta } = useContent();

  // Only show admin link in development or for authenticated users
  const showAdminLink = process.env.NODE_ENV === 'development' || 
                       (typeof window !== 'undefined' && window.netlifyIdentity && window.netlifyIdentity.currentUser());

  if (!showAdminLink) {
    return null;
  }

  return (
    <a 
      href="/admin/" 
      className="admin-link"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#0066cc',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = '#0052a3';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = '#0066cc';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      📝 Edit Content
    </a>
  );
};

export default AdminLink;
