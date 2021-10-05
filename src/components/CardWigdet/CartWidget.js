import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';


function MyCart() {

    return (

        <>
            <div className="cart-container">
                <FaShoppingCart className="svgCart"> </FaShoppingCart>

                <p className="qtyCart"></p>
            </div>


        </>
    )
}

export default MyCart



