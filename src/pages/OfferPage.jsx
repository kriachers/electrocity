import { Context } from "../Context";
import {useContext } from "react";

function OfferPage() {

    const {offer} = useContext(Context)

    return ( 
    <div className="offer container">
        
        <picture> 
            {
                offer.imgWebp ? <source className="offer__img" srcSet={`${offer.imgWebp}, ${offer.imgWebpRetina} 2x`} type="image/webp"/> : ''
            }
                <img className="offer__img" src={`${offer.img}`}  alt={`Баннер акции "${offer.title}"`}/>
        </picture>
        
        
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