import { useState, useEffect, useMemo } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import AdCard from "./AdCard";
import Loader from "./UI/Loader";

const AdList = ({ searchTerm = "" }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  // Категория
  const [category, setCategory] = useState("Баары");

  // Мына ушул сен айткан “Жаңы / Эски”
  const [sortBy, setSortBy] = useState("newest"); // newest | oldest | cheap | expensive

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

    // Цена сортировка (если выбрал дешево/дорого)
    if (sortBy === "cheap") list = [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
    if (sortBy === "expensive") list = [...list].sort((a, b) => (b.price || 0) - (a.price || 0));

    // newest/oldest уже приходит из Firestore orderBy, можно не сортить тут
    return list;
  }, [ads, searchTerm, category, sortBy]);

  if (loading) return <Loader />;

  return (
    <div className="ad-list-container">
      {/* Панель фильтров */}
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
        {filteredAds.map((ad) => (
          <AdCard key={ad.id} ad={ad} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdList;