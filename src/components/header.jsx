import Cart from '../assets/cart.png';
import '../styles/homeStyle.css';

export default function Header(){

    return(
        <div className="header-container">
            <h2 className='header-logo'>ShopWithMe</h2>
            <div className="search-container">
                <input className='search' type="text" placeholder='Search Item'/>
                <button className='search-button'>Search</button>
            </div>
            <div className="products-login-cart">
                <p>Products</p>
                <p>Login</p>
                <div className="cart-icon-container">
                    <img src={Cart} alt="Cart" />
                    <p className='cart-counter'></p>
                </div>
            </div>
           
        </div>
    ) 
}
