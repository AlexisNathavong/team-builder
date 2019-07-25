import React from "react";

export default function Display(props) {

console.log("Welcome", props);

    return (
        <div className="Team">
            <h3>Name: {props.name}</h3>
            <h3>Name: {props.email}</h3>
            <h3>Name: {props.role}</h3>
        </div>
    );
}