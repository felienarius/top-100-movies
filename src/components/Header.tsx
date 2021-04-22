import "./Header.css";
function Header() {
  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="nav-left">
          <a href="_blank" className="nav-link logo active">
            Top&nbsp;100&nbsp;iTunes&nbsp;Movies
          </a>
        </div>
        <div className="nav-right">
          <a href="_blank" className="nav-link favourites">
            Favourites
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
