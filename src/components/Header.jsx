import logo from "../assets/logo.jpg"
import { Button } from "./Button"
import { useSelector,useDispatch } from "react-redux"
import { cartActions } from "../store/cartSlice";
import{savedItemsActions } from "../store/savedItemsSlice";


export default function Header(){

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice=useSelector(state=>state.cart.totalPrice)
    const dispatch = useDispatch();

    return(
       <header id="main-header">
        <div id="title">
            <img src={logo} alt="logo"/>
            <h1 className="title"> React food applications</h1>
            <p>Total price:{totalPrice}</p>
            <button onClick={()=>dispatch(cartActions.emptyCart())}>delete cart</button>
            <button onClick={() => dispatch(savedActions.addItemToCart(item))}>saved Items</button>

            <nav>
                <Button isSelected>Cart ({totalQuantity})</Button>
            </nav>
        </div>
       </header>
    )
}