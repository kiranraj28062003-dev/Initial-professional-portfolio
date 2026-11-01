
import { motion } from "framer-motion";
import { GraduationCap, Code2, Target } from "lucide-react";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">ABOUT ME</p>
          <h2 className="section-title">
            A little about <span className="gradient-text">myself.</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              Building practical solutions through
              <span className="gradient-text"> Python & Technology.</span>
            </h3>

            <p>
              I'm Kiran MP, an MCA graduate and aspiring Python Developer
              interested in backend development, artificial intelligence
              and software engineering.
            </p>

            <p>
              I enjoy turning ideas into practical applications. Through
              hands-on projects, I've explored Python, FastAPI, React,
              SQL, computer vision and AI-powered solutions.
            </p>

            <p>
              My goal is to join a professional development team, contribute
              to real-world projects and continuously improve my technical
              and problem-solving skills.
            </p>

            <a href="#contact" className="about-button">
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-card">
              <div className="about-card-icon">
                <GraduationCap size={23} />
              </div>
              <div>
                <h4>Education</h4>
                <p>Master of Computer Applications (MCA)</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Code2 size={23} />
              </div>
              <div>
                <h4>Technical Focus</h4>
                <p>Python, Backend Development & AI Applications</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Target size={23} />
              </div>
              <div>
                <h4>Career Goal</h4>
                <p>Python Developer / Software Engineer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
