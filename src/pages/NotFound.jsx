import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center min-h-screen flex-col gap-2'>
      <img src='https://devstarter.technology/img/articles/fullsize/230915180444.png' alt='notFound' />
      <h1 className='text-center font-bold '>
        <Link to='/'>Home</Link>
      </h1>
    </div>
  );
};
export default NotFound;
