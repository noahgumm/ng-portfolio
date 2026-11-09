import { FaGithub, FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import useReveal from "../hooks/useReveal.js";

export function Cover({ project }) {
  return (
    <div className="cover" style={{ "--accent": project.accent }}>
      {project.image ? (
        <img src={process.env.PUBLIC_URL + project.image} alt={`${project.title} preview`} />
      ) : (
        <div className="cover-term" aria-hidden="true">
          <div className="cover-dots">
            <i /><i /><i />
          </div>
          {(project.coverText || []).map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

const MAX_TAGS = 4;

export function ProjectCard({ project, index, onOpen }) {
  const ref = useReveal();
  const extra = project.tools.length - MAX_TAGS;

  return (
    <article
      ref={ref}
      className="card reveal"
      style={{ "--accent": project.accent, "--d": `${index * 80}ms` }}
      onClick={() => onOpen(project)}
    >
      <Cover project={project} />
      <div className="card-body">
        <p className="card-kind">{project.kind}</p>
        <h3 className="card-title">
          <button
            type="button"
            className="card-open"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
            aria-haspopup="dialog"
          >
            {project.title}
          </button>
        </h3>
        <p className="card-summary">{project.summary}</p>

        <ul className="tags">
          {project.tools.slice(0, MAX_TAGS).map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
          {extra > 0 && <li className="chip chip-more">+{extra}</li>}
        </ul>

        <div className="card-foot">
          <span className="card-more" aria-hidden="true">
            Details <FaArrowRight />
          </span>
          <span className="card-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaArrowUpRightFromSquare />
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
