import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageSlider from '../PageSlider/PageSlider'
import fetchUsersFromServer from '../../redux/actions/fetch-users-action'
import fetchPostsFromServer from '../../redux/actions/fetch-posts-action'

import rightArrowIcon from '../../images/right-arrow.svg'
import leftArrowIcon from '../../images/left-arrow.svg'
import plusIcon from '../../images/plus.svg'

import './posts.sass'
import Post from '../Post/Post'
import { Link } from 'react-router-dom'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 1,
      userName: 'Loading...',
    }
  }

  componentDidMount() {
    const setUser = async () => {
      if (!this.props.users.length) {
        await this.props.fetchUsers()
      }

      for (let user of this.props.users) {
        if (user.id === this.state.userId) this.setState({ userName: user.name })
      }

      this.props.fetchPosts(this.state.userId)
    }

    setUser()
  }

  componentDidUpdate() {
    for (let user of this.props.users) {
      if (user.id === this.state.userId) this.setState({ userName: user.name })
    }
    this.props.fetchPosts(this.state.userId)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.userName === nextState.userName &&
      this.state.userId === nextState.userId &&
      this.props.posts[0].id === nextProps.posts[0].id
    ) {
      return false
    }
    return true
  }

  decrementUserId() {
    if (this.state.userId > 1) this.setState({ userId: this.state.userId - 1 })
  }

  incrementUserId() {
    if (this.state.userId < this.props.users[this.props.users.length - 1].id) this.setState({ userId: this.state.userId + 1 })
  }

  render() {
    return (
      <div className="posts">
        <div className="navigator">
          <img src={leftArrowIcon} alt="arrow" className="nav-buttons" onClick={this.decrementUserId.bind(this)} />
          <h1 className="title">{this.state.userName}</h1>
          <img src={rightArrowIcon} alt="arrow" className="nav-buttons" onClick={this.incrementUserId.bind(this)} />
        </div>
        <div className="main-content">
          {this.props.posts[0].id > 0 &&
            this.props.posts.map((post) => <Post key={post.id} {...{ title: post.title, body: post.body, postId: post.id }} />)}
          <Link to="/add-post">
            <img src={plusIcon} alt="add post" className="add-post" />
          </Link>
        </div>
        <PageSlider title="Users" link="/" />
      </div>
    )
  }
}

const getStateToProps = (state) => ({ users: state.UsersReducer, posts: state.PostsReducer })

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsersFromServer()),
    fetchPosts: (userId) => dispatch(fetchPostsFromServer(userId)),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(Posts)
