import Header from '../../components/header/Header';
import './fiche-logement.css';
import Carousel from '../../components/Carousel/Carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import HeaderLogement from '../../components/headerLogement/HeaderLogement';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/footer/Footer';
import jsonLogement from '../../json/logements.json';

export default function FicheLogement(){
    
    const location = useLocation(); 
    const navigate = useNavigate();
    let id = location.pathname.split('/')[2];
    let pictures = jsonLogement.filter(logement => logement.id === id)[0]?.pictures; 
    let logement = jsonLogement.filter(logement => logement.id === id)[0]

    useEffect(() => { 
        return () => logement ? {} :  navigate('/error');
    },[logement, navigate])

    return (
        <div>
            {logement &&
            <div className="container">
                <Header />
                <Carousel pictures={pictures} />
                <HeaderLogement author={logement.host} title={logement.title} rating={logement.rating} location={logement.location} tags={logement.tags}/>
                <div className="container__collapses">
                    <div className="wrapper-collapse">
                        <Collapse title="Description" description={logement.description} id={"description"+logement.id} key={"description"+logement.id}/>
                    </div>
                    <div className="wrapper-collapse">
                        <Collapse title="Equipements" description={logement.equipments.map(equi => equi+'\n')} id={logement.id} key={logement.id}/>
                    </div>
                </div>
            </div>
           }
            <Footer />
        </div>
    )
}