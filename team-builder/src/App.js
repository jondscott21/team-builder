import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"

function App() {
  const [team, setTeam] = useState([{ name: 'Jon', email: 'jon@jon.com', role: 'front-end' }, { name: 'Ashley', email: 'ash@ash.com', role: 'back-end'}])
  const [memberToEdit, setMemberToEdit] = useState({})

  return (
    <div className="App">
     <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} />
    </div>
    
  );
}

export default App;
