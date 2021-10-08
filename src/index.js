import React from "react";
import ReactDOM from "react-dom";
 import Nav from './Nav'
 import thunk from 'redux-thunk';
 import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, setemail } from "./Utils/redux/rootReducer";
import { Provider } from "react-redux";



export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(

 <Provider store ={store}>
  <Nav/>
  </Provider>
 
  
   , document.getElementById("root"));