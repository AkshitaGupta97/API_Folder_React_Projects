import { useState } from "react"

export default function ColorMain() {

    const colors = JSON.parse(localStorage.getItem('color')) ;
    const [r, setR] = useState(colors && colors.r ? colors.r:0)
    const [g, setG] = useState(colors && colors.g ? colors.g:0)
    const [b, setB] = useState(colors && colors.b ? colors.b:0)

    const saveColor = () => {
        localStorage.setItem('color', JSON.stringify({r, g, b}))
    }

    // :'rgb('+r+', '+g+', '+b+' )' => we are using this to set values to r,g, b
    return (
        <div style={{ padding: "12px", margin: "12px", border: "2px solid orange" }}>
            <h1>Color Generator</h1>
            <div style={{ backgroundColor:'rgb('+r+', '+g+', '+b+' )', border: "2px solid gray", width: "200px", height: "200px" }}></div>
            <label value={r} style={{ color: "red", fontWeight: "600" }}>Red</label>
            <input type="range" min={0} max={225} onChange={(event) => setR(event.target.value)} />
            <br />
            <label value={g}  style={{ color: "green", fontWeight: "600" }}>Green</label>
            <input type="range" min={0} max={225} onChange={(event) => setG(event.target.value)} />
            <br />
            <label value={b}  style={{ color: "blue", fontWeight: "600" }}>Blue</label>
            <input type="range" min={0} max={225} onChange={(event) => setB(event.target.value)}/>
            <br />
            <button onClick={saveColor}>Save RGB</button>
            <br />
            <p style={{fontWeight:"bold"}}>RGB is :- <span style={{color:'crimson'}}>{[r, g, b]}</span></p>
        </div>
    )
}