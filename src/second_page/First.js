import stylee from './stylee.module.css'
import make from './fetch'
export default function First(props){
    return(
        <div className={stylee.div}>
        <div className={stylee.first}>
            <button className={stylee.buttonn} >Home</button>
        <input type="text" className={stylee.input} maxLength='22' placeholder='Eg..Iron man'
        onChange={(e)=>{
            
            let value=e.target.value.split('')
            props.setName(value) 
            
        
        }}
        ></input>
        <button className={stylee.button_two} onClick={make}>Search</button>
        </div>
        </div>
    )
}