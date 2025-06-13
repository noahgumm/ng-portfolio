import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Project() {
        var maxItems = 3;
        const [carouselIndex, setCarouselIndex] = useState(1);
    
        function increaseIndex(){
            var newIndex = carouselIndex + 1;
    
            if(newIndex <= maxItems){
                setCarouselIndex(newIndex);
            } else {
                setCarouselIndex(1);
            }
        }
    
        function decreaseIndex(){
            var newIndex = carouselIndex - 1;
    
            if(newIndex < 1){
                setCarouselIndex(maxItems);
            } else {
                setCarouselIndex(newIndex);
            }
        }

    return(
        <>
            <div className="carousel">
                <div className={`carousel-item ${carouselIndex === 1 ? 'active' : ''}`}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className={`carousel-item ${carouselIndex === 2 ? 'active' : ''}`}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className={`carousel-item ${carouselIndex === 3 ? 'active' : ''}`}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <button onClick={decreaseIndex}>Back</button>
            <button onClick={increaseIndex}>Forward</button>
        </>
    );
}