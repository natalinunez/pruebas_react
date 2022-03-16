import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({listItems}) => {     

    return (
        <>
            <div className="container d-flex justify-content-around row m-auto my-5 bordeAzul" >  
                {                 
                    // listItems.length > 0
                    listItems.map(item => 
                        <Item
                            key = {item.id}  
                            id =  {item.id}       
                            image = {item.image} 
                            name = {item.name}
                            price = {item.price}                        
                        />                                        
                        )
                    // : <p className="styleLoading">Cargando...</p>
                }   
            </div>
        </>
    );
};

export default ItemList;

{/* <div className=" cardProduct" >
<img className="cardImage bordeAmarrillo" src={data[0].image} />
<div className="cardDescription bordeVerde">
    <h5 className="bordeRojo">{data[0].name}</h5>
    <p className="bordeRojo">$ {data[0].price}</p>                        
    <button className="card__boton colorAzul">Ver detalle del producto</button>                        
</div>
</div>   */}