import React, { useState } from "react";


export default function Form (props) {
    console.log(props);
    const [user, setUser] = useState({name: "", email: "", role: ""});

    function handleChange(event) {
        const updatedUser = {...user, [event.target.name]: event.target.value};
        console.log("handleChange", event.target.name, event.target.value, updatedUser);
        setUser(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.newMember(user);
        console.log("user state", user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                  type="name"
                  className="form-group"
                  name="name"
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  value={user.name}
                  />

            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                type="email"
                className="form-group"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={user.email}
                />
                
            </div>
            <div className="form-group">
                <label>Role:</label>
                <input
                type="role"
                className="form-group"
                name="role"
                placeholder="Enter your role"
                onChange={handleChange}
                value={user.role}
                />  
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}





