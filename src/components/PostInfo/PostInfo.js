import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Comment from '../Comment/Comment'
import PageSlider from '../PageSlider/PageSlider'

import './post-info.sass'

const PostInfo = (props) => {
  const [post, setPost] = useState({ title: 'Loading...', body: 'Loading...' })
  const [comments, setComments] = useState('')
  const { postId } = props.location.state

  const name = useRef()
  const body = useRef()

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const json = await response.json()
      setPost(json)
    }

    const getComments = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      const json = await response.json()
      setComments(json)
    }

    getComments()
    getPost()
  }, [postId])

  useEffect(() => {
    name.current.value = post.title.charAt(0).toUpperCase() + post.title.slice(1)
    body.current.value = post.body.charAt(0).toUpperCase() + post.body.slice(1)
  }, [post])

  const deletePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    })
  }

  const editPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: postId,
        title: name.current.value ? name.current.value : name.current.defaultValue,
        body: body.current.value ? body.current.value : body.current.defaultValue,
        userId: post.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  return (
    <div className="post-info">
      <div className="main-content">
        <input className="title input" defaultValue={post.title.charAt(0).toUpperCase() + post.title.slice(1)} ref={name} />
        <textarea className="body input" defaultValue={post.body.charAt(0).toUpperCase() + post.body.slice(1)} ref={body} />
        <p className="title comment-title">Comments:</p>
        <div className="comments">
          {comments &&
            comments.map((comment) => (
              <Comment key={comment.id} {...{ email: comment.email, body: comment.body, name: comment.name }} />
            ))}
        </div>
        <div className="buttons-container">
          <Link to="/posts" onClick={editPost}>
            <div className="button">Save</div>
          </Link>
          <Link to="/posts" onClick={deletePost}>
            <div className="button">Delete</div>
          </Link>
        </div>
      </div>
      <PageSlider title="Posts" link="/posts" />
    </div>
  )
}

const getStateToProps = (state) => ({ users: state.UsersReducer, posts: state.PostsReducer })

export default connect(getStateToProps, null)(PostInfo)
