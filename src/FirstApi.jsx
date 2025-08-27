import { useEffect, useState } from "react";

function FirstApi() {
    // 'http://localhost:3000/user'

    const [userData, setUserdata] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getuserData();
    }, []);

    const getuserData = async () => {
        const API = 'http://localhost:5001/user';
        let response = await fetch(API);
        response = await response.json();
        setUserdata(response)
        setLoading(false);
    };

    return (
        <div>
            <h3>API functions and Routers</h3>
            {
                !loading ?
                    userData.map((user) => (
                        <div key={user.name} style={{ border: "2px solid blue", padding: "12px", borderRadius: "8px" }}>
                            <h3>{user.name}</h3>
                        </div>
                    ))
                    : <h2>Loading ....</h2>
            }
        </div>
    );

}

export default FirstApi