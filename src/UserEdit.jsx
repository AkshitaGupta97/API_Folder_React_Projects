
import { useNavigate, useParams } from 'react-router'
import './App.css'
import { useEffect, useState } from 'react';

export default function UserEdit() {

    const {id} = useParams();

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    

    useEffect(() => {
        getUserData();
    }, [])

    const url = 'http://localhost:5001/user/' + id;
    const getUserData = async() => {
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name);
        setAge(response.age);
        setEmail(response.email);
    }

    const updateUser = async () => {
        console.log(name, age, email);

        let response = await fetch(url, {
            method:'Put',
            body: JSON.stringify({name, age, email})
        });
        response = await response.json()
        console.log(response);
        if(response){
          //  alert("User data updated.")
            navigate('/')
        }
    }
    
    return(
        <div className="UserAdd">
            <h2 style={{color:"peachpuff"}}>User Edit Page </h2>
            <br />
            <input type="text" value={name}  onChange={(evnt) => setName(evnt.target.value)} placeholder="Enter name"/>
            <br />
            <input type="number" value={age} onChange={(evnt) => setAge(evnt.target.value)}  placeholder="Enter age"/>
            <br />
            <input type="email" value={email} onChange={(evnt) => setEmail(evnt.target.value)} placeholder="Enter email"/>
            <br />
            <button onClick={updateUser}>Update User</button>
            
        </div>
    )
}