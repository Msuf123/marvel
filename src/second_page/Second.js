import style from './stylee.module.css'
import Find from './Find';
export default function Second(props){
   
    let shouldd=props.should
    
    let fetched_json=props.fetched_json
    try{let name=fetched_json[0][0].name;
    return(
       <div className={style.info}>
        <div className={style.innerdiv}>
            <h1 className={style.name}>{name}</h1>
            <p>{fetched_json[0][0].description===''? 'We nave no Description!':fetched_json[0][0].description}</p>
        </div>
         {shouldd?<img src={'https:'+fetched_json[0][1].path.split(':')[1]+'.'+fetched_json[0][1].extension} alt='l'></img>:null}
       </div>
    )}
    catch{
      if(!fetched_json){
         
      return (<h1>no net connection right now</h1>)
    }
    else{
      
            return(
               
            <Find value={props.name}/>
            )
    }
   }
}
