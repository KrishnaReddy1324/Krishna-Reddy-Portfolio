import React from 'react';
import { motion } from 'framer-motion';
import { SealCheck, ArrowSquareOut } from '@phosphor-icons/react';
import { portfolioData } from '../data/portfolioData';
import './Education.css'; // Reusing education styles for the grid

const Certifications = () => {
  const { certifications } = portfolioData;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="certifications" className="certifications section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Cloud Certifications
        </motion.h2>
        
        <div className="education-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              className="glass-card edu-card" 
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              variants={itemVariants}
            >
              {cert.logo ? (
                <img src={cert.logo} alt={cert.provider} className="cert-logo" />
              ) : (
                <SealCheck size={40} weight="light" className="edu-icon" />
              )}
              <h3>{cert.name}</h3>
              <span className="university">{cert.provider}</span>
              <a href={cert.url} target="_blank" rel="noreferrer" className="cert-link">
                View Credential <ArrowSquareOut weight="bold" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
