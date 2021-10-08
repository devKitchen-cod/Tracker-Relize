import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../Component/NavBar'
import NavBarF from '../Component/NavBarForAuth'

export default function HomePage(){
  const item = useSelector((state) => state.setEmail)
  console.log(item)
  
  return(
    <div> <NavBarF/>
    <div>Home Page</div>
    </div>
  )
}