import { render } from "@testing-library/react";
import './Card.css';

export default function Card(props){ 
    return (
        <div className="container__card">
            <div className="container__card-image" style={{background: 'url("'+props.cover+'")'}}>
                {/* <img src={props.cover} alt={props.description} className="card-image" /> */}
            </div>
            <div className="container__card-title">
                <p>{props.title}</p>
            </div>
        </div>
    )

}