import stylee from './stylee.module.css'
import First from './First'
import { useState } from 'react'
import { useEffect } from 'react'
import Second from './Second'
import Animation from './Aniamtion'
import Loading from './Loading'
export default function Parent(){
    const[name,setName]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[fetched_json,setFetch_json]=useState([])
    const[should,setShould]=useState(false)
    useEffect(()=>{
    for(let i=0;i<name.length;i++){
        if(name[i]===' '){
            name[i]='%20'
        }
    }
    
   
    },[name])
 return(
    
    <div className={stylee.div}>
    <Animation/>
    {isLoading?<Loading/>:null}
    <First setName={setName} name={name} setJson={setFetch_json} toogle_should={setShould} setIsLoading={setIsLoading}/>
    {should?<Second fetched_json={fetched_json} should={should} name={name}/>:null}
   
    
    </div>
    
 )
} 