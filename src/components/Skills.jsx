
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["FastAPI", "REST APIs", "Node.js Basics"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQLite", "SQL"],
  },
  {
    title: "AI & Computer Vision",
    icon: BrainCircuit,
    skills: ["Machine Learning Basics", "OpenCV", "MediaPipe"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["React", "Vite", "Git", "GitHub", "VS Code"],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">MY EXPERTISE</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills.</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I've explored through learning
            and hands-on project development.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="skill-card-heading">
                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
