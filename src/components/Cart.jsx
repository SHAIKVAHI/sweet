import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { savedItemsActions } from '../store/savedItemsSlice';

export default function Cart() {
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(cartActions.emptyCart());
    };

    console.log('Current cart items:', cartItems);
    console.log('Total quantity:', totalQuantity);

    return (
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
    );
} 