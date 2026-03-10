import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import {
  FaPlus,
  FaTag,
  FaPhone,
  FaImage,
  FaSpinner,
  FaUser,
  FaAlignLeft,
  FaRegNewspaper,
} from "react-icons/fa";

const AdForm = ({ onDone }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Seniors News");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Политика");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      

      await addDoc(collection(db, "ads"), {
        title,
        description,
        content,
        author,
        phone,
        category,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setDescription("");
      setContent("");
      setAuthor("Seniors News");
      setPhone("");
      setCategory("Политика");
      setImageUrl("");

      alert("Жаңылык кошулду!");
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
          placeholder="Жаңылыктын аталышы"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaAlignLeft className="input-icon" />
        <textarea
          placeholder="Кыскача сүрөттөмө"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
        />
      </div>

      <div className="input-group">
        <FaRegNewspaper className="input-icon" />
        <textarea
          placeholder="Толук жаңылык тексти"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
        />
      </div>

      <div className="input-group">
        <FaUser className="input-icon" />
        <input
          placeholder="Автор"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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

      <div className="input-group">
        <FaLink className="input-icon" />
        <input
          type="url"
          placeholder="Сүрөттүн URL шилтемеси"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>

      {imageUrl && (
        <div className="news-preview">
          <img
            src={imageUrl}
            alt="preview"
            className="news-preview-image"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Политика">Политика</option>
        <option value="Экономика">Экономика</option>
        <option value="Спорт">Спорт</option>
        <option value="Технологии">Технологии</option>
        <option value="Общество">Общество</option>
      </select>

      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? (
          <>
            <FaSpinner className="spin" /> Жүктөлүүдө...
          </>
        ) : (
          <>
            <FaPlus /> Жаңылык кошуу
          </>
        )}
      </button>
    </form>
  );
};

export default AdForm;