console.log(document);
const cartBtn = document.getElementById('cart');
const cartModal = document.querySelector('.cart');
const cartCloseBtn = cartModal.querySelector('.cart-close');




const openCart = () => {
    cartModal.style.display = 'flex'
}

const closeCart = () => {
    cartModal.style.display = ''
}

/*cartBtn.onclick = openCart*/
cartBtn.addEventListener('click', openCart)

cartCloseBtn.onclick = () => console.log('first')
cartCloseBtn.onclick = () => console.log('second')
cartCloseBtn.onclick = () => console.log('third')

cartCloseBtn.onclick = closeCart





