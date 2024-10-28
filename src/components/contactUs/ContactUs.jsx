import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your service ID
      'YOUR_TEMPLATE_ID', // Replace with your template ID
      form.current,
      'YOUR_USER_ID' // Replace with your user ID
    ).then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again.');
    });
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        Fill this form and our turnaround time will tell you that you have made the right choice.
      </p>
      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name here" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="Your email here" required />
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="Your phone here" required />
          <label>Message</label>
          <textarea  name="message" placeholder="Your message here" rows="4" required></textarea>
          <button type="submit" className="send-button">Send</button>
        </form>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.4547419976225!2d74.28028346916007!3d31.455067365906977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901245a2a054b%3A0xbafdb09c2ea4dcb8!2sDanish%20Auto%20Care!5e0!3m2!1sen!2s!4v1728880187139!5m2!1sen!2s" width="600" height="450"   style={{ border: 0, width: '100%', height: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* <iframe
            title="location-map"
            src="https://maps.app.goo.gl/mfag45LkUXrfvvBY7"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
      <div className="social-media">
        <p className="follow-us">Follow Us</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/aimservices1" className="icon fb"><i className="fab fa-facebook-f"></i></a>
         
          <a href="https://www.instagram.com/aimservicess/" className="icon insta"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/watch?v=1lvgG7g9Oqg" className="icon youtube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="office-locations">
        <div className="location-card">
          <h3>Head Office Lahore</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.4547419976225!2d74.28028346916007!3d31.455067365906977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901245a2a054b%3A0xbafdb09c2ea4dcb8!2sDanish%20Auto%20Care!5e0!3m2!1sen!2s!4v1728880187139!5m2!1sen!2s" 
            style={{ border: 0, width: '100%', height: '150px' }} 
            allowFullScreen="" loading="lazy">
          </iframe>
          <p>478 A, Block A Revenue Employees Cooperative Housing Society, Lahore, Punjab 54000</p>
          <p>+92 3004323657</p>
        </div>
        <div className="location-card">
          <h3>DHA Lahore, Office</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2675670436606!2d74.4206879742288!3d31.46182505003469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908bdfe3d7697%3A0xa5adcdb21bc899e4!2sPakistan%20Chowk!5e0!3m2!1sen!2s!4v1728882009282!5m2!1sen!2s"       style={{ border: 0, width: '100%', height: '150px' }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>Chohan Chowk, Street No. 2, A Block Sector A Phase 5 D.H.A, Lahore, Punjab, Pakistan</p>
          <p>+92 3004323657</p>
        </div>
      </div>
    </div>
    
  );
};

export default ContactUs;
