
import { useActionState, useState } from "react"

export default function InputChangesUseAction() {

    const handleLogin = (prevdata, formdata) => {
        let name = formdata.get('name')
        let password = formdata.get('password')
        let regex = /^[A-Z0-9]+$/i;

        console.log(name, password);        {/* name, password ia passed so that it should not delete after login*/}
        if(!name || name.length > 7){
            return {error: 'Name should not contain more than 5 characters or Empty', name, password}
        }
        else if(!regex.test(password)){
            return {error: 'No special character allowed in Password',  name, password}
        }
        else{
            return {message: "Login done Successfully !",  name, password}
        }
        
        
    }
    const [data, action, pending] = useActionState(handleLogin)
    console.log(data);
    
    return (
        <div style={{ border: "2px solid purple", padding: '12px', marginTop:'12px' }}>
            <h2>Checking for Input lengths via UseActionStates :- </h2>
            {/* checks whether data is empty or not => data?.message */}
            {
               data?.message && <span style={{padding:"12px", color:'greenyellow',margin:"12px", fontWeight:"600"}}>{data.message}</span>  
            }
            {
               data?.error && <span  style={{padding:"12px", color:'orangered',margin:"12px", fontWeight:"600"}}>{data.error}</span>  
            }
            <form action={action}>
                <input name="name" defaultValue={data?.name} style={{ padding: "10px", fontWeight: "600", color: "pink" }} type="text" placeholder="Enter your name" />
                <br />
                <input name="password" defaultValue={data?.password} style={{ padding: "10px", marginTop: '12px', fontWeight: "600", color: "pink" }} type="text" placeholder="Enter password " />
                <br />
                <button disabled={data?.error}>Login</button>
            </form>
        </div>
    )
}