
import { motion } from "framer-motion";

const contactLinks = [
  {
    title: "Email 1",
    value: "kiranraj28062003@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=kiranraj28062003@gmail.com",
    icon: "mail",
  },
  {
    title: "Email 2",
    value: "mpkiran2806@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mpkiran2806@gmail.com",
    icon: "mail",
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/kiran-raj-00150435a/",
    icon: "linkedin",
  },
  {
    title: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/kiranraj28062003-dev",
    icon: "github",
  },
];

function ContactIcon({ name, size = 23 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13 13 0 0 0-7 0C5.4 1.1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18.1V22" />
      </svg>
    );
  }

  return null;
}

function Contact() {
  const emailSubject = encodeURIComponent(
    "Opportunity for Python Developer - Kiran MP"
  );

  const emailBody = encodeURIComponent(
    "Hello Kiran,\n\nI would like to connect with you regarding a professional opportunity.\n\nRegards,"
  );

  const primaryEmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=kiranraj28062003@gmail.com&su=${emailSubject}&body=${emailBody}`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            I am actively looking for entry-level Python Developer
            and Software Developer opportunities where I can
            contribute my skills, learn from experienced teams
            and grow professionally.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's work together</h3>

            <p>
              Have a job opportunity, project or collaboration
              in mind? Feel free to reach out. I would be happy
              to connect and discuss how I can contribute.
            </p>

            <div className="contact-location">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <span>
                T. Narasipura, Mysuru, Karnataka, India
              </span>
            </div>

            <a
              href="/resume.pdf"
              download="Kiran_MP_Resume.pdf"
              className="resume-button"
            >
              <span>↓</span>
              Download Resume
            </a>

            <a
              href={primaryEmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <span>↗</span>
              Send Me an Email
            </a>
          </motion.div>

          <div className="contact-links">
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
                aria-label={`${item.title}: ${item.value}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="contact-link-icon">
                  <ContactIcon name={item.icon} />
                </div>

                <div className="contact-link-text">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>

                <span className="contact-arrow">↗</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
