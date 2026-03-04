import { useState } from "react";
import AdForm from "./components/AdForm";
import AdList from "./components/AdList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/UI/header";


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

      <main className="kg-page">
        <div className="kg-container">
          <div className="kg-surface kg-hero">
            <h1 className="kg-title">Simple Marketplace</h1>
            <p className="kg-subtitle">Firebase + React менен иштеген долбоор</p>
          </div>

          {/* Жарыялар тизмеси */}
          <section className="kg-surface kg-block">
            <AdList searchTerm={searchTerm} />
          </section>
        </div>
      </main>

      {/* MODAL: AdForm чыкчу терезе */}
      {openForm && (
        <div className="kg-modal-overlay" onClick={() => setOpenForm(false)}>
          <div className="kg-modal" onClick={(e) => e.stopPropagation()}>
            <div className="kg-modal-head">
              <h3>Жаңылык кошуу</h3>
              <button className="kg-modal-close" onClick={() => setOpenForm(false)}>
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