const Article = ({ title, url }) => {
  return (
    <li className='p-2 bg-white shadow-lg italic hover:text-red-500'>
      <a target='_blank' rel='noreferrer' href={url}>
        {title}
      </a>
    </li>
  );
};
export default Article;
