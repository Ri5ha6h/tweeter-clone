import {
  FC,
  InputHTMLAttributes,
  useState,
} from 'react';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labelTag: string;
  forTag: string;
  placeTag: string;
  className?: string;
  touched?: boolean;
  errors?: string;
}

const Input: FC<InputProps> = ({
  labelTag,
  forTag,
  placeTag,
  className,
  touched,
  errors,
  ...rest
}) => {
  const touch =
    errors &&
    touched &&
    ' border-red-500 placeholder-red-500 ';

  return (
    <div className='flex flex-col w-full mt-3 space-y-4 2xl:w-2/3'>
      <label className='text-xl' htmlFor={forTag}>
        {labelTag}
      </label>
      <input
        className={
          'py-3 pl-4 text-lg font-semibold border-3 text-gray-400 placeholder-gray-300 rounded-md outline-none ' +
          className +
          touch
        }
        id={forTag}
        name={forTag}
        placeholder={placeTag}
        {...rest}
      />
      {touched && (
        <p className='mt-1 text-lg text-red-400'>
          {errors}
        </p>
      )}
    </div>
  );
};

export default Input;
