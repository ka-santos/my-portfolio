import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <span className="miniText">OLÁ, EU SOU</span>
        

        <h1>
          Karen dos Santos<br />
          Desenvolvedora Web <br />
        </h1>

        <p>
          Criando experiências digitais únicas com foco em design elegante,
          performance e acessibilidade.
        </p>

        <div className="heroButtons">
          <button className="primaryButton">Ver Projetos</button>

          <button className="secondaryButton">Entrar em Contato</button>
        </div>

        <div className="socials">
          <span>Me encontre em:</span>

          <div className="icons">
            <FaGithub />
            <FaLinkedin />
            <FaEnvelope />
          </div>
        </div>
      </div>

      <div className="heroImage">
        <div className="circle">
          <div className="innerCircle">
            <span>KS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
