import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import DropDown from '../Dropdown/DropDown'
import PageSlider from '../PageSlider/PageSlider'

import './add-post.sass'

const AddPost = (props) => {
  const [selectedUser, setSelectedUser] = useState('Select user...')
  const name = useRef()
  const body = useRef()

  const getUserId = () => {
    for (let user of props.users) {
      if (user.name === selectedUser) return user.id
    }
  }

  const createPost = () => {
    if (name.current.value && body.current.value && selectedUser !== 'Select user...') {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: name.current.value,
          body: body.current.value,
          userId: getUserId(),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    }
  }
  return (
    <div className="add-post">
      <div className="main-content">
        <div className="container">
          <p className="title">User:</p>
          <DropDown {...{ items: props.users, selectedUser, setSelectedUser }} />
        </div>
        <div className="container">
          <p className="title">Title:</p>
          <input className="title-input" ref={name} />
        </div>
        <div className="container">
          <p className="title">Body:</p>
          <input className="body-input" ref={body} />
        </div>
        <div className="create-btn" onClick={createPost}>
          Create
        </div>
      </div>
      <PageSlider title="Posts" link="/posts" />
    </div>
  )
}

const getStateToProps = (state) => ({ users: state.UsersReducer })

export default connect(getStateToProps)(AddPost)
