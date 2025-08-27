import { useState } from 'react'
import './App.css'

export default function UserAdd() {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    return(
        <div className="UserAdd">
            <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter name"/>
            <br />
            <input type="number" onChange={(event) => setAge(event.target.value)} placeholder="Enter age"/>
            <br />
            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter email"/>
            <br />
            <button>Add User</button>
        </div>
    )
}