import crowdfundLogo from "../assets/images/logo.svg";
import hamburguerIcon from "../assets/images/icon-hamburger.svg";
import closeMenuIcon from "../assets/images/icon-close-menu.svg";
import { useState } from "react";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const menuIcon = !showNavbar ? hamburguerIcon : closeMenuIcon;

  return (
    <header className="page-header">
      <div className="page-header__button-container">
        <img src={crowdfundLogo} alt="Crowdfund Logo" />
        <button onClick={() => setShowNavbar((showNavbar) => !showNavbar)}>
          <img src={menuIcon} alt="" />
        </button>
      </div>
      <nav className={showNavbar ? "show" : null}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
