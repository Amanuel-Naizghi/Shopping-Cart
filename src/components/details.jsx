import FetchData from "./fetchData"
import { useLocation } from "react-router-dom";
import Header from './header';
import { cartData } from "../main";
import { filterData } from "./filterCartData";
import {useState} from 'react';

export default function Details(){
    const [itemsCount,setItemsCount]=useState(filterData().length);

    const productsData=FetchData();
    const location= useLocation();
    const id=location.state;
    let clickedProduct=null;

    (productsData.products)?clickedProduct=productsData.products[id-1]:clickedProduct=null;
    console.log(clickedProduct);
    (clickedProduct)&&console.log(clickedProduct.name);

    const addItem=(e)=>{      
        e.target.className='item-added';
        e.target.textContent='✓ Item Added!'; 
        cartData.push(productsData.products[id-1]);
        console.log(cartData);
        setItemsCount(filterData().length);

        setTimeout(()=>{
            e.target.className='add-to-cart';
            e.target.textContent='Add To Cart';
        },2000);
    }

    return(
        <div className="detail-container">
            <Header itemsCount={itemsCount}></Header>
            <div className="detail-content-container">
                <div className="detail-image-container">
                    {
                        (clickedProduct)&&(
                            <img src={clickedProduct.image} alt={clickedProduct.name} />
                        )
                    }
                </div>
                <div className="detail-info-container">
                    {
                        (clickedProduct)&&(
                            <div className='info-container' key={clickedProduct.id}>
                                <h2 className="item-name">{clickedProduct.name}</h2>
                                <p className='price'>${clickedProduct.price}</p>
                                <p className="details">{clickedProduct.description}</p>
                                <p className="rating">⭐ {clickedProduct.rating.rate} ({clickedProduct.rating.count} reviews)</p>
                                <button className="add-to-cart"  onClick={addItem}>Add To Cart</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}