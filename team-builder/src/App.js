import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import {people} from "./Data";

function App() {

  const [member, setMember] = useState([]);
  console.log(member);
  return (
    <div className="App">
      
      <h1>Testing</h1>
      {people.map(person => (
        <Form people={person} />

      ))}

      <Form />
      
      
      
    </div>
  );
}

export default App;

