import React from "react";
class UsrClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            coun1:1
        }
        console.log(" Second construnctor");
    }

    componentDidMount(){
        console.log("Second component did mount");

    }

    render(){
        const {name,location,contact} = this.props;
        const {count} = this.state;
        console.log(" Second render");
        return (
    <div className="user-card">
        <h1> Count: {count}</h1>
        <button onClick={()=>{
            this.setState({                
                count: this.state.count+1,
            })
        }}>Increase Count</button>
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h4>Hello</h4>
    </div>
        );

    }

}

export default UsrClass;