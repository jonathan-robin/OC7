import Header from '../../components/header/Header';
import './fiche-logement.css';
import { useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { useLocation } from 'react-router-dom';
import HeaderLogement from '../../components/headerLogement/HeaderLogement';

export default function FicheLogement(){
    
    const location = useLocation(); 

    useEffect(() => { 

    },[])

    return (
        <div className="">
            <div className="container__about">
                <Header />
                <Carousel props={location.state}/>
                <HeaderLogement author={location.state.host} title={location.state.title} rating={location.state.rating} location={location.state.location} tags={location.state.tags}/>
            </div>
        </div>
    )
}