import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

import { Navbar, Home, ArticleList, Article, BadPath, TopicsList } from './components'

function App() {
 


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="*" element={<BadPath />} />
      </Routes>
    </>
  )
}

export default App
