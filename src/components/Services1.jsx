import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Services1.css"; // Optional: Custom CSS to style the component

const servicesData = [
  {
    title: "Business Intelligence (BI)",
    description:
      "We provide a comprehensive set of services which has been made available keeping in view all the requirements and platforms for making a brand successful.",
    icon: "https://creative-junction.com/img/icon/main_service.png", // Replace with the actual icon URL or path
  },
  {
    title: "Cybersecurity Tools",
    description:
      "The most crucial and critical stage of advertising which requires staunch strategic approach along with effective implementation...",
    icon: "https://creative-junction.com/img/icon/seo-performance-48.png",
  },
  {
    title: "Marketing Strategies",
    description:
      "Another substantial phase of advertising and marketing is ensuring the success of a project. It requires calculated strategies...",
    icon: "https://creative-junction.com/img/icon/chart-2-48.png",
  },
  {
    title: "BTL Advertising",
    description:
      "In this age of fast communication, the traditional approach towards ATL & BTL has also taken a turn. New concepts, new strategies...",
    icon: "https://creative-junction.com/img/icon/horn.png",
  },
  {
    title: "Content Writing",
    description:
      "The sister organization MadDigital provides the best services in digital marketing. It specializes in website development...",
    icon: "https://creative-junction.com/img/icon/target-audience-48.png",
  },
  {
    title: "Web & App Development",
    description:
      "We provide the best IT solutions for your business. Website is the face of your brand, and our team is fully adept to create...",
    icon: "https://creative-junction.com/img/icon/it-services-icon.png",
  },
  {
    title: "Concepts & Content Creation",
    description:
      "We are a one-stop solution to your marketing and advertising needs, having all the resources to match your requirements...",
    icon: "https://creative-junction.com/img/icon/do4.png",
  },
  {
    title: "In-House Designing",
    description:
      "Cannot stress this point enough: we are a one-stop solution to all of your marketing and advertising needs! We have a team...",
    icon: "https://creative-junction.com/img/icon/do4.png",
  },
  {
    title: "Video Editing",
    description:
      "We are a one-stop solution to your marketing and advertising needs, having all the resources to match your requirements...",
    icon: "https://creative-junction.com/img/icon/bank-cards-48.png",
  },
  {
    title: "Event Management",
    description:
      "Cannot stress this point enough: we are a one-stop solution to all of your marketing and advertising needs! We have a team...",
    icon: "https://creative-junction.com/img/icon/video-play-2-48.png",
  },
  {
    title: "Data Analytics",
    description:
      "We are equipped with the latest videography technology and have worked with a number of reputable companies/brands to develop...",
    icon: "https://creative-junction.com/img/icon/video-multi-48.png",
  },
  {
    title: "Game Development",
    description:
      "We provide full coverage of your events, product shoots, store outlets etc. Our professional photographers have the training...",
    icon: "https://creative-junction.com/img/icon/camera-2-48.png",
  },
  // Add other services similarly
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 id="heading">WHAT WE DO AT CREATIVE AIM SERVICES</h2>
      <p id="para">
        We provide a comprehensive set of services which has been made available keeping in view all the requirements and platforms for making a brand successful.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, x: -50 }} // Start from the left
            animate={{ opacity: 1, x: 0 }} // Fade in to the original position
            exit={{ opacity: 0, x: 50 }} // Exit to the right
            transition={{ duration: 0.5 }} // Transition duration
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
      <Link to="/service">
        <button className="read-more-btn services-button">READ MORE</button>
      </Link>
    </div>
  );
};

export default Services;
