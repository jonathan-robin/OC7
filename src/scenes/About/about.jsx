import Header from '../../components/header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/footer/Footer';
import Collapse from '../../components/Collapse/Collapse';
import about from '../../json/About.json';
import './About.css';

export default function About(){ 
    return (
        <div className="">
            <div className="container">
                <Header />
                <Banner customClass="banner-about" path="banner_about.png" sentence={false} alt="bannière pour la page about " />
                {Object.entries(about).map(([key, value]) => {
                    return <div className="collpase-wrapper" key={value.key}>
                                <Collapse title={value.title} description={value.description} id={value.key}/>
                            </div>
                })}
            </div>
            <Footer />
        </div>
    )
}