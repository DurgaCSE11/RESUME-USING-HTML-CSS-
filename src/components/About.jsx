import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const About = () => {
  return (
    <motion.div 
      className="page-section"
      initial="initial" animate="in" exit="out"
      variants={pageVariants} transition={pageTransition}
    >
      <h2 className="section-title">About Me</h2>
      
      <div className="grid-2" style={{ alignItems: 'flex-start' }}>
        <div style={{ fontSize: '1.05rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '20px' }}>
            Currently pursuing my B.Tech in Computer Science and Engineering at Veer Surendra Sai University of Technology (VSSUT), Burla. I am actively building strong foundations in programming and web development.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Focused on creative problem-solving and logical thinking, with expertise ranging from C/C++ to modern Web Development (HTML, CSS, JS, React) and basics of MySQL & Python.
          </p>
          <p>
            Motivated to continuously expand my technical expertise, adapt to modern technologies, and contribute to innovative and impactful projects.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '25px' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: 'var(--accent)' }}>Personal Info</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--card-border)', paddingBottom: '10px' }}>
              <span style={{ color: 'var(--text-dim)' }}>Location</span>
              <span>Odisha, India</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--card-border)', paddingBottom: '10px' }}>
              <span style={{ color: 'var(--text-dim)' }}>Email</span>
              <span>durgaprasadmahapatra21@gmail.com</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--card-border)', paddingBottom: '10px' }}>
              <span style={{ color: 'var(--text-dim)' }}>Degree</span>
              <span>B.Tech CSE (Current)</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-dim)' }}>Freelance</span>
              <span style={{ color: 'var(--accent)' }}>Available</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
