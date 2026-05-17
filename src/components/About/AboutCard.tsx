interface Props {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export default function AboutCard({ icon, title, text }: Props) {
  return (
    <div className="about-card">
      <div className="icon">{icon}</div>

      <h4>{title}</h4>

      <p>{text}</p>
    </div>
  );
}