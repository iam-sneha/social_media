import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className='home-container'>
        <br></br>
        <br></br>
        <h1 Style='background-color:black'>Welcome to the Social Media App</h1>
        <p>
          share information, ideas, and create content through virtual
          communities and networks.
        </p>
        <Link to='/SocialMediaFeed' className='home-link'>
          Go to Feed
        </Link>
        <Link to='/profile' className='home-link'>
          View Profile
        </Link>
      </div>
    </>
  )
}

export default Layout
///////////////////////////////////////////
