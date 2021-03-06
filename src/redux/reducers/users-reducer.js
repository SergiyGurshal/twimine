import { FETCH_USERS } from '../types'

export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload]
    default:
      return state
  }
}
