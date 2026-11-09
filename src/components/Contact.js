import { FaEnvelope, FaGithub, FaLinkedin, FaFileLines } from "react-icons/fa6";
import profile from "../data/profile.js";
import useReveal from "../hooks/useReveal.js";
import "../styles/Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="section-label">03 / Contact</p>
        <div className="contact-card reveal" ref={ref}>
          <h2 className="contact-title">
            Let’s build something <span className="gradient-text">together.</span>
          </h2>
          <p className="contact-text">
            I’m looking for my next opportunity as a software developer. If my work looks like a fit for your
            team, I’d love to hear from you.
          </p>

          <div className="contact-actions">
            {profile.email && (
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <FaEnvelope aria-hidden="true" /> Email me
              </a>
            )}
            <a
              className={`btn ${profile.email ? "btn-ghost" : "btn-primary"}`}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={process.env.PUBLIC_URL + profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileLines aria-hidden="true" /> Resume
            </a>
          </div>
          {profile.location && <p className="contact-meta">{profile.location}</p>}
        </div>
      </div>
    </section>
  );
}
