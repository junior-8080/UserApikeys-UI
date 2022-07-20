import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { logoutSuccess } from '../redux/actions/userAction'


/**
* @author
* @function Navbar
**/

export const Navbar = ({active_path}) => {
 const dispatch = useDispatch();
 const navigate = useNavigate()

  const handleLogut = () => {

      dispatch(logoutSuccess())
      navigate('/');
  }
  return(
    <div className='flex justify-between p-2 navbar bg-accent'>
      <div className='p-2'>
         <h3 className='text-lg font-bold'>🤖{" "}My Apis</h3>
      </div>
      <div>
       { active_path === '/'? <ul className='flex px-2'>
          <li className='p  mr-3'><Link to={"/signup"}><i className='fa fa-twitter text-black text-lg'></i></Link></li>
          <li className='p  mr-3'><Link to={"/signup"}><i className='fa fa-linkedin text-black text-lg'></i></Link></li>
          <li className='p  mr-3'><Link to={"/signup"}><i className='fa fa-facebook text-black text-lg'></i></Link></li>
        </ul> : <ul className='flex px-2'>
          <li className='p  mr-3 mt-2'><Button style={{background:"#CC8800",color:"#fff"}} onClick={handleLogut}>Logout</Button></li>
          </ul>}
      </div>
    </div>
   )
 }