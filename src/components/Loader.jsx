import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='min-h-screen justify-center items-center flex'>
      <Triangle visible={true} height='180' width='180' color='#2a23fa' ariaLabel='triangle-loading' wrapperStyle={{}} wrapperClass='' />
    </div>
  );
};
export default Loader;
