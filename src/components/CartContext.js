import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const IGV = 0.18;
    const [cartList, setCartList] = useState([]);

    const addToCart = (props, contador) => {

        const productFinded= cartList.find((item) => item.id === props.item.id)

        console.log("encontrado finded");
        console.log(productFinded);

        const productMap = cartList.map((item) => item)
        console.log("productMap");
        console.log(productMap);
            
        if ( typeof productFinded === "undefined" ) {
            console.log("NO encontrado");
            setCartList([
                ...cartList, //spread operator
                {
                id: props.item.id,
                name: props.item.name,
                image: props.item.image,
                price: props.item.price,                
                qty: contador,
                stock: props.item.stock    
                }
            ]);          
        } else {
            console.log("ENCONTRADO");
            const productUpdate = cartList.map((item) => {
                if(item.id === props.item.id) {   
                  let newQty = item.qty + contador;     
                  return {
                    ...item,                              
                    qty: newQty
                  }        
                }
                return item
              });
              
              console.log("productUpdate=");
              console.log(productUpdate);

              setCartList(productUpdate);
              
              console.log("cartList=");
              console.log(cartList);
        }
    }

    const removeItem = (itemId) => {
        console.log("paso x removeList=");
        const newCartList = cartList.filter((item) => item.id !== itemId);
        setCartList(newCartList);
    }

    const clearCart = () => {
        setCartList([]);
    }

    const calcItemQty = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const calcSubTotal = () => {
        let precioCantidad = cartList.map(item => item.price * item.qty);
        return (precioCantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)).toFixed(2);
    }

    const calcIGV = () => {

        return (calcSubTotal() * IGV).toFixed(2);
    }

    const calcTotal = () => {
        return (calcSubTotal() * (1 + IGV)).toFixed(2);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCart, calcItemQty, calcSubTotal, calcIGV, calcTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;