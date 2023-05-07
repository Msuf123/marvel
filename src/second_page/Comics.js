import { useEffect, useState } from 'react'
import style from './comics.module.css'
export default function Comics(props){
    const[display,setDisplay]=useState(false)
    const[price,setPrice]=useState(null)
    const[img,setImg]=useState(null)
    let key='&apikey=c98fbeeb5caa55720e4d631e307cd636&'
 let hash='hash=5e398d887de9037c442d6bc0756f96e4'
  useEffect(()=>{fetch(`${props.name.resourceURI}?ts=1${key}${hash}`).then((a)=>{return a.json()})
  .then((ans)=>{
    setImg(ans.data.results[0].thumbnail)
    setPrice(ans.data.results[0].prices[0].price)
    setDisplay(true)
  },[props.name])



})
    return(
    <div className={style.main}>
    <h1>{props.name.name}</h1>
    {display?
    <div className={style.img_c}>
    <img alt='thumbnail' src={`${img.path}.${img.extension}`}
    ></img></div>:null}
    {display?<h4>Print price:$<span>{price}</span></h4>:null}
    </div>)
}