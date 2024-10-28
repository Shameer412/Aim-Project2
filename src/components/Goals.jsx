import React from 'react';
import { motion } from 'framer-motion';

const Goals = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <style>{`
        .goal-container {
          display: flex;
          justify-content: space-between;
          text-align: center;
          padding: 40px;
          background-color: #f8f8f8;
        }

        .goal-item {
          width: 30%;
          background-color: #f8f8f8;
          padding: 20px;
          border-radius: 10px;
          margin: 0 15px; /* Added spacing between items */
        }

        .goal-image-placeholder {
          margin: 0 auto;
          border-radius: 50%;
        }

        .goal-title {
          font-size: 26px; /* Increased font size */
          font-weight: bold;
          color: black; /* Changed color */
          margin-top: 20px;
        }

        .goal-title span {
          font-size: 26px; /* Increased font size */
          font-weight: bold;
          color: #ED1C24; /* Changed color */
        }

        .custom-underline1 {
          margin-left: 80px;
          display: flex;
          align-self: center;
          margin-bottom: 30px;
        }

        .red-part1 {
          width: 160px;
          height: 5px;
          background-color: #ED1C24;
        }

        .blue-part1 {
          width: 5px;
          height: 5px;
          background-color: #121349;
          margin-left: 10px;
        }

        .goal-description {
          font-size: 14px; /* Slightly increased font size */
          color: #555;
          margin-top: 10px;
          line-height: 1.6;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 1200px) {
          .goal-item {
            width: 45%; /* Adjust width for larger screens */
            margin: 10px 0; /* Reduce margin */
          }
        }

        @media (max-width: 768px) {
          .goal-container {
            flex-direction: column; /* Stack items vertically */
            padding: 20px; /* Reduce padding */
          }
             .custom-underline1{
            margin-left:60px;
            }

          .goal-item {
            width: 90%; /* Full width for smaller screens */
            margin: 10px auto; /* Center items */
          }

          .goal-title {
            font-size: 22px; /* Slightly smaller title */
          }

          .goal-description {
            font-size: 12px; /* Slightly smaller description */
          }
        }

        @media (max-width: 480px) {
          .goal-title {
            font-size: 20px; /* Even smaller title */
          }

          .goal-description {
            font-size: 11px; /* Even smaller description */
          }
            .custom-underline1{
            margin-left:60px;
            }

          .goal-item {
            padding: 15px; /* Reduce padding */
          }
        }
      `}</style>

      <motion.div
        className="goal-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div className="goal-item" variants={fadeInUp}>
          <div className="goal-image-placeholder">
            <img alt="mission-icon" src="https://creative-junction.com/img/icon/mission.png" />
          </div>
          <h2 className="goal-title">OUR <span>MISSION</span></h2>
          <div className="custom-underline1">
            <div className="red-part1"></div>
            <div className="blue-part1"></div>
            <div className="blue-part1"></div>
          </div>
          <p className="goal-description">
            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised the standards in this industry and are a leading cybersecurity.
          </p>
        </motion.div>

        <motion.div className="goal-item" variants={fadeInUp}>
          <div className="goal-image-placeholder">
            <img alt="vision-icon" src="https://creative-junction.com/img/icon/vision.png" />
          </div>
          <h2 className="goal-title">OUR <span>VISION</span></h2>
          <div className="custom-underline1">
            <div className="red-part1"></div>
            <div className="blue-part1"></div>
            <div className="blue-part1"></div>
          </div>
          <p className="goal-description">
            We have critical compliance designations, including SSAE 18 Type II and PCI, adhering to the strictest industry regulations. We train our staff on HIPAA best practices on behalf of our healthcare clients. We incorporate and maintain advanced monitoring, anti-malware, and authentication tools.
          </p>
        </motion.div>

        <motion.div className="goal-item" variants={fadeInUp}>
          <div className="goal-image-placeholder">
            <img alt="philosophy-icon" src="https://creative-junction.com/img/icon/philosophy.png" />
          </div>
          <h2 className="goal-title">OUR <span>PHILOSOPHY</span></h2>
          <div className="custom-underline1">
            <div className="red-part1"></div>
            <div className="blue-part1"></div>
            <div className="blue-part1"></div>
          </div>
          <p className="goal-description">
            Every ITS client has a dedicated Virtual CIO who provides personalized, strategic guidance. Your vCIO understands what drives your business and recommends technology solutions to solve your unique needs. With your best interests in mind, your vCIO assists with budgeting.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Goals;


