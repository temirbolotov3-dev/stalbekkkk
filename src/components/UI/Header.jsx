import { FaWhatsapp, FaTelegram, FaYoutube, FaInstagram,  } from "react-icons/fa";

export default function Header({ searchTerm, setSearchTerm, onOpenForm }) {
  return (
    <header className="kg-header">

      {/* верхняя строка */}
      <div className="kg-top">
        <div className="kg-top-inner">

          <div className="kg-brand">
            <div className="kg-logo">Seniors</div>

            <nav className="kg-lang">
              <a href="#">КЫР</a>
              <a href="#">ENG</a>
              <a href="#" className="muted">НАШИ УСЛУГИ</a>
            </nav>
          </div>


          <div className="kg-actions">

            <div className="kg-social">
              <a href="https://chat.whatsapp.com/D6p1THUxsWA9x1oO5jNGnp?mode=gi_t"><FaWhatsapp /></a>
              <a href="https://t.me/c/2539162775/3"><FaTelegram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="wa.me/996779119890"><FaInstagram /></a>
              
            </div>


            {/* ПОИСК */}
            <div className="kg-search">
              <input
                placeholder="Поиск"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="button">🔍</button>
            </div>


            {/* КНОПКА ДОБАВЛЕНИЯ */}
            <button className="add-post-btn" onClick={onOpenForm}>
              + Жаңылык кошуу
            </button>


            <div className="kg-mini">
              <div className="kg-mini-line">Сегодня</div>
              <div className="kg-mini-line muted">Бишкекское время</div>
            </div>

          </div>
        </div>
      </div>


      {/* меню как 24kg */}
      <div className="kg-nav">
        <div className="kg-nav-inner">
          <a href="#">Home</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
          <a href="#">Footer</a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        
          <a href="#"></a>
        </div>
      </div>

    </header>
  );
}