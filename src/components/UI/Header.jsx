import { FaWhatsapp, FaTelegram, FaYoutube, FaInstagram } from "react-icons/fa";
import imgg from "../../assets/1.png";
import { Link } from "react-router-dom";

export default function Header({ searchTerm, setSearchTerm, onOpenForm }) {
  return (
    <header className="kg-header">
      <div className="kg-top">
        <div className="kg-top-inner">
          <div className="kg-brand">
            <img src={imgg} alt="" className="imggg" />
            <div className="kg-logo">Seniors</div>

            <nav className="kg-lang">
              <a href="#">КЫР</a>
              <a href="#">ENG</a>
            </nav>
          </div>

          <div className="kg-actions">
            <div className="kg-social">
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

            <div className="kg-search">
              <input
                placeholder="Поиск"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="button">🔍</button>
            </div>

            <button className="hero-main-btn" onClick={onOpenForm}>
              + Жаңылык кошуу
            </button>

            <div className="kg-mini">
              <div className="kg-mini-line">Сегодня</div>
              <div className="kg-mini-line muted">Бишкекское время</div>
            </div>
          </div>
        </div>
      </div>

      <div className="kg-nav">
        <div className="kg-nav-inner">
          <Link to="/">Home</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contacts">Контакты</Link>
          <a href="#footer">Footer</a>
        </div>
      </div>
    </header>
  );
}