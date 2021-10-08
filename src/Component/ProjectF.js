import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import { useSelector } from 'react-redux';


export default function ProjectF(){

  const [projects, setProj] = useState([]);
  useEffect(() => {
    SetProjects();
  }, [])
  const email = useSelector((state) => state.setEmail.email)
  function SetProjects(){
    axios({
      method: "POST",
      url: "http://localhost:8080/api/allproj",
      data: {
        email: email
      }
    })
    .then(async(res) => {
      console.log(res.data)
      setProj(res.data)
    })
    .catch(function(e){
      console.log(e + '==========++ERROR');
      })
  }

  return(
    <div>
      {projects.map((item) =>(
    <Card style ={{ margin: "100px", color: 'white'}} bg="dark" >
      <Card.Header as="h5">{item.Name_of_Project}</Card.Header>
      <Card.Body>
        <Card.Title>{item.Name_of_Project}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>     
      </Card.Body>
    </Card>
    ))
    }
    </div>
  )
} 