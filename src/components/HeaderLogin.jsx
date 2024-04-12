import logoImg from "../assets/logo.jpg";

export default function HeaderLogin() {
  return (
    <header className="headercss">
      <img className="header-img" src={logoImg} alt="A form and a pencil" />
      <h1 className="header-h1">Регистрационная форма</h1>
    </header>
  );
}
