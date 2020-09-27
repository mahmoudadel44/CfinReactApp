import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../images/home/logo.png'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    const show = menu ? "show" : ""
    return (
        // start navbar section 
        <nav className="navbar navbar-expand-lg navbar-light roboto-font">
            <div className="container">
                <Link className="navbar-brand" to="#">
                    <img src={navLogo} className="navImage" alt="navLogo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainnav"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse " + show} id="mainnav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactus">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link className="btn my-2 my-sm-0" to="/signin">Login</Link>
                        <Link className="btn my-2 my-sm-0" to="/signup">Sign Up</Link>
                    </form>
                </div>
            </div>
        </nav>
        //  end navbar section 
    )
}

export default Navbar
