interface Props {
  number: string;
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({
  number,
  title,
  description,
  tech,
}: Props) {
  return (
    <div className="project-card">
      <div className="project-image">
        <span>{number}</span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}