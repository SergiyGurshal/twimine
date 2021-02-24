import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import fetchUsersFromServer from '../../redux/actions/fetch-users-action'

import PageSlider from '../PageSlider/PageSlider'
import UserInfo from '../UserInfo/UserInfo'

import './users.sass'
const Users = ({ fetchUsers, users }) => {
  useEffect(() => {
    function fetch() {
      fetchUsers()
    }

    fetch()
  }, [fetchUsers])

  return (
    <div className="users">
      {users.map((user) => (
        <UserInfo
          key={user.id}
          {...{
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address: user.address,
          }}
        />
      ))}
      <PageSlider title="Posts" link="/posts" />
    </div>
  )
}

const getStateToProps = (state) => ({ users: state.UsersReducer })

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsersFromServer()),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(Users)
