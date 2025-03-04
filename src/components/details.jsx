import FetchData from "./fetchData"
import { useLocation } from "react-router-dom";
import Header from './header';
import { cartData } from "../main";

export default function Details(){
    const productsData=FetchData();
    const location= useLocation();
    const id=location.state;
    let clickedProduct=null;

    (productsData.products)?clickedProduct=productsData.products[id-1]:clickedProduct=null;
    console.log(clickedProduct);
    (clickedProduct)&&console.log(clickedProduct.name);

    const addItem=(e)=>{
        if(productsData.products){
            cartData.push(productsData.products[id-1]);
            console.log(cartData);
        }
    }

    return(
        <div className="detail-container">
            <Header></Header>
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
                                <button  onClick={addItem}>Add To Cart</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}