
import './Carousel.css';
import React, { useState } from 'react';

// Function for the About page that displays title + description
export default function Carousel({ pictures, description }){ 

    let hasManyPictures = pictures.length > 1 ? true : false;
    let curSlide = 0;
    let maxSlide = pictures.length - 1;
    const [nbPictureLoaded, setNbPictureLoaded] = useState(0);

    function handleClickNext(){ 
        if (curSlide === maxSlide) curSlide = 0;
        else curSlide++; 
        var arr = [].slice.call(document.getElementsByClassName("container__picture"));
        arr.forEach((slide, indx) => slide.style.transform = `translateX(${100 * (indx - curSlide)}%)` );
    }

    function handleClickPrev(){ 
        if (curSlide === 0) curSlide = maxSlide;
        else curSlide--; 
        var arrPrev = [].slice.call(document.getElementsByClassName("container__picture"));
        arrPrev.forEach((slide, indx) => slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`);
    }

    const pictureLoaded = () => {
        setNbPictureLoaded(nbPictureLoaded+1);
        if (nbPictureLoaded === pictures.length - 1 && pictures.length > 0) document.querySelector(".lds-dual-ring").style.display = 'none';
    } 

    return (
            <div className="container__carousel">
                <div className="lds-dual-ring"></div>
                <div className="container__pictures">
                    {pictures && pictures.map((picture, index) => { 
                        return <img src={picture} onLoad={pictureLoaded} style={{transform: 'translateX('+index*100+"%)"}} className="container__picture" key={index} alt={"Photo n°"+index + 1+" du logement"+description}/>
                    })}
                </div>
                {hasManyPictures &&            
                <div> 
                    <div onClick={handleClickPrev} className="btn btn-prev">&#60;</div>
                    <div onClick={handleClickNext} className="btn btn-next">&#62;</div>
                </div>
                }
     
            </div>
    )
}