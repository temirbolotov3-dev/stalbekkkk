import { FaCalendarAlt, FaTag } from "react-icons/fa";

export default function AdCard({ ad, onDelete }) {
  return (
    <div className="news-card">

      <img src={ad.image} alt={ad.title} className="news-image" />

      <div className="news-content">

        <h3 className="news-title">{ad.title}</h3>

        <p className="news-description">
          {ad.description}
        </p>

        <div className="news-meta">

          <span>
            <FaCalendarAlt />{" "}
            {ad.createdAt?.toDate
              ? ad.createdAt.toDate().toLocaleDateString()
              : ""}
          </span>

          <span>
            <FaTag /> {ad.category}
          </span>

        </div>

        <button className="read-more">
          Читать полностью
        </button>

      </div>

    </div>
  );
}