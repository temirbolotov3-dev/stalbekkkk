import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      fontSize: "30px",
      color: "#25D366"
    }}>
      <FaSpinner className="spin" /> 
    </div>
  );
};

// МУНУ СӨЗСҮЗ КОШУҢУЗ:
export default Loader;