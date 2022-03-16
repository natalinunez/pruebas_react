import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {list, getList} from '../utils/db';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);    
    //este valor viene por URL
    //<Route path="/item/:idItem" element={<ItemDetailContainer />} />
    const {idItem} = useParams();
    console.log('ItemDetailContainer-valor de idItem');
    console.log(idItem);

    //componentDidMount
    useEffect(() => {        
        const firestoreFetch = async () => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);    

            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                } 
            } else {
                console.log("No sucha document!");
            }                        
        };            
        
        firestoreFetch()
            .then(result => {
                setItem(result);
                console.log("result");
                console.log(result);
            })
            .catch(error => console.log(error));            
        
    }, []);
    
    return (
        // <p>holis</p>
        <ItemDetail item={item} />        
    );

};

export default ItemDetailContainer;