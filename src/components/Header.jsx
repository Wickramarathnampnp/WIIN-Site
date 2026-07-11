import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

export default function Header({ overlay = false }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`site-header ${overlay ? "site-header--overlay" : "site-header--solid"}`}>
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" aria-label="WIIN home">
          <img src={logo} alt="WIIN Institute of Technology" />
        </NavLink>

        <button
          className="site-header__menu-button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav id="main-navigation" className={`site-header__nav ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `site-header__link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
