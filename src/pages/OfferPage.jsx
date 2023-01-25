import { Context } from "../Context";
import {useContext } from "react";

function OfferPage() {

    const {offer} = useContext(Context)

    return ( 
    <div className="offer container">
        <img src={`${offer.img}`} srcset={`${offer.imgRetina}`} alt={`Баннер акции "${offer.title}"`} className="offer__img" />
        <h2 className="offer__title">{offer.title}</h2>
        <p className="offer__date">{offer.date}</p>
        {
            offer.descr.map((item) => {
                return (
                    <p className="offer__descr">{item}</p>
                )
            })
        }

    </div> );
}

export default OfferPage;