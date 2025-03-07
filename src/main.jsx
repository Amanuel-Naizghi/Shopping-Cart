import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Products from './components/products.jsx';
import Login from './components/login.jsx';
import {Cart} from './components/cart.jsx';
import Details from './components/details.jsx';
import './styles/homeStyle.css';
import './styles/headerStyle.css';
import './styles/productsStyle.css';
import './styles/detailsStyle.css';
import './styles/cartStyle.css'

let cartData=[];

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/details',
    element:<Details/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

export {cartData};
