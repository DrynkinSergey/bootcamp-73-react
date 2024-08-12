import Article from './Article';

export const List = ({ articles }) => {
  return (
    <ul className='flex flex-col gap-4 px-4 mb-4'>
      {articles?.map(item => {
        if (item.title) {
          return <Article key={item.objectID} {...item} />;
        }
      })}
    </ul>
  );
};
