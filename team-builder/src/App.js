import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form"
import TeamMembers from './components/TeamMembers'

function App() {
  const [team, setTeam] = useState([{name: 'Jon', email: 'jon@jon.com', role: 'front-end' }, {name: 'Ashley', email: 'ash@ash.com', role: 'back-end'}])
  const [memberToEdit, setMemberToEdit] = useState({})
  console.log(memberToEdit)

  return (
    <div className="App">
     <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} />
    </div>
    
  );
}

export default App;
