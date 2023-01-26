import jsonLogement from '../../json/logements.json';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/card/Card';
import '../../App.css';
import './home.css';

export default function Home(){ 
    return (
        <div>
            <div className="container">
                <Header />
                <Banner customClass="banner-home" path='bannerhome.png' sentence="Chez vous, partout et ailleurs" alt="bannière pour la page accueil d'un paysage côtier brumeux"/>
                <div className="container__cards">
                    {jsonLogement.map(logement => <Card key={logement.id} logement={logement} /> )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
