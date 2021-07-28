import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Route,Redirect,Switch } from 'react-router-dom';
import './App.css';
import React,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <>
    <Navbar/>
    <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/user" exact component={User}/>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup}/>
      <Redirect from="/" exact to="/home" />
    </Switch>
      
    </>
  );
  }
  
  
}

export default App;
