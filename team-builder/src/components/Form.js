import React, {useState, useEffect} from 'react';
import TeamMembers from './TeamMembers';

function Form(props) {
    const { team, setTeam, memberToEdit, setMemberToEdit } = props;
    const [newMember, setNewMember] = useState({name: "", email: "", role: ""})

    useEffect(() => {
        setNewMember(memberToEdit);
    }, [memberToEdit])

    function handleSubmit(event) {
        event.preventDefault();
        setTeam([...team, newMember])
        console.log('form team', team);
    }

    function handleChange(event) {
        const updatedMember = {...newMember, [event.target.name]: event.target.value}
        setNewMember(updatedMember);
    }
    return (
        <div>
            {team.map(person => <TeamMembers key={person.name} person={person} setMemberToEdit={setMemberToEdit} />)}
            <form onSubmit={handleSubmit}>
                <input type='text' value={newMember.name} onChange={handleChange} name="name" placeholder="Team Member Name"></input>
                <input type='email' value={newMember.email} onChange={handleChange} name='email' placeholder='Email'></input>
                <input type='text' value={newMember.role} onChange={handleChange} name='role' placeholder='Role'></input>
                <button name='submit' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;