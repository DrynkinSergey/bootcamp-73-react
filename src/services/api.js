import axios from 'axios';

export const fetchUsers = async () => {
  const { data } = await axios.get('https://dummyjson.com/users');
  return data.users;
};
export const fetchUserById = async userId => {
  const { data } = await axios.get(`https://dummyjson.com/users/${userId}`);
  return data;
};
export const fetchPostsByUserId = async userId => {
  const { data } = await axios.get(`https://dummyjson.com/posts/user/${userId}`);
  return data.posts;
};
export const fetchCommentsByPostId = async postId => {
  const { data } = await axios.get(`https://dummyjson.com/comments/post/${postId}`);
  return data.comments;
};
