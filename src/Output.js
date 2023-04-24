import { useState } from 'react'
import terminall from './terminal.module.css'

export default function Output(){
    const[time,setTime]=useState(5)
    
    if(time>0){setTimeout(()=>{
        setTime(time-1)
        
    },1000)}
  
 return(
    <div className={terminall.result}>
    <h1>Password was correct</h1>
    <h2>Redirecting in {time}</h2>
    </div>
 )
}