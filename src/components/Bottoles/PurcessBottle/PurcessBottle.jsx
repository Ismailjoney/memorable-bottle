import React from 'react';
import './purcessbottle.css'

const PurcessBottle = ({ bottle }) => {
    const { name, img, price } = bottle
    return (
        <div className='purcessBtl'>
            <img src={img} alt="bottle" />
            <div>
                <p><span>{name}</span></p>
                <p><span>{price} tk</span></p>
            </div>
        </div>
    );
};

export default PurcessBottle;