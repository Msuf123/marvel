import style from './front.module.css'
import './App.css';
import Content from './Content';
import Nav from './Nav';
import Folder from './Folder';
import { useEffect, useState } from 'react';
import Terminal from './Terminal';

function App() {
const[toogle,setToogle]=useState(false);
 useEffect(()=>{console.log('Password is : 3000')},[])
  return (

    <div className={style.main}>
      
      <Nav />
      <Content/>
      {!toogle?<Folder click={setToogle}/>:null}
      {toogle?<Terminal click={setToogle}/>:null}
      
      </div>
    
  );
}

export default App;
