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
            <img src={`${props.img}`} alt={`Баннер акции "${props.item.title}"`} className="banner" onClick={() => value.makeOffer(props.item)}/>
    </Link>);
}

export default Banner ;