import React, { useRef, useState } from 'react';
import '../assets/css/Contact.css';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    await fetch('https://script.google.com/macros/s/AKfycbz6kg7-KkWUc-l9M00BwBKwMXhx8q5kSQ1sz8Dt10Js51yAkF2ZxGsbqxZM0lgtGWuh/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    });
    alert('Message sent successfully!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  } catch (error) {
    alert('Error sending message. Please try again.');
  }
};

  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <div className="subtitle">
            <span className="project-subproject-title-hyphen"></span>
            Get in touch
          </div>
          <div className="title">CONTACT US</div>
          <div className="contact-info">
            <div className="info-item">
              <i className="bi bi-geo-alt-fill"></i>
              <div>
                <div className="info-title">Office</div>
                <div className="info-content">
                  15A1, Subbiyan Layout, Ramanathapuram,<br />
                  Coimbatore, Tamil Nadu - 641045
                </div>
              </div>
            </div>
            <div className="info-item">
              <i className="bi bi-telephone-fill"></i>
              <div>
                <div className="info-title">Contact Number</div>
                <div className="info-content">
                  <a href="tel:+919843099624">+91 98430 99624</a><br />
                  <a href="tel:+918807199880">+91 88071 99880</a><br />
                </div>
              </div>
            </div>
            <div className="info-item">
              <i className="bi bi-envelope-fill"></i>
              <div>
                <div className="info-title">Email</div>
                <div className="info-content">
                  <a href="mailto:zebrasignworld@gmail.com">zebrasignworld@gmail.com</a><br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="contact-right"
          style={{
            backgroundImage: `url('https://img.freepik.com/premium-vector/gold-background-abstract-triangle-golden-texture_206636-137.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="form-container">
            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-input"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.21832670482536!2d76.99868927259386!3d10.9942076101539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596365c05095%3A0x32f5b0fc7e365c9!2sZebra%20Sign%20World!5e0!3m2!1sen!2sin!4v1764160275801!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
