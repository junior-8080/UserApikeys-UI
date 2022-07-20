import React from 'react'
import { Link } from 'react-router-dom'

export default function  AvailableApiCard({data}) {
  return (
    <div className="w-1/5 m-4 rounded-md  p-5 border border-accent6">
     <h3 className='text-lg text-accent5'>{data.name}</h3>
     <p >{data.summary}</p>
     <Link to={data.docs} className="text-blue-700">documnetation{" "}<i class="fa fa-arrow-right"></i></Link>
    </div>
  )
}
