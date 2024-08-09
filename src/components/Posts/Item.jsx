const Item = ({ post, handleDeletePost, changePost }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => changePost(post)}>Edit</button>
      <button onClick={() => handleDeletePost(post.id)}>Delete</button>
    </div>
  );
};
export default Item;
