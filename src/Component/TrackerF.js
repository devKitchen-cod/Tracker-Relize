import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import DisplayComponent from '../Utils/DisplayComponent';
import BtnComponent from '../Utils/BtnComponent';
import { SETNAMEOFPROJECT } from '../Utils/redux/redux-types';
import { Button } from 'react-bootstrap';

export default function TrackerF(){
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.setNameofproject.namepro)

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    console.log(time.ms, time.s, time.m, time.h)
    axios({
      method: "POST",
      url: "http://localhost:8080/api/tracker ",
      data: {
        t:time.s,
        n:name
      }
    })
  };
  
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
    };  
  const resume = () => start()
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

  return (
    <div>
          <div className="main-section">
            <div className="clock-holder">
           <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>        
              </div>
              <Form.Select onChange = {e => dispatch({type: SETNAMEOFPROJECT, payload: e.target.value})}>
                {projects.map((item) =>(
                    <option value = {item.Name_of_Project} >{item.Name_of_Project}</option>
                ))}                        
            </Form.Select> 
          </div>        
          </div>
    </div>
  )
}