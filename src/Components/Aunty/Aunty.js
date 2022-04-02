import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse]=useContext(RingContext)
    const handleIncreaseHouse= () =>{
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div>
            <h1>This is aunty page</h1>
            <p>House: {house}</p>
            <button onClick={handleIncreaseHouse}>Add house</button>
        </div>
    );
};

export default Aunty;