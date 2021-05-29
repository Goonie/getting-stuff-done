import User from "components/header/User";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <h1>Getting Stuff Done</h1>
      <User />
    </header>
  );
}

export default Header;
