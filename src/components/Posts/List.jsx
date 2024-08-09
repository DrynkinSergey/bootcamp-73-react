import Item from './Item';

const List = ({ posts, handleDeletePost, changePost }) => {
  return (
    <div>
      {posts.map(post => (
        <Item key={post.id} post={post} handleDeletePost={handleDeletePost} changePost={changePost} />
      ))}
    </div>
  );
};
export default List;
