import style from './front.module.css'
import logo from './Media/logo.png'
export default function Nav(){
    return(
        <div className={style.nav}>
            <img src={logo} alt='image' className={style.nav_img}></img>
            <span className={style.nav_span}>Login</span>
        </div>
    )
}