import { useSelector, useDispatch } from 'react-redux';
import { savedItemsActions } from '../store/savedItemsSlice';
import { cartActions } from '../store/cartSlice';

export default function SavedItems() {
    const savedItems = useSelector(state => state.savedItems.items);
    const dispatch = useDispatch();

    const handleMoveToCart = (item) => {
        dispatch(cartActions.addItemToCart(item));
        dispatch(savedItemsActions.moveToCart(item.id));
    };

    return (
        <div className="saved-items">
            <h2>Saved for Later</h2>
            {savedItems.length === 0 ? (
                <p>No saved items</p>
            ) : (
                <ul>
                    {savedItems.map(item => (
                        <li key={item.id} className="saved-item">
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: ${Number(item.price).toFixed(2)}</p>
                            </div>
                            <button onClick={() => handleMoveToCart(item)}>
                                Move to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}