import { useEffect } from "react";
import json from '../../json/logements.json';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/card/Card';
import '../../App.css';

export default function Home(props){ 

return (
    <div className="container__home">
        <Header />
        <Banner path='banner_home.png' alt="bannière pour la page accueil d'un paysage côtier brumeux"/>
        <div className="container__cards">
            {json.map(logement => { 
                return <Card cover={logement.cover} description={logement.description} title={logement.title} id={logement.id}/>
            })}
        </div>
        <Footer />
    </div>
)
}
