import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTelegram, FaPhone } from "react-icons/fa";

const team = [
  {
    name: "Саламат",
    role: "Team Lead",
    phone: "+996 XXX XXX XXX",
    whatsapp: "https://wa.me/996000000000",
    instagram: "https://instagram.com",
    telegram: "https://t.me",
  },
  {
    name: "Ариет",
    role: "UI / UX Designer",
    phone: "+996 224 210 811",
    whatsapp: "https://wa.me/996000000000",
    instagram: "https://instagram.com",
    telegram: "https://t.me",
  },
  {
    name: "Сталбек",
    role: "Frontend Developer",
    phone: "+996 XXX XXX XXX",
    whatsapp: "https://wa.me/996000000000",
    instagram: "https://instagram.com",
    telegram: "https://t.me",
  },
];

export default function AboutUs() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="about-page">

      <h1 className="about-title">Команда Seniors</h1>

      <div className="team-grid">
        {team.map((member) => (
          <div
            key={member.name}
            className="team-card"
            onClick={() => setSelected(member)}
          >
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="member-modal" onClick={() => setSelected(null)}>
          <div className="member-card" onClick={(e) => e.stopPropagation()}>

            <h2>{selected.name}</h2>
            <p>{selected.role}</p>

            <div className="member-contact">
              <FaPhone /> {selected.phone}
            </div>

            <div className="member-social">

              <a href={selected.whatsapp} target="_blank">
                <FaWhatsapp /> WhatsApp
              </a>

              <a href={selected.instagram} target="_blank">
                <FaInstagram /> Instagram
              </a>

              <a href={selected.telegram} target="_blank">
                <FaTelegram /> Telegram
              </a>

            </div>

            <button className="close-btn" onClick={() => setSelected(null)}>
              Закрыть
            </button>

          </div>
        </div>
      )}

    </div>
  );
}