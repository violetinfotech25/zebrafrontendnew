import React from 'react';

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '500px',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 1000,
        // Apply styles only for medium and large screens
        '@media (max-width: 767px)': {
          display: 'none',
        },
      }}
    >
      <div
        className="modal-content"
        style={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '90%',
          marginLeft: '20px',
        }}
      >
        <img
          src={image}
          alt="Modal"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
