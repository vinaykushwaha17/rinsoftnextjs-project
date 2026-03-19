import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <h1 className="footer-title">Let's talk</h1>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /> Twitter</a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <p>t: 958-289-0703</p>
            <p>e: sales@rninfosoft.com</p>
            <p>a: Greater Noida, India 203207</p>
          </div>
          <h2 className="footer-tagline">Providing creative ideas for your business</h2>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2026 rninfosoft.in</p>
        <p>Powered by rninfosoft.in</p>
      </div>
    </footer>
  );
};

export default Footer;
