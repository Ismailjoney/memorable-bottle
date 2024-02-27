import React, { useEffect, useState } from 'react';
import Bottle from './Bottle/Bottle'
import './bottles.css'
import PurcessBottle from './PurcessBottle/PurcessBottle';
import { addToLocalStorage, getCartLocalStorage, removeToLocalStorage } from '../../utilites/Utilities';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [purcessBottle, setPuressBottle] = useState([])

    useEffect(() => {
        fetch(`bottle.json`)
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    //get producu id localstorage 
    useEffect(() => {

        if (bottles.length > 0) {
            const getLocalStorageProductId = getCartLocalStorage()

            const saveCart = []
            for (const id of getLocalStorageProductId) {

                const findBottleById = bottles.find(bottle => bottle.id === id)

                if (findBottleById) {
                    saveCart.push(findBottleById)
                }
            }
            setPuressBottle(saveCart)
        }
    }, [bottles])


    const handdleBuyNow = (bottle) => {
        const newpurcessBottle = [...purcessBottle, bottle]
        setPuressBottle(newpurcessBottle)
        addToLocalStorage(bottle.id)
    }


    const handdleRemoveFormCart = id => {
        const remainingPurcessBottle = purcessBottle.filter(bottle => bottle.id !== id)
        setPuressBottle(remainingPurcessBottle)
        removeToLocalStorage(id)
    }


    return (
        <div>

            <h3>Puecess Bottole :{purcessBottle.length}</h3>
            <div className='purcessBottle'>
                {purcessBottle.map(bottle => <PurcessBottle
                    bottle={bottle}
                    key={bottle.id}
                    handdleRemoveFormCart={handdleRemoveFormCart}
                ></PurcessBottle>)}
            </div>
            <h3>Total Boottle :{bottles.length}</h3>
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