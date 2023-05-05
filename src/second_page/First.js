import stylee from './stylee.module.css'
import make from './fetch'
export default function First(props){
    let serach=async()=>{
        props.setIsLoading(true)
        let result_array=await  make(props.name).then((a)=>{return a})
        
        
        props.setJson(result_array)
        props.toogle_should(true)
        if(!result_array){
            setTimeout(()=>{
                props.setIsLoading(false)
            },2000)
        }
        else{props.setIsLoading(false)}
        
        
    }
    return(
        <div >
        <div className={stylee.first}>
            <button className={stylee.buttonn} >Home</button>
        <input type="text" className={stylee.input} maxLength='22' placeholder='Eg..Iron man'
        onChange={(e)=>{
            
            let value=e.target.value.split('')
            props.setName(value) 
            
        
        }}
        ></input>
        <button className={stylee.button_two} onClick={serach}>Search</button>
        </div>
        </div>
    )
}