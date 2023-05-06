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
 
 let result_array=null;
 let run=async()=>{
    let name=props.value;
        if(props.value[0]==='%20'){
        props.value.shift()
        
        }
        
    
        for(let  i=0;i<props.value.length;i++){
            if(props.value[i]==='%20'){
                name=props.value.slice(0,i)
                break
            }
        }
        
        name=name.join('')
        
        let reco_url=`${url}${name}&ts=1${key}${hash}`
        await fetch(reco_url).then(a=>{return a.json()}).then((response)=>{
            //console.log(response.data.results)
           result_array=response.data.results
           setResult(result_array)
           
           setTimeout(()=>{setRenderr(true)
            if(result_array.length===0){
                setError(true)
                
               }
        },700)
        })
            
            setResult(result_array)
            
            

 }
 
 
    useEffect(()=>{
        run()
        
    },[])

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
            {error?<Error></Error>:null}
        </div>
    )
}