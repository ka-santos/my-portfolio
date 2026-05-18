import "./Skills.css";

import {
  FaGlobe,
  FaPalette,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaWrench,
} from "react-icons/fa";

import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section className="skills-section" id="habilidades">
      <div className="skills-title">
        <span>O QUE EU SEI</span>

        <h2>Habilidades e Tecnologias</h2>

        <p>
          Ao longo dos anos, desenvolvi expertise em diversas tecnologias.
          Aqui está um resumo das minhas principais habilidades técnicas.
        </p>
      </div>

      <div className="skills-grid">
        <SkillCategory
          icon={<FaGlobe />}
          title="Front-end"
          skills={[
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 88 },
            { name: "JavaScript", level: 95 },
            { name: "HTML5", level: 98 },
            { name: "CSS3", level: 95 },
          ]}
        />

        <SkillCategory
          icon={<FaPalette />}
          title="Estilização"
          skills={[
            { name: "Tailwind CSS", level: 92 },
            { name: "Sass/SCSS", level: 85 },
            { name: "CSS Modules", level: 88 },
            { name: "Styled Components", level: 80 },
            { name: "Framer Motion", level: 75 },
          ]}
        />

        <SkillCategory
          icon={<FaServer />}
          title="Back-end"
          skills={[
            { name: "Node.js", level: 82 },
            { name: "Express", level: 80 },
            { name: "REST APIs", level: 88 },
            { name: "GraphQL", level: 70 },
            { name: "Python", level: 65 },
          ]}
        />

        <SkillCategory
          icon={<FaDatabase />}
          title="Banco de Dados"
          skills={[
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "MySQL", level: 82 },
          ]}
        />

        <SkillCategory
          icon={<FaMobileAlt />}
          title="Mobile"
          skills={[
            { name: "React Native", level: 78 },
            { name: "Expo", level: 80 },
          ]}
        />

        <SkillCategory
          icon={<FaWrench />}
          title="Ferramentas"
          skills={[
            { name: "Git & GitHub", level: 92 },
            { name: "Figma", level: 88 },
            { name: "Vercel", level: 85 },
          ]}
        />
      </div>
    </section>
  );
}