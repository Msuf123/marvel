import style from './error.module.css'
import img from '../Media/pngwing.com(4).png'
export default function Error(){
    return(
       <div className={style.main}>
        
         <img src={img} alt='spier man ablusing'></img>
         <h1>Sorry Matching character found </h1>
         
       </div>
    )
}