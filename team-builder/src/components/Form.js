import React, {useState} from 'react';

function Form(props) {
    const { team, setTeam } = props;
    console.log(team)
    // console.log(setTeam)
    const [newMember, setNewMember] = useState({name: "", email: "", role: ""})

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" placeholder="Team Member Name"></input>
                <input type='email' name='email' placeholder='Email'></input>
                <input type='radio' name='role'></input> Frontend
                <input type='radio' name='role'></input> Backend
                <input type='radio' name='role'></input> UX
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;