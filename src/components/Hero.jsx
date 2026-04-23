import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from '@phosphor-icons/react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [profileImg, setProfileImg] = useState('/my photo.png');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="hero" className="hero">
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="name-container">
          <motion.h1
            className="name"
            whileHover={{
              scale: 1.05,
              color: '#2563eb', // matching accent-primary
              textShadow: '0 0 15px rgba(37, 99, 235, 0.6)'
            }}
            transition={{ duration: 0.3 }}
            style={{ cursor: 'default', display: 'inline-block' }}
          >
            {personalInfo.name}
          </motion.h1>
          <div className="hero-avatar-wrapper">
            <img id="hero-img" src={profileImg} alt="Profile" />
            <label htmlFor="hero-photo-upload" className="hero-upload-btn" title="Upload Photo">
              <Camera size={20} weight="bold" />
            </label>
            <input
              type="file"
              id="hero-photo-upload"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </div>
        </motion.div>

        <motion.h2 variants={itemVariants} className="role">
          <span className="text-gradient">{personalInfo.role}</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="summary">
          {personalInfo.summary}
        </motion.p>

        <motion.div variants={itemVariants} className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#experience" className="btn btn-secondary">View Work</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
