import React,{useState} from 'react'
import {motion} from 'framer-motion'
export default function Box3() {
 const varn={
  hidden:{
    x:"-100vw",

  },
  visible:{
    x:0,
    transition:{
      delay:0.5
      ,
      when:'beforeChildren',
      staggerChildren:0.2
    }
  }
 }
 const listVAR={
  hidden:{
    x:"-10vh",
opacity:0
  },
  visible:{
    x:0,
    opacity:1,
   
  }
 }
  return (
 
 <>

 <div className="conntainer">
 <motion.div className="box"
variants={varn}
initial="hidden" 
animate="visible"
>
    {[1,2,3].map((box)=>{
      return <motion.li className='bo' variants={listVAR}></motion.li>
    })}
    </motion.div>
    
 </div>

 </>
  )
}
