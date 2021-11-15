import React, { useState, useEffect } from 'react'
import './cardItemInfo.css'
import { connect } from 'react-redux'
import { ButtonInCart } from '../CardListItem/cardListItem'
import { addToCart, allRemoveToCart } from '../../actions/actions'

const CardItemInfo = (props) => {
    const {
        items,
        idItem,
        cart,
        addToCart,
        allRemoveToCart
    } = props

   
    const [item, setItem] = useState({})
   
    useEffect(() => {
        if (items.length) {
            setItem(() => {
                const [item] = items.filter(({ id }) => id === idItem)
                return {
                    ...item
                }
            })
            return
        }
    }, [idItem])

    
    const { name, price, image,weight } = item
    return (
        <div className='info-item__wrap'>
            <div className='info-img'>
                <img src={image} alt={'sorry without pic:('} />
            </div>
            <div className='info-item'>
                <h4 className='item-title'>{name}</h4>
                
                <p className='description'>{weight}</p>
                
                <h3 className='item-price'>{price} <span>nok</span></h3>

                <ButtonInCart cart={cart} id={idItem} addToCart={addToCart} allRemoveToCart={allRemoveToCart} />
            </div>
        </div>
    )
}
const mapStateToProps = ({ items, cart }) => {
    return {
        items: items.allItem,
        cart: cart.cartItems
    }
}
const mapDispatchToProps = {
    addToCart,
    allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CardItemInfo)  