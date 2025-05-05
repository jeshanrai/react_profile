import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";

export default function PortfolioUI() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const transitionConfig = {
    duration: 1.2,
    ease: [0.4, 0, 0.2, 1],
    delay: 0.6
  };

  const introTextTransition = {
    delay: 0.2,
    duration: 1,
    ease: [0.4, 0, 0.2, 1]
  };

  const imageTransition = {
    delay: 0.6,
    duration: 1.2,
    ease: [0.4, 0, 0.2, 1]
  };

  return (
    <div className="container">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <motion.h1
              className="intro-title"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -150, opacity: 0 }}
              transition={introTextTransition}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.div
              className="intro-image"
              initial={{ scale: 1 }}
              animate={{ scale: 0.3, x: -430, y: -210 }}
              transition={imageTransition}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          className="flex-container"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transitionConfig}
        >
          <motion.div
            className="sidebar"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transitionConfig}
          >
            <div className="avatar" />
            <h1 className="title">Richard Hanrick</h1>
            <p className="badge">Web Developer</p>

            <div className="info">
              <div><span>📧</span> richard@example.com</div>
              <div><span>📱</span> +1 (213) 352-2796</div>
              <div><span>🎂</span> June 28, 1982</div>
            </div>
          </motion.div>

          <motion.div
            className="main-content"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionConfig}
          >
            <div className="header">
              <h2 className="title">About Me</h2>
              <div className="navbar">
                <button className="active">About</button>
                <button>Resume</button>
                <button>Portfolio</button>
                <button>Blog</button>
                <button>Contact</button>
              </div>
            </div>

            <p className="description">
              I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
              I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <p className="description">
              My job is to build your website so that it is functional and user-friendly but at the same time attractive.
              Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use.
              My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
            </p>

            <h3 className="subtitle">What I'm Doing</h3>
            <div className="cards">
              <div className="card">
                <h4>Web Design</h4>
                <p>The most modern and high-quality design made at a professional level.</p>
              </div>
              <div className="card">
                <h4>Web Development</h4>
                <p>High-quality development of sites at the professional level.</p>
              </div>
              <div className="card">
                <h4>Mobile Apps</h4>
                <p>Professional development of applications for iOS and Android.</p>
              </div>
              <div className="card">
                <h4>Photography</h4>
                <p>I make high-quality photos of any category at a professional level.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
