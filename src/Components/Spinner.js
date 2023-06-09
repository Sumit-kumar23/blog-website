import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex flex-col gap-y-6 item-center justift-center'>
      <div className='spinner'>
     
      </div>
      <div>
        <p>Loading Please Wait</p>
      </div>

    </div>
  )
}

export default Spinner
