import stylee from './stylee.module.css'
import make from './fetch'
import { useRef } from 'react'
export default function First(props){
    const valuee=useRef()
    let serach=async()=>{
        
        props.setIsLoading(true)
        let result_array=await  make(props.name).then((a)=>{return a})
        //console.log(result_array)
        
        if(result_array === 'name not found'){
        
            //console.log('i am inside name not found')
            props.setJson(result_array)
            
            setTimeout(()=>{
                props.setIsLoading(false)
               // props.setWindow(true)
            },2000)
            
               
           

        }
        else if(result_array.length!=='name not found'){
            console.log('character found and values are set')
            
            props.setJson(result_array)
            props.setIsLoading(false)
                
        }
        
    }
    return(
        <div >
        <div className={stylee.first}>
            
        <input type="text" className={stylee.input} maxLength='45' placeholder='Type the word or the name'
        onChange={(e)=>{
            
            let value=e.target.value.split('')
            props.setName(value) 
            props.setNametodisplay(valuee.current.value)
        
        }}
        ref={valuee}></input>
        <button className={stylee.button_two} onClick={()=>{
           
            serach()}}><i className={'fa fa-search'}></i></button>
        </div>
        </div>
    )
}