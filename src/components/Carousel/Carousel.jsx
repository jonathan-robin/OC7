
import './Carousel.css';
import React, {useCallback, useEffect, useState} from 'react';

// Function for the About page that displays title + description
export default function Carousel({pictures, logement, carouselLoading = () => {}}){ 

    const [hasManyPictures, setHasManyPictures] = useState(pictures.length > 1 ? true : false)
    let curSlide = 0;
    const [maxSlide, setMaxSlide] = useState(pictures.length - 1);
    const [nbPictureLoaded, setNbPictureLoaded] = useState(0);

    useEffect(() => {
        if ((nbPictureLoaded === pictures.length) && nbPictureLoaded > 0){ 
            [].slice.call(document.getElementsByClassName('container__picture')).forEach(el => el.style.display = 'block');
        }
    },[nbPictureLoaded, maxSlide])

    function handleClickNext(){ 
        if (curSlide === maxSlide) curSlide = 0;
        else curSlide++; 
        var arr = [].slice.call(document.getElementsByClassName("container__picture"));
        arr.reverse().forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }

    function handleClickPrev(){ 
        if (curSlide === 0) curSlide = maxSlide;
        else curSlide--; 
        var arr = [].slice.call(document.getElementsByClassName("container__picture"));
        arr.reverse().forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }

    function pictureLoaded(){ 
        setNbPictureLoaded(nbPictureLoaded+1);
    }

    return (
            <div className="container__carousel">
                {pictures && pictures.map((picture, index) => { 
                    return <img src={picture} onLoad={pictureLoaded} className="container__picture" key={index} alt=""/>
                })}
                {hasManyPictures &&            
                <div> 
                    <div onClick={handleClickPrev} className="btn btn-prev">&#60;</div>
                    <div onClick={handleClickNext} className="btn btn-next">&#62;</div>
                </div>
                }
     
            </div>
    )
}