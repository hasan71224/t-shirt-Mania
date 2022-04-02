import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    //import context valaue
    // const [ornament, house]=useContext(RingContext)
    const [house, setHouse]=useContext(RingContext)
    return (
        <div>
            <h3>Special</h3>
            {/* <p>Gift: <small>{ornament}</small></p> */}
            <p>House: <small>{house}</small></p>n
        </div>
    );
};

export default Special;