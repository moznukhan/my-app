import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Pd = (props) => {

     console.log(props)
    const {name,img,seller,price,stock} = props.product
    return (
        <div className='product'>
            <div className='product-images'><img src={img} alt="" /></div>
            <div className='product-name'>
            <h3>{name}</h3> <br />
        
            <p>by:<small>{seller}</small></p><br />
            <h2>${price}</h2><br />
            <p> only{stock}left in stock-order soon</p><br />
            <button className='product-btn' onClick={() => props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} />
            add to cart</button>
            </div>
            
        </div>
    );
};

export default Pd;