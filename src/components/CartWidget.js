import { useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const test = useContext(CartContext);
    return (
        <div className="containerIconCart bordeVerde " >        
            <Link to='/cart'>
                <BsHandbag className="styleIconCart bordeAzul"/>                
                {
                    test.cartList.length > 0 &&
                        <div className="styleBubbleCart bordeRojo">{test.calcItemQty()}</div> 
                }
            </Link>            
        </div>         
    );
}

export default CartWidget;