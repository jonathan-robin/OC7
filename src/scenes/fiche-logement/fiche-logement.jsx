import Header from '../../components/header/Header';
import './fiche-logement.css';
import Carousel from '../../components/Carousel/Carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HeaderLogement from '../../components/headerLogement/HeaderLogement';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/footer/Footer';
import jsonLogement from '../../json/logements.json';
import Loader from '../../components/Loader/Loader';

export default function FicheLogement(){
    
    const location = useLocation(); 
    const navigate = useNavigate();
    const [id, setId] = useState(location.pathname.split('/')[2]); 
    const [pictures, setPictures] = useState(jsonLogement.filter(logement => logement.id === id)[0].pictures);
    const [description, setDescription] = useState([])
    const [logement, setLogement] = useState(jsonLogement.filter(logement => logement.id === id)[0]);
    const [isCarouselLoading, setIsCarouselLoading] = useState(true);

    useEffect(() => { 
        
    //     res.setHeader('Access-Control-Allow-Origin', '*')
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    // res.setHeader('Content-Type', 'application/json')

    // let p = Promise.all(logement.pictures.map(async(picture) => { 
    //     fetch(picture, {
    //         method: 'GET',
    //         withCredentials: true,    
    //         crossorigin: true,    
    //         mode: 'no-cors', 
    //      })
    // }))

    // p.then(res => console.log(res));
    // console.log(pictures);

        return async () => logement ? {} : navigate('/error');

    },[logement])

    // function createHTML(){ 
    //     return setPictures(logement.pictures.map((picture,index) => <div className="container__picture" key={index} style={{background: 'url("'+picture+'")'}}></div>));
    // }
    // function handleCarouselLoading(){ 
    //         setIsCarouselLoading(false);

    //     // setTimeout(() => { 
    //     // }, 1000)
    // }

    return (
        <div className="">
            {logement &&
            <div className="container">
                <Header />
                {/* <Loader isLoading={isCarouselLoading}> */}
                    <Carousel logement={logement} pictures={pictures} />
                    {/* carouselLoading={handleCarouselLoading}/>  */}
                {/* </Loader> */}
                <HeaderLogement author={logement.host} title={logement.title} rating={logement.rating} location={logement.location} tags={logement.tags}/>
                <div className="container__collapses">
                    <div className="wrapper-collapse">
                        <Collapse title="Description" description={logement.description} id={"description"+logement.id} key={"description"+logement.id}/>
                    </div>
                    <div className="wrapper-collapse">
                        <Collapse title="Equipements" description={logement.equipments.map(equi => equi+'\n')} id={logement.id} key={logement.id}/>
                    </div>
                </div>
            </div>
            }
            <Footer />
        </div>
    )
}