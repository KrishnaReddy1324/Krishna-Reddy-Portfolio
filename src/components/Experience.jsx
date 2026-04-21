import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Where I've Worked
        </motion.h2>
        
        <div className="timeline">
          {experience.map((job, index) => (
            <motion.div 
              className="timeline-item" 
              key={job.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={cardVariants}
            >
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <div className="job-header">
                  <h3>{job.role}</h3>
                  <span className="company">
                    <a href={job.companyUrl} target="_blank" rel="noreferrer">{job.company}</a>
                  </span>
                </div>
                <span className="date">{job.date}</span>
                <ul className="job-details">
                  {job.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
