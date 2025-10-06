
import "../style/View.css"

import { Outlet } from "react-router-dom"
import { matchPath } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Title from "../components/title"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function View(){
    
    const location = useLocation();
    let tema = "";

    if(matchPath("/", location.pathname)){ tema = "inicio"};
    if(matchPath("/celulares", location.pathname)){ tema = "celulares"};
    if(matchPath("/moviles", location.pathname)){ tema = "moviles"};

    return(
        <div className="page">
            <div className="dashboard">
                <Navbar/>
            </div>
            <div className="title">
                <Title title={tema}/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}