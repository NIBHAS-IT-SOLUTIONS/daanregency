import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FloatingContactIcons = () => {
  const phoneNumber = '919876543210'; // Add your number here
  const message = 'Hello! I would like to connect with you.';
  const email = 'your@email.com'; // Add your email here

  const icons = [
    {
      href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      icon: faWhatsapp,
      bg: '#25D366',
      label: 'Chat on WhatsApp',
    },
    {
      href: `tel:+${phoneNumber}`,
      icon: faPhone,
      bg: '#007bff',
      label: 'Call Us',
    },
    {
      href: `mailto:${email}`,
      icon: faEnvelope,
      bg: '#dc3545',
      label: 'Send Email',
    },
  ];

  return (
    <nav
      aria-label="Floating contact options"
      style={styles.container}
    >
      {icons.map(({ href, icon, bg, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.iconWrapper, backgroundColor: bg }}
          aria-label={label}
          title={label}
        >
          <FontAwesomeIcon icon={icon} size="lg" />
        </a>
      ))}
    </nav>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    zIndex: 1000,
  },
  iconWrapper: {
    color: '#fff',
    borderRadius: '50%',
    padding: '14px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center',
    animation: 'pulse 2s infinite',
  },
 
};



export default FloatingContactIcons;
