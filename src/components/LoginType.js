import React from 'react'

/**
* @author
* @function LoginType
**/

export const LoginType = (props) => {
  return(
    <button className='p-1 border-2 broder-black-600 mr-2 my-2' disabled={props.notAvailable}>
        <i className={props.icon}/>{" "}{props.text}
    </button>
   )
 }