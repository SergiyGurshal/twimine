import { FETCH_POSTS } from '../types'

const fetchPosts = (users) => {
  return {
    type: FETCH_POSTS,
    payload: users,
  }
}

export default function fetchPostsFromServer(userId) {
  return async (dispatch) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const json = await response.json()
    dispatch(fetchPosts(json))
  }
}
