import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/post').then(response=>{
      response.json().then(posts =>{
        setPosts(posts)
      });
    })

  },[])
  return (
    <>
    { posts.length > 0 && posts.map(post=>(
      <Blog {...post} />
    ))
    }
    </>
  )
}

export default HomePage

