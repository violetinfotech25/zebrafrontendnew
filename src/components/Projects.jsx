import React, { useState } from 'react';
import '../assets/css/Projects.css';
import backgroundImage from '../assets/image/projects/1.jpeg';

import sliderImage1 from '../assets/image/gallery/IMG_8797.JPG';
import sliderImage2 from '../assets/image/gallery/pukra.jpg';
import sliderImage3 from '../assets/image/gallery/ganga.jpg';
import sliderImage4 from '../assets/image/gallery/ssandavar.jpg';

const sliderOneImages = [sliderImage1, sliderImage2];
const sliderTwoImages = [sliderImage3, sliderImage4];

const Projects = () => {
  const [indexOne, setIndexOne] = useState(0);
  const [indexTwo, setIndexTwo] = useState(0);

  const [showHelperLeftOne, setShowHelperLeftOne] = useState(false);
  const [showHelperRightOne, setShowHelperRightOne] = useState(false);

  const [showHelperLeftTwo, setShowHelperLeftTwo] = useState(false);
  const [showHelperRightTwo, setShowHelperRightTwo] = useState(false);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  // Modal controls
  const openModal = (images, index) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevModalImage = () => {
    setModalIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  };

  const nextModalImage = () => {
    setModalIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlideOne = () => {
    setIndexOne((prev) => (prev === 0 ? sliderOneImages.length - 1 : prev - 1));
  };
  const nextSlideOne = () => {
    setIndexOne((prev) => (prev === sliderOneImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlideTwo = () => {
    setIndexTwo((prev) => (prev === 0 ? sliderTwoImages.length - 1 : prev - 1));
  };
  const nextSlideTwo = () => {
    setIndexTwo((prev) => (prev === sliderTwoImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        className="project-banner-fullscreen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="project-banner-overlay"></div>
        <div className="project-banner-container">
          <div className="project-subproject-title">
            <span className="project-subproject-title-hyphen"></span>
            PORTFOLIO
          </div>
          <div className="project-title-container">
            <h1 className="project-title">OUR PROJECTS</h1>
          </div>
        </div>
      </div>

      <div className="dual-slider-container">
        {/* Slider One */}
        <div className="slider-card lalitha-card">
          <div
            className="slider-inner"
            onMouseEnter={() => {
              setShowHelperLeftOne(false);
              setShowHelperRightOne(false);
            }}
          >
            <button
              className="arrow arrow-left"
              onClick={prevSlideOne}
              onMouseEnter={() => setShowHelperLeftOne(true)}
              onMouseLeave={() => setShowHelperLeftOne(false)}
              aria-label="Previous slide"
            >
              <i className="bi bi-chevron-left"></i>
              {showHelperLeftOne && <span className="arrow-helper">Previous</span>}
            </button>
            <img
              src={sliderOneImages[indexOne]}
              alt="Lalitha slider"
              className="slider-image"
              onClick={() => openModal(sliderOneImages, indexOne)}
              style={{ cursor: 'pointer' }}
            />
            <button
              className="arrow arrow-right"
              onClick={nextSlideOne}
              onMouseEnter={() => setShowHelperRightOne(true)}
              onMouseLeave={() => setShowHelperRightOne(false)}
              aria-label="Next slide"
            >
              <i className="bi bi-chevron-right"></i>
              {showHelperRightOne && <span className="arrow-helper">Next</span>}
            </button>
          </div>
          <div className="lalitha-header">
            <span className="lalitha-logo"></span>
            <span className="lalitha-brand">Our Projects</span>
          </div>
        </div>

        {/* Slider Two */}
        <div className="slider-card sudarshan-card">
          <div
            className="slider-inner"
            onMouseEnter={() => {
              setShowHelperLeftTwo(false);
              setShowHelperRightTwo(false);
            }}
          >
            <button
              className="arrow arrow-left"
              onClick={prevSlideTwo}
              onMouseEnter={() => setShowHelperLeftTwo(true)}
              onMouseLeave={() => setShowHelperLeftTwo(false)}
              aria-label="Previous slide"
            >
              <i className="bi bi-chevron-left"></i>
              {showHelperLeftTwo && <span className="arrow-helper">Previous</span>}
            </button>
            <img
              src={sliderTwoImages[indexTwo]}
              alt="Sudarshan slider"
              className="slider-image"
              onClick={() => openModal(sliderTwoImages, indexTwo)}
              style={{ cursor: 'pointer' }}
            />
            <button
              className="arrow arrow-right"
              onClick={nextSlideTwo}
              onMouseEnter={() => setShowHelperRightTwo(true)}
              onMouseLeave={() => setShowHelperRightTwo(false)}
              aria-label="Next slide"
            >
              <i className="bi bi-chevron-right"></i>
              {showHelperRightTwo && <span className="arrow-helper">Next</span>}
            </button>
          </div>
          <div className="sudarshan-header">
            <span className="sudarshan-logo"></span>
            <span className="sudarshan-brand">Our Projects</span>
          </div>
        </div>
      </div>

      {/* Modal Overlay for Image Expansion */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal} aria-modal="true" role="dialog">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close image viewer">
              &times;
            </button>
            <button className="modal-prev" onClick={prevModalImage} aria-label="Previous image">
              &#10094;
            </button>
            <img
              src={modalImages[modalIndex]}
              alt={`Expanded slide ${modalIndex + 1}`}
              className="modal-image"
            />
            <button className="modal-next" onClick={nextModalImage} aria-label="Next image">
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
