import { FETCH_POSTS } from '../types'

export const PostsReducer = (state = [{ id: 0 }], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload]
    default:
      return state
  }
}
