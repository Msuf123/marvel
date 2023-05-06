import style from './stylee.module.css'
import img from '../Media/pngwing.com(1).png'
export default function Nonet(){
    return(
        <div className={style.nonet}>
           <img alt='iron man ironing his clothes' src={img}></img>
           <h1>Looks like you not connected to the internet.</h1>
        </div>
    )
}