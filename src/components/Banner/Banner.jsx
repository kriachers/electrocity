import {useContext } from "react";
import { Context } from "../../Context";

import {
    BrowserRouter as Router,
    Link,
 
  } from "react-router-dom";


function Banner (props) {
    const value = useContext(Context)
    const {offer} = useContext(Context)
    return ( 
    <Link to="/offer">
            
            <picture  onClick={() => value.makeOffer(props.item)}> 
            {
              props.item.imgWebp ? <source srcset={`${props.item.imgWebp}`} type="image/webp" className="banner"/>  : ''
            }
                <img src={`${props.img}`}  alt={`Баннер акции "${props.item.title}"`} className="banner"/>
              </picture>
    </Link>);
}

export default Banner ;