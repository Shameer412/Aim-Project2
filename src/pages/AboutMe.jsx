import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Aboutus from "../components/Aboutus";
import Goals from "../components/Goals";
import Choose from "../components/Choose";
import Footer from "../components/Footer";
import "../App.css"; // Import the existing CSS including the loader animation

const AboutMe = () => {
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
          <Aboutus />
          <Goals />
          <Choose />
          <Footer />
        </>
      )}
    </>
  );
};

export default AboutMe;
