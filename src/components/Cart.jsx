import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { savedItemsActions } from '../store/savedItemsSlice';
import { uiActions } from '../store/uiSlice';
import Modal from './Modal';
import { useRef, useEffect, useState } from 'react';

// Example child component to demonstrate reference changes
function CartItem({ item, onUpdate, config }) {
    console.log('CartItem rendered with:', item.name);
    console.log('Config reference:', config); // This will show different references on each render
    
    return (
        <li className="cart-item">
            <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${Number(item.totalPrice).toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
                <button onClick={() => onUpdate(item.id, 'decrease')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdate(item.id, 'increase')}>+</button>
            </div>
        </li>
    );
}

export default function Cart() {
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const isVisible = useSelector(state => state.ui.cartIsVisible);
    const dispatch = useDispatch();
    
    // Example of useRef with primitive value
    const counterRef = useRef(0);
    const [renderCount, setRenderCount] = useState(0);

    // Function to demonstrate useRef behavior
    const handleRefIncrement = () => {
        counterRef.current += 1;
        console.log('Counter value:', counterRef.current); // This will update
        // But the component won't re-render
    };

    // Function to demonstrate useState behavior
    const handleStateIncrement = () => {
        setRenderCount(prev => prev + 1);
        // This will trigger a re-render
    };

    // This object will have a new reference on every render
    const config = {
        showPrice: true,
        showQuantity: true
    };

    // This function will have a new reference on every render
    const handleItemUpdate = (itemId, action) => {
        if (action === 'increase') {
            dispatch(cartActions.addItemToCart(cartItems.find(item => item.id === itemId)));
        } else {
            dispatch(cartActions.removeItemFromCart(itemId));
        }
    };

    // Using useRef to maintain the same reference across renders
    const stableConfigRef = useRef({
        showPrice: true,
        showQuantity: true
    });

    const handleClearCart = () => {
        dispatch(cartActions.emptyCart());
    };

    const handleClose = () => {
        dispatch(uiActions.hideCart());
    };

    return (
        <div>
            <Modal open={isVisible} onClose={handleClose}>
                <div className="cart">
                    <h2>Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.id} className="cart-item">
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price: ${Number(item.totalPrice).toFixed(2)}</p>
                                        </div>
                                        <div className="cart-item-actions">
                                            <button onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}>
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => dispatch(cartActions.addItemToCart(item))}>
                                                +
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={handleClearCart}>Clear Cart</button>
                        </>
                    )}
                    <div className="cart-total">
                        <p>Total Items: {totalQuantity}</p>
                    </div>
                </div>
                {cartItems.length > 0 && <button>Go to checkout</button>}
                <button onClick={handleClose}>close</button>
            </Modal>
        </div>
    );
}