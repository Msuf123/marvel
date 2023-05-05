import { useEffect, useState } from 'react'
import style from './find.module.css'
export default function Find(props){
    let url='https://gateway.marvel.com:443/v1/public/characters?nameStartsWith='
    let key='&apikey=c98fbeeb5caa55720e4d631e307cd636&'
 let hash='hash=5e398d887de9037c442d6bc0756f96e4'
 const [result,setResult]=useState([])
 const[renderr,setRenderr]=useState(false)

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
        let a=await fetch(reco_url).then(a=>{return a.json()}).then((response)=>{
            //console.log(response.data.results)
           result_array=response.data.results
           setResult(result_array)
           setRenderr(true)
        })
            console.log(result_array)
            setResult(result_array)
            

 }
 
    useEffect(()=>{
        run()
    },[])
    
    
    return(
        <div className={style.main}>
            <div className={style.nav}>
            <button>&times;</button>
            </div>
            <h1>OOPS!</h1>
            <h3>No character found with the name <span>{props.value}</span>.</h3>
            <h3>You might be looking for</h3>
            {renderr?<div>
                {result.map((i)=>{return <span key={result.indexOf(i)}>{i.name}</span>})}
            </div>:null}
        </div>
    )
}