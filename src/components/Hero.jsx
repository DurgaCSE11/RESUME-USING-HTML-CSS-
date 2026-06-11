import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="label-text">WHO I AM</span>
        
        <h1 className="giant-text">
          DURGA PRASAD <br />
          <span className="dim">MAHAPATRA</span>
        </h1>

        <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-dim)', marginBottom: '40px' }}>
          Student at VSSUT. I build logical solutions and efficient code structures to make the digital journey effortless.
        </p>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">
            View Projects <ChevronRight size={18} />
          </a>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a href="https://github.com/DurgaCSE11" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/durga-prasad-mahapatra-63393437b/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:durgaprasadmahapatra21@gmail.com" style={{ color: 'var(--text-main)' }}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{ marginTop: '80px', borderTop: '1px solid var(--card-border)', paddingTop: '40px', display: 'flex', gap: '30px', flexWrap: 'wrap' }}
      >
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginRight: '20px' }}>
          Computer Science Undergraduate @ VSSUT Burla
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span style={{ padding: '4px 12px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Code size={14} /> C Programming
          </span>
          <span style={{ padding: '4px 12px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Database size={14} /> MySQL
          </span>
          <span style={{ padding: '4px 12px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={14} /> Web Dev
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
