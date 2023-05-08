import { useState } from 'react'
import style from '../stylee.module.css'
export default function Info(props) {
    const [a, seta] = useState({color:'rgb(127, 153, 9)',borderBottom:'5px solid rgb(100, 94, 7)',borderRadius:5})
    const[b,setb]=useState(null)
    let active = props.series
    return (
        <div className={style.buttons}>
            <button onClick={() => {
                props.setSries(true)
                seta({ ...a, color:'rgb(127, 153, 9)',borderBottom:'5px solid rgb(100, 94, 7)',borderRadius:5})
                setb(null)
            }} style={a}>Series</button>
            <button onClick={
                () => {
                    props.setSries(false)
                    seta(null)
                    setb({color:'rgb(127, 153, 9)',borderBottom:'5px solid rgb(100, 94, 7)',borderRadius:5})
                }
            } style={b}>Comics</button>
            
        </div>
    )
}