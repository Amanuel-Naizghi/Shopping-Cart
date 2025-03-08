import Cart from '../assets/cart.png';
import {Link} from 'react-router-dom';

export default function Header({itemsCount=0}){

    return(
        <div className="header-container">
            <h2 className='header-logo'>AmanShop</h2>
            <div className="search-container">
                <input className='search' type="text" placeholder='Search Item'/>
                <Link to='/products'><button type='submit' className='search-button'>Search</button></Link>
            </div>
            <div className="products-login-cart">
                <Link to='/products'>Products</Link>
                <Link to='/login'>Login</Link>
                <div className="cart-icon-container">
                    <Link className='cart' to='/cart'>
                        <img src={Cart} alt="Cart" to='cart' />
                    </Link>
                    <p className='cart-counter'>{itemsCount}</p>
                </div>
            </div>
           
        </div>
    ) 
}
