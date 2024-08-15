import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsByPostId } from '../../services/api';

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchCommentsByPostId(postId).then(data => setComments(data));
  }, [postId]);
  return (
    <div>
      <ul className='flex flex-col gap-2 italic'>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};
export default Comments;
