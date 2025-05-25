import logo from "../assets/logo.jpg"
import { Button } from "./Button"
import { useSelector,useDispatch} from "react-redux"
import { cartActions } from "../store/cartSlice";
import { savedItemsActions } from "../store/savedItemsSlice";
import { uiActions } from "../store/uiSlice";
import {useRef,useEffect} from "react";

export default function Header() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

   
  
    const named = useRef(null);

    const totalPrice = useSelector(state => state.cart.totalPrice);
    const dispatch = useDispatch();

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo" />
                <h1 className="title">React food applications</h1>
       
                <p>Total price:{totalPrice}</p>
                <button onClick={() => dispatch(cartActions.emptyCart())}>delete cart</button>
                <button onClick={() => dispatch(savedItemsActions.addItemToCart(item))}>saved Items</button>

                <nav>
                    <Button onClick={() => dispatch(uiActions.toggleCart())}>Cart ({totalQuantity})</Button>
                </nav>
            </div>
        </header>
    );
}