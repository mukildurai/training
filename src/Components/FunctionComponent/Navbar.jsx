import React from "react"
import '../../assets/css/Navbar.css'
import { Link } from "react-router-dom"
var Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>



                </ul>
            </nav>
        </header>
    )
}






export default Navbar;