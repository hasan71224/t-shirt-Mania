import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    //conditional rendaring option....
    //1. Element variable
    // 2. ternary operator condition ? true : false
    //3.&& operator (Shorthand
    //4. ||
    let command;
    if(cart.length===0){
        command=<p>Please Add At Least One Item.</p>
    }
    else if(cart.length === 1){
        command= <p>Please Add one More.</p>
    }
    else{
        command= <p>Thanks for Adding Item.</p>
    }
    return (
        <div>
            <h1>Selected Item: {cart.length}</h1>
            {
                cart.map(tShirt => <p>
                    Name: {tShirt.name}
                    <button onClick={()=>handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {/* || operator */}
            {cart.length === 0 || <p className='orange'>YEY! You Are Buying</p>}
            {/* && operator (Shorthand) */}
            {cart.length===3 && <div className='orange'>
                <h3>Trygonal</h3>
                <p>Gift at last 3 person</p>
                </div>
            }
            {/* element variable */}
            {command}
            {/* turnary operator */}
            {cart.length !==4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length ===4 && <button className='orange'>Order Review </button>}
        </div>
    );
};

export default Cart;