import React, { useState } from 'react';
import { init, sendForm } from '@emailjs/browser';
import '../styles/ContactForm.css'; // Import CSS for styling

// Initialize EmailJS with your correct Public Key (User ID)
init('HMDPlj2RzHBQaSCVI'); // Replace with your actual Public Key

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',   // Added phone field
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    sendForm('service_glhar0f', 'template_zo4qh3n', e.target)
      .then((result) => {
        alert('Form submitted! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Error submitting the form:', error.text);
        alert('Error submitting the form. Please try again.');
      });
  };
  

  return (
    <section id="contact" className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </label>
        <label>
          Phone Number: {/* Added Phone Number input */}
          <input
            type="tel"    // "tel" input type for phone numbers
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Your Phone Number"
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Or call us at: <a href="tel:+2342343423233">+234 234 3423 233</a></p>
      </div>
    </section>
  );
};

export default ContactForm;
