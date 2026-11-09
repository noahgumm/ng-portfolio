import { useEffect, useRef } from "react";
import { FaGithub, FaXmark, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Cover } from "./ProjectCard.js";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (opener && opener.focus) opener.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ "--accent": project.accent }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close details">
          <FaXmark />
        </button>

        <Cover project={project} />

        <div className="modal-body">
          <p className="card-kind">{project.kind}</p>
          <h3 id="modal-title" className="modal-title">
            {project.title}
          </h3>
          <p className="modal-desc">{project.description}</p>

          {project.highlights?.length > 0 && (
            <>
              <h4 className="modal-sub">Highlights</h4>
              <ul className="highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className="modal-sub">Built with</h4>
          <ul className="tags">
            {project.tools.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="modal-actions">
            {project.github && (
              <a className="btn btn-primary" href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> View on GitHub
              </a>
            )}
            {project.live && (
              <a className="btn btn-ghost" href={project.live} target="_blank" rel="noopener noreferrer">
                Live demo <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
