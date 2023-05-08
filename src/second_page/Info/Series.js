import { useEffect, useState } from 'react'
import stylee from './detail.module.css'
export default function Series(props){
    
    const[value,setValue]=useState(null)
    let name=props.value[0]
    
    if(JSON.stringify(value)!==JSON.stringify(name)){
        console.log('were not equale and setting them equle')
        setValue(name)
    }

  useEffect(()=>{ 
    
    if(JSON.stringify(value)!==JSON.stringify(name)){
        console.log(JSON.stringify(value))
        console.log(JSON.stringify(name))
        console.log('value are  equale')
        
    
    }
   
   console.log(JSON.stringify(value))
   
    
    },)
   
    return(
        <div className={stylee.main}>
            {name.map((i)=>{
                let title=i.name
                return <div className={stylee.items} key={name.indexOf(i)}>
                    <span>{title}</span>
                    {false?<img></img>:null}
                    <span>Price:$</span>
                </div>
            })}
        </div>)
}