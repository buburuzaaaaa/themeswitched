import {useContext} from 'react'
import {Them} from "./ThemeContext" 
import Chevy from '../chevy.png' 
const Footer = () => {
    const val = useContext(Them)
  return (
    <div className={`${val.themo} flexy foot`}>
      <div><img src={Chevy} alt=""style={{ width: '200px', height: '150px' }} /></div>
      <div>Contact: Chevy@gmail.com</div>
      <div>GM. Motors Copyright. All Rights Reserved.</div>

  
    </div>
  )
}

export default Footer