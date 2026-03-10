import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function NewsDetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const docRef = doc(db, "ads", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNews({ id: docSnap.id, ...docSnap.data() });
        } else {
          setNews(null);
        }
      } catch (error) {
        console.error("Ошибка загрузки новости:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) return <p style={{ padding: "30px" }}>Жүктөлүүдө...</p>;
  if (!news) return <p style={{ padding: "30px" }}>Жаңылык табылган жок</p>;

  return (
    <main className="news-details-page">
      <div className="news-details-container">
        <img
          src={news.imageUrl || "https://via.placeholder.com/900x450?text=No+Image"}
          alt={news.title}
          className="news-details-image"
        />

        <h1 className="news-details-title">{news.title}</h1>

        <div className="news-details-meta">
          <span>
            {news.createdAt?.toDate
              ? news.createdAt.toDate().toLocaleDateString()
              : "Нет даты"}
          </span>
          <span>{news.category || "Без категории"}</span>
          <span>{news.author || "Seniors News"}</span>
        </div>

        <p className="news-details-description">
          {news.description || "Кыскача сүрөттөмө жок"}
        </p>

        <div className="news-details-content">
          {news.content || "Толук текст азырынча кошула элек"}
        </div>
      </div>
    </main>
  );
}