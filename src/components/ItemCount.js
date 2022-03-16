import React from "react";
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const ItemCount = (props) => {
    let initial = +props.initial;
    let stock = props.stock;
    let onAdd = props.onAdd;

    const [contador, setContador] = useState(initial); //HOOKS
    const [botonActivo, setBotonActivo] = useState(false);

    const plus = () => {        
        if (contador < stock){
            setContador(contador + 1);                
            setBotonActivo(true);
        }        
    }

    const minus = () => {        
        if(contador >= 2) {
            setContador(contador - 1);                
        }        
    }

    return (
        <>
            <div className="containerCount bordeAzul">  
                <h3 className="sizeTipografia bordeRojo">Cantidad</h3> 
                <div className="containerButtons bordeVerde">
                    <ul className="containerUl">
                        <li className="page-item">
                            <button className="page-link" onClick={minus}>
                                <BiMinus className="styleIconMinusPlus "/>                                                   
                            </button>                        
                        </li>
                        <li className="page-item ">
                            <span className="page-link styleSpan">{contador}</span>
                        </li>                    
                        <li className="page-item" onClick={plus}>
                            <button className="page-link">
                                <BsPlus className="styleIconMinusPlus "/>                                                             
                            </button>                        
                        </li>                    
                    </ul>
                    <button className="buttonAddCart" onClick={() => onAdd(contador)} disabled={!botonActivo}>
                          ADD TO CART
                    </button>      
                </div>

                    {/* <h4 className="bordeRojo">Cantidad</h4>                                                            
                    <div className="container containerButtons">
                        <div className="containerMinusLess bordeAzul">
                            <button className="buttonMinusPlus " onClick={minus}>-</button>
                            <span className="styleSpan">{contador}</span>
                            <button className="buttonMinusPlus " onClick={plus} >+</button> 
                        </div>
                        <button className="buttonAddCart" onClick={() => onAdd(contador)} disabled={!botonActivo}>
                            ADD TO CART
                        </button>                      
                    </div> */}                
            </div>                
        </>        
    );
}

export default ItemCount;