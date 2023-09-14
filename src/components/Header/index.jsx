import "./style.css";

function Header() {
  return (
    <header>
      <div>
        <a href="/">
          <img src="/img/logo.svg" alt="logo" id="logo" />
        </a>
      </div>

      <div>
        <a href="/" className="userName">
          ArticaDev
          <img src="/img/artica.svg" alt="userIcon" id="userIcon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
