import Header from '../../components/header/Header';
import './fiche-logement.css';
import Carousel from '../../components/Carousel/Carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HeaderLogement from '../../components/headerLogement/HeaderLogement';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/footer/Footer';
import jsonLogement from '../../json/logements.json';

export default function FicheLogement(){
    
    const location = useLocation(); 
    const navigate = useNavigate();
    const [id, setId] = useState(location.pathname.split('/')[2]); 
    const [pictures, setPictures] = useState(jsonLogement.filter(logement => logement.id === id)[0].pictures);
    const [logement, setLogement] = useState(jsonLogement.filter(logement => logement.id === id)[0]);

    useEffect(() => { 
        return () => logement ? {} : navigate('/error');
    },[logement])

    return (
        <div className="">
            {logement &&
            <div className="container">
                <Header />
                <Carousel logement={logement} pictures={pictures} />
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