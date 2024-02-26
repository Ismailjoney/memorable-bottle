import React, { useEffect, useState } from 'react';
import Bottle from './Bottle/Bottle'
import './bottles.css'
import PurcessBottle from './PurcessBottle/PurcessBottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const[purcessBottle, setPuressBottle] = useState([])

    useEffect(() =>{
        fetch(`bottle.json`)
        .then(res => res.json())
        .then(data => setBottles(data))
    } ,[])

    const handdleBuyNow = (bottle) => {
        const newpurcessBottle = [...purcessBottle, bottle]
        setPuressBottle(newpurcessBottle)
        console.log('clicked', bottle)
    }


    return (
        <div>
            <h3>{bottles.length}</h3>
            <div className='purcessBottle'>
                {purcessBottle.map(bottle => <PurcessBottle
                bottle={bottle}
                key={bottle.id}
                ></PurcessBottle>)}
            </div>
            <div className='bottleCompo'>
                {bottles.map(bottle => <Bottle
                bottle={bottle}
                key={bottle.id}
                handdleBuyNow={handdleBuyNow}
                ></Bottle>)}
            </div>
        </div>
    );
};

export default Bottles;