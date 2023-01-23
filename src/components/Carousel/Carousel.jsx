
import './Carousel.css';
import React, {useEffect, useState} from 'react';

// Function for the About page that displays title + description
export default function Carousel(props){ 

    const [hasManyPictures, setHasManyPictures] = useState(false);
    const [slides, setSlides] = useState([]);
    let curSlide = 0;
    const [maxSlide, setMaxSlide] = useState(props.props.pictures.length - 1);

    useEffect(() => { 
        setHasManyPictures(props.props.pictures.length > 0 ? true : false);
        setSlides(document.getElementsByClassName("container__picture"));
    },[])

    function handleClickNext(){ 
        if (curSlide === maxSlide) curSlide = 0;
        else curSlide++; 
        var arr = [].slice.call(slides);
        arr.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }

    function handleClickPrev(){ 
        if (curSlide === 0) curSlide = maxSlide;
        else curSlide--; 
        var arr = [].slice.call(slides);
        arr.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }

    return (
        <div className="container__carousel">
            {hasManyPictures && props.props.pictures.map((picture, index) => { 
                return <div className="container__picture" key={index} style={{background: 'url("'+picture+'")'}}></div>
            })}
            <div onClick={() => { handleClickPrev() }} className="btn btn-prev">&#60;</div>
            <div onClick={() => { handleClickNext() }} className="btn btn-next">&#62;</div>
        </div>
    )
}