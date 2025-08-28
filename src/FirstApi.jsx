import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function FirstApi() {
    // 'http://localhost:3000/user'

    const navigate = useNavigate();

    const [userData, setUserdata] = useState([]);
    const [loading, setLoading] = useState(false);
     const API = 'http://localhost:5001/user';

    useEffect(() => {
        setLoading(true);
        getuserData();
    }, []);

    const getuserData = async () => {
        let response = await fetch(API);
        response = await response.json();
        setUserdata(response)
        setLoading(false);
    };

    const deleteBtn = async(id) => {
        let response = await fetch(API + "/" + id, {
            method:"delete"
        })
        response = await response.json();
      /*  if(response){
            alert("deleted")
        } */
        getuserData();
    }

    const EditBtn = (id) => {
        navigate('/edit/' + id)
    }

    return (
        <div>
            <h3 style={{color:"orange"}}>API functions and Routers</h3>
            {
                !loading ?
                    userData.map((user) => (
                        <div key={user.name} style={{ border: "2px solid blue", padding: "12px", borderRadius: "8px" }}>
                            <h3>{user.name}</h3>
                            <ul>
                                <li style={{color:"pink", fontWeight:"600"}}>{user.age}</li>
                                <li style={{color:"pink", fontWeight:"600"}}>{user.email}</li>
                                <li><button onClick={() => deleteBtn(user.id)}>Delete</button></li>
                                <li style={{margin:"12px"}}><button onClick={() => EditBtn(user.id)}>Edit</button></li>
                            </ul>
                        </div>
                    ))
                    : <h2>Loading ....</h2>
            }
        </div>
    );

}

export default FirstApi