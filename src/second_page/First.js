import stylee from './stylee.module.css'
import make from './fetch'
import { useRef } from 'react'
export default function First(props){
    const valuee=useRef()
    let serach=async()=>{
        
        props.setIsLoading(true)
        //props.setJson([])
        let result_array=await  make(props.name).then((a)=>{return a})
        console.log(result_array)
        
        if(result_array === 'name not found'){
        
            //console.log('i am inside name not found')
            props.setJson(result_array)
            
            setTimeout(()=>{
                props.setIsLoading(false)
               props.setWindow(true)
            },2000)
            
               
           

        }
        else if(result_array==='over limit'){
            setTimeout(()=>{
                props.setIsLoading(false)
                props.setOver(true)
            },1000)
        }
        else if(result_array.length!=='name not found'&&result_array!=='error'){
            //console.log('character found and values are set')
            
            props.setJson(result_array)
            // console.log(sessionStorage.getItem('json'))
            if(sessionStorage.getItem('json')===null){
                //console.log('ran once')
                sessionStorage.setItem('json',JSON.stringify(result_array))
                //console.log(sessionStorage.getItem('key'))
            }
            props.setIsLoading(false)
            
                
        }
        else if(result_array==='error'){
            setTimeout(()=>{
                props.setIsLoading(false)
                props.setNonet(true)
            },1000)
        }
        
    }
    return(
        
        <div className={stylee.first}>
            
        <input type="text" className={stylee.input} maxLength='45' placeholder='Type the word or the name'
        onChange={(e)=>{
            
            let value=e.target.value.split('')
            props.setName(value) 
            props.setNametodisplay(valuee.current.value)
        
        }}
        ref={valuee}></input>
        <button className={stylee.button_two} onClick={()=>{
           if(props.name.length!==0){
            serach()
        
        }
        else{
            console.log('please enter the name')
        }
        }}><i className={'fa fa-search'}></i></button>
        </div>
        
    )
}