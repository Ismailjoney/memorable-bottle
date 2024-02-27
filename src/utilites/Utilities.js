const getCartLocalStorage = () => {
    const getCart = localStorage.getItem('cart')

    if (getCart) {
        return JSON.parse(getCart)
    }
    return []
}


const saveCartLogalStorage = (cart) => {
    const cartStringfiyed = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfiyed)
}

const addToLocalStorage = (id) => {

    const cart = getCartLocalStorage()
    cart.push(id)
    saveCartLogalStorage(cart)

}


const removeToLocalStorage = id => {
    const cart = getCartLocalStorage()
    const remaining = cart.filter(idx => idx !== id)
    saveCartLogalStorage(remaining)
}

export { addToLocalStorage, getCartLocalStorage, removeToLocalStorage }