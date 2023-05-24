import style from './front.module.css'
import './App.css';
import Content from './Content';
import Nav from './Nav';
import Folder from './Folder';
import { useEffect, useState } from 'react';
import Terminal from './Terminal';
import {  navigate,useNavigate } from 'react-router-dom';

function App() {
const[h]=useState(window.innerHeight)
const[w]=useState(window.innerWidth)
const[toogle,setToogle]=useState(false);
const navigate=useNavigate()
 useEffect(()=>{console.log('Password is : 3000')

if(true){
  navigate('second')
}
},[h,w])
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
