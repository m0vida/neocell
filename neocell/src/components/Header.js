import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Neo Cell | Alexandros Kapellas</h1>
      <p>Azure | Automation | Cloud & DevOps Engineer | Kubernetes</p>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/" style={navLinkStyle}>Home</Link> |{" "}
        <Link to="/about" style={navLinkStyle}>About</Link> |{" "}
        <Link to="/projects" style={navLinkStyle}>Projects</Link> |{" "}
        <Link to="/contact" style={navLinkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 0.5rem',
};

export default Header;
