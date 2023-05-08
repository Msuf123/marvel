import stylee from './stylee.module.css'
import First from './First'
import { useState } from 'react'
import { useEffect } from 'react'
import Second from './Second'
import Comics from './Comics'
import Info from './Info/Info'
import Find from './Find'
import Animation from './Aniamtion'
import Loading from './Loading'
export default function Parent(){
    const[name,setName]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[fetched_json,setFetch_json]=useState(null)
    const[should,setShould]=useState(false)
    const[window,setWindow]=useState(false)
    const[Nametodisplay,setNametodisplay]=useState()
    
    
    useEffect(()=>{
    for(let i=0;i<name.length;i++){
        if(name[i]===' '){
            name[i]='%20'
        }
    }
    
   
   
   
   
    },[name])
    useEffect(()=>{
        console.log(fetched_json)
        if(fetched_json!==null&&fetched_json!=='name not found'){
            setShould(true)
        }
        else if(fetched_json==='name not found'){
            //setWindow('true')
        }
        
    },[fetched_json])
 return(
    
    <div className={stylee.div}>
    <Animation/>
    {isLoading?<Loading/>:null}
    <First setName={setName} name={name}  setJson={setFetch_json} fetched={fetched_json} toogle_should={setShould} setIsLoading={setIsLoading} setWindow={setWindow} setNametodisplay={setNametodisplay}/>
    {should?<Second fetched_json={fetched_json} setName={setName} should={should} name={name} window={window} setWindow={setWindow} Nametodisplay={Nametodisplay} setShould={setShould} /> :null}
    {window?<Find value={name} name={fetched_json}setWindow={setWindow} setName={setName} Nametodisplay={Nametodisplay} setShould={setShould}/> :null}
    
    {false?<div className={stylee.comics}>{fetched_json[1][0].map((i)=>{console.log(i.name);return <Comics key={fetched_json[1][0].indexOf(i)} name={i}/>})}</div>:null}

    </div>
    
 )
} 