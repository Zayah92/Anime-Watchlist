import { Link } from "react-router-dom";

function Footer() {
  return (

    <div className="footer-container">
      <img src="/assets/logo.jpeg" alt="" className="footer__logo " />
        <ul className="footer__links link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/home">Watchlist</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    
      </ul>
</div>
  );
}

export default Footer;