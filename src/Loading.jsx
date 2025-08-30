import { lazy, Suspense, useState } from "react"
import LoadingUser from "./loadingUser"

const User = lazy(() => import('./loadingUser'))

export default function Loading() {
    const [load, setLoad] = useState(false)
    return(
        <div style={{color:'yellow', padding:"12px", border:"2px solid orange"}}>
            <h2> Lazy Loading</h2>
            <br />
            <button onClick={() => setLoad(true)}>Load User</button>
            {
                load? <Suspense fallback={<h2>loading...</h2>}> < LoadingUser/></Suspense>  : null
            }

            {
                /* load? < LoadingUser/>: null */
            }
            
        </div>
    )
}