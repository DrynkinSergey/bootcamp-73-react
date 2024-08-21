import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url(https://www.dreams.co.uk/sleep-matters-club/wp-content/uploads/SMC-Food-Dreams-Main-1000x667.jpg)',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-neutral-content text-center'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>Welcome to our site! Lets start!</p>
          <Link to='/recipes' className='btn btn-primary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
