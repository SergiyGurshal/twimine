import React from 'react'
import { Link } from 'react-router-dom'
import moreIcon from '../../images/more.svg'

import './post.sass'

const Post = ({ title, body, postId }) => {
  return (
    <div className="post">
      <Link
        to={{
          pathname: '/post-info',
          state: {
            postId,
          },
        }}
        params={{ postId }}
      >
        <img src={moreIcon} alt="more" className="morebtn" />
      </Link>
      <p className="title">{title.charAt(0).toUpperCase() + title.slice(1)}</p>
      <p className="body">{body.charAt(0).toUpperCase() + body.slice(1)}</p>
    </div>
  )
}

export default Post
