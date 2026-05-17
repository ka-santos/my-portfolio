import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Portfolio</div>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="">Projetos</a>
        <a href="">Habilidades</a>
        <a href="">Contato</a>
      </nav>

      <button className="themeButton">
        ○
      </button>
    </header>
  )
}