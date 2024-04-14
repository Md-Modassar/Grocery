import React from 'react'
import "./orderbanner.css"
import banner from "../../images/diliverybanner.png"

const Orderbanner = () => {
  return (
    <div className='orderbanner'>
        <div className='orderbanner-image'>
          <img src={banner} alt='' />
        </div>

    </div>
  )
}

export default Orderbanner