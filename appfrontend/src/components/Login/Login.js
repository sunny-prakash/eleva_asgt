import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

export default function Login(props) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [msg,setMsg] = useState(null);

    const loginChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case "username":
                setUsername(value);
                break;
        
            case "password":
                setPassword(value);
                break;
        }

    }

    const loginSubmit= async (e)=>{
        e.preventDefault();
        let userData = {
            username:username,
            password:password
        }
        let res = await fetch('http://localhost:8080/api/auth/login',{
            method:'POST',
            mode:'cors',
            cache:'no-cache',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy:'no-referrer',
            body:JSON.stringify(userData),
        });

        let data = await res.json();
        if(res.status===200){
            localStorage.setItem("userToken",data.data.token);
            
            window.location.href ="/user";
        }
        if(res.status===400){
            setMsg(data.message);
        }

    }

    return (
        <div id="login">
        <h1>{"Login"}</h1>
        {msg?<h3 style={{color:"red"}}>{msg}</h3>:""}
            <form className="login--form" onSubmit={loginSubmit}>
                <input onChange={loginChange} value={username} name="username" type="text" placeholder="Username"/>
                <input onChange={loginChange} value={password} name="password" type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
            <p><Link to={"/sigup"}>{"Register/SignUp"}</Link></p>
        </div>
    )
}
