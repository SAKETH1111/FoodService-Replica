import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    console.log("cartItems",cartItems);
    const dispatch = useDispatch();

    const handleClearCart= ()=>{
        dispatch(clearCart());
    }


    return(
    <div className="text-center p-4 m-4">
        <h1 className="font-bold text-xl">Cart</h1>
        <button className="font-bold text-xl text-white bg-gray-400 rounded-lg p-2 m-2" onClick={handleClearCart}>Clear Cart</button>
        <div>
            {cartItems.length==0 && <h1 className="font-bold text-xl p-2 m-2">Cart is Empty, Please Add Items to the Cart!!!</h1>}
            <ItemList items={cartItems}></ItemList>
        </div>
    </div>);
}

export default Cart;