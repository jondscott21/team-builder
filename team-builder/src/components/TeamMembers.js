import React from 'react';

function TeamMembers(props) {
    const {name, email, role} = props.person;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    );
}
export default TeamMembers;