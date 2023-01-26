
import React from 'react';
// import './HeaderLogement.css';

// Function for the About page that displays title + description
export default function Loader({children, isLoading}){ 

    return(
        <div>
            {isLoading === true && 
                <div className="loader"></div>
            }
                <div className={
                    "head-picture__container " +
                    (isLoading ? 'loading' : 'loaded-1') 
                }>
                    {children}
             </div>
            {/* {content &&
                <div className={
                "head-picture__content " +
                (isLoading ? 'loading' : 'loaded-2') 
                }>
                <h2>{content}</h2>
                </div>
             } */}

        </div>
    )
    
}