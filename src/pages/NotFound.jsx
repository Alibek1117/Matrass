/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center'>
        <h2 className="text-9xl mx-auto font-extrabold mt-20">Ooops!</h2>
        <h3 className="text-3xl mt-9 font-semibold mb-10"> Sahifa topilmadi</h3>
        <Link className='border py-2 px-12 rounded bg-teal-600 text-xl'>Bosh sahifa</Link>
    </div>
  )
}

export default NotFound