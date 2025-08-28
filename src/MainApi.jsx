import { NavLink, Route, Routes } from "react-router";
import FirstApi from "./FirstApi";
import UserAdd from "./UserAdd";
import "./App.css"
import UserEdit from "./UserEdit";

function MainApi(){
    return (
        <div className="main_api_div">
            <h1>Calling API via Routers</h1>

            <ul className="nav-list">
                <li>
                    <NavLink to="/">List</NavLink>
                </li>
                <li>
                    <NavLink to="/add" >Add User</NavLink>
                </li>
            </ul>
           

            <Routes>
                <Route path="/" element={ <FirstApi />}/>
                <Route path="/add" element={ <UserAdd />}/>
                <Route path="/edit/:id" element={<UserEdit/>} />
            </Routes>
        </div>
    )
}

export default MainApi;