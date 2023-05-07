import style from './stylee.module.css'
import Find from './Find';
import Nonet from './Nonet';
export default function Second(props){
   
   
    let shouldd=props.should
   
    let fetched_json=props.fetched_json
    
    if(shouldd&&fetched_json!=='name not found'){
      
      let name=fetched_json[0][0].name;
    return(
       <div className={style.info}>
        <div className={style.innerdiv}>
            <h1 className={style.name}>{name}</h1>
            <p>{fetched_json[0][0].description===''? 'We nave no Description!':fetched_json[0][0].description}</p>
        </div>
         <img src={'https:'+fetched_json[0][1].path.split(':')[1]+'.'+fetched_json[0][1].extension} alt='l'></img>
       </div>
    )}
    
   //  catch{
   //    if(!fetched_json){
        
   //    return (<Nonet/>)
   //  }
    }

