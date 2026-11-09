import { useCallback, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import projectData from "../data/projects.json";
import profile from "../data/profile.js";
import { ProjectCard } from "./ProjectCard.js";
import ProjectModal from "./ProjectModal.js";
import "../styles/Projects.css";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">02 / Projects</p>
        <div className="section-head">
          <h2 className="section-title">Selected work</h2>
          <a className="link-arrow" href={profile.github} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> More on GitHub
          </a>
        </div>

        <div className="card-grid">
          {projectData.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </section>
  );
}
