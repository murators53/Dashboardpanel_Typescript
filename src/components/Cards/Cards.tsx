import React from 'react'
import { CardsData, ICardsData } from '../../Data/data'
import Card from '../Card/Card'
import './Cards.css'
const Cards = () => {
  return (
    <div className='Cards'>
        {
            CardsData.map((card:ICardsData, id:number)=>{
                return(
                    <div className='parentContainer'>
                        <Card 
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cards