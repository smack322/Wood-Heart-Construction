import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

const Contact = () => {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    budget: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const { name, email, phone, type, budget, message } = emailData;
    const payload = {
      to: 'quotes@3woodconstruction.com',
      subject: `New Project Inquiry from ${name}`,
      name,
      email,
      phone,
      type,
      budget,
      message,
    };
    try {
      await axios.post('/.netlify/functions/sendEmail', payload);
      setEmailData({ name: '', email: '', phone: '', type: '', budget: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 6000);
    } catch (err) {
      console.error('Error sending email', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        {/* Left: info */}
        <div className="contact__info">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Contact Us</h2>
          <p className="contact__blurb">
            Our experts are ready to discuss your project, provide accurate quotes, and offer
            advice tailored to your needs. Contact us today for a free consultation.
          </p>

          <div className="contact__detail">
            <h4>Phone</h4>
            <p><a href="tel:3025301346">(302) 530-1346</a></p>
          </div>
          <div className="contact__detail">
            <h4>Email</h4>
            <p><a href="mailto:3woodconstruction@gmail.com">3woodconstruction@gmail.com</a></p>
          </div>
          <div className="contact__detail">
            <h4>Location</h4>
            <p>Wilmington, Delaware</p>
          </div>

          <img
            src="/images/wilmington.png"
            alt="Wilmington, DE"
            className="contact__map"
          />
        </div>

        {/* Right: form */}
        <div className="contact__form-wrap">
          {showSuccess && (
            <div className="contact__success">
              Your quote request has been sent! We'll be in touch shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={emailData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="contact__field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={emailData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>
            <div className="contact__field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={emailData.phone}
                onChange={handleChange}
                placeholder="(xxx) xxx-xxxx"
                required
              />
            </div>
            <div className="contact__field">
              <label>Project Type</label>
              <select name="type" value={emailData.type} onChange={handleChange} required>
                <option value="">Select project type</option>
                <option value="Interior Woodwork">Interior Woodwork</option>
                <option value="Exterior Woodwork">Exterior Woodwork</option>
                <option value="Custom Woodworking Projects">Custom Woodworking Projects</option>
                <option value="Renovations and Remodeling">Renovations and Remodeling</option>
                <option value="Woodworking Design and Consultation">Design and Consultation</option>
                <option value="Cabinetry and Millwork">Cabinetry and Millwork</option>
              </select>
            </div>
            <div className="contact__field">
              <label>Budget Range</label>
              <select name="budget" value={emailData.budget} onChange={handleChange} required>
                <option value="">Select budget range</option>
                <option value="under-$5,000">Under $5,000</option>
                <option value="$5,000-$10,000">$5,000 – $10,000</option>
                <option value="$10,000-$20,000">$10,000 – $20,000</option>
                <option value="$20,000-$50,000">$20,000 – $50,000</option>
                <option value="$50,000-$100,000">$50,000 – $100,000</option>
                <option value="over-$100,000">Over $100,000</option>
              </select>
            </div>
            <div className="contact__field">
              <label>Project Details</label>
              <textarea
                name="message"
                value={emailData.message}
                onChange={handleChange}
                placeholder="Tell us about your project and we'll make it happen"
                maxLength="2500"
                rows={6}
                required
              />
            </div>
            <button type="submit" className="contact__submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Request a Quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
