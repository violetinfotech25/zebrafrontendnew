import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../assets/css/Gallery.css';

import img1 from '../assets/image/gallery/IMG_8797.JPG';
import img2 from '../assets/image/gallery/pukra.jpg';
import img3 from '../assets/image/gallery/ganga.jpg';
import img4 from '../assets/image/gallery/ssandavar.jpg';
import img5 from '../assets/image/gallery/IMG_8797.JPG';
import img6 from '../assets/image/gallery/ganga.jpg';
import img7 from '../assets/image/gallery/pukra.jpg';
import img8 from '../assets/image/gallery/ssandavar.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const videos = [
  'https://www.youtube.com/embed/VIDEO_ID_1',
  'https://www.youtube.com/embed/VIDEO_ID_2',
];

const GalleryBanner = () => (
  <>
    <div className="gallery-banner">
      <h1 className="banner-title">OUR GALLERY</h1>
      <div className="button-group">
        <button
          className="btn active"
          onClick={() => document.getElementById('section1').scrollIntoView({ behavior: 'smooth' })}
        >
          Image Gallery
        </button>
        <button
          className="btn outline"
          onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })}
        >
          Video Gallery
        </button>
      </div>
    </div>

    <section id="section1" className="gallery-section">
      <h2>Image Gallery</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {images.map((src, index) => (
            <div key={index} className="masonry-img-wrapper">
              <img src={src} alt={`Gallery ${index + 1}`} className="masonry-img" />
              <div className="image-overlay"></div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>

    <section id="section2" className="gallery-section">
      <h2>Video Gallery</h2>
      <div className="video-grid">
        {videos.map((src, index) => (
          <div key={index} className="video-wrapper">
            <iframe
              src={src}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default GalleryBanner;
