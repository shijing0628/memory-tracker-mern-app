import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

function Posts({ setCurrentId }) {
 const classes = useStyles()
 const posts = useSelector((state) => state.posts)
 console.log(posts)
 return (
  <div>
   {!posts.length ? <CircularProgress /> : (
    <Grid className={classes.mainContainer} container alignItems="stretch" spacing={2} >
     {posts.map(post => (
      <Grid item key={post._id} xs={12} sm={6}>
       <Post post={post} setCurrentId={setCurrentId} />
      </Grid>
     ))}
    </Grid>
   )}
  </div>
 )
}

export default Posts
