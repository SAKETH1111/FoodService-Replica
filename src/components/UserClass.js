import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            coun1:1,
            userInfo : {
                name:"Dummy",
                location: "Default"
            }
        }
        console.log("construnctor");
    }

    async componentDidMount(){
        console.log("component did mount");
        const data = await fetch("https://api.github.com/users/SAKETH1111");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,

        })

    }

    componentDidUpdate(){
        console.log("component did update");
    }

    render(){


        // if(useOnlineStatus()== false) return <h1>You are Offline,Check your Internet Connection!!!</h1>

        // const {name,location,contact} = this.props;
        const {count} = this.state;
        console.log("render");
        return (
    <div className="user-card">
        <h1> Count: {count}</h1>
        <button onClick={()=>{
            this.setState({                
                count: this.state.count+1,
            })
        }}>Increase Count</button>
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Hello</h4>

        {/* <h4>Contact: {contact}</h4> */}
    </div>
        );

    }

}

export default UserClass;