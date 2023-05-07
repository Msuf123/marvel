import { useEffect, useState } from 'react'
import style from './find.module.css'
import Divl from './DIVL'
import Error from './Error'
export default function Find(props){
    let url='https://gateway.marvel.com:443/v1/public/characters?nameStartsWith='
    let key='&apikey=c98fbeeb5caa55720e4d631e307cd636&'
 let hash='hash=5e398d887de9037c442d6bc0756f96e4'
 const [result,setResult]=useState([])
 const[renderr,setRenderr]=useState(false)
 const[error,setError]=useState(false)
 const[once,setOnce]=useState('once')
 let result_array=null;
 let run=async()=>{
   let name=props.value
   console.log(props.value)
        let reco_url=`${url}${name}&ts=1${key}${hash}`
        
            
            

 }
 
 
    useEffect(()=>{
        run()
        
    },[once])

    let t=2
    
    return(
        <div className={style.main}>
            <div className={style.nav}>
            <button onClick={()=>{props.setWindow(false)}} tabIndex={1}>&times;</button>
            </div>
            <h1>OOPS!</h1>
            <h3>No character found with the name <span>{props.Nametodisplay}</span>.</h3>
            <h3>You might be looking for</h3>
            {!renderr?<Divl/>:null}
            {renderr?<div className={style.result} tabIndex={-1}>
                {result.map((i)=>{return <span key={result.indexOf(i)} tabIndex={t+result.indexOf(i)} >{i.name}</span>})}
           
            </div>:null}
            
        </div>
    )
}