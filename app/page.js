import Link from 'next/link';
import { FaGlobe, FaMobileAlt, FaBullhorn, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Creative & Innovative Ideas With <span>RNINFOSOFT!</span>
            </h1>
            <p className="hero-subtitle">
              We bring your vision to life with cutting-edge technology, innovative design, and strategic digital solutions.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
              <Link href="/what-we-do" className="btn btn-outline">Our Services</Link>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-quote-card">
              <FaQuoteLeft className="quote-icon" />
              <h3>RNINFOSOFT Fill The Life At Your Virtual Ideas, Thoughts and imaginations!</h3>
              <p>We Deal In Web & Mobile Designing and Development along with SEO, SMO, Amazon SEO and all kind of Sponsored Ads such as Google, Bing, Yahoo, FB, IG, and LinkedIn.</p>
              <div className="quote-author">
                <strong>Niraj Kumar</strong>
                <span>Sales@rninfosoft.com</span>
                <span>Mobile: +91-958-289-0703</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon"><FaGlobe /></div>
            <h2>Website Designing & Development</h2>
            <h4>Your Vision, Built for the Real World!</h4>
            <div className="service-divider"></div>
            <p>RNINFOSOFT delivers innovative website designing and development solutions, creating responsive, fast, and secure websites that enhance user experience, strengthen brand identity, and drive measurable business growth.</p>
            <Link href="/what-we-do" className="service-link">Learn More <FaArrowRight /></Link>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaMobileAlt /></div>
            <h2>Mobile Application Designing & Development</h2>
            <h4>Transforming Ideas Into Powerful Digital Experiences!</h4>
            <div className="service-divider"></div>
            <p>RNINFOSOFT builds high-performance mobile applications with intuitive design and robust development, delivering secure, scalable native and hybrid apps that enhance user engagement and drive business growth.</p>
            <Link href="/what-we-do" className="service-link">Learn More <FaArrowRight /></Link>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaBullhorn /></div>
            <h2>Digital Marketing</h2>
            <h4>Turning Your Ideas Into Digital Reality!</h4>
            <div className="service-divider"></div>
            <p>RNINFOSOFT delivers result-driven digital marketing services including SEO, SMO, and sponsored ads on Facebook, Instagram, and LinkedIn to boost visibility, generate leads, and maximize ROI.</p>
            <Link href="/what-we-do" className="service-link">Learn More <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Satisfaction Banner */}
      <section className="satisfaction-section">
        <div className="satisfaction-content">
          <span className="satisfaction-tag">Create Your Trust!</span>
          <span className="satisfaction-sub">With US!</span>
          <h1>Your Satisfaction Is Our Assets.</h1>
        </div>
      </section>

      {/* Personalized Tactics */}
      <section className="tactics-section">
        <div className="tactics-container">
          <div className="tactics-text">
            <span className="tactics-label">From Ideas To Real Life!</span>
            <h2>Personalized tactics</h2>
            <p>RNINFOSOFT delivers personalized tactics by understanding each client&apos;s unique goals, audience, and challenges. We design customized digital solutions, tailored strategies, and scalable technologies that align with business objectives, ensuring measurable results, improved engagement, and long-term digital success.</p>
          </div>
          <div className="tactics-image">
            <div className="tactics-placeholder">
              <div className="tactics-visual">
                <FaGlobe className="tv-icon" />
                <FaMobileAlt className="tv-icon" />
                <FaBullhorn className="tv-icon" />
              </div>
              <span className="tactics-brand">RNINFOSOFT</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let&apos;s build something amazing together</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}
