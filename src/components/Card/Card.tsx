import React, { useState } from 'react'
import { ICardsData } from '../../Data/data';
import { motion,AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'
import ReactApexChart from 'react-apexcharts'

import { UilTimes } from '@iconscout/react-unicons'
import { ApexOptions } from 'apexcharts';

const Card = (props: ICardsData) => {

    const [expanded, setExpanded] = useState<boolean>(false)

    return (
        <AnimateSharedLayout>
            {
                expanded ?
                    <ExpendedCard param={props} setExpanded={() => setExpanded(false)} />
                    :
                    <CompactCard param={props} setExpanded={() => setExpanded(true)} />

            }
        </AnimateSharedLayout>
    )
}


//CompactCard
function CompactCard({ param, setExpanded }: { param: ICardsData, setExpanded: React.MouseEventHandler<HTMLDivElement> }) {
    const Png = param.png
    return (
        <motion.div className='CompactCard' style={{
            background: param.color.backGround,
            boxShadow: param.color.backGround
        }}
            onClick={setExpanded}
            layoutId='expandableCard'
        >
            <div className='radialBar' >
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className='detail'>
                <Png />{/* How is add the Ican as component */}
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )

}



//Expended Card
function ExpendedCard({ param, setExpanded }: { param: ICardsData, setExpanded: React.MouseEventHandler<HTMLDivElement> }) {


    const data:any = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    return (
        <motion.div className='ExpendedCard'
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId='expandableCard'
        >

            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <UilTimes onClick={setExpanded} 
                style={{alignSelf:'flex-end', cursor:'pointer',color:'white'}}
                />
            </div>
            <span>{param.title}</span>
            <div className='chartContainer'>
                <ReactApexChart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}


export default Card