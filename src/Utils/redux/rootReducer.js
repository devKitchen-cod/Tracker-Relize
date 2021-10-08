import { LOGIN, LOGOUT, SETEMAIL, SETNAME, SETNAMEOFPROJECT, SETPASSWORD  } from "./redux-types";
import { combineReducers } from "redux"

const init = {
  isAuth: false
}


function enterReducer(state = init, action){
  switch (action.type) {
    case LOGIN:{
      console.log(action.payload)
      return {...state, isAuth: action.payload}
    }
    case LOGOUT:{
      const user = action.playload
      return[...state, user]
    }
  
    default:return state
      
  }
}
const init_email = {
  email: '',
}

 function setemail(state = init_email, action){ 
  switch(action.type){
    case SETEMAIL:{
      
      return {...state, email: action.payload}
    }
    default: return state
  }
}

const init_name = {
  name: '',
}

function setname( state = init_name, action){
  switch(action.type){
    case SETNAME: {
      
      return {...state, name: action.payload}
    }
    default: return state
  }
}

const init_password = {
  password: '',
}

function setpassword( state = init_password, action){
  switch(action.type){
    case SETPASSWORD: {
      
      return {...state, password: action.payload}
    }
    default: return state
  }
}
const init_name_of_project = {
  namepro: '',
}

function setnameofproject( state = init_name_of_project, action){
  switch(action.type){
    case SETNAMEOFPROJECT: {
      
      return {...state, namepro: action.payload}
    }
    default: return state
  }
}



export const rootReducer = combineReducers({
  enter: enterReducer,
  setEmail: setemail,
  setPassword: setpassword,
  setName: setname,
  setNameofproject: setnameofproject 
})