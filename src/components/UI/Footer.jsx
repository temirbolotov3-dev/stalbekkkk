import "./footer.css";
import { FaWhatsapp, FaTelegram, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>SENIORS</h3>
          <p>Телефон +996(312)66-01-88</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <a href="/">Home</a>
<Link to="/about">About</Link>
          <a href="/contact">Contact</a>
        </div>

        <div className="kg-iconss">
              <a href="https://chat.whatsapp.com/D6p1THUxsWA9x1oO5jNGnp?mode=gi_t">
                <FaWhatsapp />
              </a>
              <a href="https://t.me/c/2539162775/3">
                <FaTelegram />
              </a>
              <a href="https://www.youtube.com/@argenduishobekov8876">
                <FaYoutube />
              </a>
              <a href="https://wa.me/996779119890">
                <FaInstagram />
              </a>
            </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SENIORS
      </div>
    </footer>
  );
}

export default Footer;