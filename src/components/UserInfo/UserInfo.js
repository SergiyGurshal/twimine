import React from 'react'

import './user-info.sass'

const UserInfo = ({ name, username, email, phone, website, address }) => {
  return (
    <div className="user-info">
      <p className="information">
        <span className="name">{name}</span>
        <span className="aditional">{`<${email}> @${username}`}</span>
      </p>
      <p className="information">
        <span className="title">Address:</span> {`${address.city} ${address.street} street`}
      </p>
      <p className="information">
        <span className="title">Phone:</span> {phone}
      </p>
      <p className="information">
        <span className="title">Website:</span> {website}
      </p>
    </div>
  )
}

export default UserInfo
