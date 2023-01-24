import './Card.css';
import { useNavigate } from 'react-router-dom';


export default function Card(props){ 

    let navigation = useNavigate();

    function handleOnClickCard(){ 
        navigation('/fiche-logement/'+props.id, {state: props})
    }

    return (
        <div className="container__card" onClick={handleOnClickCard}>
            <div className="container__card-image" style={{background: 'url("'+props.cover+'")'}}></div>
            <div className="container__card-title">
                <p>{props.title}</p>
            </div>
        </div>
    )

}