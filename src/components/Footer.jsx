import React from 'react';

const Footer = () => {
  return (
    <footer style={{ paddingTop: '100px', paddingBottom: '40px', borderTop: '1px solid var(--card-border)', marginTop: '80px' }}>
      <h2 className="giant-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '60px' }}>
        LET'S MAKE IT <br /> <span style={{ color: 'var(--accent)' }}>HAPPEN</span>
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <a href="mailto:durgaprasadmahapatra21@gmail.com" style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Email</a>
          <a href="https://www.linkedin.com/in/durga-prasad-mahapatra-63393437b/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>LinkedIn</a>
          <a href="https://github.com/DurgaCSE11" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>GitHub</a>
        </div>
        
        <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
          © 2026 Durga Prasad Mahapatra
        </div>
      </div>
    </footer>
  );
};

export default Footer;
