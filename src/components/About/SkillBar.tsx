interface Props {
  title: string;
  percentage: number;
}

export default function SkillBar({ title, percentage }: Props) {
  return (
    <div className="skill">
      <div className="skill-info">
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}