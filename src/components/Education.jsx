import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, GraduationCap, Certificate } from '@phosphor-icons/react';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  const { education } = portfolioData;

  const renderIcon = (type) => {
    switch (type) {
      case 'monitor-play': return <MonitorPlay size={40} weight="light" className="edu-icon" />;
      case 'graduation-cap': return <GraduationCap size={40} weight="light" className="edu-icon" />;
      case 'certificate': return <Certificate size={40} weight="light" className="edu-icon" />;
      default: return <GraduationCap size={40} weight="light" className="edu-icon" />;
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="education section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Education
        </motion.h2>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div 
              className="glass-card edu-card" 
              key={edu.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              variants={itemVariants}
            >
              {renderIcon(edu.iconType)}
              <h3>{edu.degree}</h3>
              <span className="university">{edu.university}</span>
              <span className="date">{edu.date}</span>
              {edu.concepts && (
                <div className="edu-concepts">
                  {edu.concepts.map((concept, i) => (
                    <span key={i} className="concept-tag">{concept}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
