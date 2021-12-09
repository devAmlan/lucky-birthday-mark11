import React,{useState} from 'react'
import './App.css'
import {AiFillGithub,AiOutlineTwitter} from 'react-icons/ai'
function App() {
    
    const [dob, setDob] = useState(0)
    const [luckynum,setLuckynum] = useState(0)
    const [msg,setMsg] = useState("")
    const checkLucky = ()=>{
        if(dob !== 0 && luckynum > 0){
            const bdaynum = dob.replaceAll("-","")
            let sum  = 0;
            for (let i = 0; i < bdaynum.length; i++) {
                sum = sum+Number(bdaynum.charAt(i))
            }
            let num = sum%luckynum
            if(num === 0){
              setMsg("Congratulation your b'day is lucky 😊")
            }else{
                setMsg("Sorry your b'day is not lucky 😔")
            }
        }else{
            alert("Please enter a valid input")
        }
    }

    return (
        <div>
        <div className="heading"><h3>Is your B'day Lucky??</h3></div>
        <div className="inputarea">
        <label>Select your Birth day</label>
        <input type="date" onChange={(e)=>{setDob(e.target.value)}}/> 
        <label>Enter a number</label>        
        <input type="number" onChange={(e)=>{setLuckynum(e.target.value)}} />
        <button onClick={checkLucky}>Check</button>    
        </div>
        <div className="result">
        <p>{msg}</p> 
        </div>
        <div className="footer">
           <a href="ab" target="_blank"><h3>Github Repo <AiFillGithub style={{fontSize:"30px",color:"#000000",cursor:"pointer"}}/></h3> </a>
           <a href="cd" target="_blank"><h3>Connect with me <AiOutlineTwitter style={{fontSize:"30px",color:"#000000",cursor:"pointer"}}/></h3> </a>
        </div>
        </div>
    )
}

export default App
