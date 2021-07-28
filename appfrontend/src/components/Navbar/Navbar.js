import React from 'react';
import "./Navbar.css";
import {NavLink,Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className="nav--bar">
            <div className="nav--content">
                <div className="nav--logo">LOGO</div>
                <div className="nav--links">
                    <div className="nav--link"><NavLink className="page--link"  to="/home">{"HOME"}</NavLink></div>
                    <div className="nav--link"><NavLink className="page--link" to="/user">{"USER PROFILE"}</NavLink></div>
                </div>

            </div>
            <div className="nav--auth">
                <button><Link className="page--link" to={"/login"} >{"Login"}</Link></button>
                <button><Link className="page--link" to={"/signup"} >{"SignUp"}</Link></button>
            </div>
        </nav>
    )
}
