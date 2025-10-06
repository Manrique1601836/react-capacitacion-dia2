
import "../style/navbar.css"
import React from "../assets/react.svg"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <header>
            <div className="navbar">
                <h1 className="logo">
                    <Link to="/" className="a">Logo</Link>
                </h1>
                <nav>              
                    <ul>
                        <li>
                            <Link to="/" className="link">inicio</Link>
                        </li>
                        <li>
                            <Link to="/celulares" className="link">celulares</Link>
                        </li>
                        <li>
                            <Link to="/moviles" className="link">moviles</Link>
                        </li>
                    </ul>
                </nav>
                <div className="img-react">
                    <img src={React} alt="" className="imagen-react"/>
                </div>
            </div>
        </header>
    )
}