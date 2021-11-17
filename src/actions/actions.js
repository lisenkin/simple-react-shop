export const itemLoaded = (item) => {
    return {
        type: 'ITEM_LOADED',
        payload: item
    }
}
export const itemsLoading = () => {
    return {
        type: 'ITEMS_LOADING',
    }
}
export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}
export const removeToCart = (id) => {
    return {
        type: 'REMOVE_TO_CART',
        payload: id
    }
}
export const allRemoveToCart = (id) => {
    return {
        type: 'ALL_REMOVE_TO_CART',
        payload: id
    }
}