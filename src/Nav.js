import React from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Auth from './Pages/Auth';
import Create from './Pages/CreateProject';
import HomePage from './Pages/Home'
import Login from './Pages/Login';
import Project from './Pages/Project';
import StartPage from './Pages/StartPage'
import StartPageF from './Pages/StartPageforauth';
import Tracker from './Pages/Tracker';
import GuardedRoute from './Utils/GuardPro';


export default function Nav(){

  const item = useSelector((state) => state.enter)
  console.log(item)

  return (
    <Router>
      <Switch>
        
        
        <GuardedRoute path = '/create'  component = {Create}   auth = {item}/>  
        <GuardedRoute path = '/project' component = {Project}  auth = {item}/>  
        <GuardedRoute path = '/tracker' component = {Tracker}  auth = {item}/> 
        <GuardedRoute path = '/startp' component = {StartPageF}  auth = {item}/>  
    



        <Route path = '/auth'><Auth/></Route>
        <Route path = '/login'><Login/></Route>
        <Route path = '/home'><HomePage/></Route>
        <Route path = "/"><StartPage/></Route>
      </Switch>
    </Router>
  )
}