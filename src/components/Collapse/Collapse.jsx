
import './Collapse.css';
import React, {useEffect, useState} from 'react';

// Function for the About page that displays title + description
export default function Collapse(props){ 

    const [collapse, setCollapse] = useState(false);

    // each time collapse value change, display or hide description div
    useEffect(() => { 
        document.getElementById(props.id).style.display = collapse ? "block" : "none"; 
        openDescription();
    }, [collapse])

    function openDescription(){ 
        document.getElementById("arrow__collapse"+props.id).style.transform = collapse ? "rotate(0deg)" : "rotate(-180deg)"; 
        document.getElementById("arrow__collapse"+props.id).style.padding = collapse ? "5px 0 0 0" : "0 0 8px 0"; 
    }

    return (
        <div className="container__collapse">
            <div className="main__collapse" onClick={() => setCollapse(!collapse)}>
                <div className="title__collapse" >{ props.title }</div>
                <svg className="arrow__collapse" id={"arrow__collapse"+props.id} width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.8401 16.3467L27.2001 13.9733L14.0001 0.786651L0.800071 13.9867L3.16007 16.3467L14.0001 5.50665L24.8401 16.3467Z" fill="white"/>
                </svg>
            </div>
            <div className="description__collapse" id={props.id}>
                 <p className="description__collapse-text css-fix">{ props.description }</p>
            </div>
        </div>
    )
}