import { BrowserRouter as Router, Route } from 'react-router-dom'

import AddPost from './components/AddPost/AddPost'
import PostInfo from './components/PostInfo/PostInfo'
import Posts from './components/Posts/Posts'
import Users from './components/Users/Users'
import Header from './components/Header/Header'

import './app.sass'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" component={Users} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/add-post" component={AddPost} exact />
        <Route path="/post-info" component={PostInfo} exact />
      </Router>
    </div>
  )
}

export default App
