
import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { SETNAMEOFPROJECT } from '../Utils/redux/redux-types';
import { useHistory } from 'react-router';
export default function CreateF(){

 const history = useHistory();

  const dispatch = useDispatch()
  const email_item = useSelector((state) => state.setEmail.email)
  const namepro = useSelector((state) => state.setNameofproject.namepro)
  console.log(email_item)
  const handleSubmit =  _event => {    
    axios({
      method: "POST",
      url: "http://localhost:8080/api/project",
      data: {
      name: namepro,
      user: email_item  
      }
     })
     .then(res => {
      alert('Creted')
    }) 
     .catch(function(e){
      console.log(e + '==========++ERROR');
     })
  };
  return (
    <div> <div style = {{marginLeft: '300px', marginRight: '300px', marginTop: '100px' }}>
      <Form.Group 
         onChange = {e => dispatch({type:SETNAMEOFPROJECT, payload: e.target.value})} >
      <Form.Floating className="mb-3" 
        >
      <Form.Control
      id="floatingInputCustom"
      type="text"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Button onClick={handleSubmit} style = {{background: '#272727'}}>Create</Button>
  </Form.Group>
  </div></div>
  )
}