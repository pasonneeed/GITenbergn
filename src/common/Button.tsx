import clsx from 'clsx';

interface ButtonProps {
  text: React.ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  color = 'primary',
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    'rounded-2xl transition-colors duration-200 flex justify-center items-center';
  const colorStyles = {
    primary: disabled
      ? 'bg-purple-200 text-white cursor-not-allowed'
      : 'bg-purple-500 hover:bg-purple-600 text-white',
    secondary: disabled
      ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
      : 'bg-purple-50 hover:bg-purple-100 text-purple-500',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(baseStyles, colorStyles[color], className)}
    >
      {text}
    </button>
  );
};

export default Button;
