import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Service.css";
import Banner from "../assets/image/services/banner.jpg";
import GlassCladding from "../assets/image/services/1.jpg";
import ACPCladding from "../assets/image/services/2.jpg";
import GFRP from "../assets/image/gallery/pukra.jpg";
const ServicePage = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact"); // make sure this route exists in App.jsx
  };

  return (
    <div className="service-page">
      {/* service-banner */}
      <div
  className="service-banner"
  style={{
    backgroundImage: `url(${Banner})`,
  }}
>
        <div className="service-banner-content">
          <span className="service-banner-subtitle">OUR SERVICES</span>
          <h1>WHAT WE OFFER</h1>
          <button className="service-banner-cta" onClick={goToContact}>
            Get In Touch
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="service-main-content">
        {/* Row 1: Image Left, Content Right */}
        <div className="service-row">
          <div className="service-img-block">
            <div className="img-wrapper custom-shadow">
              <div className="img-shadow"></div>
              <img src={ACPCladding} alt="Service 1" />
            </div>
          </div>
          <div className="service-text-block">
            <h2 className="section-heading">ACP CLADDING</h2>
            <p className="about-desc">ACP cladding enhances building exteriors with sleek, modern aesthetics and superior durability.
It provides lightweight yet strong protection against weather, corrosion, and environmental wear.
Customization options allow architects to achieve unique designs, colors, and textures.
Installation is efficient, reducing construction time while maintaining precision and alignment.
Maintenance is simple, ensuring long-term performance and visual appeal.
ACP façades elevate structures into iconic landmarks that combine style and functionality.</p>
          </div>
        </div>

        {/* Row 2: Content Left, Image Right */}
        <div className="service-row reverse">
          <div className="service-img-block">
            <div className="img-wrapper custom-shadow">
              <div className="img-shadow"></div>
              <img src={GFRP} alt="Service 2" />
            </div>
          </div>
          <div className="service-text-block">
            <h2 className="section-heading">GFRP ELEVATION</h2>
            <p className="about-desc">GFRP panels bring lightweight strength and exceptional durability to modern façades.
They allow creative freedom in shapes, curves, and intricate architectural designs.
Resistance to corrosion, weather, and environmental stress ensures long-lasting performance.
Precision fabrication guarantees seamless integration with ACP, glass, or other façade materials.
Installation is efficient, maintaining high standards of safety and structural integrity.
GFRP façades transform ordinary buildings into visually striking, contemporary landmarks.</p>
          </div>
        </div>

        {/* Row 3: Image Left, Content Right */}
        <div className="service-row">
          <div className="service-img-block">
            <div className="img-wrapper custom-shadow">
              <div className="img-shadow"></div>
              <img src={GlassCladding}alt="Service 3" />
            </div>
          </div>
          <div className="service-text-block">
            <h2 className="section-heading">Glass & Cladding Solutions</h2>
            <p className="about-desc">Glass and cladding systems bring elegance, modernity, and durability to any structure.
They allow natural light to enhance interiors while maintaining energy efficiency and insulation.
Custom designs, colors, and textures provide limitless possibilities for architectural expression.
High-quality materials ensure resistance against weather, corrosion, and daily wear.
Professional installation guarantees precision, structural integrity, and flawless finishing.
Our solutions transform buildings into sophisticated, iconic landmarks that stand out.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
