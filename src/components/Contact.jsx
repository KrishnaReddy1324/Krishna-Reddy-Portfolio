import React from 'react';
import { motion } from 'framer-motion';
import { PaperPlaneTilt, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="contact section-padding">
      <motion.div 
        className="container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="contact-content text-center glass-card">
          <p className="contact-desc">
            Currently not seeking new opportunities, but always open to insightful discussions and
            collaborations in Cloud Computing, Artificial Intelligence, and Software Testing—including
            Automation Testing, Manual Testing, API Testing, and tools such as Selenium and Postman. Feel
            free to reach out at <strong>{personalInfo.email}</strong>, and I’ll respond at the earliest.
          </p>
          
          <motion.a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello <PaperPlaneTilt size={20} weight="bold" />
          </motion.a>

          <div className="social-links">
            <motion.a 
              href={personalInfo.github} 
              aria-label="GitHub" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -5, color: '#f0f0f5' }}
            >
              <GithubLogo size={32} weight="fill" />
            </motion.a>
            <motion.a 
              href={personalInfo.linkedin} 
              aria-label="LinkedIn" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -5, color: '#0077b5' }}
            >
              <LinkedinLogo size={32} weight="fill" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
