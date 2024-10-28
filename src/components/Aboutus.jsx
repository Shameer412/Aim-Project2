import React, { useState, useEffect } from "react";
import "./About.css"; // Import your CSS file
import AboutVideo from "../assets/About.mp4"; // Import your video
import { FaPlay, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle opening and closing the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Listen for "ESC" key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="about-section">
      {/* About Us Content */}
      <div className="about-content">
        <h2>
          ABOUT <span>US</span>
        </h2>
        <div className="custom-underline">
          <div className="red-part"></div>
          <div className="blue-part"></div>
          <div className="blue-part"></div>
        </div>
        <p className="quote">
          “The best marketing doesn’t feel like marketing.” With the ever-growing
          need of business merchandising in the age of information, a good
          marketer is essential for business. Therefore, the foundation of
          Aim-Services was laid in 2024 to elevate your trade. This is the
          junction where creativity meets innovation, providing excellent
          solutions to your advertising needs. We are ISO certified, a one-stop
          solution for all your marketing and advertising requirements.
        </p>
        {/* Wrap Link around the button */}
       
<Link to="/about" >
<button className="read-more-btn">
  READ MORE
  </button>
  </Link>
       
      </div>

      {/* About Video Section */}
      <div className="about-video" onClick={openModal}>
        {/* Play Icon on top of the video */}
        <FaPlay className="play-icon" />
        <video
          className="background-video"
          muted
          loop
          autoPlay
          playsInline // Prevents mobile fullscreen autoplay
        >
          <source src={AboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Full-screen Video Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-video">
            <video controls autoPlay className="full-screen-video">
              <source src={AboutVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Navigation and Close Icons */}
            <div className="modal-controls">
              {/* <FaArrowLeft className="nav-icon left-icon" />
              <FaArrowRight className="nav-icon right-icon" /> */}
              <FaTimes className="close-icon" onClick={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
