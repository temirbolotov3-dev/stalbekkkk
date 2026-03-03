import AdForm from "./components/AdForm";
import AdList from "./components/AdList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#2c3e50" }}>Simple Marketplace</h1>
        <p style={{ color: "#bdc3c7" }}>Firebase + React менен иштеген долбоор</p>
      </header>

      <main>
        {/* Жарыя кошуу бөлүмү */}
        <section style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", marginBottom: "30px" }}>
          <AdForm />
        </section>

        <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "30px 0" }} />

        {/* Жарыялар тизмеси бөлүмү */}
        <section>
          <AdList />
        </section>
      </main>

      {/* Билдирүүлөр контейнери */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;