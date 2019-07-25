import React from 'react';

function TeamMembers(props) {
    const {name, email, role} = props.person;
    const setMemberToEdit = props.setMemberToEdit
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <button name='edit' onClick={() => setMemberToEdit(props.person)}>Edit</button>
        </div>
    );
}
export default TeamMembers;