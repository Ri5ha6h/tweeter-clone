import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'white' | 'blue';
  btnName: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  theme,
  btnName,
  ...rest
}) => {
  const btnTheme =
    theme === 'white'
      ? 'bg-white'
      : 'bg-blue-600 hover:bg-blue-400';
  return (
    <div className='flex justify-end w-full mt-6 2xl:w-2/3'>
      <button
        className={
          'py-3 px-5 rounded-lg text-lg ' +
          btnTheme
        }
        {...rest}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
