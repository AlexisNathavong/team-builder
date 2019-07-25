import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import {people} from "./Data";
import Display from "./Display";

function App() {

  const [members, setMembers] = useState([]);
  console.log(setMembers);

  function newMember(member) {
    setMembers([...members, member])
  }
  return (
    <div className="App">
      
      <h1>Meet Your Team</h1>
      <Form newMember={newMember}/>
      {members.map(member => (
        <Display member={member} />
      ))}
      
    </div>
  );
}

export default App;

