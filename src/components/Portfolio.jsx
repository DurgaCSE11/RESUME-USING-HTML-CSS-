import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 }
};

const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

const projects = [
  {
    id: '01',
    title: 'Simple Calculator (Web)',
    description: 'Built using HTML, CSS, and JS.',
    link: 'https://github.com/DurgaCSE11/MEDICAL-STORE-MANAGEMENT-SYSTEM.git'
  },
  {
    id: '02',
    title: 'Medical Store Management (Web)',
    description: 'Management system using HTML, CSS, and JS.',
    link: 'https://github.com/DurgaCSE11/MEDICAL-STORE-MANAGEMENT-SYSTEM.git'
  },
  {
    id: '03',
    title: 'Medical Store Management (C)',
    description: 'Logic-driven management built with C Language.',
    link: 'https://github.com/DurgaCSE11/C-CODE-on-MEDICAL-STORE-MANAGEMENT-SYSTEM.git'
  },
  {
    id: '04',
    title: 'CGPA Calculator',
    description: 'Performance tracking system built with C++.',
    link: 'https://github.com/DurgaCSE11/CGPA-CALCULATOR.git'
  },
  {
    id: '05',
    title: 'Simple Calculator (C)',
    description: 'Basic calculator built using C.',
    link: 'https://github.com/DurgaCSE11/C-CODE-on-SIMPLE-CALCULATOR.git'
  },
  {
    id: '06',
    title: 'Scientific Calculator',
    description: 'Advanced mathematical processing using C.',
    link: 'https://github.com/DurgaCSE11/C-CODE-on-SCIENTIFIC-CALCULATOR.git'
  }
];

const Portfolio = () => {
  return (
    <motion.div 
      className="page-section"
      initial="initial" animate="in" exit="out"
      variants={pageVariants} transition={pageTransition}
    >
      <h2 className="section-title">Portfolio</h2>

      <div className="grid-3">
        {projects.map((project, index) => (
          <motion.a 
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            className="glass-card"
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>{project.id}.</span>
              <div style={{ padding: '8px', background: 'rgba(0,229,255,0.1)', borderRadius: '50%' }}>
                <ArrowUpRight size={20} color="var(--accent)" />
              </div>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
