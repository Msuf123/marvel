import terminall from './terminal.module.css'
export default function cursor(props){
    return(<div>
        <h1 className={terminall.cn}><span className={terminall.user}>~@rasberrypi:
        {props.val.map(()=>{return '*'})} </span></h1>
        
        </div>
    )
}