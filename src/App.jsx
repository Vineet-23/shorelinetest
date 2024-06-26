import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/user/:id' element={<UserDetail />} />
      </Routes>
    </Router>
  )
}
