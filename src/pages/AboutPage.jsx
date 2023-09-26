import React from 'react';
import appBackground from '../assets/app.svg';
const AboutPage = () => {
  return (
    <section className='container mx-auto about-page'>
      <div className='about-us text-center glass py-6'>
        <h2 style={{ backgroundImage: `url(${appBackground})` }}>About Us</h2>
        <p>
          Welcome to our prayer times website! We are dedicated to providing
          accurate prayer times and valuable Islamic resources to help you
          maintain your spiritual journey. Here's what you need to know about
          us:
        </p>

        <h3>Our Team</h3>
        <p>
          Meet the dedicated individuals behind this project. Our team is
          comprised of passionate individuals who are committed to serving the
          Muslim community. We work tirelessly to ensure that you have access to
          accurate and reliable prayer times information.
        </p>

        <h3>Contact Us</h3>
        <p>
          We value your feedback and questions. If you have any inquiries or
          suggestions, please don't hesitate to reach out to us. You can contact
          us via email at info@yourwebsite.com or through our contact form.
        </p>

        <h3>Support Us</h3>
        <p>
          Running this service requires resources, and your support can make a
          difference. If you find our website helpful, consider contributing to
          help us continue our mission. Visit our "Support Us" page to learn
          more about how you can get involved.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
