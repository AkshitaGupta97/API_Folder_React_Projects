import { useEffect } from "react";

function FirstApi() {
    // 'http://localhost:3000/user'
    useEffect(() => {
        userData();
    },[])
    const userData = async() => {
        const url = 'http://localhost:3000/user';
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);
        
    }
    return (
        
        <div>
        <h2>API functions</h2>

        </div>
    )
}

export default FirstApi