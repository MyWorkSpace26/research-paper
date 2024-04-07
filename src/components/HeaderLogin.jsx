import logoImg from "../assets/logo.jpg";

export default function HeaderLogin() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>Регистрационная форма</h1>
    </header>
  );
}