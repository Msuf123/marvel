import stylee from './stylee.module.css'
import First from './First'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Parent(){
    const[name,setName]=useState([])
    useEffect(()=>{
    for(let i=0;i<name.length;i++){
        if(name[i]===' '){
            name[i]='%'
        }
    }
  console.log(name.join(''))

    },[name])
 return(
    
    <div className={stylee.div}>
    <First setName={setName} name={name}/>
    </div>
 )
} 