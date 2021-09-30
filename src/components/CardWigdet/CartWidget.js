import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

const MyCart = () => {
    return (
        <div className="cart-container">
            <FaShoppingCart className="svgCart"> </FaShoppingCart>
            
            <p className="qtyCart">1</p>
        </div>
    )
}

export default MyCart
