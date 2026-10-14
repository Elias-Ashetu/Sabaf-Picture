
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assets/images/logo.jpg";
export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={Logo} alt="SABAF Picture logo" />
            <h2>
              SABAF <span>PICTURE</span>
            </h2>
          </div>

          <p className="footer-description">
            Capturing life's finest moments with artistry
            and precision. Based in Addis Ababa.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://telegram.org/" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>

        {/* Navigation section */}
        <div className="footer-pages">
          <h3>PAGES</h3>

          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/services">Services</Link>
          <Link to="/book">Book A Session</Link>
          <Link to="/clientGallery">Client Gallery</Link>
        </div>

        {/* Contact section */}
        <div className="footer-contact">
          <h3>CONTACT</h3>

          <a href="tel:+251910529000">
            +251 910 529 000
          </a>
          <a href="mailto:info@sabafpicture.com">
            info@sabafpicture.com
          </a>
          <p>Ambo, Oromia</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SABAF Picture.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};
