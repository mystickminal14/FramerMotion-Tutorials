import React,{useState} from 'react'
import {motion} from 'framer-motion'
export default function Box1() {
    const[ani,setani]=useState(false)
  return (
 
 <>

 <div className="conntainer">
 <motion.div className="box"
      animate={{
        x:ani ? 500:0,
        opacity:ani ? 1:0.5,
        backgroundColor:ani ? 'blue':'red',
       rotate:ani ? 360:0
      }}
      initial={{
        backgroundColor:"red",
      
      }}
      transition={{
        type:"spring",
        stiffness:60,
       
        scale:1
       
      }}
      onClick={()=>{
        setani(!ani)
      }}
 >
    
    </motion.div>
    
 </div>

 </>
  )
}
