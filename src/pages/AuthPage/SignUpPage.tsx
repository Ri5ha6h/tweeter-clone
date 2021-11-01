import { useFormik } from 'formik';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as yup from 'yup';

const SignUpPage = () => {
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
      username: '',
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
      username: yup.string().required(),
    }),
    onSubmit: () => {
      history.push('/login');
    },
  });
  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit}>
        <Input
          labelTag='Username'
          forTag='username'
          placeTag='Enter your Username here....'
          autoComplete='username'
          type='username'
          touched={touched.username}
          errors={errors.username}
          {...getFieldProps('username')}
        />
        <Input
          labelTag='Email'
          forTag='email'
          placeTag='Enter your Email address here....'
          autoComplete='email'
          type='email'
          touched={touched.email}
          errors={errors.email}
          {...getFieldProps('email')}
        />
        <Input
          labelTag='Create Password'
          forTag='password'
          placeTag='Type your Password here....'
          type='password'
          touched={touched.password}
          errors={errors.password}
          {...getFieldProps('password')}
        />
        <Button
          btnName='Sign Up'
          theme='blue'
          disabled={!isValid}
        />
      </form>
      <p className='mt-5 font-medium'>
        Already have an account?
        <Link
          className='text-blue-500'
          to='/login'
        >
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
