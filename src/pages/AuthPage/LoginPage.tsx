import { useFormik } from 'formik';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as yup from 'yup';

const LoginPage = () => {
  const history = useHistory();

  const {
    handleSubmit,
    getFieldProps,
    touched,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(
          8,
          ({ min }) =>
            `Atleast ${min} characters required`
        ),
    }),
    onSubmit: () => {
      history.push('/dashboard');
    },
  });

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit}>
        <Input
          labelTag='Email'
          forTag='email'
          placeTag='Enter your Email address here....'
          type='email'
          autoComplete='email'
          touched={touched.email}
          errors={errors.email}
          {...getFieldProps('email')}
        />
        <Input
          labelTag='Password'
          forTag='password'
          placeTag='Enter your Password here....'
          type='password'
          touched={touched.password}
          errors={errors.password}
          {...getFieldProps('password')}
        />
        <Button
          btnName='Login'
          theme='blue'
          type='submit'
          disabled={!isValid}
        />
      </form>
      <p className='mt-5 font-medium'>
        Don't have an account?
        <Link
          className='text-blue-500'
          to='/signUp'
        >
          Sign Up
        </Link>{' '}
        here{' '}
      </p>
    </div>
  );
};

export default LoginPage;
