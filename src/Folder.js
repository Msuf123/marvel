import folder from './Media/folder.png'
import style from './front.module.css'
export default function Folder_hacking(props){
  return (
    <div className={style.folder}>
        <img src={folder} alt='hacking_foolder' className={style.folder_img} onDoubleClick={()=>{props.click(true)}} tabIndex={0}/>
    </div>
  )
}