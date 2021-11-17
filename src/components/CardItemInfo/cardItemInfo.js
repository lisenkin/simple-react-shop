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
                    item
                }
            })
            return
        }
    }, [idItem, items])

    
    //add  localstorage for currentid 

  
    
    const currentCard = JSON.parse(localStorage.getItem('currentCard'))
    console.log(currentCard)
    
    return (
        <div className='info-item__wrap'>
            <div className='info-img'>
                <img src={currentCard.image} alt={'sorry without pic:('} />
            </div>
            <div className='info-item'>
                <h4 className='item-title'>{currentCard.name}</h4>
                <p className='description'>{currentCard.brand}</p>
                <p className='description'>{currentCard.weight} <span>kg</span></p>
                <h3 className='item-price'>{currentCard.price} <span>nok</span></h3>
                <ul>
                {
                    currentCard.options.map((option, i) => (
                        
                        <li >
                            <p>{option.color}</p>
                            <p>
                                { 
                                option.power.map((kindOfPower, i) => (
                                    <span key={i}>{kindOfPower}</span> 
                                ))}
                            </p>
                            <p>{option.quantity}</p>
                        
                            </li>
                    ))
                }
                </ul>
                

                <ButtonInCart cart={cart} id={idItem} addToCart={addToCart} allRemoveToCart={allRemoveToCart} />
            </div>
        </div>
    )
}
const mapStateToProps = ({ items, cart, item }) => {
    return {
        items: items.allItem,
        cart: cart.cartItems,
        item: item
    }
}
const mapDispatchToProps = {
    addToCart,
    allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CardItemInfo)  