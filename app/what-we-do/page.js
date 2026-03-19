import {
  FaGlobe, FaMobileAlt, FaBullhorn, FaSearch,
  FaShoppingCart, FaPaintBrush, FaServer, FaChartLine
} from 'react-icons/fa';

const services = [
  {
    icon: <FaGlobe />,
    title: 'Website Design & Development',
    description: 'We create responsive, fast, and secure websites with modern UI/UX that enhance user experience and drive business growth.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Native and hybrid mobile applications with intuitive design for iOS and Android platforms that engage users.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing',
    description: 'Result-driven digital marketing including SEO, SMO, and sponsored ads on Facebook, Instagram, and LinkedIn.',
  },
  {
    icon: <FaSearch />,
    title: 'SEO & Amazon SEO',
    description: 'Comprehensive search engine optimization for Google, Bing, Yahoo, and Amazon to boost your online visibility.',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce Solutions',
    description: 'Full-featured e-commerce platforms with payment integration, inventory management, and seamless checkout.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'User-centered design approach creating visually stunning and highly functional digital interfaces.',
  },
  {
    icon: <FaServer />,
    title: 'Cloud & Hosting',
    description: 'Reliable cloud hosting and deployment solutions with high uptime, security, and scalability.',
  },
  {
    icon: <FaChartLine />,
    title: 'Sponsored Ads',
    description: 'Strategic ad campaigns on Google, Facebook, Instagram, and LinkedIn to maximize ROI and reach.',
  },
];

export default function WhatWeDo() {
  return (
    <div className="whatwedo-page">
      <section className="page-hero">
        <h1>What We Do</h1>
        <p>Comprehensive digital solutions to grow your business</p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="wwd-card" key={index}>
              <div className="wwd-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Discovery</h3>
            <p>Understanding your goals, audience, and challenges</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Strategy</h3>
            <p>Creating customized plans aligned with your objectives</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Design & Develop</h3>
            <p>Building scalable solutions with modern technologies</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <h3>Launch & Grow</h3>
            <p>Deploying and optimizing for measurable results</p>
          </div>
        </div>
      </section>
    </div>
  );
}
