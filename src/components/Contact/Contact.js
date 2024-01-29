import React, { useState } from 'react';
import './contact.css';
import mapImageSrc from '../../images/wilmington.png'
import axios from 'axios'




const Contact = () => {


  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    budget: '',
    message: ''
  });

  const [showSuccessMessage, setShowSuccessMessage ] = useState(false);

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, phone, type, budget, message } = emailData
    const payload = {
      to: `quotes@3woodconstruction.com`,
      subject: "New Project Inquiry from " + name,
      name: `${name}`, 
      email: `${email}`,
      phone: `${phone}`,
      type: `${type}`,
      budget: `${budget}`,
      message: `${message}`
    }
    try {
      const response = await axios.post('/.netlify/functions/sendEmail', payload);
      console.log('Email sent successfully', response.data);
      // Reset form fields
      setEmailData({ name: '', email: '', phone: '', type: '', budget: '', message: '' }); 
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000)
      // Handle success (e.g., display success message)
    } catch (error) {
      console.error('Error sending email', error);
      // Handle error (e.g., display error message)
    }
  }

  return (
    <div id="contact" className="contact">
      <h2>CONTACT US</h2>
      <div className="contact__container">
        <div className="contact__info">
          <div>
            <h3>CONTACT INFORMATION</h3>
            <p className="contact-details">At 3 Wood Construction, we take pride in our attention to detail, dedication to quality, and unwavering commitment to your satisfaction. Our experts are ready to discuss your project, provide accurate quotes, and offer expert advice tailored to your needs.
              Let's collaborate on your next construction endeavor. Contact us today for a free consultation and a detailed quote.</p>
          </div>
          <h3>PHONE</h3>
          <p className="contact-details"><strong>Victor Luna:</strong> (302) 548-7069</p>
          <h3>EMAIL</h3>
          <p className="contact-details"><a href={`mailto:3woodconstruction@gmail.com`}>3woodconstruction@gmail.com</a></p>

        </div>
        <div class="contact-form">
        {showSuccessMessage && <div className="success-message">Your quote request has been sent successfully!</div>}
          <form onSubmit={handleSubmit}>
            <h3>NAME</h3>
            <input
              type="text"
              name="name"
              className="form-input"
              value={emailData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <h3>EMAIL</h3>
            <input
              type="email"
              name="email"
              className="form-input"
              value={emailData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <h3>PHONE NUMBER</h3>
            <input
              name="phone"
              type="text"
              className="form-input"
              value={emailData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <h3>
              PROJECT TYPE
            </h3>
              <select
                name="type"
                type="text"
                className="form-input"
                value={emailData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select your project type</option>
                <option value="Interior Woodwork">Interior Woodwork</option>
                <option value="Exterior Woodwork">Exterior Woodwork</option>
                <option value="Custom Woodworking Projects">Custom Woodworking Projects</option>
                <option value="Renovations and Remodeling">Renovations and Remodeling</option>
                <option value="Woodworking Design and Consultation">Woodworking Design and Consultation</option>
                <option value="Cabinetry and Millwork">Cabinetry and Millwork</option>
              </select>
            <h3>
              BUDGET RANGE
            </h3>
              <select
                name="budget"
                className="form-input"
                value={emailData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select your budget range</option>
                <option value="under-$5,000">Under $5,000</option>
                <option value="$5,000-$10,000">$5,000 - $10,000</option>
                <option value="$10,000-$20,000">$10,000 - $20,000</option>
                <option value="$20,000-$50,000">$20,000 - $50,000</option>
                <option value="$50,000-$100,000">$50,000 - $100,000</option>
                <option value="over-$100,000">Over $100,000</option>
              </select>
            
            <h3>PROJECT DETAILS</h3>
            <textarea
              name="message"
              className="form-input"
              value={emailData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project and we'll make it happen"
              maxLength="2500"
              style={{
                width: '100%', // Set width to 100% of the container
                height: '200px', // Set a fixed height
                resize: 'vertical' // Allow vertical resizing only
              }}
              required
            />
            <button type="submit">REQUEST QUOTE</button>
          </form>
        </div>
        <div className="contact__map">
        <h3>LOCATION</h3>
        <p className="contact-details">Wilmington, Delaware</p>

          <img id="map" src={mapImageSrc} alt="Google Map of Wilmington, DE" />
        </div>
      </div>
    </div>
  );
};

export default Contact;