interface Skill {
  name: string;
  level: number;
}

interface Props {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

export default function SkillCategory({
  icon,
  title,
  skills,
}: Props) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">
          {icon}
        </div>

        <h3>{title}</h3>
      </div>

      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-info">
              <span>{skill.name}</span>

              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}