import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { savedItemsActions } from '../store/savedItemsSlice';

export function Button({ children, item, ...props }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (children === 'Add to cart') {
            dispatch(cartActions.addItemToCart(item));
        } else if (children === 'save for later') {
            dispatch(savedItemsActions.saveForLater(item));
            
        }
    };

    return (
        <button onClick={handleClick} {...props}>
            {children}
        </button>
    );
}