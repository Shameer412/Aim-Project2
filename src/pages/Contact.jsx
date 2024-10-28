import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/Footer";
import "../App.css"; // Import the existing CSS including animation

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as necessary

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? (
        <div className="balls">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <Navbar />
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
