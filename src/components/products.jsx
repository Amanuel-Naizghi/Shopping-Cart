import {useState} from 'react';
import FetchData from './fetchData';
import Header from './header';
import {Link} from 'react-router-dom';
import { cartData } from '../main';

export default function Products(){
    const productsData=FetchData();
    console.log(productsData.products);

    const addItem=(e)=>{
        const itemId=e.target.getAttribute('data-key');
        const itemToAdd=productsData.products.filter((product)=>product.id==itemId);
        cartData.push(itemToAdd[0]);
        console.log(cartData);
    }
    

    return(
        <div className="products-container">
            <Header></Header>
            <div className='all-products'>
                <h1 className="products-header">All Products</h1>
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
