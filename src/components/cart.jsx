import {useState} from 'react';
import Header from './header';
import { cartData } from '../main';

export default function Cart(){
    const [cartItems,setCartItems]=useState([]);

    return(
        <div className='cart-page-container'>
            <Header></Header>
            <div className="your-cart">Your Cart</div>
            <div className="cart-items">

            </div>
        </div>
    )
}