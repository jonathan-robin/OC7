import { useEffect } from "react";
import json from '../../json/logements.json';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/Banner/Banner';

export default function Home(props){ 

return (
    <div className="container__home">
        <Header />
        <Banner path='banner_home.png' alt="bannière pour la page accueil d'un paysage côtier brumeux"/>
       {/* {json.map(logement => { 
            return <div>{logement.id}</div>
        })} */}
        <Footer />
    </div>
)
}
