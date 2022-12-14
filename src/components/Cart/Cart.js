import React from 'react'
import {useCartContext } from '../contexts/CartProvider/CartProvider'
import { Link } from 'react-router-dom'



const Cart = () => {

const {cart,removeItem,emptyCart,cartTotal} = useCartContext()

if (cart.length === 0) {
  return (
      <div className="container text-center">
          <h3>Shopping cart empty</h3>
          <hr/>
          <Link to="/" className="btn btn-dark">Go to shop</Link>
      </div>
  )
}


  return (

<div className='container my-5'>
    <h1> Shopping Cart</h1>
    <button onClick={() => emptyCart(cart)} className='btn btn-dark'>Empty shopping cart</button>
    <hr/>
    {cart.map ((item) => (
    <div key={item.id} className='container my-5 '>
    <div className='row'>
        <div key={item.id} className='col-3 ' >
        <img src={item.images} style={{ width: '12rem' }} alt="" />
        </div>
        <div className='col-6 ' >
        <h4> {item.name} </h4>
        <h6>3 day shipping</h6>
        <p>Rating : {item.rating}</p>
        <p>Country origin : {item.countryOrigin}</p>
        <p>Color: {item.color}</p>
        <p>Quantity: {item.cantidad}</p>
        </div>
        <div className='col-3 ' >
         <h5>Price</h5>
         <h6>${item.price}</h6>
         <br/>
         <br/>
         <br/>
         <button onClick={() => removeItem(item.id)} className='btn btn-dark'> eliminate</button>
        </div>
        <hr/>
    </div>
    </div>
))}
 <h4> Total: ${cartTotal()} </h4>
 <Link to="/Checkout" className="btn btn-dark">Finish Shopping</Link>
</div>
)}

export default Cart