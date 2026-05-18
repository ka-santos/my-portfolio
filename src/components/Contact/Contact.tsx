import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-title">
        <span>VAMOS CONVERSAR</span>

        <h2>Entre em Contato</h2>

        <p>
          Tem um projeto em mente ou quer bater um papo?
          Ficarei feliz em ouvir você!
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>Email</span>
              <h4>karen.carvalho.r@gmail.com</h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span>Telefone</span>
              <h4>+55 (12) 98313-2113</h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span>Localização</span>
              <h4>São Paulo, Brasil</h4>
            </div>
          </div>

          <div className="contact-blur"></div>
        </div>

        {/* RIGHT */}
        <form className="contact-form">
          <div className="input-group">
            <label>Nome</label>

            <input
              type="text"
              placeholder="Seu nome"
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="seu@email.com"
            />
          </div>

          <div className="input-group">
            <label>Mensagem</label>

            <textarea
              placeholder="Sua mensagem..."
            ></textarea>
          </div>

          <button type="submit">
            Enviar Mensagem

            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}