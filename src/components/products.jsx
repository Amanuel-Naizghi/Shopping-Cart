import {useState} from 'react';
import FetchData from './fetchData';
import Header from './header';
import {Link} from 'react-router-dom';
import { cartData } from '../main';
import {filterData} from './filterCartData';
import { useLocation } from "react-router-dom";

export default function Products({title='All Products'}){
    const [itemsCount,setItemsCount]=useState(filterData().length);

    const location= useLocation();
    const name=location.state;

    const productsData=FetchData(name);
    console.log(productsData.products);

    const addItem=(e)=>{
        e.target.className='item-added';
        e.target.textContent='✓ Item Added To Cart!';
        const itemId=e.target.getAttribute('data-key');
        const itemToAdd=productsData.products.filter((product)=>product.id==itemId);
        cartData.push(itemToAdd[0]);
        console.log(cartData);
        setItemsCount(filterData().length);

        setTimeout(()=>{
            e.target.className='add-to-cart';
            e.target.textContent='Add To Cart';
        },2000);
    }
    

    return(
        <div className="products-container">
            <Header itemsCount={itemsCount}></Header>
            <div className='all-products'>
                <h1 className="products-header">{(name===null)?title:name}</h1>
                {(productsData.products)?
                <div className='products-list-container'>
                    {
                        productsData.products.map(product=>(                            
                            <div className='products-list' key={product.id}>
                                <Link to='/details' state={product.id}>
                                    <div className="item-container" key={product.id}>
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-details">
                                            <h2 className="item-name">{product.name}</h2>
                                            <p className="item-price">${product.price}</p>
                                            <p className="rating" key={product.id}>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
                                        </div> 
                                    </div>
                                </Link>
                                <button data-key={product.id} className="add-to-cart" onClick={addItem}>
                                    Add To Cart
                                </button>
                            </div>
                        ))
                    }
                </div>
                :(<div>Loading products, just a moment!</div>)
                }       
            </div>
        </div>
        
    );
}
