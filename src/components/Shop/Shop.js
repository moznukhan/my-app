import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Order from '../Order';
import MB from '../Order';
import Pd from '../Product/Pd';
import './Shop.css'
const Shop = () => {
    const products15 = fakeData.slice(0,15)
 const [product,setProduct] = useState(products15);
 const [cart,setCart] = useState([]);

 const handleAddProduct = (product) =>{
    const newCart = [...cart,product];
    setCart(newCart)
 };
 const totalPrice = cart.reduce((total,prd)=>total+prd.price,0);
    let shipping = 0
    if(totalPrice > 35){
        shipping= 0
    }
    else if ( totalPrice > 0) {
        shipping = 12; 
    }else if(totalPrice > 15) {
        shipping = 4.99
    };
    const tax = totalPrice/10
    const grandTotal = (shipping+tax + totalPrice).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number (precision)
    }
 return (
        
        <div className='shop-container'>
     
            <div className="product-container">
            
            {
                
                product.map(product => 
                    <Pd 
                        product={product}  handleAddProduct={handleAddProduct}>
                       
                    </Pd>)
                   
            }
           </div>
           <div className='cart-container'>
          <h2>Order Summary:</h2>
             <h4>Order items:{cart.length}</h4>           
             <h4>shipping cost: ${shipping}</h4>
             <h4>tax:${formatNumber(tax)}</h4>
             <h4>product price: ${formatNumber(totalPrice)}</h4>
             <h2>total price: ${grandTotal}</h2>
             <button className='confirm-btn'>ORDER CONFIRM </button>
           </div>
        </div>
           
        
        
    );
};

export default Shop;