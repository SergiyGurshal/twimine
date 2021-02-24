import { FETCH_USERS } from '../types'

const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  }
}

export default function fetchUsersFromServer() {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    dispatch(fetchUsers(json))
  }
}
