import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { UsersReducer } from './redux/reducers/users-reducer'
import { PostsReducer } from './redux/reducers/posts-reducer'

const reduser = combineReducers({ UsersReducer, PostsReducer })

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)))

export default store
