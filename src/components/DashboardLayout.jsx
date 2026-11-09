import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/school-logo.png";

const links = [
  { to: "/dashboard", label: "Overview", icon: "▦", end: true },
  { to: "/dashboard/students", label: "Students", icon: "♙" },
  { to: "/dashboard/staff", label: "Staff", icon: "♧" },
  { to: "/dashboard/classes", label: "Classes", icon: "▤" },
  { to: "/dashboard/reports", label: "Reports", icon: "▥" },
  { to: "/dashboard/settings", label: "Settings", icon: "⚙" },
];

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const current = links.find((item) => item.to === location.pathname);
  return (
    <div className="dashboard-shell">
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <Link to="/" className="sidebar-brand">
          <img src={logo} alt="Bulinga TSS crest" />
          <span><b>BULINGA TSS</b><small>School Portal</small></span>
        </Link>
        <div className="side-label">WORKSPACE</div>
        <nav className="side-nav">
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setOpen(false)}>
              <span className="side-icon">{item.icon}</span>{item.label}
              {item.end && <span className="side-dot" />}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><span>✦</span><b>Need a hand?</b><p>Contact the school system administrator for support.</p><Link to="/contact">Get support →</Link></div>
          <Link to="/" className="back-home">← Back to website</Link>
        </div>
      </aside>
      {open && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
      <section className="dashboard-main">
        <header className="dash-topbar">
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>
          <div className="breadcrumb">Workspace <span>/</span> <b>{current?.label || "Dashboard"}</b></div>
          <div className="topbar-user"><div className="avatar">A</div><span><b>Administrator</b><small>School admin</small></span></div>
        </header>
        <main className="dash-content"><Outlet /></main>
      </section>
    </div>
  );
}