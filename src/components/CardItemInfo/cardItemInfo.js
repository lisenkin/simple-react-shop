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
        allRemoveToCart,
    } = props


   const [item, setItem] = useState({})
   const [optionId, setOptionId] = useState(0)

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

//options is really awfull :)
    return (
        <div className='info__item_wrap'>
            <div className='info__img'>
                <img src={currentCard.image} alt={'sorry without pic:('} />
            </div>
            <div className='info__item'>
                <h4 className='item__title'>{currentCard.name}</h4>
                <p className='description'>{currentCard.brand}</p>
                <p className='description'>{currentCard.weight} <span>kg</span></p>
                <h3 className='item__price'>{currentCard.price} <span>nok</span></h3>
                  <ul>
                    {
                        currentCard.options.map((option, i) => (
                            <button className="item__color" style={{ backgroundColor: option.color , color: option.color }} onClick= {() => (setOptionId(i)) }>  color  </button>
                        ))
                    }
                 </ul>
                     {
                         (currentCard.options[optionId].hasOwnProperty("power")) ? <p className="options" > Power: {
                             currentCard.options[optionId].power.map((kindOfPower, i) => (<button>{kindOfPower} </button>))}</p>
                             : ""
                     }
                     {
                         (currentCard.options[optionId].hasOwnProperty("storage")) ? <p className="options">Storage: {
                             currentCard.options[optionId].storage.map((kindOfStorage, i) => (<button>{kindOfStorage} </button>))}</p>
                             : ""
                     }
               <p className="options">Available: {currentCard.options[optionId].quantity}</p>



               <ButtonInCart  cart={cart} optionId={optionId} id={idItem} addToCart={addToCart} allRemoveToCart={allRemoveToCart} isDisabled={currentCard.options[optionId].quantity === 0 }/>
            </div>
        </div>
    )
}
const mapStateToProps = ({ items,cart, item}) => {
    return {
        items: items.allItem,
        cart: cart.cartItems,
        item: item,
    }
}
const mapDispatchToProps = {
    addToCart,
    allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CardItemInfo)
