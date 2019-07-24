import React, {useState} from 'react';
import './App.css';
import Form from "./Form";


function App() {

  const [member, setMember] = useState([]);
  console.log(member);
  return (
    <div className="App">
      
       <h1>Testing</h1>
       {member.map(person => (
         <Form key={person.info} info={person} />
       ))}
       <Form />
      
       <button type="edit-button" className="btn btn-primary">
          Edit Button
      </button>
    </div>
  );
}

export default App;

