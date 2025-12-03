import React from "react";
import '../assets/css/Footer.css'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const cards = [
  {
    iconClass: "card-icon facebook",
    title: "Facebook",
    text: "Connect with us on Facebook!",
  },
  {
    iconClass: "card-icon instagram",
    title: "Instagram",
    text: "Follow our Instagram page.",
  },
  {
    iconClass: "card-icon youtube",
    title: "YouTube",
    text: "Subscribe to our channel.",
  },
];

export default function ResponsiveBackgroundSection() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Zebra Sign World. All rights reserved. | Designed by <a href="">Violet Infotech</a></p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=61560964190153" className="social-icon facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/zebra_sign_world/" className="social-icon instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@zebrasignworld" className="social-icon youtube" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://wa.me/919843099624" className="social-icon whatsapp" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
