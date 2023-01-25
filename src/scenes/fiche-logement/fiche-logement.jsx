import Header from '../../components/header/Header';
import './fiche-logement.css';
import Carousel from '../../components/Carousel/Carousel';
import { useLocation } from 'react-router-dom';
import HeaderLogement from '../../components/headerLogement/HeaderLogement';
import Collapse from '../../components/Collapse/Collapse';

// import json et récupérer props en mappant
// si id existe pas renvoit une 404
export default function FicheLogement(){
    
    const location = useLocation(); 

    return (
        <div className="">
            <div className="container__about">
                <Header />
                <Carousel props={location.state}/>
                <HeaderLogement author={location.state.host} title={location.state.title} rating={location.state.rating} location={location.state.location} tags={location.state.tags}/>
                <div className="container__collapses">
                    <div className="wrapper-collapse">
                        <Collapse title="Description" description={location.state.description} id={"description"+location.state.id} key={"description"+location.state.id}/>
                    </div>
                    <div className="wrapper-collapse">
                        <Collapse title="Equipements" description={location.state.equipments.map(equi => equi+'\n')} id={location.state.id} key={location.state.id}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}