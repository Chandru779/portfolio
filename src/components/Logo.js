import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { slideinFromLeft } from '@/utils/motions' 

const Logo = () => {
    const MotionLink = motion(Link)
  return (
    <div className='flex items-center justify-center -ml-14'>
        {/* <MotionLink href='mailto:chanduangadi779@gmail.com' className='px-2 py-1 bg-dark text-white flex items-center justify-center text-xl rounded-xl font-mono font-thin tracking-wide'  
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1,repeat:Infinity},
        }}
        whileHover={{
          scale:1.1,
          transition:{duration:1.2},
          animation:{}
          
        }}
         >Hire me..</MotionLink> */}

         <MotionLink href='mailto:chanduangadi779@gmail.com' className='cursive text-2xl font-semibold text-dark dark:text-light' whileTap={{scale:0.8}}> 
              Hire me .
         </MotionLink>
    </div>
  )
}

export default Logo
