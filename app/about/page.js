import { FaCheckCircle, FaUsers, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <span className="hero-label">About Us</span>
        <h1>Who we are</h1>
      </section>

      <section className="about-intro">
        <div className="about-intro-container">
          <p className="about-main-text">
            RNINFOSOFT is a technology-driven digital solutions company specializing in website design, web development, mobile application development, and digital marketing. We combine innovation, strategy, and performance-focused execution to help businesses build strong digital identities, increase engagement, and achieve sustainable growth.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-container">
          <div className="mission-left">
            <h2>We are the decisive factor behind your success</h2>
          </div>
          <div className="mission-right">
            <p>We are the decisive factor behind your success, committed to delivering digital solutions that create real, measurable impact for your business. At RNINFOSOFT, we combine innovation, strategy, and technology to help brands stand out and grow in today&apos;s competitive digital environment.</p>
            <p>Our team focuses on understanding your business objectives, target audience, and market challenges before crafting tailored solutions that align with your goals. From website design and development to mobile applications and digital marketing, we bring expertise and dedication to every project.</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="values-container">
          <h2>Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaCheckCircle className="value-icon" />
              <h3>Quality First</h3>
              <p>We deliver high-quality solutions with attention to every detail, ensuring your project exceeds expectations.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Expert Team</h3>
              <p>Our skilled professionals bring years of experience in design, development, and digital marketing.</p>
            </div>
            <div className="value-card">
              <FaProjectDiagram className="value-icon" />
              <h3>Scalable Solutions</h3>
              <p>We build solutions that grow with your business, using modern and scalable technologies.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Client Partnership</h3>
              <p>We treat every client as a partner, working closely to understand and achieve your vision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stats-container">
          <div className="stat">
            <h2>50+</h2>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h2>30+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h2>3+</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
