
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function Education() {
  return (
    <section className="education-section" id="education">
      <motion.div
        className="education-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="education-content">
          <span className="section-tag">MY ACADEMIC JOURNEY</span>

          <h2>
            Education & <span>Qualifications</span>
          </h2>

          <p className="education-description">
            My academic journey has helped me build a foundation in
            computer applications, programming, and software development.
          </p>

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={27} />
            </div>

            <div className="education-details">
              <span className="education-status">
                <CheckCircle2 size={14} />
                Completed
              </span>

              <h3>Master of Computer Applications</h3>
              <p className="education-college">
                Mahajana PG Centre
              </p>

              <div className="education-meta">
                <span>
                  <MapPin size={15} />
                  Mysuru, Karnataka
                </span>

                <span>
                  <Award size={15} />
                  University of Mysore
                </span>
              </div>

              <div className="education-divider" />

              <p className="education-focus">
                <BookOpen size={17} />
                Focus: Computer Science, Programming and
                Application Development
              </p>
            </div>
          </div>
        </div>

        <div className="education-visual">
          <div className="education-visual-card">
            <div className="visual-glow" />

            <div className="graduation-icon">
              <GraduationCap size={105} strokeWidth={1.2} />
            </div>

            <div className="visual-line" />

            <h3>Learning Today</h3>
            <h3 className="visual-highlight">Building Tomorrow</h3>

            <p>
              Knowledge is the foundation of every achievement.
            </p>

            <div className="visual-bottom">
              <span>EDUCATION</span>
              <span>01 / 01</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
