import React from 'react';
import Card from './Card';

const Users = (props) => {
    return (
        <Card>
        <ul>
        {props.users.map((user) => {
            return <li key={user.key}>{user.username} - {user.age} years old </li>
        })}
        </ul>
        </Card>
    );
};

export default Users;