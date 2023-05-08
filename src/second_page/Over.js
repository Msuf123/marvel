import style from './stylee.module.css'
import img from '../Media/pngwing.com(1).png'
export default function Over(){
    return(
        <div className={style.nonet}>
           <img alt='iron man ironing his clothes' src={img}></img>
           <h1>Api call limit is reached.</h1>
        </div>
    )
}