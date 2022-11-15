import Header from '../../components/header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/footer/Footer';

export default function About(){ 
    return (
        <div className="container__about">
            <Header />
            <Banner path="banner_about.png" alt="bannière pour la page about" />
            <Footer />
        </div>
    )
}