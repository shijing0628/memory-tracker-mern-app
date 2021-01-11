import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'

function Posts() {
 const classes = useStyles()


 return (
  <div>
   posts
   <Post />
  </div>
 )
}

export default Posts
