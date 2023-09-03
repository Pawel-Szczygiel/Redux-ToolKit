import React from 'react'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';


const CartContainer = () => {
    const dispatch = useDispatch();
    const {cartItems, amount, total} = useSelector(store => store.cart)

   const clear = () => dispatch(clearCart());

    if(amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map(cart => {
                    return <CartItem key={cart.id} {...cart}/>
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={clear}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
