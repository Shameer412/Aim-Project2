import React from 'react';
import './WhyChooseUs.css'; // Add the necessary CSS here


const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="choose-us-container">
        {/* Left Side: Image */}
        <div className="choose-us-image">
          <img src="https://creative-junction.com/img/team.png" alt="Why Choose Us" />
        </div>

        {/* Right Side: Text */}
        <div className="choose-us-content">
          <h2>
            WHY <span className="choose-us-highlight">CHOOSE US?</span>
          </h2>
          <p className='underline'></p>
          <p>
            We deliver excellence, we have a team of experts with rigorous
            experience in the field who strive to provide the best services in
            launching and building brands. Our team tends to utilize all
            possible resources to make the product viable and cost-effective
            without understating the quality. Hence proving to be the best
            association for your brand.
          </p>
          <p>
            We honor the client with the best services. Creative Junction works
            in all dimensions, being the one-stop solution for all your
            marketing needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
