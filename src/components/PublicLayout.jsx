import { NavLink, Link, Outlet } from "react-router-dom";
import logo from "../assets/school-logo.png";

export default function PublicLayout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <img src={logo} alt="Bulinga TSS crest" />
          <span><strong>BULINGA TSS</strong><small>Management System</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link className="nav-cta" to="/dashboard">Dashboard <span>↗</span></Link>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-brand"><img src={logo} alt="" /><span>Bulinga Technical Secondary School</span></div>
        <p>Building Excellence in ICT and Business Education</p>
        <small>© {new Date().getFullYear()} Bulinga TSS. All rights reserved.</small>
      </footer>
    </div>
  );
}