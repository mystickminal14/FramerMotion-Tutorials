import React,{useState} from 'react'
import {motion} from 'framer-motion'
export default function Box2() {
    const[ani,setani]=useState(false)
  return (
 
 <>

 <div className="conntainer">
 <motion.div className="box"
      whileHover={{
        scale:1.1
      }}
      drag
      dragConstraints={
        {
            right:20,
            left:-20,
            top:5,
            bottom:5
        }
      }
      whileTap={{
        scale:0.9
      }}
 >
    
    </motion.div>
    
 </div>

 </>
  )
}
