import style from './footer.module.css'
import src from '../Media/logofooter.png'
export default function Footer(){
    return(
    <div className={style.main}>
      
        <img src={src} alt='red marvel logo'></img>
        <span>&copy;Copyright All rights reserved</span>
    </div>)
}