import axios from 'axios'

const url = "http://localhost:5000/posts"

const fetchPosts = () => axios.get(url)

const createPost = (newPost) => axios.post(url, newPost)
const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
const deletePost = (id) => axios.patch(`${url}/${id}`, deletePost)
const likePost = (id) => axios.patch(`${url}/${id}/likepost`)
export {
 fetchPosts,
 createPost,
 updatePost,
 deletePost,
 likePost
}