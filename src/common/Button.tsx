import clsx from 'clsx';

interface ButtonProps {
  text: React.ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  color = 'primary',
  className,
  type,
  disabled,
}: ButtonProps) => {
  const baseStyles =
    'w-full rounded-xl text-white font-semibold py-3 transition-colors duration-200';
  const colorStyles = {
    primary: 'bg-[#8A7FFF] hover:bg-[#7365e6]',
    secondary: 'bg-[#584B9D] hover:bg-[#483d84]',
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
