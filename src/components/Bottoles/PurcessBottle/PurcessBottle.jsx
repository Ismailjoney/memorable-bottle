import React from 'react';
import './purcessbottle.css'

const PurcessBottle = ({ bottle, handdleRemoveFormCart }) => {
    const { name, img, price, id } = bottle
    return (
        <div className='purcessBtl'>
            <img src={img} alt="bottle" />
            <div>
                <p><span>{name}</span></p>
                <p><span>{price} tk</span></p>
                <button onClick={() => handdleRemoveFormCart(id)}>Remove</button>
            </div>
        </div>
    );
};

export default PurcessBottle;