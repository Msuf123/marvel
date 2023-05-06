import stylee from './stylee.module.css'
import First from './First'
import { useState } from 'react'
import { useEffect } from 'react'
import Second from './Second'
import Comics from './Comics'
import Info from './Info/Info'
import Animation from './Aniamtion'
import Loading from './Loading'
export default function Parent(){
    const[name,setName]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[fetched_json,setFetch_json]=useState([])
    const[should,setShould]=useState(false)
    const[window,setWindow]=useState(true)
    const[Nametodisplay,setNametodisplay]=useState()
    
    useEffect(()=>{
    for(let i=0;i<name.length;i++){
        if(name[i]===' '){
            name[i]='%20'
        }
    }
    
    
   console.log(name)
   
   
    },[name])
 return(
    
    <div className={stylee.div}>
    <Animation/>
    {isLoading?<Loading/>:null}
    <First setName={setName} name={name} setJson={setFetch_json} toogle_should={setShould} setIsLoading={setIsLoading} setWindow={setWindow} setNametodisplay={setNametodisplay}/>
    {should?<Second fetched_json={fetched_json} setName={setName} should={should} name={name} window={window} setWindow={setWindow} Nametodisplay={Nametodisplay} setShould={setShould}/>:null}
    
    
    {false?<div className={stylee.comics}>{fetched_json[1][0].map((i)=>{console.log(i.name);return <Comics key={fetched_json[1][0].indexOf(i)} name={i}/>})}</div>:null}

    </div>
    
 )
} 