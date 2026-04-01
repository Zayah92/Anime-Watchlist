import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav__info">
    

      <ul className="nav__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/home">Watchlist</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <img src="/assets/logo.jpeg" className="nav__logo" alt="logo" />
      </ul>
      <h1>Anime Watchlist</h1>
      <p className="header__para">Several options of anime to add to your wathlist! 
        Find the most loved titles here</p>
    </nav>
  );
}

export default Navbar;