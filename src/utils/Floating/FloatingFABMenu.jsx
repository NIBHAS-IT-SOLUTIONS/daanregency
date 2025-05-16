import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './FloatingFABMenu.css'; // Custom styles

const FloatingFABMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '919876543210';
  const email = 'your@email.com';
  const message = 'Hello! I would like to connect with you.';

  const toggleMenu = () => setIsOpen(prev => !prev);

  const links = [
    {
      href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      icon: faWhatsapp,
      label: 'WhatsApp',
      bg: '#25D366',
    },
    {
      href: `tel:+${phoneNumber}`,
      icon: faPhone,
      label: 'Call',
      bg: '#007bff',
    },
    {
      href: `mailto:${email}`,
      icon: faEnvelope,
      label: 'Email',
      bg: '#dc3545',
    },
  ];

  return (
    <nav className="fab-container" aria-label="Contact options">
      {links.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`fab-icon ${isOpen ? 'show' : ''}`}
          style={{ backgroundColor: item.bg }}
          aria-label={item.label}
          title={item.label}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}

      <button
        className="fab-toggle"
        onClick={toggleMenu}
        aria-label="Toggle contact menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faPlus} />
      </button>
    </nav>
  );
};

export default FloatingFABMenu;
