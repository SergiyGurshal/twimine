import React from 'react'
import { Link } from 'react-router-dom'
import moreIcon from '../../images/more.svg'

import './post.sass'

const Post = ({ title, body, postId }) => {
  return (
    <div className="post">
      <p className="title">{title.charAt(0).toUpperCase() + title.slice(1)}</p>
      <p className="body">{body.charAt(0).toUpperCase() + body.slice(1)}</p>
      <Link
        to={{
          pathname: '/post-info',
          state: {
            postId,
          },
        }}
        params={{ postId }}
        className="test"
      >
        <img src={moreIcon} alt="more" className="morebtn" />
      </Link>
    </div>
  )
}

export default Post
