import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Signup.css";

export default function Signup() {
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [address,setAddress] = useState("");
    const [username,setUserName] =useState("");
    const [signedup,setSignedUp] = useState(false);
    const [timerID,setTimerID] = useState(null);
    const [msg,setMsg] = useState("");


    useEffect(()=>{
        return ()=>{
            setTimerID(null);
        }
    },[])

    const signupChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case "fullname":
                setFullName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "username":
                setUserName(value);
                break;
        }

    }

    const signupSubmit=async(e)=>{
        e.preventDefault();
        console.log("signup submit");
        let userData = {
            fullname:fullName,
            email:email,
            password:password,
            address:address,
            username:username,

        }
        let res = await fetch('http://localhost:8080/api/auth/signup',{
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
        
        if(res.status === 200){
            setSignedUp(true);
            setTimerID(setInterval(()=>{
                window.location.href = "/login";
            },2000))
            
        }
        if(res.status === 400){
            setMsg(data.message);
        }
        

    }
    return (
        <div id="signup">
            <h1>{"Signup"}</h1>
            {signedup?<h3 style={{color:"green"}}>{"Signup Successfully"}</h3>:""}
            {msg?<h3 style={{color:"red"}}>{msg}</h3>:""}
            <form className="signup--form" onSubmit={signupSubmit}>
                <input onChange={signupChange} value={fullName} name="fullname" type="text" placeholder="Full name"/>
                <input onChange={signupChange} value={username} name="username" type="text" placeholder="Username"/>
                <input onChange={signupChange} value={email} name="email" type="text" placeholder="Email"/>
                <input onChange={signupChange} value={password} name="password" type="password" placeholder="Password"/>
                <input onChange={signupChange} value={address} name="address" type="text" placeholder="Address"/>
                
                <button>Signup</button>
            </form>
            <p><Link to={"/login"}>{"Already a member?login"}</Link></p>
        </div>
    )
}
