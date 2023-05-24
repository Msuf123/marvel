import { useEffect, useState } from 'react'
import stylee from './detail.module.css'
import series from './Series_fetch'
import Loading from '../Loading'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import Divl from '../DIVL'
export default function Series(props){
    const[final,setFinal]=useState([])
    const[value,setValue]=useState(null)
    const[c,setC]=useState(false)

  let fetched_json=props.fetched_json
  let series_data=props.fetched_json[2][0]
  useEffect(()=>{ 
    if(sessionStorage.getItem('json')!==null&&JSON.stringify(fetched_json)===sessionStorage.getItem('json')){
    //console.log(series_data)
    setFinal(series(series_data))
    //console.log('data fetched')
    
    
}
    //if(value===null){
    //console.log('setting values')
    //setValue(name)
    //console.log(value)
//}


    },[])
    useEffect(()=>{
        setC(false)
        if(JSON.stringify(fetched_json)!==sessionStorage.getItem('json')){
            setFinal(series(series_data))
           console.log('fetching again')
        }
        // if(final!==null){console.log('it is notnull')}
    }
    
    )
    
       // console.log(final)
       if(final.length!==0){
        
    return(
        
        <div className={stylee.main}>
           
            {final.map((i)=>{
                return <div className={stylee.items} key={final.indexOf(i)+1}>
                    <span className={stylee.heading}>{i[3]}</span>
                    <img src={i[0]}></img>
                    <div className={stylee.date}>
                    <span className={stylee.dates}>Start Date:{i[1]}</span>
                    <span className={stylee.datee}>End Date:{i[2]}</span>
                    </div>
                </div>
            })}
        </div>
        
        )}
        else if(!c){
            setTimeout(()=>{
                setC(true)
            },4000)
            return(<div className={stylee.loading}>
                 <Divl/>
            </div>)
        }

}
