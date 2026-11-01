
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) =>
        document.getElementById(link.href.substring(1))
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handle mobile navigation and scroll after menu closes
  const handleMobileNavigation = (event, href) => {
    event.preventDefault();

    const targetId = href.substring(1);

    setMenuOpen(false);

    window.history.pushState(null, "", href);

    window.setTimeout(() => {
      const target = document.getElementById(targetId);

      if (!target) return;

      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar
        ? navbar.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 300);
  };

  // Close menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={handleNavigation}
        >
          KIRAN <span>MP.</span>
        </a>

        {/* Desktop navigation */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const section = link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                className={
                  activeSection === section ? "active" : ""
                }
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="nav-resume"
          onClick={handleNavigation}
        >
          Let's Talk <span>↗</span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => {
              const section = link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={
                    activeSection === section ? "active" : ""
                  }
                  onClick={(event) =>
                    handleMobileNavigation(event, link.href)
                  }
                >
                  {link.name}
                  <span>↗</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
