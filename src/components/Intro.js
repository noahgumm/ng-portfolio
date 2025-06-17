import { useState } from 'react';

import '../styles/Intro.css';

export default function Intro() {
    var carouselItems = 2;
    const [carouselIndex, setCarouselIndex] = useState(1);

    function increaseIndex(){
        var newIndex = carouselIndex + 1;

        if(newIndex <= carouselItems){
            setCarouselIndex(newIndex);
        } else {
            setCarouselIndex(1);
        }
    }

    function decreaseIndex(){
        var newIndex = carouselIndex - 1;

        if(newIndex < 1){
            setCarouselIndex(carouselItems);
        } else {
            setCarouselIndex(newIndex);
        }
    }

    return(
        <>
            <div className='carousel'>
                <div className={`carousel-item first ${carouselIndex === 1 ? 'active' : ''}`}>
                    <h4> Software </h4>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <h3> Web </h3>
                    <div></div>
                    <div></div>
                    <div></div>
                    <h2> and Game </h2>
                    <div></div>
                    <h1> Developer </h1>
                    <div></div>
                </div>
                <div className={`carousel-item second ${carouselIndex === 2 ? 'active' : ''}`}>
                    <h3>Step into my world of code</h3>
                    <h4>Projects</h4>
                    <h4>LinkedIn</h4>
                    <h4>Github</h4>
                </div>
                <div className="buttons">
                    <button onClick={decreaseIndex}>Back</button>
                    <button onClick={increaseIndex}>Forward</button>
                </div>
            </div>
        </>
    );
}