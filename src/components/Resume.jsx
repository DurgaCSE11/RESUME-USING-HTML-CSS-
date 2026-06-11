import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 }
};

const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

const Resume = () => {
  return (
    <motion.div 
      className="page-section"
      initial="initial" animate="in" exit="out"
      variants={pageVariants} transition={pageTransition}
    >
      <h2 className="section-title">Resume</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
        
        {/* Experience Section */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent)' }}>✦</span> Experience
          </h3>
          <div className="timeline">
            
            <div className="timeline-item">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Secretary - Sensors Council</h4>
              <p style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>
                IEEE VSSUT, Burla Student Branch | May 2026 - Present
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                Skills: Leadership, Public Speaking.
              </p>
            </div>

            <div className="timeline-item">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Member of Computer Science Society</h4>
              <p style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>
                IEEE VSSUT, Burla Student Branch | Feb 2026 - Present
              </p>
            </div>

            <div className="timeline-item">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Member of Management</h4>
              <p style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>
                IEEE VSSUT SB | Feb 2026 - Present
              </p>
            </div>

          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent)' }}>✦</span> Education
          </h3>
          <div className="timeline">
            
            <div className="timeline-item">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>B.Tech - Computer Science and Engineering</h4>
              <p style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>
                VSSUT, Burla | Aug 2025 - Aug 2029
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                Grade (CGPA): 9.58 (1st Year). Skills: C, HTML.
              </p>
            </div>

            <div className="timeline-item">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Intermediate (+2, Science PCMB)</h4>
              <p style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>
                Kendriya Vidyalaya | Grade: 95.6%
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                Skills: Leadership, Public Speaking.
              </p>
            </div>

            <div className="timeline-item">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Matriculation</h4>
              <p style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>
                Chinmaya Vidyalaya | Grade: 96.8%
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                Skills: C++, Communication.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Licenses & Certifications */}
      <div style={{ marginTop: '50px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: 'var(--accent)' }}>✦</span> Licenses & Certifications
        </h3>
        <div className="grid-2">
          
          <div className="glass-card">
            <h4 style={{ marginBottom: '10px' }}>"Low Power VLSI Design" Webinar</h4>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '10px' }}>IEEE VSSUT, BURLA STUDENT BRANCH</p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Issued Apr 2026</p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Credential ID: IEEE-VLSI-032</p>
          </div>

          <div className="glass-card">
            <h4 style={{ marginBottom: '10px' }}>ThingQbator's HTML-CSS Course</h4>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '10px' }}>Nasscom Foundation</p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Issued Feb 2026</p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Skills: HTML, CSS</p>
          </div>

        </div>
      </div>

    </motion.div>
  );
};

export default Resume;
