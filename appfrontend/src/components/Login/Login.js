import React,{useState} from 'react';
import './Login.css';

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case "email":
                setEmail(value);
                
                break;
        
            case "password":
            setPassword(value);
            console.log("pass",value);
                break;
        }

    }

    const loginSubmit=(e)=>{
        e.preventDefault();

    }

    return (
        <div id="login">
        <h1>{"Login"}</h1>
            <form className="login--form" onSubmit={loginSubmit}>
                <input onChange={loginChange} value={email} name="email" type="text" placeholder="Email"/>
                <input onChange={loginChange} value={password} name="password"  type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
            
        </div>
    )
}
