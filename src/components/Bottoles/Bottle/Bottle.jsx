import React from 'react';
import './bottle.css'


const Bottle = ({bottle, handdleBuyNow}) => {
    
    const{img, name, price, seller} = bottle


    return (
        <div className='bootleCard'>
            <img src={img} alt="Bottle"/>
            <h6>{name}</h6>
            <h6>Price : {price} tk</h6>
            <h6>Seller: {seller}  </h6>
            <button onClick={() => handdleBuyNow(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;