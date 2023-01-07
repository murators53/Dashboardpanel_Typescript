import React from 'react'
import { IUpdatesData } from '../../Data/data'
import { UpdatesData } from '../../Data/data'
import './Updates.css'


const Updates = () => {
  return (
    <div className='Updates'>
        {UpdatesData.map((update:IUpdatesData)=> {
            return(
                <div className='update'>
                    <img src={update.img} alt="" />
                    <div className='noti'>
                        <div style={{marginBottom: '0.5rem'}}>
                            <span>{update.name}</span>
                            <span>{update.noti}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Updates