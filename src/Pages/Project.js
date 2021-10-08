import React from 'react'
import NavBar from '../Component/NavBar'
import NavBarF from '../Component/NavBarForAuth'
import ProjectF from '../Component/ProjectF'

export default function Project(){

  return(
    <div><NavBarF/>
    <div style = {{marginLeft: '300px', marginRight: '300px'}}> <ProjectF/></div>
    </div>
  )
}