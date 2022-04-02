import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const{name, picture, price}=props.tShirt
    const {tShirt, handleAddToCart} = props
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: $ {price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;