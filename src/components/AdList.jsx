import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import AdCard from "./AdCard";
import AdFilter from "./AdFilter";
import Loader from "./UI/Loader";

const AdList = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Баары");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const q = query(collection(db, "ads"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAds(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Бул жарыяны чын эле өчүргүңүз келеби?")) {
      try {
        await deleteDoc(doc(db, "ads", id));
      } catch (error) {
        console.error("Өчүрүүдө ката кетти:", error);
      }
    }
  };

  const filteredAds = ads
    .filter(ad => ad.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(ad => (category === "Баары" ? true : ad.category === category))
    .sort((a, b) => {
      if (sortBy === "cheap") return a.price - b.price;
      if (sortBy === "expensive") return b.price - a.price;
      return 0;
    });

  if (loading) return <Loader />;

  return (
    <div className="ad-list-container">
      <AdFilter 
        setSearchTerm={setSearchTerm} 
        setCategory={setCategory} 
        setSortBy={setSortBy} 
      />
      <h2 style={{ margin: "20px 0", color: "#333" }}>Жарыялар ({filteredAds.length})</h2>
      <div className="ad-grid">
        {filteredAds.map(ad => (
          <AdCard key={ad.id} ad={ad} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdList;