import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Code, Database, Globe, Terminal, FileCode } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flexShrink: 0 }}
        >
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--card-border)',
            boxShadow: '0 0 30px var(--accent-glow)',
            background: 'var(--card-bg)'
          }}>
            <img src="/profile.jpeg" alt="Durga Prasad Mahapatra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ flex: 1, minWidth: '300px' }}
        >
          <span className="label-text">WHO I AM</span>
          
          <h1 className="giant-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', margin: '15px 0' }}>
            DURGA PRASAD <br />
            <span className="dim">MAHAPATRA</span>
          </h1>

          <p style={{ maxWidth: '800px', fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '30px', lineHeight: '1.8' }}>
            Currently pursuing a Bachelor of Technology in Computer Science and Engineering at Veer Surendra Sai University of Technology (VSSUT), Burla. 
            I am actively building strong foundations in programming and web development. 
            Currently exploring JavaScript, HTML, and CSS, with a focus on creative problem-solving, logical thinking, and curiosity-driven learning. 
            I am also exploring C++ in depth beyond the foundational knowledge gained during my matriculation along with basics of MySQL. 
            Motivated to continuously expand technical expertise, adapt to modern technologies, and contribute to innovative and impactful projects in the field of computer science.
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
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ marginTop: '60px', borderTop: '1px solid var(--card-border)', paddingTop: '40px', display: 'flex', gap: '30px', flexDirection: 'column' }}
      >
        <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 'bold' }}>
          Computer Science Undergraduate @ VSSUT | Member- CS Society IEEE VSSUT Student Branch
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ padding: '6px 14px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Terminal size={14} /> C Programming
          </span>
          <span style={{ padding: '6px 14px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Code size={14} /> Basic C++
          </span>
          <span style={{ padding: '6px 14px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={14} /> HTML & CSS
          </span>
          <span style={{ padding: '6px 14px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Database size={14} /> Basic MySQL
          </span>
          <span style={{ padding: '6px 14px', border: '1px solid var(--card-border)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileCode size={14} /> Basic Python
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
