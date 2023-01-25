
import './banner.css';
import '../../public/assets/bannerhome.png';

export default function Banner(props){ 
    return (
        <div className={"container__banner "+ props.customClass} >
            <div className="background-banner"  alt={props.path}>
            </div>
            {props.sentence && <h2 className="text-over-img">{ props.sentence }</h2> }
            <img src={require("../../public/assets/"+props.path)} alt={props.alt} className="banner_img"/>
        </div>
    )
}