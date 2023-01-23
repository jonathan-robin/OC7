
import React, {useEffect } from 'react';
import './HeaderLogement.css';


// Function for the About page that displays title + description
export default function HeaderLogement(props){ 

    console.log(props);

        useEffect(() => { 
            console.log(props);
        },[])

    return(
         <div className="container__header">
            <div className="container__header-firstLine">
                <div className="left">
                    <h2>{props.title}</h2>
                    <h5>{props.location}</h5>
                    <div className="container__tags">
                        {props.tags.map(tag => { 
                            return <span className="tags">{tag}</span>
                        })}
                    </div>
                </div>
                <div className="right">
                    <div className="author-props">
                        <h4>{props.author.name}</h4>
                        <div className="author-picture" style={{background: 'url("'+props.author.picture+'")'}}></div>
                    </div>
                    <div className="container__stars">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={props.rating > 0 ? '#FF6060' : "#E3E3E3"}/>
                        </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={props.rating > 1 ? '#FF6060' : "#E3E3E3"}/>
                        </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={props.rating > 2 ? '#FF6060' : "#E3E3E3"}/>
                        </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={props.rating > 3 ? '#FF6060' : "#E3E3E3"}/>
                        </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={props.rating > 4 ? '#FF6060' : "#E3E3E3"}/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
    
}