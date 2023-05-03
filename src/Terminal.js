import terminall from './terminal.module.css'
import Cursor from './TerminalCursor'
import { useState } from 'react'
import Output from './Output';
import { useNavigate } from 'react-router-dom';
export default function Terminal(props){
    const[string,setValue]=useState([]);
    const[correct,setCorrect]=useState(false);
    const navigate=useNavigate()
    
    return(
        <div className={terminall.main}  tabIndex={2} onKeyDown={(e)=>{
            
             if(e.key==='Enter'){
                
                if(string.join('')==='3000'){
                    console.log('Password correct')
                    setCorrect(true)
                    setTimeout(()=>{navigate('/second')},5000)

                }
                else{console.log('Password Incorrect')
            alert('Wrong Password.Correct password is:3000  ')
            }
               }
               else if(e.key==='Backspace'){
                let array=[...string]
                array.pop()
                setValue(array)
                
                
            }
            else if(e.key!='I'&&e.key!='Control'&&e.key!='Shift'&& string.length<5){
                setValue([...string,e.key]); 
            }
            
            else if(string.length>=5){
                console.log('password limit reached')
            } 
            
                 }
            
                
                }>
            <div className={terminall.buttons}>
            <button className={terminall.cross} tabIndex={1} onClick={()=>{props.click(false)}}>&times;</button>
            
            </div>
            <h1 className={terminall.user} ><span className={terminall.user}>~@rasberrypi: </span>SSH connection established</h1>
            <p className={terminall.input}><span style={{fontWeight:'lighter'}}>Number of times you can enter password:</span> <span style={{fontWeight:'bold'}}>1</span><br></br>
             <span>Hint:</span><span style={{fontWeight:'bold'}}> I love you</span> ___ <span style={{fontWeight:'bold'}}>times</span><br></br>
            
             <span style={{fontWeight:'lighter'}}>See Console for the password:Press Ctrl+Shift+I</span><br></br>
            </p>
        <Cursor val={string
        }/>
        {correct?<Output/>:null}
        </div>
    )
}