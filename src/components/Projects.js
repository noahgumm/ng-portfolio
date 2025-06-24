import "../styles/Projects.css";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projectData from "../data/projects.json";

export default function Project() {
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Max num of items within carousel
  const maxItems = 3;
  //Load projects from json
  const [projects] = useState(projectData);
  // Calculate projects per page (6 for 2x3)
  const projectsPerPage = 6;
  // Get current page projects
  const startIdx = (carouselIndex - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIdx, startIdx + projectsPerPage);

  const increaseIndex = () => {
    setCarouselIndex((prev) => (prev % maxItems) + 1);
  };

  const decreaseIndex = () => {
    setCarouselIndex((prev) => (prev - 2 + maxItems) % maxItems + 1);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="project-section" id="projects">
      <div className="project-carousel">
        {/* Show buttons only when not expanded */}
        {!expandedIndex && (
          <>
            <button className="project-backButton" onClick={decreaseIndex}>
              <FaArrowLeft />
            </button>
            <button className="project-forwardButton" onClick={increaseIndex}>
              <FaArrowRight />
            </button>
          </>
        )}

        {/* If expandedIndex is set, show ONLY the expanded card */}
        {expandedIndex !== null ? (
          <div className="expandedProjectContainer">
            <ProjectCard
              expanded
              onClick={() => toggleExpand(expandedIndex)}
              title={projects[expandedIndex].title}
              tools={projects[expandedIndex].tools.join(", ")}
              description={projects[expandedIndex].description}
              image={process.env.PUBLIC_URL + projects[expandedIndex].image}
            />
          </div>
        ) : (
          // Otherwise show carousel grid
          <div className="project-carousel-grid" style={{
            paddingTop: currentProjects.length <= 3 ? "20vh" : "0vh",
            }}>
            {currentProjects.map((proj, i) => {
              const globalIndex = startIdx + i;
              return (
                <ProjectCard
                  key={proj.id}
                  className="project"
                  onClick={() => toggleExpand(globalIndex)}
                  title={proj.title}
                  tools={proj.tools.join(", ")}
                  description={proj.description}
                  image={process.env.PUBLIC_URL + proj.image}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
