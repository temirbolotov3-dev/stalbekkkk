import { FaCalendarAlt, FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdCard({ ad }) {
  const navigate = useNavigate();

  return (
    <div className="news-card">
      <img
        src={ad.imageUrl || "https://via.placeholder.com/600x350?text=No+Image"}
        alt={ad.title}
        className="news-image"
      />

      <div className="news-content">
        <h3 className="news-title">{ad.title || "Без названия"}</h3>

        <p className="news-description">
          {ad.description || "Описание пока не добавлено"}
        </p>

        <div className="news-meta">

          <span>
            <FaCalendarAlt />{" "}
            {ad.createdAt?.toDate
              ? ad.createdAt.toDate().toLocaleDateString()
              : "Нет даты"}
          </span>

          <span>
            <FaTag /> {ad.category || "Без категории"}
          </span>

        </div>

        <button
          className="read-more"
          onClick={() => navigate(`/news/${ad.id}`)}
        >
          Читать полностью
        </button>

      </div>

    </div>
  );
}