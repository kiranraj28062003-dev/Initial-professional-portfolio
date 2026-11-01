
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Dumbbell,
  Film,
  ExternalLink,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "CareerPilot AI",
    subtitle: "AI Resume & Career Assistant",
    description:
      "A full-stack AI-powered resume analysis platform built with FastAPI and React. It extracts information from PDF and DOCX resumes, identifies skills, evaluates resume quality, analyzes ATS compatibility and matches resumes against job descriptions.",
    icon: BrainCircuit,
    category: "AI / Python Development",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Machine Learning",
      "REST API",
    ],
    highlights: [
      "PDF and DOCX resume text extraction",
      "Automated skill extraction",
      "Resume quality scoring",
      "ATS analysis and job description matching",
    ],
    github:
      "https://github.com/kiranraj28062003-dev/AI-Resume-Career-Assistant",
  },
  {
    number: "02",
    title: "AI Gym Trainer",
    subtitle: "Real-Time Workout Pose Detection",
    description:
      "A Python-based computer vision application that uses OpenCV and MediaPipe to analyze workout movements, detect exercise poses, count repetitions and provide audio feedback to help users improve exercise form.",
    icon: Dumbbell,
    category: "Computer Vision / AI",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "SQLite",
      "CNN",
      "Matplotlib",
    ],
    highlights: [
      "Real-time human pose detection",
      "Exercise repetition tracking",
      "Audio-based form correction feedback",
      "Workout history and progress tracking",
    ],
    github:
      "https://github.com/kiranraj28062003-dev/ai-gym-pose-trainer",
  },
  {
    number: "03",
    title: "Movie Recommendation System",
    subtitle: "Personalized Movie Recommendations",
    description:
      "A Flask-based movie recommendation application that uses content-based filtering to suggest similar movies. Users can search for movies and discover recommendations based on movie features.",
    icon: Film,
    category: "Python / Machine Learning",
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "SQLite",
      "Pandas",
      "Pickle",
    ],
    highlights: [
      "Content-based movie recommendations",
      "CountVectorizer and Cosine Similarity",
      "Movie search and genre-based discovery",
      "SQLite database integration",
    ],
    github:
      "https://github.com/kiranraj28062003-dev/movie-recommendation-system-",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">MY WORK</span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            Practical projects where I apply Python, AI and
            software development concepts to solve real-world problems.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <div className="project-top">
                  <div className="project-icon">
                    <ProjectIcon size={30} />
                  </div>

                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                <span className="project-category">
                  <Sparkles size={14} />
                  {project.category}
                </span>

                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-highlights">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="project-highlight"
                    >
                      <span className="highlight-dot" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  <div className="tech-heading">
                    <Code2 size={16} />
                    TECHNOLOGIES
                  </div>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Code2 size={17} />
                    View GitHub Repository
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
