
import './App.css'

export default function UserEdit() {
    
    return(
        <div className="UserAdd">
            <h2 style={{color:"crimson "}}>User Edit Page </h2>
            <br />
            <input type="text"  placeholder="Enter name"/>
            <br />
            <input type="number"  placeholder="Enter age"/>
            <br />
            <input type="email" placeholder="Enter email"/>
            <br />
            <button >Update User</button>
            
        </div>
    )
}