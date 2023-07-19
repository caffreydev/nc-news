import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

import { Navbar, Home, ArticleList, Article, BadPath } from './components'

function App() {
 
const [user, setUser] = useState("tickle122")
//for dev purposes sets a user as default


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<Article  user={user}/>}/>
        <Route path="*" element={<BadPath />} />
      </Routes>
    </>
  )
}

export default App
