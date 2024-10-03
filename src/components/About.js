import User from "./User";
import UserClass from "./UserClass";
import UsrClass from "./UsrClass";
import {Component} from "react";



const About= ()=>{
    return (
        <div>
            <h1>About</h1>
            <h2> This is Namaste React Web Series</h2>
            <User
            name = {"Saketh Function"}
            location = {"USA"}
            contact = {"@saketh"}
            
            />
            {/* <UserClass
            name = {"Saketh Class"}
            location = {"USA"}
            contact = {"@saketh"}
            />
            <UsrClass
            name = {"Saketh Class"}
            location = {"USA"}
            contact = {"@saketh"}
            /> */}
        </div>
    )

}

// Adding infomration of Team Members.



export default About;