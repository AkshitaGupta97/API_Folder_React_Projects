import { Suspense, use } from "react";

const fetchData = () => {
    fetch('https://api.restful-api.dev/objects').then((response)=> response.json());
}

const userData = fetchData();

export default function UseApi() {

    return(
        <div style={{padding:"12px", border:"2px solid yellowgreen", margin:"12px"}}>
            <h2>Use Api in react js</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Users userData={userData} />
            </Suspense>

        </div>
    )
}

function Users({userData}) {
    console.log(userData);
    
    const apiData = use(userData);
    console.log(apiData);
    
    return(
        <div>
            <h2>Called User List</h2>
            <hr />
            {
                apiData
            }
        </div>
    )
}