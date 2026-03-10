import { useEffect, useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Кабмин утвердил платный проезд через тоннели на двух трассах Кыргызстана. Прайс",
    image: "/hero1.jpg",
  },
  {
    id: 2,
    title: "Орозо айт в Кыргызстане отметят 20 марта",
    image: "/hero2.jpg",
  },
  {
    id: 3,
    title: "Министр чрезвычайных ситуаций Урматбек Шамырканов освобожден от должности",
    image: "/hero3.jpg",
  },
  {
    id: 4,
    title: "Новые тарифы на электроэнергию в Кыргызстане: сколько будем платить с 1 мая",
    image: "/hero4.jpg",
  },
  {
    id: 5,
    title: "Застройку сельхозземель в Кыргызстане предлагают ограничить новым законом",
    image: "/hero5.jpg",
  },
  {
    id: 6,
    title: "Вредную еду запретят продавать возле школ в Кыргызстане",
    image: "/hero6.jpg",
  },
];

export default function NewsHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeItem = newsItems[activeIndex];

  return (
    <section className="news-showcase">
      <div className="ad-banner-top">
        <img src="/ad-top.jpg" alt="Top advertisement" />
      </div>

      <div className="news-showcase-grid">
        <div
          className="news-main"
          style={{ backgroundImage: `url(${activeItem.image})` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="news-main-overlay"></div>

          <div className="news-main-content">
            <h2>{activeItem.title}</h2>
          </div>
        </div>

        <div
          className="news-side"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`news-side-item ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {item.title}
            </div>
          ))}
        </div>

        <aside className="news-ad">
          <img src="/ad-side.jpg" alt="Side advertisement" />
        </aside>
      </div>

      <div className="ad-banner-bottom">
        <img src="/ad-bottom.jpg" alt="Bottom advertisement" />
      </div>
    </section>
  );
}