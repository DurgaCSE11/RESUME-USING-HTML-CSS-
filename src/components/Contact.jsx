import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 }
};

const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

const Contact = () => {
  return (
    <motion.div 
      className="page-section"
      initial="initial" animate="in" exit="out"
      variants={pageVariants} transition={pageTransition}
    >
      <h2 className="section-title">Contact</h2>

      <div className="grid-2">
        
        {/* Contact Info */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Let's Connect</h3>
          <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="glass-card" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
            <div style={{ background: 'rgba(0,229,255,0.1)', padding: '15px', borderRadius: '50%' }}>
              <Mail size={24} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>Email</h4>
              <p style={{ fontSize: '1.1rem' }}>durgaprasadmahapatra21@gmail.com</p>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
            <div style={{ background: 'rgba(0,229,255,0.1)', padding: '15px', borderRadius: '50%' }}>
              <MapPin size={24} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>Location</h4>
              <p style={{ fontSize: '1.1rem' }}>Odisha, India</p>
            </div>
          </div>
        </div>

        {/* Placeholder Form */}
        <div className="glass-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ padding: '15px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '8px', color: 'var(--text-main)', fontSize: '1rem' }} 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={{ padding: '15px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '8px', color: 'var(--text-main)', fontSize: '1rem' }} 
            />
            <textarea 
              placeholder="Your Message" 
              rows="5"
              style={{ padding: '15px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '8px', color: 'var(--text-main)', fontSize: '1rem', resize: 'vertical' }} 
            ></textarea>
            <button className="btn-primary" style={{ border: 'none', justifyContent: 'center' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;
