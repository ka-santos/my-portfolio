import "./About.css";

import {
  FaCode,
  FaPalette,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

import SkillBar from "./SkillBar";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-title">
        <span>CONHEÇA MAIS</span>
        <h2>Sobre Mim</h2>
      </div>

      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <p>
            Sou um desenvolvedor web apaixonado por criar experiências digitais
            incríveis.
          </p>

          <div className="skills">
            <h3>Habilidades</h3>

            <SkillBar title="React" percentage={90} />
            <SkillBar title="JavaScript" percentage={95} />
            <SkillBar title="TypeScript" percentage={85} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <AboutCard
            icon={<FaCode />}
            title="Desenvolvimento Web"
            text="Criação de aplicações modernas e responsivas."
          />

          <AboutCard
            icon={<FaPalette />}
            title="UI/UX Design"
            text="Interfaces intuitivas e modernas."
          />

          <AboutCard
            icon={<FaRocket />}
            title="Performance"
            text="Aplicações rápidas e otimizadas."
          />

          <AboutCard
            icon={<FaUsers />}
            title="Colaboração"
            text="Trabalho em equipe e comunicação."
          />
        </div>
      </div>
    </section>
  );
}