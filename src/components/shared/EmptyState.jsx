import React from 'react'
import { Link } from 'react-router'

const EmptyState = () => {
  return (
    <div className='py-24 text-center'>
      <h1 className='mb-3 text-7xl font-thin text-gray-900'>No Data Found!</h1>
      <p className='mb-8 text-xl  text-gray-900 md:text-2xl'>
        You have not book any requirement yet.
      </p>
      <Link to='/'>
        {/* <Button label='Browse Phones' /> */}
        <button className='btn btn-primary hover:bg-blue-900'>Book an appointment</button>
      </Link>
    </div>
  )
}

export default EmptyState