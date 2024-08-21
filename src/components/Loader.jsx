import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Triangle visible={true} height='180' width='180' color='#071de2' ariaLabel='triangle-loading' wrapperStyle={{}} wrapperClass='' />
    </div>
  );
};
export default Loader;
