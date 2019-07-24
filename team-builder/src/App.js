import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import {people} from "./Data";

function App() {

  const [members, setMembers] = useState(people);
  console.log(members);

  return (
    <div className="App">
      
      <h1>Testing</h1>
      {members.map((person, index) => (
        <Form key={index} people={person} />

      ))}
      
    </div>
  );
}

export default App;

