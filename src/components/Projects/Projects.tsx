import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="projects-header">
        <div>
          <span>TRABALHOS RECENTES</span>
          <h2>Projetos em Destaque</h2>
        </div>

        <button>Ver Todos →</button>
      </div>

      <div className="projects-grid">
        <ProjectCard
          number="1"
          title="Portfolio"
          description="Plataforma moderna de e-commerce com carrinho, pagamentos e dashboard."
          tech={["React", "Node.js", "MongoDB"]}
        />

        <ProjectCard
          number="2"
          title="Dashboard Analytics"
          description="Dashboard interativo com gráficos e relatórios dinâmicos."
          tech={["Next.js", "TypeScript", "Tailwind"]}
        />

        <ProjectCard
          number="3"
          title="App de Tarefas"
          description="Aplicativo para gerenciamento de tarefas e produtividade."
          tech={["React", "Firebase", "CSS"]}
        />
      </div>
    </section>
  );
}