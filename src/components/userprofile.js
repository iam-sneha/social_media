// UserProfile.js

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'CurrentUser',
    bio: 'This is your bio. After editing, click save to change it.',
    profilePicture: 'https://via.placeholder.com/150',
  })
  const [editing, setEditing] = useState(false)
  const [myPosts, setMyPosts] = useState([
    { id: 1, content: 'Hello from my profile!', author: 'CurrentUser' },
    { id: 2, content: 'Another post of mine.', author: 'CurrentUser' },
  ])

  const navigate = useNavigate()

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    setEditing(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleDeleteProfile = () => {
    if (
      window.confirm(
        'Are you sure you want to delete your profile? This action cannot be undone.'
      )
    ) {
      // Simulate profile deletion
      setUser(null)
      setMyPosts([])
      navigate('/')
    }
  }

  if (!user) {
    return (
      <div className='profile-container'>
        <h1>Profile Deleted</h1>
        <p>Your profile has been successfully deleted.</p>
        <Link to='/' className='home-link'>
          Go to Home
        </Link>
      </div>
    )
  }

  return (
    <div className='profile-container'>
      <h1>My Profile</h1>
      <div className='profile-details'>
        <img
          src={user.profilePicture}
          alt='Profile'
          className='profile-picture'
        />
        <div className='profile-info'>
          {editing ? (
            <>
              <input
                type='text'
                name='name'
                value={user.name}
                onChange={handleInputChange}
                placeholder='Enter your name'
              />
              <textarea
                name='bio'
                value={user.bio}
                onChange={handleInputChange}
                placeholder='Enter your bio'
              ></textarea>
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
              <button onClick={handleEdit}>Edit Profile</button>
            </>
          )}
          <button onClick={handleDeleteProfile} className='delete-button'>
            Delete Profile
          </button>
        </div>
      </div>
      <h2>My Posts</h2>
      <div className='my-posts'>
        {myPosts.map((post) => (
          <div key={post.id} className='post'>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProfile
