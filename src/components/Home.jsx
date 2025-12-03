import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Home.css';
import ImageModal from './ImageModel.jsx';

import img1 from '../assets/image/slide/7.jpg';
import img2 from '../assets/image/slide/5.png';
import img3 from '../assets/image/slide/6.png';
import sideImage2 from '../assets/image/home/Slider-1.jpg';
import sideImage1 from '../assets/image/home/Slider-2.jpg';

import work3 from "../assets/image/gallery/IMG_8797.JPG";
import work2 from "../assets/image/gallery/pukra.jpg";
import work1 from "../assets/image/gallery/ganga.jpg";
import work4 from "../assets/image/gallery/ssandavar.jpg";
import work5 from "../assets/image/gallery/genesis.jpg";

import background from "../assets/image/home/banner.jpg";

const carouselImages = [img1, img2, img3];
const images = [work2, work3, work4, work5, work1,];
const Home = () => {
  const [loading, setLoading] = useState(false); // Move this inside the component
  const [current, setCurrent] = useState(0);
  const [styleClass, setStyleClass] = useState({ containerClass: 'standard', imageClass: 'cover' });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLargeOrMediumScreen, setIsLargeOrMediumScreen] = useState(true);

  // Check screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsLargeOrMediumScreen(mediaQuery.matches);

    const handler = (e) => setIsLargeOrMediumScreen(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Carousel autoplay interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Adjust image style based on aspect ratio
  useEffect(() => {
    const img = new Image();
    img.src = carouselImages[current];
    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      if (aspectRatio > 2) {
        setStyleClass({ containerClass: 'wide', imageClass: 'contain' });
      } else {
        setStyleClass({ containerClass: 'standard', imageClass: 'cover' });
      }
    };
  }, [current]);

  const openModal = (image) => {
    if (isLargeOrMediumScreen) {
      setSelectedImage(image);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  let alertShown = false;

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz6kg7-KkWUc-l9M00BwBKwMXhx8q5kSQ1sz8Dt10Js51yAkF2ZxGsbqxZM0lgtGWuh/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    });

    if (!response.ok) {
      if (!alertShown) {
        alert('Error sending message. Please try again.');
        alertShown = true;
      }
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    if (result.status === 'success' && !alertShown) {
      alert('Message sent successfully!');
      alertShown = true;
      // Clear form values
      e.target.reset();
    } else if (!alertShown) {
      alert('Error sending message. Please try again.');
      alertShown = true;
    }
  } catch (error) {
    if (!alertShown) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
      alertShown = true;
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      {/* Carousel Section */}
      <section className={`carousel-section ${styleClass.containerClass}`}>
        <div className={`carousel-container ${styleClass.containerClass}`}>
          {carouselImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === current ? 'active' : 'inactive'} ${styleClass.imageClass}`}
            />
          ))}
        </div>
      </section>

      {/* Boxes Section */}
      <section className="boxes-section">
        <div className="boxes-container">
          <div className="box">
            <i className="bi bi-clipboard box-icon"></i>
            <a href="https://www.maruthifacade.com/#" className="box-title">Services</a>
            <p className="box-text">
             Zebra Sign World delivers premium signage, fabrication, and installation services with unmatched precision.
From ACP, GFRP, glass facade to LED signboards, we transform concepts into powerful visual identities.
            </p>
          </div>
          <div className="box">
            <i className="bi bi-people box-icon"></i>
            <a href="https://www.maruthifacade.com/#" className="box-title">Project management</a>
            <p className="box-text">
              From site analysis to material planning and final installation, we manage your entire project with accuracy. 
              Our project management team guarantees timely execution, safety compliance, and high-quality results.
            </p>
          </div>
          <div className="box">
            <i className="bi bi-check-circle box-icon"></i>
            <a href="https://www.maruthifacade.com/#" className="box-title">Nationwide Installation</a>
            <p className="box-text">
              We provide seamless nationwide installation services with professional teams across all major cities.
From planning to execution, we ensure consistent quality and on-time completion everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="why-choose-section">
        <div className="why-choose-header">
          <span className="why-choose-subtitle">ABOUT US</span>
          <h2 className="why-choose-title">WHY CHOOSE US</h2>
        </div>

        {/* First content block (text overlay on right) */}
        <div className="why-choose-content">
          <div className="why-choose-image-wrapper">
            <img src={sideImage1} alt="Why Choose Us" className="why-choose-image" />
          </div>
          <div className="why-choose-text-wrapper">
            <h3 className="overlay-title">Our Vision</h3>
            <p className="overlay-text">
We redefine building elevation with custom-crafted ACP, GFRP, and glass cladding that gives your structure a signature identity.
Our engineering-driven designs deliver unmatched durability, sleek aesthetics, and long-term performance.
Each panel is crafted with precision to create clean lines, bold façades, and modern architectural appeal.
From fabrication to nationwide installation, we ensure seamless execution at every stage.
Partner with us to elevate your building into a standout landmark that commands attention.            </p>
            <a href="/aboutus" className="overlay-link">LEARN MORE →</a>
          </div>
        </div>

        {/* Second content block (text overlay on left) */}
        <div className="why-choose-content-reverse">
          <div className="why-choose-image-wrapper">
            <img src={sideImage2} alt="Why Choose Us" className="why-choose-image" />
          </div>
          <div className="why-choose-text-wrapper">
            <h3 className="overlay-title">Our Mission</h3>
            <p className="overlay-text">
Our mission is to revolutionize building elevations with innovative ACP, GFRP, and glass-cladding solutions.
We aim to deliver structures that blend modern design, structural integrity, and long-lasting excellence.
Through precision engineering and quality craftsmanship, we create façades that inspire and stand the test of time.
We are committed to on-time execution, client satisfaction, and nationwide service excellence.
Our goal is to elevate every project into a visually iconic and future-ready architectural masterpiece.            </p>
            <a href="/aboutus" className="overlay-link">LEARN MORE →</a>
          </div>
        </div>
      </section>

      {/* New Inline Images Section */}
      <section className="custom-services-section">
  <div className="section-header">
    <span className="section-subtitle">SERVICES</span>
    <h2 className="section-title">OUR PRODUCTS</h2>
  </div>
  <div className="inline-images-container">
  <a href="/services" rel="noopener noreferrer" className="clickable-image">
    <img src="https://cpimg.tistatic.com/10611139/b/4/ACP-Cladding.jpg" alt="Service 1" className="inline-image" />
    <div className="image-caption">ACP Facade</div>
  </a>
  <a href="/services" rel="noopener noreferrer" className="clickable-image">
    <img src="https://acpcladdingindelhi.wordpress.com/wp-content/uploads/2015/04/54.jpg" alt="Service 2" className="inline-image" />
    <div className="image-caption">Glass Cladding</div>
  </a>
  <a href="/services" rel="noopener noreferrer" className="clickable-image">
    <img src="https://xtrametal.com/wp-content/uploads/2025/07/Aluminum-Solid-panel.webp" alt="Service 3" className="inline-image" />
    <div className="image-caption">GFRP Elevations</div>
  </a>
</div>
</section>

{/* Image Gallery Section */}
      <section className="services-gallery-v2">
        <div className="section-header">
          <span className="section-subtitle">WORK</span>
          <h2 className="section-title">OUR PROJECTS</h2>
        </div>

        <div className="services-grid-v2">
          {images.map((image, index) => (
            <figure
              key={index}
              className={
                index === 0
                  ? "services-item-v2 services-item-landscape"
                  : "services-item-v2 services-item-portrait"
              }
              onMouseEnter={() => openModal(image)}
              onMouseLeave={closeModal}
            >
              <img src={image} alt={`Service ${index + 1}`} />
            </figure>
          ))}
        </div>
      </section>

      {isLargeOrMediumScreen && (
        <ImageModal image={selectedImage} isOpen={!!selectedImage} onClose={closeModal} />
      )}

{/* Contact and Location Section */}
 <section className="contact-location-section">
        <div className="container-split">
          {/* Left side with title and form */}
          <div className="left-side">
            <div className="section-header">
              <span className="section-subtitle">ENQUIRY</span>
              <h2 className="section-title">SEND MESSAGE</h2>
              <p className="section-description">
                For any enquiries, please Contact us using the form below!
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="tel" name="phone" placeholder="Your Phone Number" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
              <div className="button-container">
                <button type="submit" className="submit-button" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
              </div>
            </form>
          </div>

          {/* Right side with location */}
          <div className="right-side">
            <div className="location-content">
              <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.9868271801922!2d76.99818291961925!3d10.994123465814353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596365c05095%3A0x32f5b0fc7e365c9!2sZebra%20Sign%20World!5e0!3m2!1sen!2sin!4v1763637367411!5m2!1sen!2sin" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

{/* Contact Info Cards Section */}
<section className="contact-info-section" style={{ backgroundImage: `url(${background})` }}>
  <div className="section-header">
    <span className="section-subtitle">ZEBRA FACADES</span>
    <h2 className="section-title-some">CONTACT US</h2>
  </div>
  <div className="contact-info-container">
    <div className="contact-card">
      <i className="bi bi-geo-alt-fill contact-icon"></i>
      <h3 className="contact-title">Location</h3>
      <p className="contact-text">15A1, Subbiyan Layout, Ramanathapuram, Coimbatore – 641045</p>
    </div>
    <div className="contact-card">
      <i className="bi bi-telephone-fill contact-icon"></i>
      <h3 className="contact-title">Phone</h3>
      <p className="contact-text">+91 98430 99624 <br /> +91 88071 99880</p>
    </div>
    <div className="contact-card">
      <i className="bi bi-envelope-fill contact-icon"></i>
      <h3 className="contact-title">Email</h3>
      <p className="contact-text">zebrasignworld@gmail.com</p>
    </div>
  </div>
  {/* <div className="social-media-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
    <i className="bi bi-facebook"></i>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
    <i className="bi bi-instagram"></i>
  </a>
  <a href="https://wa.me/919843099624" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
    <i className="bi bi-whatsapp"></i>
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
    <i className="bi bi-youtube"></i>
  </a>
</div> */}
</section>

    </>
  );
};

export default Home;
