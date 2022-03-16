import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';
const CheckOut = () => {
    return(
        <>
        <Link to='/cart'>
            <button className="buttonAddCart" >
                    CHECKOUT
            </button>           
        </Link>
        </>
    )
}

export default CheckOut;