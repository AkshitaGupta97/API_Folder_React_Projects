import { useState } from "react"

export default function InputChanges(){
    const [inName, setInName] = useState('');
    const [errname, setErrname] = useState();

    const [inPass, setInPass] = useState('');
    const [errPass, setErrPass] = useState();

    const handleName = (event) => {
        console.log(event.target.value);
        if(event.target.value.length > 7){
            setErrname("Length of name must be less than 7.")
        }
        else{
            setErrname()
        }
    }

    const handlePassword = (event) => {
        let regex = /^[A-Z0-9]+$/i;
        if(regex.test(event.target.value)){
            setErrPass()
        }
        else{
            setErrPass('Only numbers and alphabet allowed.')
        }
    }
    return(
        <div style={{border:"2px solid green", padding:'12px'}}>
            <h2>Checking for Input lengths </h2>
            <input className={errname? 'error': ''} style={{padding:"10px", fontWeight:"600", color:"pink"}} type="text" placeholder="Enter your name" onChange={handleName} />
            <span style={{marginLeft:'12px', color:'orangered', fontWeight:"600"}}> {errname && errname}</span>
            <br />
            <input className={errPass? 'error': ''} style={{padding:"10px", marginTop:'12px', fontWeight:"600", color:"pink"}} type="text" placeholder="Enter password " onChange={handlePassword} />
            <span style={{marginLeft:'12px', color:'orangered', fontWeight:"600"}}> {errPass && errPass}</span>
            <br />
            <button disabled={ errname || errPass}>Login</button>
        </div>
    )
}