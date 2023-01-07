import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { UilEstate } from '@iconscout/react-unicons'

import { ISiderBarData, SidebarData } from '../../Data/data'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'
import { useState } from 'react'

import { motion } from 'framer-motion'
const SideBar = () => {

    const [selected, setSelected] = useState<number>(0)
    const [expanded, setExpanded] = useState<boolean>(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }

    return (
        <>
            <div className='bars' onClick={() => setExpanded(!expanded)}
                style={expanded ? { left: "45%" } : { left: "5%" }}>
                <UilBars />
            </div>
            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span>
                        Sh<span className='logo'>o</span>ps
                    </span>
                </div>

                {/* menu */}
                <div className='menu'>
                    {SidebarData.map((item: ISiderBarData, index: number) => {
                        return (
                            <div className={selected === index ? 'menuItem active' : 'menuItem'}
                                key={index} onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })}
                    <div className='menuItem'>
                        <UilSignOutAlt />
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default SideBar



