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
                {jsonLogement.map(logement => { 
                    return <Card 
                        key={logement.id} cover={logement.cover} description={logement.description} title={logement.title} id={logement.id}
                        pictures={logement.pictures} host={logement.host} rating={logement.rating} location={logement.location} equipments={logement.equipments} tags={logement.tags }
                        />
                })}
            </div>
        </div>
        <Footer />
    </div>
)
}
