import React, { useState } from "react";
import "./Management.css"; // Import your custom CSS for additional styling

const Management = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const team = [
        {
            id: 1,
            img: "https://aimservicess.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-01.21.57_aeffb699-270x374.jpg",
            name: "Haris Butt",
            professional: "CEO Founder",
            description: "Asif Butt, CEO and Founder of Aim Servicess, leads a thriving agency offering digital marketing, graphic design, web development, and social media management. With a focus on innovation, Asif drives business growth for clients across various industries. His leadership and expertise have made Aim Servicess a trusted partner in the digital space.                                    "
        },
       
      
        {
            id: 4,
            img: "https://aimservicess.com/wp-content/uploads/2024/09/Untitled-design-2-270x374.jpg",
            name: "Syed Shaheer",
            professional: "BD Manager",
            description: "Syed Shaheer, the Video Editor at Aim Servicess, is skilled in transforming raw footage into engaging and visually compelling content. With a strong eye for detail and creativity, Syed brings stories to life through editing, enhancing the impact of each project. His expertise ensures high-quality video content that resonates with audiences and meets client objectives.                                    "
        },
        // {
        //     id: 5,
        //     img: "https://aimservicess.com/wp-content/uploads/2024/09/Untitled-design-270x374.jpg",
        //     name: "Amir Khan",
        //     professional: "Social Media Marketer",
        //     description: "Amir Khan, the Social Media Marketer at Aim Servicess, specializes in creating impactful online campaigns that enhance brand visibility and engagement. With a keen understanding of digital trends and audience behavior, Amir crafts strategies that drive results across various social platforms. His creativity and expertise help clients grow their social presence and connect with their target audience effectively."
        // },
        {
            id: 6,
            img: "https://aimservicess.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-18-at-2.23.26-PM-270x374.jpeg",
            name: "Zain Ali",
            professional: "Product Manager",
            description: "Zain Ali is a strategic product manager at Aim Services, adept at guiding innovative projects from concept to launch. With a sharp focus on market trends and user needs, Zain ensures every product delivers exceptional value and exceeds expectations. His leadership drives cross-functional teams to achieve outstanding results and bring transformative ideas to life. "
        },
        {
            id: 7,
            img: "https://aimservicess.com/wp-content/uploads/2024/09/000c34ef-e39e-44da-8ce4-824085fddbc4-270x374.jpeg",
            name: "Hammad Ali",
            professional: "Web Developer",
            description: "Hammad Ali, a skilled web app developer at Aim Services, specializes in transforming innovative ideas into dynamic, user-friendly applications. With expertise in the latest technologies and a focus on quality, Hammad ensures each project meets and surpasses client expectations. Partner with Hammad to bring your app vision to life with precision and creativity."
        },

        {
            id: 8,
            img: "https://aimservicess.com/wp-content/uploads/2024/09/shemiii-270x374.jpg",
            name: "M Shahmeer",
            professional: "Full Stact Developer",
            description: " As a Full Stack Developer at Aim Servicess, Shahmeer specializes in both front-end and back-end development, delivering comprehensive and efficient digital solutions. With a strong command of coding, web development, and user interface design, Shahmeer ensures seamless integration and functionality across all platforms. His technical expertise and problem-solving abilities drive the success of complex projects, contributing to the company’s reputation for excellence. "
        },

        {
            id: 9,
            img: "https://aimservicess.com/wp-content/uploads/2024/09/Kinza-Aftab-270x374.jpg",
            name: "Kinza Aftab",
            professional: "App Developer",
            description: "Kinza Aftab, the Project Manager at Aim Servicess, is responsible for overseeing and coordinating projects to ensure timely delivery and client satisfaction. With strong organizational skills and a keen eye for detail, Kinza excels in managing teams, streamlining workflows, and keeping projects on track. Her leadership and dedication ensure that every project meets the highest standards of quality and success."
        },
        ,

        {
            id: 10,
            img: "https://aimservicess.com/wp-content/uploads/2024/09/Ayesha-Anam.jpg",
            name: "Ayesha Anum",
            professional: "SEO Expert",
            description: "Ayesha Anam is an SEO expert at Aim Services, focused on driving websites to the top of search engine results. With a strategic, data-driven approach, Ayesha helps businesses enhance their online visibility, attract high-quality traffic, and achieve long-term growth.                                     "
        }
    ]

    // Handle image click to show description modal
    const handleClick = (member) => {
        setSelectedMember(member); // Set the selected member to display in the modal
    };

    // Close the modal
    const handleClose = () => {
        setSelectedMember(null); // Close the modal by clearing selectedMember
    };

    return (
        <section className="manage-section py-5">
            <div className="container text-center">
                <h2 className="manage-title mb-4">
                    <span>OUR</span> MANAGEMENT
                </h2>
                <div className="choose-underline mx-auto text-center mt-2 mb-3"></div>
                <div className="row">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="col-lg-4 col-md-6 mb-5"
                            onClick={() => handleClick(member)}
                        >
                            <div className="manage-card">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="manage-img img-fluid "
                                />
                                <h5 className="manage-name mt-3">{member.name.toUpperCase()}</h5>
                                <p className="manage-position">{member.professional}</p>
                                <div className="manage-underline mx-auto text-center"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Section */}
            {selectedMember && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>
                            &times;
                        </span>
                        <img
                            src={selectedMember.img}
                            alt={selectedMember.name}
                            className="modal-img mx-auto img-fluid rounded-circle"
                        />
                        <h5 className="modal-name mt-3">{selectedMember.name.toUpperCase()}</h5>
                        <p className="modal-position">{selectedMember.professional}</p>
                        <p className="modal-description mt-2">{selectedMember.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Management;

   