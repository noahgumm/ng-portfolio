export function ProjectCard({ onClick, expanded, title, tools, description, image, className }) {
  return (
    <div
      className={`projectCard ${expanded ? "expanded" : ""} ${className || ""}`}
      onClick={onClick}
    >
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="imagePreview">
        <img src={image} alt="Project screenshot" />
      </div>
      <div className="toolsUsed">
        <h4>Tools Used:</h4>
        <p>{tools}</p>
      </div>
      <div className="descSnippet">
        <p>{description}</p>
      </div>
    </div>
  );
}