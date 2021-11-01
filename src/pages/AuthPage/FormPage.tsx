import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import LogForm from './LogForm';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { FaEarlybirds } from 'react-icons/fa';

const FormPage = () => {
  return (
    <div className='flex h-screen'>
      <div className='items-center justify-center flex-1 hidden px-10 bg-blue-400 lg:flex'>
        <FaEarlybirds className='w-1/2 text-white h-1/2' />
      </div>
      <div className='flex flex-col items-center justify-center flex-1 px-3 text-white bg-black sm:px-10 lg:items-start'>
        <Link to='/'>
          <FaEarlybirds className='w-20 h-20' />
        </Link>
        <div className='w-full mt-5'>
          <Switch>
            <Route path='/' exact>
              <LogForm />
            </Route>
            <Route path='/login' exact>
              <LoginPage />
            </Route>
            <Route path='/signUp' exact>
              <SignUpPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
