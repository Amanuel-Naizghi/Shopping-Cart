import {useState} from 'react';
import Header from './header';
import cart from '../assets/cart.png';
import remove from '../assets/remove.png';
import { filterData } from './filterCartData';
import {cartData} from '../main';

let itemsCount=0;

function Cart(){
    let myNewCart=filterData();//Filtering the repeated items and adding the count

    const[cartItems,setCartItems]=useState(myNewCart);
    const[itemsCount,setItemsCount]=useState(myNewCart.length);
//Adding or deduction of the number of items selected after user clicks the + or - button on the carts
    const handleChange=(id,newCount)=>{
        setCartItems(prevData=>
            prevData.map(item=>
                (item.id===id&&newCount>0)?{...item,count:newCount}:item
            )
        )
        console.log(cartItems);
    }
//Used for removing items after clicks the delete button
    const handleRemove=(id)=>{
        setCartItems(prevData=>
            prevData.filter(item=>
                item.id!==id
            )
        )
        for(let i=cartData.length-1;i>=0;i--){
            if(cartData[i].id===id){
                cartData.splice(i,1);
            }
        }
        console.log(cartData);
        setItemsCount(itemsCount-1);
        console.log(cartItems);
    }
//Calculating the total cost from the selected items
    const handleCost=(cartItems)=>{
        let myCost=0;
        cartItems.map(item=>myCost+=item.price*item.count);
        
        return myCost;
    }

    return(
        <div className='cart-page-container'>
            <Header itemsCount={itemsCount}></Header>
            <div className="cart-page">
                <div className="your-cart">
                    <img src={cart} alt='cart'/> 
                    <h1 className='cart-header'>Your Cart</h1>
                </div>
                <div className="cart-items-container">
                    {cartItems.length>0&&(
                        cartItems.map(item=>(
                            <div className='cart-item' key={item.id}>
                                <div className="name-price-container">
                                    <h2 className='item-name'>{item.name}</h2>
                                    <p className="price">${item.price}</p>
                                </div>
                                <div className="order">
                                    <button className='add-minus' onClick={()=>handleChange(item.id,item.count+1)}>+</button>
                                    <input type="number" name='quantity' min='1' value={item.count} 
                                    onChange={(e)=>handleChange(item.id,parseInt(e.target.value))}/>
                                    <button className='add-minus' onClick={()=>handleChange(item.id,item.count-1)}>-</button>
                                    <button className='remove' onClick={()=>handleRemove(item.id)}>
                                        <img src={remove} alt="remove" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="cart-cost">
                        <h2 className="total-cost">
                            Total: ${handleCost(cartItems).toFixed(2)}
                        </h2>
                        <button>Check out now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export{Cart,itemsCount}