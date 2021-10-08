import axios from 'axios'
import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap/'
import { LOGIN, SETEMAIL, SETPASSWORD } from '../Utils/redux/redux-types'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function LogForm(){

  const dispatch = useDispatch()
  const history = useHistory();
  const email = useSelector((state) => state.setEmail.email)
  const password = useSelector((state) => state.setPassword.password)
  console.log( email)
  const j_email = JSON.stringify(email)
  console.log('==parsed from json=='+j_email)

  const handlesub = _event => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/login",
      data: {
        email: email,
        password: password
      }
    })
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({type: LOGIN, payload: true })
      history.push('/startp')
    })
    .catch((e) => console.log(e + 'ERROR'))
  }

  return(
    <Form style = {{marginLeft: '300px', marginRight: '300px', marginTop: '100px' }}>
    <Form.Group
     className="mb-3" 
     controlId="formBasicEmail"
      onChange = {e => dispatch({type: SETEMAIL, payload: e.target.value})}
      >
      <Form.Label>Email address</Form.Label>
      <Form.Control 
      type="email" 
      placeholder="Enter email"
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword"
        onChange = {e => dispatch({type:SETPASSWORD, payload: e.target.value})}
       >
      <Form.Label>Password</Form.Label>
      <Form.Control
       type="password" 
       placeholder="Password" 
       />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button 
    variant="primary" 
    onClick={() => history.push('/startp'), handlesub }
    >
      Submit
    </Button>
  </Form>
  )
}