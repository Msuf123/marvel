import { useEffect, useState } from 'react'
import stylee from './detail.module.css'
import series from './Series_fetch'
import Loading from '../Loading'
export default function Series(props){
    const[final,setFinal]=useState(null)
    const[value,setValue]=useState(null)
    const[should,setShould]=useState(false)
    let name=props.value[0]
  let fetched_json=props.fetched_json
  let series_data=props.fetched_json[2][0]
  useEffect(()=>{ 
    if(sessionStorage.getItem('json')!==null&&JSON.stringify(fetched_json)===sessionStorage.getItem('json')){
    //console.log(series_data)
    setFinal(series(series_data))
    //console.log('final value set')
    
    
}
    if(value===null){
    //console.log('setting values')
    setValue(name)
    //console.log(value)
}


    },[])
    useEffect(()=>{
        if(JSON.stringify(fetched_json)!==sessionStorage.getItem('json')){
            setFinal(series(series_data))
           console.log('fetching again')
        }
        // if(final!==null){console.log('it is notnull')}
    }
    
    )
    if(final!==null&&should){
       // console.log(final)
    return(

        <div className={stylee.main}>
            
            {final.map((i)=>{
                return <div className={stylee.items} key={final.indexOf(i)+1}>
                    <span>{i[3]}</span>
                    <img src={i[0]}></img>
                    <span>start Date{i[1]}</span>
                    <span>end Date{i[2]}</span>
                </div>
            })}
        </div>
        
        )
}
else{
    console.log('I am running')
    setTimeout(()=>{setShould(true)},2000)
}
}