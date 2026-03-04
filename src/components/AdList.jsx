import { useState, useEffect, useMemo } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import AdCard from "./AdCard";
import Loader from "./UI/Loader";

const AdList = ({ searchTerm = "" }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("Баары");
  const [sortBy, setSortBy] = useState("newest"); // newest | oldest | cheap | expensive

  // 👇 Сколько показывать
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    setLoading(true);

    const q = query(
      collection(db, "ads"),
      orderBy("createdAt", sortBy === "oldest" ? "asc" : "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setAds(snapshot.docs.map((d) => ({ ...d.data(), id: d.id })));
        setLoading(false);
      },
      (err) => {
        console.error("Firestore snapshot error:", err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [sortBy]);

  // если поменял фильтры — снова показываем первые 10
  useEffect(() => {
    setVisibleCount(10);
  }, [searchTerm, category, sortBy]);

  const handleDelete = async (id) => {
    if (window.confirm("Бул жарыяны чын эле өчүргүңүз келеби?")) {
      try {
        await deleteDoc(doc(db, "ads", id));
      } catch (error) {
        console.error("Өчүрүүдө ката кетти:", error);
      }
    }
  };

  const filteredAds = useMemo(() => {
    const s = (searchTerm || "").trim().toLowerCase();

    let list = ads
      .filter((ad) => {
        const title = (ad.title || "").toLowerCase();
        return s ? title.includes(s) : true;
      })
      .filter((ad) => (category === "Баары" ? true : ad.category === category));

    if (sortBy === "cheap") list = [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
    if (sortBy === "expensive") list = [...list].sort((a, b) => (b.price || 0) - (a.price || 0));

    return list;
  }, [ads, searchTerm, category, sortBy]);

  // 👇 показываем только часть
  const visibleAds = filteredAds.slice(0, visibleCount);
  const hasMore = filteredAds.length > visibleCount;

  if (loading) return <Loader />;

  return (
    <div className="ad-list-container">
      <div className="kg-filterbar">
        <div className="kg-filter-item">
          <span className="kg-filter-label">Категория</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Баары">Баары</option>
            <option value="Электроника">Электроника</option>
            <option value="Авто">Авто</option>
            <option value="Кийим">Кийим</option>
          </select>
        </div>

        <div className="kg-filter-item">
          <span className="kg-filter-label">Сорттоо</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Жаңылары (жаңы)</option>
            <option value="oldest">Эскилери (эски)</option>
            <option value="cheap">Алгач арзандары</option>
            <option value="expensive">Алгач кымбаттары</option>
          </select>
        </div>

        <div className="kg-filter-count">
          Жарыялар: <b>{filteredAds.length}</b>
        </div>
      </div>

      <h2 style={{ margin: "14px 0 12px", color: "#333" }}>
        Жарыялар ({filteredAds.length})
      </h2>

      <div className="ad-grid">
        {visibleAds.map((ad) => (
          <AdCard key={ad.id} ad={ad} onDelete={handleDelete} />
        ))}
      </div>

      {/* Кнопка “Еще” */}
      {hasMore && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          <button className="load-more-btn" onClick={() => setVisibleCount((v) => v + 10)}>
            Еще
          </button>
        </div>
      )}
    </div>
  );
};

export default AdList;