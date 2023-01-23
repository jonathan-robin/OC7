
import './Collapse.css';
import React, {useEffect, useState} from 'react';

// Function for the About page that displays title + description
export default function Collapse(props){ 

    const [collapse, setCollapse] = useState(false);

    // each time collapse value change, display or hide description div
    useEffect(() => { 
        document.getElementById(props.id).style.display = collapse ? "block" : "none"; 
    }, [collapse])

    return (
        <div className="container__collapse">
            <div className="main__collapse">
                <div className="title__collapse" onClick={() => setCollapse(!collapse)}>{ props.title }</div>
                <div className="description__collapse" id={props.id}>
                    { props.description }
                </div>
            </div>
        </div>
    )
}