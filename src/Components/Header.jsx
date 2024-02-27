import {useContext} from 'react'
import {Them} from "./ThemeContext"  
import Chevy from '../chevy.png'
const Header = () => {
  const val = useContext(Them)
  return (
    <div className={`${val.themo} header`}>
      {/* <h1>Chevy LS motors Explained</h1> */}
      {/* <img src={Chevy}alt="" style={{ width: '800px', height: '800px' }} /> */}
    </div>
  )
}

export default Header