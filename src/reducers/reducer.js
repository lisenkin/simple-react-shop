const intitialState = {
    items: {
        allItem: [],
        loading: true
    },
    cart: {
        cartItems: []
    }
}

const updateCart = (state, idx, numCount = 1) => {
    const { cartItems } = state.cart

    const item = state.items.allItem.find(({ id }) => id === idx)
    const indxItem = cartItems.findIndex(({ id }) => id === idx)
    const oldItem = cartItems[indxItem]

    const newItem = updateItem(item, oldItem, numCount)
    return {
        ...state,
        cart: {
            cartItems: updateCartItem(cartItems, newItem, indxItem)
        }
    }
}
const updateCartItem = (cart, item, ind) => {

    if (item.count === 0) {
        return [
            ...cart.slice(0, ind),
            ...cart.slice(ind + 1)
        ]
    }
    if (ind === -1) {
        return [
            ...cart,
            item
        ]
    }
    return [
        ...cart.slice(0, ind),
        item,
        ...cart.slice(ind + 1)
    ]

}
const updateItem = (item, cartItem = {}, numCount) => {
    const {
        id = item.id,
        count = 0,
        name = item.name,
        price = 0,
        color = item.options[0].color,
        quantity = item.options[0].quantity
       } = cartItem
    return {
        id,
        name,
        count: count + numCount,
        price: price + numCount * item.price,
        color,
        quantity
    }
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'ITEM_LOADED':
            return {
                ...state,
                items: {
                    allItem: action.payload,
                    loading: false
                }
            }
        case 'ITEMS_LOADING':
            return {
                ...state,
                items: {
                    loading: true
                }
            }
        case 'ADD_TO_CART':
            return updateCart(state, action.payload, 1)

        case 'REMOVE_TO_CART':
            return updateCart(state, action.payload, -1)

        case 'ALL_REMOVE_TO_CART':

            const item = state.cart.cartItems.find(({ id }) => id === action.payload)

            return updateCart(state, action.payload, -item.count)

        default:
            return state
    }
}
export default reducer
