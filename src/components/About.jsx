import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/About.css';
import backgroundImage from '../assets/image/about/banner.jpg';
import visionImg from '../assets/image/about/1.jpg';
import missionImg from '../assets/image/about/2.jpg';
import Pr1 from '../assets/image/review/1.webp';
import Pr2 from '../assets/image/review/2.jpg';
import Pr3 from '../assets/image/review/3.jpg';
import Pr4 from '../assets/image/review/4.jpg';
import Pr5 from '../assets/image/review/5.jpg';
import Pr6 from '../assets/image/review/6.jpg';
import Pr7 from '../assets/image/review/7.webp';
import Pr8 from '../assets/image/review/8.jpg';
import Pr9 from '../assets/image/review/9.jpg';
import Pr10 from '../assets/image/review/10.gif';
import Pr11 from '../assets/image/review/11.jpg';
import Pr12 from '../assets/image/review/12.jpg';

export default function About() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const goToContact = () => {
    navigate('/contact');
  };

  const reviews = [
    [
      { name: 'Ponraj', profileImage: Pr1, rating: 5, title: 'Excellent Service', review: 'The team was professional and delivered outstanding results. Highly recommend!', date: '2022-05-15' },
      { name: 'Sathish', profileImage: Pr2, rating: 4, title: 'Great Experience', review: 'Everything was well organized and the quality was top-notch.', date: '2022-08-10' },
      { name: 'Ramsaran', profileImage: Pr3, rating: 5, title: 'Outstanding Quality', review: 'The attention to detail was impressive. Will definitely work with them again.', date: '2022-11-25' }
    ],
    [
      { name: 'Divaya', profileImage: Pr4, rating: 5, title: 'Top-Notch', review: 'They exceeded our expectations in every aspect.', date: '2023-01-28' },
      { name: 'Dani', profileImage: Pr5, rating: 4, title: 'Reliable Team', review: 'The team was reliable and delivered on time.', date: '2023-05-25' },
      { name: 'Deva', profileImage: Pr6, rating: 5, title: 'Exceptional Work', review: 'Their work is exceptional and highly professional.', date: '2023-10-20' }
    ],
    [
      { name: 'Rose', profileImage: Pr7, rating: 5, title: 'Highly Recommended', review: 'They are the best in the business. Highly recommend!', date: '2024-03-15' },
      { name: 'Harish', profileImage: Pr8, rating: 4, title: 'Great Communication', review: 'Communication was excellent throughout the project.', date: '2024-08-10' },
      { name: 'Shree', profileImage: Pr9, rating: 5, title: 'Outstanding Results', review: 'The results were outstanding and exceeded our expectations.', date: '2024-12-27' }
    ],
    [
      { name: 'Martin', profileImage: Pr10, rating: 5, title: 'Excellent Team', review: 'The team was excellent and delivered on time.', date: '2025-01-30' },
      { name: 'Mohammed Ali', profileImage: Pr11, rating: 4, title: 'Great Quality', review: 'The quality of work was great.', date: '2025-07-25' },
      { name: 'Mohammed Sherif', profileImage: Pr12, rating: 5, title: 'Highly Satisfied', review: 'I am highly satisfied with the results.', date: '2025-11-20' }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [autoScroll, currentSlide]);

  // Pause auto-scroll on user interaction
  const handleInteraction = () => {
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 5000); // Resume after 5 seconds
  };

  return (
    <div className="about-page">
      {/* Banner Section */}
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="banner-content">
          <span className="banner-subtitle">ZEBRA FACADE</span>
          <h1>ABOUT US</h1>
          <button className="banner-cta" onClick={goToContact}>
            GET IN TOUCH
          </button>
        </div>
      </section>

      <section className="about-main-content">
        {/* ABOUT US Section */}
        <section className="about-section">
          <div className="about-text-block">
            <h3 className="section-heading">ABOUT US</h3>
            <p className="about-desc">
              We are a leading elevation and façade solutions company specializing in ACP, GFRP, and architectural glass cladding. With a passion for design and engineering, we transform buildings into modern, durable, and visually stunning structures. Our team combines advanced fabrication technology with skilled craftsmanship to deliver flawless, long-lasting exterior finishes. From concept planning to nationwide installation, we ensure seamless execution and unmatched quality in every project. 
              At our core, we believe in innovation, reliability, and creating façades that stand out as landmarks.
            </p>
            <p className="about-desc mt-5">
              We are a specialised building elevation company delivering modern ACP facades, GFRP structures, and premium glass-cladding solutions.
              Our expertise lies in transforming ordinary buildings into striking, high-value architectural landmarks.
              With advanced fabrication technology and skilled craftsmanship, we ensure unmatched precision and long-lasting performance.
              We handle every stage—from design, material selection, and fabrication to installation—with complete quality control.
              Our nationwide team ensures timely execution, consistent standards, and professional service across all locations.
              Driven by innovation and commitment, we strive to create facades that reflect excellence, durability, and modern aesthetics.            
            </p>
          </div>
        </section>
        
        {/* VISION Section */}
        <section className="about-row">
          <div className="about-img-block">
            <div className="img-wrapper custom-shadow">
              <span className="img-shadow"></span>
              <img src={visionImg} alt="Our vision illustration" />
            </div>
          </div>
          <div className="about-text-block">
            <h3 className="section-heading">Transforming Buildings with Excellence</h3>
            <p>
              We design and deliver modern building elevations that combine structural strength, aesthetic appeal, and long-lasting durability.
              We create façades with ACP, GFRP, and glass cladding systems that redefine architectural style.
              We craft every project with precision engineering, high-quality materials, and flawless on-site execution.
              We shape iconic building exteriors that reflect innovation, superior craftsmanship, and timeless performance.
              We elevate commercial, residential, and industrial buildings with advanced facade technology.
              We turn every building into a landmark that stands out and lasts for decades.            
            </p>
          </div>
        </section>

        {/* MISSION Section */}
        <section className="about-row">
          <div className="about-text-block">
            <h3 className="section-heading">We Elevate Every Facade</h3>
            <p>
              We design and install modern ACP, GFRP, and glass-cladding façades that enhance both beauty and durability. Precision engineering ensures every panel fits perfectly and performs flawlessly. Advanced fabrication technology provides long-lasting structural integrity. Installations are executed nationwide with strict attention to safety, quality, and timelines. Ordinary exteriors are transformed into visually striking architectural statements. 
              The facades we deliver impress, inspire, and stand the test of time.            
            </p>
          </div>
          <div className="about-img-block">
            <div className="img-wrapper custom-shadow">
              <span className="img-shadow"></span>
              <img src={missionImg} alt="Our vision illustration" />
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section className="reviews-section">
          <div className="reviews-header-container">
            <h2 className="reviews-title">REVIEWS</h2>
          </div>
          <div className="reviews-carousel-container">
            <button className="carousel-arrow left" onClick={() => { prevSlide(); handleInteraction(); }}>❮</button>
            <div className="reviews-slides">
              {reviews[currentSlide].map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-header">
                    <img src={review.profileImage} alt={review.name} className="profile-image" />
                    <div className="reviewer-info">
                      <h4>{review.name}</h4>
                      <div className="review-stars">
                        {'★'.repeat(review.rating)}
                      </div>
                    </div>
                  </div>
                  <h5 className="review-title">{review.title}</h5>
                  <p className="review-text">{review.review}</p>
                  <div className="review-date">{review.date}</div>
                </div>
              ))}
            </div>
            <button className="carousel-arrow right" onClick={() => { nextSlide(); handleInteraction(); }}>❯</button>
          </div>
        </section>

        {/* Location Cards Section */}
        <section className="about-location-cards">
          <div className="location-card factory-card" style={{ backgroundImage: `url('https://msadvisory.com/wp-content/uploads/2024/07/Branch-office.jpg')` }}>
            <div className="loc-icon green-bg"><i className="bi bi-geo-alt-fill"></i></div>
            <div>
              <h4>OFFICE</h4>
              <p>15A1, Subbiyan Layout, Ramanathapuram, Coimbatore - 641045</p>
            </div>
          </div>
          <div className="location-card branch-office-card" style={{ backgroundImage: `url('https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2019/07/India-Briefing-Branch-Office-in-India-How-to-Set-Up.jpg?ssl=1')` }}>
            <div className="loc-icon green-bg"><i className="bi bi-telephone-fill"></i></div>
            <div>
              <h4>CONTACT</h4>
              <p>+91 98430 99624 <br /> +91 88071 99880</p>
            </div>
          </div>
          <div className="location-card branches-card" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?semt=ais_hybrid&w=740&q=80')` }}>
            <div className="loc-icon green-bg"><i className="bi bi-envelope-fill"></i></div>
            <div>
              <h4>EMAIL</h4>
              <p>zebrasignworld@gmail.com</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
