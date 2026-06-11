import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="grid-2" style={{ alignItems: 'center', width: '100%' }}>
        
        {/* Left Column: Image Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '1/1',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px var(--shadow-color)',
            border: '1px solid var(--card-border)'
          }}>
            <img 
              src="/profile.jpeg" 
              alt="Durga Prasad Mahapatra" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            {/* Cyan overlay tint on hover (optional) */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(to top, rgba(0,229,255,0.2), transparent)',
              pointerEvents: 'none'
            }}></div>
          </div>
        </motion.div>

        {/* Right Column: Text & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
            Computer Science Undergraduate
          </h4>
          
          <h1 className="giant-text">
            Durga Prasad <br />
            <span className="dim">Mahapatra</span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-dim)', marginTop: '20px', marginBottom: '30px', lineHeight: '1.8' }}>
            Currently pursuing my B.Tech in CSE at VSSUT, Burla. I am actively building strong foundations in programming and web development. Focused on creative problem-solving and logical thinking, with expertise ranging from C/C++ to modern Web Development (HTML, CSS, JS, React) and basics of MySQL & Python.
          </p>

          <ul className="info-list">
            <li className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">durgaprasadmahapatra21@gmail.com</span>
            </li>
            <li className="info-item">
              <span className="info-label">Education</span>
              <span className="info-value">VSSUT, Burla</span>
            </li>
            <li className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Odisha, India</span>
            </li>
            <li className="info-item">
              <span className="info-label">Member</span>
              <span className="info-value">IEEE VSSUT Student Branch</span>
            </li>
          </ul>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
            <a href="#projects" className="btn-primary">
              View Portfolio <ChevronRight size={18} />
            </a>
            
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <a href="https://github.com/DurgaCSE11" target="_blank" rel="noreferrer" style={{ background: 'var(--card-bg)', padding: '12px', borderRadius: '6px', border: '1px solid var(--card-border)' }}>
                <Github size={20} color="var(--text-main)" />
              </a>
              <a href="https://www.linkedin.com/in/durga-prasad-mahapatra-63393437b/" target="_blank" rel="noreferrer" style={{ background: 'var(--card-bg)', padding: '12px', borderRadius: '6px', border: '1px solid var(--card-border)' }}>
                <Linkedin size={20} color="var(--text-main)" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
