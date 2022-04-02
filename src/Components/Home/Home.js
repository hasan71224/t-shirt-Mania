import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts]=useTShirts()
    const [cart, setCart]=useState([]);

    //Add to Cart
    const handleAddToCart=(selectedItem)=>{
        const exists=cart.find(tShirt=> tShirt._id === selectedItem._id)
        if(!exists){
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else{
            alert("Item Already Added..")
        }
        
    }
    // remove from cart
    const handleRemoveFromCart=(selectedItem)=>{
        const rest= cart.filter(tShirts=> tShirts._id !== selectedItem._id)
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-Container'>
                {
                    tShirts.map(tShirt=> <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    >
                    </TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;