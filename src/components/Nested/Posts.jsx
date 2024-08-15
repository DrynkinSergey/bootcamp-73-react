import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostsByUserId(userId).then(data => setPosts(data));
  }, [userId]);
  if (!posts.length) {
    return <h2>This user has not any posts yet!</h2>;
  }
  return (
    <div className='flex gap-4'>
      <ul className='border-r-2 border-red-500 pr-4'>
        {posts.map((post, idx) => (
          <li key={post.id}>
            <NavLink to={`comments/${post.id}`}>
              {idx + 1}. {post.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default Posts;
