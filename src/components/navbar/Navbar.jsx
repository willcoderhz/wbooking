import React from "react";
import "./navbar.css"
import { useNavigate } from "react-router-dom";



const Navbar = ()=>{
    const navigate = useNavigate();

    const returnHome = ()=>{
        navigate("/");
    }
    return(
        <div className="navbar">
            <div className="navContainer">
                <span className="logo" onClick={returnHome}>willbooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>

                        
            </div>

        </div>
    )
}

export default Navbar