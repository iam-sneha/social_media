import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import LoginFnc from './components/login'
import SocialMediaFeed from './components/socialmedia'
import Layout from './components/home'

import UserProfile from './components/userprofile'

function SupDivRjsCls() {
  return (
    <Routes>
      <Route path='/' exact element={<LoginFnc />} />
      <Route path='/SocialMediaFeed' exact element={<SocialMediaFeed />} />

      <Route path='/home' element={<Layout />} />
      <Route path='/profile' element={<UserProfile />} />
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('MynRutUid'))
root.render(
  <BrowserRouter>
    <SupDivRjsCls />
  </BrowserRouter>
)
