import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const updateStyles = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Small screen
        setStyles({
          button: { bottom: '30px', right: '30px', padding: '12px' },
          tooltip: { left: '-120px', padding: '6px 12px', fontSize: '12px' },
        });
      } else if (width < 1024) {
        // Medium screen
        setStyles({
          button: { bottom: '40px', right: '40px', padding: '14px' },
          tooltip: { left: '-130px', padding: '7px 14px', fontSize: '13px' },
        });
      } else {
        // Large screen
        setStyles({
          button: { bottom: '50px', right: '50px', padding: '15px' },
          tooltip: { left: '-140px', padding: '8px 16px', fontSize: '14px' },
        });
      }
    };

    updateStyles();
    window.addEventListener('resize', updateStyles);
    return () => window.removeEventListener('resize', updateStyles);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: styles.button?.bottom,
        right: styles.button?.right,
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href="https://wa.me/919843099624"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          padding: styles.button?.padding,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <FaWhatsapp size={40} />
      </a>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            left: styles.tooltip?.left,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            padding: styles.tooltip?.padding,
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            fontSize: styles.tooltip?.fontSize,
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '1001',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            width: 'max-content',
          }}
        >
          <span>Chat with us</span>
          <div
            style={{
              position: 'absolute',
              right: '-6px',
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
              width: '12px',
              height: '12px',
              backgroundColor: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsAppButton;
