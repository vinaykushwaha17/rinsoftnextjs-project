import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-r">R</span>
            <span className="logo-text">ninfosoft</span>
          </div>
          <p className="footer-desc">
            We craft digital experiences that drive growth. From web development to digital marketing — your success is our mission.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/what-we-do">What We Do</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link href="/what-we-do">Web Development</Link></li>
            <li><Link href="/what-we-do">Mobile Apps</Link></li>
            <li><Link href="/what-we-do">Digital Marketing</Link></li>
            <li><Link href="/what-we-do">UI/UX Design</Link></li>
            <li><Link href="/what-we-do">SEO Optimization</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <FaPhoneAlt />
            <span>+91 958-289-0703</span>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope />
            <span>sales@rninfosoft.com</span>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <span>Greater Noida, India 203207</span>
          </div>
          <Link href="/contact" className="footer-cta-btn">Start a Project</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 <span>rninfosoft.in</span> — All rights reserved.</p>
        <p>Designed &amp; Built by <span>RN Infosoft</span></p>
      </div>
    </footer>
  );
};

export default Footer;
