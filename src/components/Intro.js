import { FaGithub, FaLinkedin, FaArrowDown, FaFileLines } from "react-icons/fa6";
import headshot from "../images/headshot.png";
import profile from "../data/profile.js";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.openToWork && (
            <p className="pill">
              <span className="pill-dot" aria-hidden="true" />
              Open to opportunities
            </p>
          )}
          <p className="hero-kicker">
            {profile.name} <span aria-hidden="true">/</span> {profile.role}
          </p>
          <h1 className="hero-title">
            {profile.headline.map((line, i) => (
              <span key={i} className="hero-line">
                {line}{" "}
                {i === profile.headline.length - 1 && (
                  <span className="gradient-text">{profile.headlineAccent}</span>
                )}
              </span>
            ))}
          </h1>
          <p className="hero-sub">{profile.intro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my work <FaArrowDown aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href={process.env.PUBLIC_URL + profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileLines aria-hidden="true" /> Resume
            </a>
            <div className="hero-social">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <FaGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <div className="photo-inner">
              <img src={headshot} alt={`Portrait of ${profile.name}`} />
            </div>
          </div>
          {profile.heroChips.slice(0, 3).map((chip, i) => (
            <span key={chip} className={`float-chip chip-${"abc"[i]}`} aria-hidden="true">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
