import stylee from './stylee.module.css'
import First from './First'
import { useState } from 'react'
import { useEffect } from 'react'
import Second from './Second'
import Bottom from './Footer'
import Info from './Info/Info'
import Find from './Find'
import Animation from './Aniamtion'
import Loading from './Loading'
import Nonet from './Nonet'
import Series from './Info/Series'
import Comics from './Info/Comics'
import Over from './Over'
export default function Parent(){
    const[name,setName]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[fetched_json,setFetch_json]=useState(null)
    const[should,setShould]=useState(false)
    const[window,setWindow]=useState(false)
    const[Nametodisplay,setNametodisplay]=useState()
    const[nonet,setNonet]=useState(false)
    const[series,setSries]=useState(true)
    const[over,setOver]=useState(false)
    useEffect(()=>{
    for(let i=0;i<name.length;i++){
        if(name[i]===' '){
            name[i]='%20'
        }
    }
    
   
   
   
   
    },[name])
    useEffect(()=>{
        
       //console.log(fetched_json)
        if(fetched_json!==null&&fetched_json!=='name not found'){
            setShould(true)
           // console.log('iran')
            if(JSON.stringify(fetched_json)!==sessionStorage.getItem('json')){
            //console.log('value changeddd')
            sessionStorage.setItem('json',JSON.stringify(fetched_json))
        }
        
        }
        else if(fetched_json==='name not found'){
            //setWindow('true')
        }
        
        
    },[fetched_json])
 return(
    
    <div className={stylee.div}>
    <Animation />
    {isLoading?<Loading/>:null}
    <First setName={setName} name={name} setNonet={setNonet} setOver={setOver} setJson={setFetch_json} fetched={fetched_json} toogle_should={setShould} setIsLoading={setIsLoading} setWindow={setWindow} setNametodisplay={setNametodisplay}/>
    {nonet?<Nonet/>:null}
    {over?<Over/>:null}
    {should?<Second fetched_json={fetched_json} setName={setName} should={should} name={name} window={window} setWindow={setWindow} Nametodisplay={Nametodisplay} setShould={setShould} /> :null}
    {should&&!window&&fetched_json!=='name not found'?<Info setSries={setSries} series={series}/>:null}
    {window?<Find value={name} name={fetched_json}setWindow={setWindow} setName={setName} Nametodisplay={Nametodisplay} setShould={setShould}/> :null}
    {should&&series&&!window&&fetched_json!=='name not found'?<Series value={fetched_json[1]} fetched_json={fetched_json}/>:null}
    {should&&!series&&!window&&fetched_json!=='name not found'?<Comics value={fetched_json[2]} fetched_json={fetched_json}/>:null}
    {should&&!window&&fetched_json!=='name not found'?<Bottom/>:null}
    

    </div>

    
 )
} 