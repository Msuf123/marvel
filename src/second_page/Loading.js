import style from './loading.module.css'
import media from '../Media/loading.png'
export default function Loading(){
    return(
        <div className={style.main}>
        <img src={media}></img>
        <h1>Loading</h1>
        </div>
    )
}