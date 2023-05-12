import { useEffect, useState } from 'react'
import stylee from './detail.module.css'
import series from './series'
export default function Series(props){
    
    const[value,setValue]=useState(null)
    let name=props.value[0]
  let fetched_json=props.fetched_json
  let series_data=props.fetched_json[2][0]
  useEffect(()=>{ 
    if(sessionStorage.getItem('json')!==null&&JSON.stringify(fetched_json)===sessionStorage.getItem('json')){
    //console.log(series_data)
    series(series_data)
    
}
    if(value===null){
    //console.log('setting values')
    setValue(name)
    //console.log(value)
}


    },[])
    useEffect(()=>{
        if(JSON.stringify(fetched_json)!==sessionStorage.getItem('json')){
           console.log('fetching again')
        }
    })
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