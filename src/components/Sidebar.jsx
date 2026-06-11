import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, FileText, Briefcase, Mail, Github, Linkedin } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-img-container">
          <img src="/profile.jpeg" alt="Durga Prasad Mahapatra" />
        </div>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Durga Prasad</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Computer Science Undergrad</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
          <User size={20} /> About
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <FileText size={20} /> Resume
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <Briefcase size={20} /> Portfolio
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <Mail size={20} /> Contact
        </NavLink>
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <a href="https://github.com/DurgaCSE11" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/durga-prasad-mahapatra-63393437b/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
          <Linkedin size={20} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
