import { useEffect, useState } from 'react'
import stylee from './detail.module.css'
export default function Series(props){
    
    const[value,setValue]=useState(null)
    let name=props.value[0]
  
  useEffect(()=>{ 
    if(value===null){
    //console.log('setting values')
    setValue(name)
    //console.log(value)
}


    },[])
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