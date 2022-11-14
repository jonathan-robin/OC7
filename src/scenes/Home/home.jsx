import { useEffect } from "react";
import json from '../../json/logements.json';



export default function Home(props){ 

return (<div>
       {json.map(logement => { 
            return <div>{logement.id}</div>
        })}
    </div>)
}
