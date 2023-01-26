import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function Card({logement}){ 
    let navigation = useNavigate();
    const handleOnClickCard = () =>  navigation('/fiche-logement/'+logement.id); 

    return (
        <div className="container__card" onClick={handleOnClickCard}>
            <div className="container__card-title"><p>{logement.title}</p></div>
            <div className="container__card-image" style={{background: 'url("'+logement.cover+'")'}}></div>
        </div>
    )

}