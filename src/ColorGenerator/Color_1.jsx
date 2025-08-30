
export default function ColorMain(){
    return(
        <div style={{padding:"12px", margin:"12px", border:"2px solid orange"}}>
            <div style={{border:"2px solid gray", width:"200px", height:"200px"}}></div>
            <label htmlFor="" style={{color:"red"}}>Red</label>
            <input type="range" min={0} max={225} />
            <br />
            <label htmlFor="" style={{color:"green"}}>Green</label>
            <input type="range" min={0} max={225} />
            <br />
            <label htmlFor="" style={{color:"blue"}}>Blue</label>
            <input type="range" min={0} max={225} />
        </div>
    )
}