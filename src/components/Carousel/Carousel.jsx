
import './Carousel.css';
import React, { useEffect, useState } from 'react';

// Function for the About page that displays title + description
export default function Carousel({ pictures }){ 

    let hasManyPictures = pictures.length > 1 ? true : false;
    let curSlide = 0;
    let maxSlide = pictures.length - 1
    const [nbPictureLoaded, setNbPictureLoaded] = useState(0);

    useEffect(() => {
        if (nbPictureLoaded === pictures.length + 1 && nbPictureLoaded > 0){ 
            document.querySelector(".lds-dual-ring").style.display = 'none';
            document.getElementsByClassName('container__pictures')[0].style.display = 'block';
        }
    },[nbPictureLoaded, maxSlide, pictures.length])

    function handleClickNext(){ 
        if (curSlide === maxSlide) curSlide = 0;
        else curSlide++; 
        var arr = [].slice.call(document.getElementsByClassName("container__picture"));
        arr.reverse().forEach((slide, indx) => slide.style.transform = `translateX(${100 * (indx - curSlide)}%)` );
    }

    function handleClickPrev(){ 
        if (curSlide === 0) curSlide = maxSlide;
        else curSlide--; 
        var arr = [].slice.call(document.getElementsByClassName("container__picture"));
        arr.reverse().forEach((slide, indx) => slide.style.transform = `translateX(${100 * (indx - curSlide)}%)` );
    }

    const pictureLoaded = () =>  setNbPictureLoaded(nbPictureLoaded+1);

    return (
            <div className="container__carousel">
                <div className="lds-dual-ring"></div>
                <div className="container__pictures">
                    {pictures && pictures.map((picture, index) => { 
                        return <img src={picture} onLoad={pictureLoaded} className="container__picture" key={index} alt=""/>
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