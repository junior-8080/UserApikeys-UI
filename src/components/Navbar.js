import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function Navbar
**/

export const Navbar = (props) => {
  return(
    <div className='flex justify-between'>
      <div className='p-2'>
         <h3 className='text-black font-bold'>🤖My Apis</h3>
      </div>
      <div>
        <ul className='flex px-2'>
          <li className='p  mr-3'><Link to={"/signup"}><i className='fa fa-twitter text-black text-lg'></i></Link></li>
          <li className='p  mr-3'><Link to={"/signup"}><i className='fa fa-linkedin text-black text-lg'></i></Link></li>
          <li className='p  mr-3'><Link to={"/signup"}><i className='fa fa-facebook text-black text-lg'></i></Link></li>
        </ul>
      </div>
    </div>
   )
 }