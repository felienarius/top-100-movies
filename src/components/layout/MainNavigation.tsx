import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <header className="nav">
      <nav className="wrapper">
        <NavLink exact to="/" className="nav-link">
          Top&nbsp;100&nbsp;iTunes&nbsp;Movies
        </NavLink>
        <NavLink to="favorites" className="nav-link nav-right">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}

export default MainNavigation;
