import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverTimestamp } from 'firebase/firestore';
import { doc, getDoc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);
    test.calcSubTotal();
    console.log(test);

    const createOrder = () => {
        let order = {
            buyer: {
                email: "leo@messi.com",
                name: "Leo Messi",
                phone: "123456789"
            },
            date: serverTimestamp(),
            items: test.cartList.map( item => {
                return{ id: item.id, price: item.price, title: item.name, qty: item.qty}
            }),
            total: test.calcTotal()
        };
        console.log(order);

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        };
    
        createOrderInFirestore()
            .then(result => 
                {                    
                    alert('Tu orden ha sido creada:' + result.id);
                    test.cartList.map( async (item) => {
                        const itemRef = doc(db, 'products', item.id);
                        await updateDoc(itemRef, {
                            stock: increment(-item.qty)
                        })
                    })
                    test.clearCart();
                })
            .catch(error => console.log(error));    
    };

    return(
        <>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mb-5 text-center fs-4 fw-bold">Carrito de Compras</h3>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="containerButtonsCart mb-5">
                        <Link to='/'>
                            <button className="button" >Continuar comprando</button>
                        </Link>                                    

                        {test.cartList.length === 0
                            ?<p className="fs-5 ">El carrito está vacio</p>
                            :<button className="button" onClick={test.clearCart}>Eliminar todos los productos</button>                                                    
                        }                    
                        </div>                        
                    </div>
                </div>                
                
                {
                    test.cartList.length > 0 && 
                        <div className="row bordeRojo">
                        <div className="col-sm-8 bordeAzul">
                            <table className="table">
                                <thead >
                                    <tr className="text-primary ">
                                        <th scope="col">#</th>
                                        <th scope="col"></th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Precio ($)</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">    
                                    {  
                                        test.cartList.map((item, i) => (
                                            <tr className=""  key={item.id}>
                                                <td scope="row">{i+1}</td>
                                                <td className="">                
                                                    <figure className="figura">
                                                        <img src={item.image} className="imageCart bordeAmarrillo" 
                                                            alt={item.name} />                        
                                                    </figure>       
                                                </td>
                                                <td className="">                
                                                    <h6 className="title">{item.name}</h6>
                                                </td>
                                                <td className="">
                                                    <p>{item.price}</p>
                                                </td>
                                                <td className="">                                                               
                                                    {/* <button id="btnMinus1" className="btn botonCantiCarrito ">-</button> */}
                                                    <span>{item.qty}</span>
                                                    {/* <button id="btnPlus1" className="btn botonCantiCarrito ">+</button> */}
                                                </td>             
                                                <td className=" ">
                                                    <p className=" ">{item.price * item.qty}</p>
                                                </td>
                                                <td>
                                                    <button type="button" className="delete btn btn-danger" onClick={() => test.removeItem(item.id)}>X</button>    
                                                </td>
                                            </tr>                                            
                                        ))
                                    }
                                </tbody>
                            </table>                        
                        </div>
                        <div className="col-sm-3 containerResumeOrder bordeAmarrillo">
                            <h4 className="">Resumen del Pedido</h4>
                            <div>                            
                                <div className="styleResumeOrder bordeVerde">
                                    <label htmlFor="" className="styleLabel bordeRojo">Sub Total</label>
                                    <p className="bordeAzul">{test.calcSubTotal()}</p>                                    
                                </div>
                                <div className="styleResumeOrder bordeVerde">
                                    <label htmlFor="" className="styleLabel bordeRojo">IGV</label>
                                    <p className="bordeAzul">{test.calcIGV()}</p>                                    
                                </div>
                                <div className="styleResumeOrder bordeVerde">
                                    <label htmlFor="" className="styleLabel bordeRojo">Total</label>
                                    <p className="bordeAzul">{test.calcTotal()}</p>                                    
                                </div>
                            </div>    
                            <button className="button" onClick={createOrder}>Verificar Ahora</button>                        

                        </div>                    
                        </div>      
                }                                                    
            </div>           
        </>
    );
};

export default Cart;