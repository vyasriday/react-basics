import React from 'react';

let style = {
  border: '1px solid gray',
  padding: '4px'
}

const User = ({user}) => {
  console.log(user);
  return(
    <div style={style}>
      <h3> {user.name}</h3>
      <small>{user.email}</small> <br/>
      <code>{user.phone}</code>

    </div>
  )
}

export default User;