import React from 'react';
import { motion } from 'framer-motion';

const academics = [
  {
    year: 'First Year',
    degree: 'B.Tech CSE - VSSUT Burla',
    grade: 'Grade: 9.75 CGPA (1st Semester)',
  },
  {
    year: '10+2 (Science)',
    degree: 'PM SHRI KV Rayagada',
    grade: 'Grade: 95.6%',
  },
  {
    year: 'Matriculation',
    degree: 'Chinmaya Vidylaya, Therubali',
    grade: 'Grade: 96.2%',
  }
];

const certificates = [
  {
    title: 'HTML and CSS',
  }
];

const Academics = () => {
  return (
    <section id="academics">
      <div className="section-header" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '20px' }}>
        <h2 className="section-title">Education & Certificates <span style={{ color: 'var(--accent)' }}>/</span></h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        {academics.map((item, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            style={{ padding: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div style={{ flex: '1', minWidth: '150px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'bold' }}>{item.year}</span>
            </div>
            <div style={{ flex: '3', minWidth: '250px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{item.degree}</h3>
              <p style={{ color: 'var(--text-dim)' }}>{item.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {certificates.length > 0 && (
        <>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-main)' }}>Certificates</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-card"
                style={{ padding: '20px 30px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{cert.title}</h4>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Academics;
