import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = (props) => {    
    return(
        <>                              
            <div className="card my-3 p-2 cardHover" style={{'width': '18rem'}}>
                <img src={props.image} className="cardImage" alt={props.name}/>
                <div className="card-body m-auto text-center ">
                    <h5 className="colorAzul">{props.name}</h5>
                    <p className="stylePrice colorAzul">$ {props.price}</p>
                    <Link to={`/item/${props.id}`} >
                        <button className="cardButton colorAzul">Ver detalle del producto</button>                             
                    </Link>
                </div>
            </div>            
        </>
    );
};

export default Item;
