import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdForm from "./components/AdForm";
import AdList from "./components/AdList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/UI/header";
import NewsHero from "./components/UI/NewsHero";
import AboutUs from "./components/AboutUs";

function HomePage({ searchTerm }) {
  return (
    <main className="kg-page">
      <div className="kg-container">
        <NewsHero />

        <section className="kg-surface kg-block">
          <AdList searchTerm={searchTerm} />
        </section>
      </div>
    </main>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onOpenForm={() => setOpenForm(true)}
      />

      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {openForm && (
        <div className="kg-modal-overlay" onClick={() => setOpenForm(false)}>
          <div className="kg-modal" onClick={(e) => e.stopPropagation()}>
            <div className="kg-modal-head">
              <h3>Жаңылык кошуу</h3>
              <button
                className="kg-modal-close"
                onClick={() => setOpenForm(false)}
              >
                ✕
              </button>
            </div>

            <AdForm onDone={() => setOpenForm(false)} />
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;