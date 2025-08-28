import { useState } from 'react'
import './App.css'


export default function UserAdd() {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()

    const buttonAddClick = async() => {
        //console.log(name, age, email);
        const url = "http://localhost:5001/user";
        let response = await fetch(url, {
            method:'Post',
            body:JSON.stringify({name, email, age})
        });
        response = await response.json();
        /* if(response){
            alert('new user added');
        } */
    }
    return(
        <div className="UserAdd">
            <h2 style={{color:"orange"}}>User Add Page</h2>
            <br />
            <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter name"/>
            <br />
            <input type="number" onChange={(event) => setAge(event.target.value)} placeholder="Enter age"/>
            <br />
            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter email"/>
            <br />
            <button onClick={buttonAddClick}>Add User</button>
            
        </div>
    )
}