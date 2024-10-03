import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const User = ({name,location,contact}) => {
    const [count] = useState(0);
    if(useOnlineStatus()== false) return <h1>You are Offline,Check your Internet Connection!!!</h1>

return (
    <div className="user-card">
        <h1>{count}</h1>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>


    </div>
)
}
export default User;