import React from 'react';
import "./home.css";

export default function Home() {
    let token = localStorage.getItem("userToken");
    if(token){
        return window.location.href = '/user';
    }
    return (
        <div className="main">
            <h1>{"Welcome to the website"}</h1>
            
        </div>
    )
}
