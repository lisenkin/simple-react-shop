import React from 'react'
import './Cart.css'
import { connect } from 'react-redux'


import {
  addToCart,
  removeToCart,
  allRemoveToCart
} from '../../actions/actions'

const Cart = ({ cart, addToCart, removeToCart, allRemoveToCart }) => {

  const renderRow = (item, i) => {
    const { id, name, quantity,price, count } = item
    return (
      <tr key={id}>
        <td>{i + 1}</td>
        <td>{name +" "+ quantity }</td>
        <td>
          <button className='dec' onClick={() => removeToCart(id)}>-</button>
          {count}
          <button className='inc' onClick={() => addToCart(id)}>+</button>
        </td>
        <td>{price}  <span>nok</span></td>
        <td>
          <button className='del' onClick={() => allRemoveToCart(id)}>x</button>
        </td>
      </tr>
    )
  }
  const totalPrice = cart.reduce((t, pr) => {
    return t + pr.price;
  }, 0);
  return (
    cart.length ?
      <div>
        <table>
          <thead>
            <tr className="thead-tr">
              <th> # </th>
              <th> Product  </th>
              <th> Quantity </th>
              <th> Price </th>
              <th> Clear </th>
            </tr>
          </thead>
          <tbody>
            {cart.map(renderRow)}
          </tbody>
        </table>
        <h3 className="total-price">total: {totalPrice} <span>nok</span></h3>
      </div>
      :
      <div className='empty-cart'>The cart is empty :(</div>
  )
}
const mapStateToProps = ({ cart }) => {
  return {
    cart: cart.cartItems
  }
}
const mapDispatchToProps = {
  addToCart,
  removeToCart,
  allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart) 