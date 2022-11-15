
import './banner.css';

export default function Banner(props){ 
    return (
        <div className="container__banner">
            <img src={require("../../public/assets/"+props.path)} alt={props.alt} className="banner_img"/>
        </div>
    )
}