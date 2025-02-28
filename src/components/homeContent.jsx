import { data } from 'react-router-dom';
import electronics from '../assets/electronics3.jpg';
import jewelry from '../assets/jewelry.jpg';
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import FetchData from './fetchData';

export default function HomeContent(){
    let myHomeItem=FetchData();
    let dataFetched=false;
    if(myHomeItem.homeData!==null)dataFetched=true;
    console.log(myHomeItem);
    console.log(dataFetched);
    return(
        <div className="home-content-container">
            <div className="hot-product-container">
                <div className="welcome">
                    <h1>Welcome to ShopWithMe market</h1>
                    <h2>A place where you feel free to pick your choice</h2>
                </div>
                {dataFetched&&
                    <div className="product-img-container">
                        <img src={myHomeItem.homeData.image} alt={myHomeItem.homeData.name} />
                    </div>
                }
                <div className="hot-product">
                    {dataFetched&&
                        <div className="product-deal-container">
                        <h2 className="advertise1">Don't Skip This Amazing Discount!</h2>
                        <p className="advertise2">{myHomeItem.homeData.name}</p>
                        <p className="price">${myHomeItem.homeData.price}</p>
                        <button className="buy-button">Shop Now</button>
                    </div>
                    }
                </div>
            </div>
            <div className="catagories">
                <div className='electronics'>
                    <img src={electronics} alt="electronics"/>
                    <p>Electronics</p>
                </div>
                <div className='jewelry'>
                    <img src={jewelry} alt="electronics" />
                    <p>Jewelry</p>
                </div>
                <div className='men'>
                    <img src={men} alt="electronics" />
                    <p>Men's Clothing</p>
                </div>
                <div className='women'>
                    <img src={women} alt="electronics" />
                    <p>Women's Clothing</p>
                </div>
            </div>
            <div className='customer-reviews-container'>
                <h1 className="customer-header">Our Customer reviews</h1>
                <div className="customer-reviews">
                    <div className='customers'>
                        <p className="comment">
                            <em>"Excellent quality and great customer service"</em>
                        </p>
                        <p className="name">
                            --  John Foster.
                        </p>
                    </div>
                    <div className='customers'>
                        <p className="comment">
                            <em>"As an old man technology is difficult for me but buying stuff here is a breeze"</em>
                        </p>
                        <p className="name">
                            --  Lane Bermulindez.
                        </p>
                    </div>
                    <div className='customers'>
                        <p className="comment">
                            <em>"Great for easy presents, fast delivery too..."</em>
                        </p>
                        <p className="name">
                            --  Ellie Brodwick.
                        </p>
                    </div>
                </div> 
            </div>
            <div className="footer">
                <div className='contacts'>
                    <div className='address'>
                        <p className='title'>ShopWithMe</p>
                        <p>143 York Street</p>
                        <p>New York, NY 10001</p>
                        <p>Email: support@ezshop.com</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                    <div className='help'>
                        <p className='title'>Help & Support</p>
                        <p className='help-item'>FAQ</p>
                        <p className='help-item'>Returns & Exchanges</p>
                        <p className='help-item'>Shipping & Delivery</p>
                        <p className='help-item'>Terms & Conditions</p>
                        <p className='help-item'>Privacy Policy</p>
                    </div>
                    <div className='payment-methods'>
                        <p className='title'>Payment Methods</p>
                        <button>Paypal</button>
                        <button>Visa</button>
                        <button>Google pay</button>
                        <button>Master Card</button>
                    </div>
                </div>
                <div className='last'>
                    <p>© 2025 ShopWithMe. All rights reserved.</p>
                </div>
            </div>
        </div>   
    );
}