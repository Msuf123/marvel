import style from './stylee.module.css'
import src from '../Media/Hulk.jpg'
import src_t from '../Media/cap.png'
import src_th from '../Media/black.jpg'
import thor from '../Media/thor.jpg'
import peter from '../Media/peter.jpg'

import nebula from '../Media/Nebula.jpg'

export default function Animation(){
    return (
        <div className={style.d}>
            
        <img src={src} alt='all shuperhor image'></img>
        <img src={src_th} alt='all shuperhor image'></img>
        <img src={thor} alt='all shuperhor image'></img>
        <img src={peter} alt='all shuperhor image'></img>
        
        <img src={nebula} alt='all shuperhor image'></img>
        <img src={src_t} alt='all shuperhor image'></img>

       
        </div>
    )
}