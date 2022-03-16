import { Link } from "react-router-dom";
import React from "react";
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light BackgroundColor bordeAzul">
                <div className="container-fluid bordeRojo ">
                    <Link to='/' className="navbar-brand flex-column justify-content-start bordeAzul">
                        <h1 className="styleBrand">By Dany</h1>
                    </Link>

                    <button className="navbar-toggler " 
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center bordeAmarrillo" id="navbarNav">
                        <ul className="navbar-nav align-items-center bordeVerde">
                            <li className="nav-item ">
                                <Link to='/' className="nav-link styleMenu mx-2 bordeAzul">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/1' className="nav-link styleMenu mx-2 bordeAzul">Aretes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/2' className="nav-link styleMenu mx-2 bordeAzul">Collares</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/3' className="nav-link styleMenu mx-2 bordeAzul">Pulseras</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Icono del carrito */}
                    <CartWidget />
                </div>
            </nav>       
        </>
    )
}

export default NavBar;