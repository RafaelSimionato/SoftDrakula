import React, { useState } from 'react';

import '../css/Contact.css';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="container" style={{ backgroundColor: 'rgb(50, 50, 50)', color: '#ffffff' }}>
      <header>
        <h1 style={{ color: '#ff6600' }}>Contact Us</h1>
      </header>
      <main>
        <section>
          <h2 style={{ color: '#ff6600' }}>Get in Touch</h2>
          <p>
            If you have any questions or inquiries about our project, please feel free to reach out to us. We're here to assist you and provide the information you need.
          </p>
        </section>
        <section>
          <h2 style={{ color: '#ff6600' }}>Contact Information</h2>
          <p><strong>Email:</strong> contato@softdrakula.com</p>
          <p><strong>Phone:</strong> +31 (6) 1955-8181</p>
        </section>
        <section>
          <h2 style={{ color: '#ff6600' }}>Contact Form</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" className="form-control" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div><br/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {showSuccess && (
            <div className="alert alert-success mt-3" role="alert">
              Your message has been sent successfully.
            </div>
          )}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 - Proudly powered by Soft<span className="blood">D</span>rakula</p>
        <button id="backButton" onClick={() => window.history.back()}>Back</button>
      </footer>
    </div>
  );
};

export default Contact;
