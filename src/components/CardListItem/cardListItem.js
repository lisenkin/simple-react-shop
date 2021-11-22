import React, { useState, useEffect } from 'react'
import './cardListItem.css'
import { connect } from 'react-redux'
import { addToCart, allRemoveToCart } from '../../actions/actions'
import cn from 'classnames'

export const ButtonInCart = ({ cart, id, addToCart, allRemoveToCart, isDisabled }) => {
    const [itemInCart, setItemInCart] = useState(false)
    const item = cart.filter(item => item.id === id)
   
    useEffect(() => {
        if (item.length > 0) {
            setItemInCart(true)
            return
        }
        setItemInCart(false)
    }, [cart, item.length])

    const classButton = cn({
        'item-button': true,
        'item-in-cart': itemInCart
    })
    return (
        itemInCart ? 
        <button className={classButton}
        onClick={() => allRemoveToCart(id)} disabled={isDisabled}>
        Added
       </button>
        :  
        <button className={classButton}
        onClick={() => addToCart(id)} disabled={isDisabled}>
        Add to Cart
        </button>
    )
}

const CardListItem = ({ item, addToCart, allRemoveToCart, cart, showInfo }) => {
    
    return (
        <div className="shop-item">

            <div className="img-wrap" onClick={() => { showInfo(item.id);
                 localStorage.setItem('currentCard', JSON.stringify(item))}}>
                <img src={item.image} alt={'Click for Details'}  />
            </div>

            <h4 className="item-title">{item.name}</h4>
            <h3 className="item-price">{item.price} <span>nok</span></h3>

            <ButtonInCart cart={cart} id={item.id} addToCart={addToCart} allRemoveToCart={allRemoveToCart} />
    
        </div>
    )
}

const mapStateToProps = ({ cart }) => {
    return {
        cart: cart.cartItems
    }
}
const mapDispatchToProps = {
    addToCart,
    allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CardListItem) 