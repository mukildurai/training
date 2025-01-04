import React from "react"
import '../../assets/css/Navbar.css'
import { Link } from "react-router-dom"
var Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link  className="link"to="/">Home</Link>
                    </li>
                    <li>
                        <Link  className="link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="link"  to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link className="link"to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Useeffect">Useeffect</Link>
                    </li>
                    <li>
                        <Link className="link" to="/UseRef">UseRef</Link>
                    </li>

                    <li>
                        <Link className="link" to="/UseContext">UseContext</Link>
                    </li>
                    <li>
                        <Link className="link" to="/UseMemo">USeMemo</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Signup">Signup</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Login">Login</Link>
                    </li>




                </ul>
            </nav>
        </header>
    )
}






export default Navbar;