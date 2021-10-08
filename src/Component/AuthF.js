import axios from 'axios';
import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { LOGIN, SETEMAIL, SETNAME, SETPASSWORD } from '../Utils/redux/redux-types';



export default function AuthF(){

  const dispatch = useDispatch()
  const history = useHistory();

  const email = useSelector((state) => state.setEmail.email)
  const password = useSelector((state) => state.setPassword.password)
  const name = useSelector((state) => state.setName.name)
  const handleSubmit = _event => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/user",
      data: {
        name: name,
        email: email,
        password: password
        
      }
    })
    .then(res => {
      localStorage.setItem("t1", res.data.token)
      alert('Authorization was successful!!!');
      dispatch({type: LOGIN, payload: true })
      history.push('/startp')
    })
    .catch((e) => console.log(e + 'ERROR'))
  }


  return (
    <div style = {{marginLeft: '300px', marginRight: '300px', marginTop: '100px' }}><Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail"
      onChange = {e => dispatch({type: SETEMAIL, payload: e.target.value})}
      >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword"
      onChange = {e => dispatch({type: SETPASSWORD, payload: e.target.value})}
      >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Row>
  
    <Form.Group className="mb-3" controlId="formGridAddress1"
      onChange = {e => dispatch({type: SETNAME, payload: e.target.value})}
    >
      <Form.Label>Name</Form.Label>
      <Form.Control  />
    </Form.Group>
  




    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Surname</Form.Label>
      <Form.Control  />
    </Form.Group>
  
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
  
     
    </Row>
  
    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
  
    <Button variant="primary" 
    onClick={() => history.push('/'), handleSubmit }
    >
      Submit
    </Button>
  </Form></div>
  )
}


