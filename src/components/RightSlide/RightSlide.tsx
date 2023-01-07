import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import './RightSlide.css'

const RightSlide = () => {
  return (
    <div className='RightSlide'>
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSlide