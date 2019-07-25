import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import {people} from "./Data";
import Display from "./Display";

function App() {

  const [members, setMembers] = useState(people);
  console.log(members);

  return (
    <div className="App">
      
      <h1>Meet Your Team</h1>
      <Form members={members} setMembers={setMembers}/>
      {members.map((person, index) => {
        return (
          <div className="card" key={index}>
          <h4>{person.name}</h4>
          <p>{person.email}</p>
          <p>{personalbar.role}</p>
          </div>
        )
        
      })}
      
    </div>
  );
}

export default App;

