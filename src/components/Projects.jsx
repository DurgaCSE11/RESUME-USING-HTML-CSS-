import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Medical Store System',
    description: 'Logic-driven management built with C and Web Tech.',
    link: 'https://github.com/DurgaCSE11/MEDICAL-STORE-MANAGEMENT-SYSTEM.git'
  },
  {
    id: '02',
    title: 'Scientific Calculator',
    description: 'Advanced mathematical processing using C.',
    link: 'https://github.com/DurgaCSE11/C-CODE-on-SCIENTIFIC-CALCULATOR.git'
  },
  {
    id: '03',
    title: 'CGPA Calculator',
    description: 'Performance tracking system built with C++.',
    link: 'https://github.com/DurgaCSE11/CGPA-CALCULATOR.git'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--card-border)', paddingBottom: '20px' }}>
        <h2 className="section-title">Selected Works <span style={{ color: 'var(--accent)' }}>/</span></h2>
        <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem', marginBottom: '10px' }}>(03)</span>
      </div>

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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>{project.id}.</span>
              <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                <ArrowUpRight size={20} color="var(--accent)" />
              </div>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
