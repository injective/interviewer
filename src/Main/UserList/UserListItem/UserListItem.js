import React from 'react';
import './UserListItem.scss';

const UserListItem = (props) => {
  return (
    <div className="userListItem">
      <span className="userName">{props.userName}</span>
      <span className="userJob">{props.userJob}</span>
      <span className="userEmail">{props.userEmail}</span>
      <span className="userDate">{props.userDate}</span>
    </div>
  );
}

export default UserListItem;