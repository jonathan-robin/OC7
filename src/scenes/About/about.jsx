import Header from '../../components/header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/footer/Footer';
import Collapse from '../../components/Collapse/Collapse';
import about from '../../json/About.json';
import './About.css';

export default function About(){ 
    return (
        <div className="">
            <div className="container__about">
                <Header />
                <Banner path="banner_about.png" alt="bannière pour la page about" />
                {Object.entries(about).map(([key, value]) => {
                    console.log({key})
                    console.log({value})
                    return <Collapse title={value.title} description={value.description} id={value.key} key={value.key}/>
                })}
            </div>
            <Footer />
        </div>
    )
}