import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../Styles/carusel.css'

import f1 from './img/f1.jpg'
import f2 from './img/f2.jpg'
import f3 from './img/f3.jpg'

export default function Carusel1(){
  return(
    <div >
    <Carousel classname = 'carusel1' >
  <Carousel.Item style= {{height: 500}}>
    <img
      className="d-block w-100"
      src={f1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Get your own startUP!</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{height: 500}}>
    <img
      className="d-block w-100"
      src={f2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Check your task</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{height: 500}}>
    <img
      className="d-block w-100"
      src={f3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Code Coffe Code</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}