import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";

const AdFilter = ({ setSearchTerm, setCategory, setSortBy }) => {
  return (
    <div className="filter-container">
      {/* Издөө талаасы */}
      <div className="input-group">
        <FaSearch className="input-icon" />
        <input 
          type="text" 
          placeholder="Жарыяларды издөө..." 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Категориялар */}
      <div className="input-group">
        <FaFilter className="input-icon" />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="Баары">Бардык категориялар</option>
          <option value="Электроника">Электроника</option>
          <option value="Авто">Авто</option>
          <option value="Кийим">Кийим</option>
        </select>
      </div>

      {/* Сорттоо */}
      <div className="input-group">
        <FaSortAmountDown className="input-icon" />
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Жаңылары</option>
          <option value="cheap">Алгач арзандары</option>
          <option value="expensive">Алгач кымбаттары</option>
        </select>
      </div>
    </div>
  );
};

export default AdFilter;