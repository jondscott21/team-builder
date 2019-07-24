import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import TeamMembers from './components/TeamMembers'

function App() {
  const [team, setTeam] = useState([{name: 'Jon', email: 'jon@jon.com', role: 'front-end engineer' }, {name: 'Ashley', email: 'ash@ash.com', role: 'back-end engineer'}])
  return (
    <div className="App">
     {team.map(person => <TeamMembers person={person} />)}
     <Form team={team} setTeam={setTeam} />
    </div>
    
  );
}

export default App;
