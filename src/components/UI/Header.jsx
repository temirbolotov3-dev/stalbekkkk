import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Header({ searchTerm, setSearchTerm, onOpenForm }) {
  return (
    <header className="kg-header">

      {/* верхняя строка */}
      <div className="kg-top">
        <div className="kg-top-inner">

          <div className="kg-brand">
            <div className="kg-logo">24KG</div>

            <nav className="kg-lang">
              <a href="#">КЫР</a>
              <a href="#">ENG</a>
              <a href="#" className="muted">НАШИ УСЛУГИ</a>
            </nav>
          </div>


          <div className="kg-actions">

            <div className="kg-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTelegramPlane /></a>
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
          <a href="#">Власть</a>
          <a href="#">Общество</a>
          <a href="#">Экономика</a>
          <a href="#">Происшествия</a>
          <a href="#">Спорт</a>
          <a href="#">Технологии</a>
          <a href="#">Спецпроекты</a>
          <a href="#" className="right">English</a>
          <a href="#">Бизнес</a>
        </div>
      </div>

    </header>
  );
}