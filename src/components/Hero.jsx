
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero container" id="home">
      {/* LEFT CONTENT */}
      <div className="hero-content">
        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="status-dot"></span>
          Open to Fresher Opportunities
        </motion.div>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          KIRAN <span className="gradient-text">MP.</span>
        </motion.h1>

        <motion.h2
          className="hero-role"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Python Developer | AI Application Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          MCA graduate focused on Python development,
          backend engineering and AI-powered applications.
          Experienced in building projects using Python,
          FastAPI, React, Flask and SQL. Passionate about
          solving practical problems through technology and
          continuously growing as a software developer.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#projects" className="hero-primary-button">
            View My Projects
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="hero-secondary-button">
            Contact Me
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://github.com/kiranraj28062003-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/kiran-raj-00150435a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <div className="hero-scroll">
          <ArrowDown size={15} />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>

      {/* RIGHT PROFILE IMAGE */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-image-frame">
          <img
            src="/profile.png"
            alt="Kiran MP - Python Developer"
            className="hero-profile-image"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="profile-placeholder">
            <span>K</span>
            <small>PROFILE PHOTO</small>
          </div>
        </div>

        <div className="hero-image-caption">
          Python Developer | MCA Graduate
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
