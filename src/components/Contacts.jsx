import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function Contacts() {
  return (
    <section className="contacts-page">
      <div className="contacts-overlay"></div>

      <div className="contacts-corners corner-top-left"></div>
      <div className="contacts-corners corner-top-right"></div>
      <div className="contacts-corners corner-bottom-left"></div>
      <div className="contacts-corners corner-bottom-right"></div>

      <div className="contacts-inner">
        <h1 className="contacts-title">НАШИ КОНТАКТЫ</h1>

        <div className="contacts-grid">
          <div className="contact-box">
            <div className="contact-icon-wrap">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h3>АДРЕС</h3>
            <div className="contact-line"></div>
            <p>Кыргызстан, г. Каракол,</p>
            <p>ул. Ленина 6</p>
          </div>

          <div className="contact-box">
            <div className="contact-icon-wrap">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>ТЕЛЕФОНЫ</h3>
            <div className="contact-line"></div>
            <p>+996 (555) 120 72 77</p>
            <p>+996 (703) 055 86 69</p>
          </div>

          <div className="contact-box">
            <div className="contact-icon-wrap">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>E-MAIL</h3>
            <div className="contact-line"></div>
            <p>seniors-office@gmail.com</p>
            <p>office.seniors.dev@gmail.com</p>
          </div>

          <div className="contact-box">
            <div className="contact-icon-wrap">
              <FaCalendarAlt className="contact-icon" />
            </div>
            <h3>ГРАФИК</h3>
            <div className="contact-line"></div>
            <p>Пн-Пт: с 9:00 - 19:00</p>
            <p>Сб-Вс: с 10:00 - 16:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}