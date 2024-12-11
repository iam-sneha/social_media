import React, { useState, useEffect } from 'react'

const SocialMediaFeed = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  useEffect(() => {
    // Simulate fetching posts from an API
    const mockPosts = [
      {
        id: 1,
        content: 'Hello World!',
        author: 'User1',
        likes: 0,
        dislikes: 0,
        comments: [],
      },
      {
        id: 2,
        content: 'React is awesome!',
        author: 'User2',
        likes: 0,
        dislikes: 0,
        comments: [],
      },
    ]
    setPosts(mockPosts)
  }, [])

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        content: newPost,
        author: 'CurrentUser',
        likes: 0,
        dislikes: 0,
        comments: [],
      }
      setPosts([newPostObj, ...posts])
      setNewPost('')
    }
  }

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }

  const handleDislike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post
      )
    )
  }

  const handleComment = (id, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    )
  }

  const handleShare = (content) => {
    alert(`Shared: ${content}`)
  }

  return (
    <div className='feed-container'>
      <h1>Social Media Feed</h1>
      <div className='post-creator'>
        <textarea
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div className='posts'>
        {posts.map((post) => (
          <div key={post.id} className='post'>
            <p>{post.content}</p>
            <span>— {post.author}</span>
            <div className='post-actions'>
              <button onClick={() => handleLike(post.id)}>
                Like ({post.likes})
              </button>
              <button onClick={() => handleDislike(post.id)}>
                Dislike ({post.dislikes})
              </button>
              <button
                onClick={() => {
                  const comment = prompt('Enter your comment:')
                  if (comment) handleComment(post.id, comment)
                }}
              >
                Comment
              </button>
              <button onClick={() => handleShare(post.content)}>Share</button>
            </div>
            <div className='comments'>
              {post.comments.map((comment, index) => (
                <div key={index} className='comment'>
                  {comment}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialMediaFeed
