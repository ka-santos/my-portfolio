import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#inicio">K.S</a>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>


    </header>
  )
}