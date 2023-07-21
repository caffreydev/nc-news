import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

import { Navbar, Home, ArticleList, Article, BadPath, TopicsList, Topic, Login} from './components'

function App() {
 
const [user, setUser] = useState("Guest")
//for dev purposes sets a user as default


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/home" element={<Home user={user}/>}/>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<Article  user={user}/>}/>
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/topics/:topicSlug" element={<Topic />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="*" element={<BadPath />} />
      </Routes>
    </>
  )
}

export default App
