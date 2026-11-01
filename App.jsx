
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">
            <h3>KIRAN<span> MP.</span></h3>
            <p>
              Aspiring Software Developer | Python | FastAPI | React
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="mailto:kiranraj28062003@gmail.com"
              aria-label="Email"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/kiran-raj-00150435a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kiranraj28062003-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>

        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Kiran MP. All Rights Reserved.
          </p>

          <p>
            Designed & Developed with React and Vite.
          </p>
        </div>

      </footer>

    </div>
  );
}

export default App;
