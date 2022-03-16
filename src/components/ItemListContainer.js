import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    
    //esto es sin destructuracion
    // const urlParams = useParams();
    //esto es con destructuracion
    const {idCategory} = useParams();
    
    //esto es con destructuracion
    console.log("category-itemListContainer");
    console.log(idCategory);
    //esto es sin destructuracion
    // console.log(urlParams.idCategory);

    //componentDidUpdate
    useEffect(() => {        
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));            
                return querySnapshot.docs.map( document => ({
                    id: document.id,
                    ...document.data()
                }));                                             
        }

        firestoreFetch()
            .then(result => {
                if (idCategory === undefined) {
                    setItems(result);    
                } else {
                    let forCategory = result.filter(item => item.category == idCategory)
                    setItems(forCategory);
                    console.log("forCategory");
                    console.log(forCategory);                    
                }                            

            })
            .catch(error => console.log(error));    

    }, [idCategory])       

    return (                            
        <>         
            {  
                items.length > 0
                ? <ItemList listItems={items} />
                : <p className="styleLoading">Cargando...</p>
            }
                       
        </>        
    );
};

export default ItemListContainer;