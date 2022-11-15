import { useEffect } from "react";
import json from '../../json/logements.json';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Home(props){ 

return (
    <div className="container__home">
        <Header />
       {json.map(logement => { 
            return <div>{logement.id}</div>
        })}
        <Footer />
    </div>
)
}
