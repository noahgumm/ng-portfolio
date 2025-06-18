import "../styles/Projects.css";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import codeImage from "../images/code2.png";

export default function Project() {
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const maxItems = 3;

  const increaseIndex = () => {
    setCarouselIndex((prev) => (prev % maxItems) + 1);
  };

  const decreaseIndex = () => {
    setCarouselIndex((prev) => (prev - 2 + maxItems) % maxItems + 1);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  // Sample project data (could be replaced with real data)
  const projects = [...Array(18).keys()].map((i) => ({
    id: i,
    title: "My Awesome Project",
    tools: "React, Node.js, MongoDB",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, nunc eget tincidunt luctus, nunc lorem dignissim nisl, a lobortis elit leo at libero.",
  }));

  // Calculate projects per page (6 for 2x3)
  const projectsPerPage = 6;

  // Get current page projects
  const startIdx = (carouselIndex - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIdx, startIdx + projectsPerPage);

  return (
    <div className="section" id="projects">
      <div className="carousel">
        {/* Show buttons only when not expanded */}
        {!expandedIndex && (
          <>
            <button className="backButton" onClick={decreaseIndex}>
              <FaArrowLeft />
            </button>
            <button className="forwardButton" onClick={increaseIndex}>
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
              tools={projects[expandedIndex].tools}
              description={projects[expandedIndex].description}
              image={codeImage}
            />
          </div>
        ) : (
          // Otherwise show carousel grid
          <div className="carousel-grid">
            {currentProjects.map((proj, i) => {
              const globalIndex = startIdx + i;
              return (
                <ProjectCard
                  key={proj.id}
                  className="project"
                  onClick={() => toggleExpand(globalIndex)}
                  title={proj.title}
                  tools={proj.tools}
                  description={proj.description}
                  image={codeImage}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
