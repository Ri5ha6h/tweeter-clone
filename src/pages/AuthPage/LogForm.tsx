import { Link } from 'react-router-dom';

const LogForm = () => {
  return (
    <div className='flex flex-col items-center space-y-8 lg:items-start'>
      <h2 className='text-3xl font-bold tracking-wider sm:text-5xl 2xl:text-6xl'>
        Happening now
      </h2>
      <h4 className='text-xl font-semibold tracking-wide sm:text-3xl'>
        Join Tweeter today.
      </h4>

      <Link
        className='py-3 text-xl font-medium text-center text-black bg-white rounded-full w-44 sm:w-80 hover:bg-gray-100 hover:text-blue-500'
        to='/signUp'
      >
        Sign Up
      </Link>

      <Link
        className='py-3 text-xl font-medium text-center text-black bg-white rounded-full w-44 sm:w-80 hover:bg-gray-100 hover:text-blue-500'
        to='/login'
      >
        Login
      </Link>
    </div>
  );
};

export default LogForm;
