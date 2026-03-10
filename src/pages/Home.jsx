import NewsHero from "../components/UI/NewsHero";
import AdList from "../components/AdList";

export default function Home({ searchTerm }) {
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