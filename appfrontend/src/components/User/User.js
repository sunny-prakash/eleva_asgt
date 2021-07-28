import React,{useState,useEffect} from 'react';
import "./User.css";

export default function User(props) {

    
    let token = localStorage.getItem("userToken");
    
    if(!token){
        return window.location.href='/signup';
    }

    return (
        <div className="user--main">
            <h1 style={{textAlign:"center"}}>{"User page"}</h1>
            <div className="user--details">
                <div >
                    <img className="profile--img" src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=579&q=80" alt="userimage" />
                </div>
                <div>
                    <h3>Lorem, ipsum dolor.</h3>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    )
}
