import React, { useState } from 'react';
import { send } from 'emailjs-com'; // Import EmailJS
import './Services.css'; // Custom CSS file with unique class names
import bg2 from "../../assets/bg02.jpg"
const Services = () => {
    const [selectedService, setSelectedService] = useState(''); // Selected service title state
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' }); // Form data state

    const servicesData = [
        {
            id: 1,
            img: "https://creative-junction.com/img/icon/services.png",
            title: "Website Development",
            description: "Aim Services focuses on delivering top-notch website development solutions. Our expertise lies in creating modern, responsive, and user-friendly websites that help businesses establish a strong online presence. Whether you're looking to build a new website from scratch, revamp your existing site, or need ongoing support, we offer services tailored to your needs."
        },
        {
            id: 2,
            img: "https://creative-junction.com/img/icon/target-audience-128.png",
            title: "Digital Marketing",
            description: "Aim Services provides the best services in digital marketing. It specializes in website development, social media, community management, SEO, content development, order taking, customer services, client service, and PR. We market your product through all these digital outlets in innovative ways, under the supervision of experienced personnel, ensuring your message reaches a larger audience."
        },
        {
            id: 3,
            img: "https://creative-junction.com/img/icon/it-service.png",
            title: "Mobile App Development",
            description: "We provide the best IT solutions for your business. A mobile application is a powerful tool to connect with your customers, and our team is fully adept at creating the best identity for your brand through app development."
        },
        {
            id: 4,
            img: "https://creative-junction.com/img/icon/do4-128.png",
            title: "Content Writing",
            description: "We are your one-stop solution for content writing, offering all the resources to match your marketing and advertising needs. Our team of exceptionally creative writers designs concepts and produces engaging content that reflects your brand’s voice and vision."
        },
        {
            id: 5,
            img: "https://creative-junction.com/img/icon/video-play-2-128.png",
            title: "Video Editing",
            description: "We are dedicated to providing top-notch video editing services that bring your ideas to life. Our team of skilled editors is here to transform raw footage into compelling visual stories."
        }
    ];

    // Function to show the modal and set the selected service title
    const handleShow = (title) => {
        setSelectedService(title);
        setIsModalOpen(true);
        document.body.classList.add("modal-open");
    };

    // Function to close the modal
    const handleClose = () => {
        setIsModalOpen(false);
        document.body.classList.remove("modal-open");
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form data on close
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Template parameters for EmailJS
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: selectedService,
            message: formData.message,
        };

        // Sending email with EmailJS
        send('service_uz2d84f', 'template_9467xz7', templateParams, '8_QWC8R-rwVsyw02i')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                handleClose(); // Close the modal
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
            });
    };

    return (
        <div className={`container py-5 whatwedo-what-we-do-section ${isModalOpen ? 'modal-active' : ''}`}>
            <div className="row">
                <div className="col-12 whatwedo-content-section">
                    <div className="services-img">
                        
                        {/* <img src={bg2} alt="hi" /> */}
                    </div>
                    <h6 className="whatwedo-exclusive-services mt-4">Our Exclusive Services</h6>
                    <h2 className="whatwedo-heading">
                        WHAT WE DO AT <span className="">CREATIVE JUNCTION</span>
                    </h2>
                    <div className="whatwedo-underline"></div>
                    <p className="whatwedo-description">
                        We provide a comprehensive set of services which has been made available keeping in view all the requirements and platforms for making a brand successful.
                    </p>
                </div>
            </div>

            {/* Rendering each service */}
            {servicesData.map(service => (
                <div key={service.id}>
                    <div className="row mt-4 align-items-start">
                        <div className="col-12 col-md-2 whatwedo-icon text-start">
                            <img src={service.img} alt={`${service.title} Icon`} className="whatwedo-icon-img" />
                        </div>
                        <div className="col-12 col-md-10 whatwedo-service-item text-start">
                            <h4 className="whatwedo-service-heading">{service.title}</h4>
                            <p className="whatwedo-service-description">
                                {service.description}
                            </p>
                            <button className="btn btn-danger whatwedo-request-quote-btn" onClick={() => handleShow(service.title)}>REQUEST A QUOTE</button>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

            {/* Modal to show the form */}
            <div className={`modal ${isModalOpen ? 'show d-block' : 'fade'}`} tabIndex="-1" role="dialog" aria-labelledby="quoteModalLabel" aria-hidden={!isModalOpen}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content whatwedo-modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title whatwedo-modal-title" id="quoteModalLabel">Online Query Aim Services</h5>
                            <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" className="form-control whatwedo-input" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" className="form-control whatwedo-input" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" className="form-control whatwedo-input" value={formData.phone} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service</label>
                                    <input type="text" id="service" name="service" className="form-control whatwedo-input" value={selectedService} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" className="form-control whatwedo-input" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger whatwedo-submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
