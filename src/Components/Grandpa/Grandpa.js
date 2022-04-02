import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
//create and export context
export const RingContext = createContext("diamond")

const Grandpa = () => {
    const ornament = 'Dimond Ring'
    const [house, setHouse] = useState(1);
    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (

        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h1>Grandpa</h1>
                <button onClick={handleBuyHouse}>Buy House</button>
                <p>House: {house}</p>
                <div style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;