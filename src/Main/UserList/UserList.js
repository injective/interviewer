import React from 'react';
import UserListItem from './UserListItem';


const UserList = ({info}) => {

    const userListItems = info.map((infoItem) => {
      return (
        <UserListItem key={infoItem.id}
          userName={infoItem.name}
          userJob={infoItem.job}
          userEmail={infoItem.email}
          userDate={infoItem.date}
        />
      );
    });

    return (
        <div className="userList">
          {userListItems}
        </div>
    );
}

export default UserList;