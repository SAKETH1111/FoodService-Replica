import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Header = () => {
    // let btnName= "Login";
    const [btnName,setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);
    // console.log("User Data",data);
    console.log("Header render");
    const onlineStatus= useOnlineStatus();
    useEffect(()=>{
        console.log("use effect rendered");
    },[btnName])
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo container">
                <img alt="logo not loaded" className="w-56" src= {LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="text-nowrap px-4">Online Status : {onlineStatus? "✅":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="text-nowrap px-4"><Link to="/about">About us</Link></li>
                    <li className="text-nowrap px-4"><Link to="/Contact">Contact us</Link></li>
                    <li className="px-4">Founder</li>
                    <button className="px-4" onClick={()=> {
                        btnName == "Login" ? setBtnName("Logout"):setBtnName("Login") 
                    }}> {btnName}</button>
                    <li className="px-4 text-nowrap font-bold">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default Header;