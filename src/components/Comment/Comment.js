import React from 'react'

import './comment.sass'

const Comment = ({ email, body, name }) => {
  return (
    <div className="comment">
      <p className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <p className="email">{`<${email}>`}</p>
      <p className="body">{body.charAt(0).toUpperCase() + body.slice(1)}</p>
    </div>
  )
}

export default Comment
