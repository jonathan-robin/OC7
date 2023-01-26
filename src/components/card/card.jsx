import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function Card(props){ 
    let navigation = useNavigate();
    const handleOnClickCard = () =>  navigation('/fiche-logement/'+props.id)

    return (
        <div className="container__card" onClick={handleOnClickCard}>
            <div className="container__card-title"><p>{props.title}</p></div>
            <div className="container__card-image" style={{background: 'url("'+props.cover+'")'}}></div>
        </div>
    )

}