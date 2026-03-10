import { FaTrash, FaWhatsapp, FaTag, FaPhoneAlt } from "react-icons/fa";

const AdCard = ({ ad, onDelete }) => {
  const cleanPhone = ad.phone ? ad.phone.replace(/\D/g, '') : "";
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Саламатсызбы! Сиздин "${ad.title}" жарыяңыз боюнча жазып жатам.`;

  return (
    <div className="ad-card">
      {ad.imageUrl && (
        <img src={ad.imageUrl} alt={ad.title} className="ad-card-image" />
      )}
      <div className="ad-card-content">
        <h3>{ad.title}</h3>
        <p><FaTag className="icon" /> {ad.category}</p>
        
        <div className="ad-card-actions">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wa-btn">
            <FaWhatsapp /> WhatsApp
          </a>
          <button onClick={() => onDelete(ad.id)} className="delete-btn">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdCard;