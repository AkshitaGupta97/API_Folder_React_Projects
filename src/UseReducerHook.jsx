import { useReducer } from "react"

const emptyData = {
    name: '',
    city: '',
    state: '',
    email: '',
    password: ''
}

const reducer = (data, action) => {
    console.log( action);
    return {...data, [action.type]: action.val}
}


export default function UseReducerHook() {

    const [state, dispatch] = useReducer(reducer, emptyData);

    return (
        <div style={{ border: "2px solid purple", padding: '12px', marginTop: '12px' }}>
            <h2 style={{ color: 'orangered' }} >Use reducer Hook :- </h2>
            <form>
                <input onChange={(event) => dispatch({val:event.target.value, type:"name"})} style={{ padding: "10px", fontWeight: "600", color: "pink" }} type="text" placeholder="Enter your name" />
                <br />
                <input onChange={(event) => dispatch({val:event.target.value, type:"city"})} style={{ padding: "10px", marginTop: '12px', fontWeight: "600", color: "pink" }} type="text" placeholder="Enter city " />
                <br />
                <input onChange={(event) => dispatch({val:event.target.value, type:"state"})} style={{ padding: "10px", marginTop: '12px', fontWeight: "600", color: "pink" }} type="text" placeholder="Enter state " />
                <br />
                <input onChange={(event) => dispatch({val:event.target.value, type:"email"})} style={{ padding: "10px", marginTop: '12px', fontWeight: "600", color: "pink" }} type="text" placeholder="Enter email " />
                <br />
                <input onChange={(event) => dispatch({val:event.target.value, type:"password"})} style={{ padding: "10px", marginTop: '12px', fontWeight: "600", color: "pink" }} type="text" placeholder="Enter password " />
                <br />
                <button>Add Details</button>
                <br />
                <hr />
                <ul>
                    <li style={{color:"pink", fontWeight:"600", borderBottom:"2px solid blue", padding:"10px"}}>Name : {state.name}</li>
                    <li style={{color:"pink", fontWeight:"600", borderBottom:"2px solid blue", padding:"10px"}}>City : {state.city}</li>
                    <li style={{color:"pink", fontWeight:"600", borderBottom:"2px solid blue", padding:"10px"}}>State : {state.state}</li>
                    <li style={{color:"pink", fontWeight:"600", borderBottom:"2px solid blue", padding:"10px"}}>Email : {state.email}</li>
                    <li style={{color:"pink", fontWeight:"600", borderBottom:"2px solid blue", padding:"10px"}}>Password : {state.password}</li>
                </ul>
            </form>

        </div>
    )
}