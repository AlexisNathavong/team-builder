import React from "react";

export default function Display(props) {

console.log("Welcome", props);

    return (
        <div className="Team">
            <h3>Name: {props.member.name}</h3>
            <h3>Email: {props.member.email}</h3>
            <h3>Role: {props.member.role}</h3>
        </div>
    );
}