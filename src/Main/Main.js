import React from 'react';
import UserList from './UserList';

const Main = (props) => {
    return (
        <main className="main">
            <UserList info={props.usersInfo} />
        </main>
    );
}

export default Main;