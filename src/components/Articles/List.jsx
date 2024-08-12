import Article from './Article';

const List = ({ articles }) => {
  return (
    <ul className='flex flex-col gap-4 px-4'>
      {articles?.map(item => (
        <Article key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default List;
