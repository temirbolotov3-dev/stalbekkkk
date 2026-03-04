import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { uploadImage } from "../utils/uploadImage";
import { FaPlus, FaTag, FaDollarSign, FaPhone, FaImage, FaSpinner } from "react-icons/fa";

const AdForm = ({ onDone }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Электроника");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";
      if (image) imageUrl = await uploadImage(image);

      await addDoc(collection(db, "ads"), {
        title,
        price: Number(price),
        phone,
        category,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setPrice("");
      setPhone("");
      setCategory("Электроника");
      setImage(null);

      alert("Жарнама кошулду!");
      if (onDone) onDone();
    } catch (err) {
      console.error(err);
      alert("Ката кетти. Кайра аракет кылыңыз!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="professional-form">
      <div className="input-group">
        <FaTag className="input-icon" />
        <input
          placeholder="Аталышы"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaDollarSign className="input-icon" />
        <input
          placeholder="Баасы"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaPhone className="input-icon" />
        <input
          placeholder="Телефон (мис: 996...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <label className="file-label">
        <FaImage /> Сүрөт тандаңыз
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
      </label>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Электроника">Электроника</option>
        <option value="Авто">Авто</option>
        <option value="Кийим">Кийим</option>
      </select>

      {/* КНОПКУ НЕ МЕНЯЛ */}
      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? (
          <>
            <FaSpinner className="spin" /> Жүктөлүүдө...
          </>
        ) : (
          <>
            <FaPlus /> Жарнама кошуу
          </>
        )}
      </button>
    </form>
  );
};

export default AdForm;