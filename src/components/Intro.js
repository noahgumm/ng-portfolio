import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaGithub, FaLinkedin, FaBook} from 'react-icons/fa';
import headshot from '../images/headshot.jpg';
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
        <div className='section' id='about'>
            <div className='carousel'>
                <button  className='backButton' onClick={decreaseIndex}><FaArrowLeft /></button>
                <div className={`carousel-item first ${carouselIndex === 1 ? 'active' : ''}`}>
                    <h1> Software </h1>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className='headshot'><img src={headshot} alt='headshot'/></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <h1> Developer </h1>
                    <div></div>
                </div>
                <div className={`carousel-item second ${carouselIndex === 2 ? 'active' : ''}`}>
                    <h1>Step into my world of code</h1>
                    <a href='#projects' target='_blank' className='iconLink'>
                        <h1>
                            <span>Projects</span> 
                        </h1>
                        <FaBook className='icon'/>
                    </a>
                    <a href='https://www.linkedin.com/in/noah-gumm/' target='_blank' className='iconLink'>
                        <h1>
                            <span>LinkedIn</span>                             
                        </h1>
                        <FaLinkedin className='icon'/>
                    </a>
                    <a href='https://github.com/noahgumm' target='_blank' className='iconLink'>
                        <h1>
                            <span>Github</span>                            
                        </h1>
                        <FaGithub className='icon'/>
                    </a>
                </div>
                <button className='forwardButton' onClick={increaseIndex}><FaArrowRight /></button>
            </div>
        </div>
    );
}