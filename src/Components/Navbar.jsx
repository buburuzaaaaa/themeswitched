import React from 'react'
import { useContext } from 'react'
import { Them } from './ThemeContext'
import Chevy from '../chevy.png'
const Navbar = () => {
    const val = useContext(Them)
  return (
    
    <div className={`${val.themo} nav`}>
        <h1>Chevy LS motors explained</h1>
      {/* <img src= {Chevy} alt="" style={{ width: '200px', height: '150px' }}/> */}
        <button onClick={()=>{val.handleThemo()}} style={val.themo==="light"?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}}>Change Theme</button>
    </div>
  )
}

export default Navbar