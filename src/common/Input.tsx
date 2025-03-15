import { clsx } from 'clsx';
import { forwardRef, InputHTMLAttributes, useState } from 'react';
import ShowPwIcon from '@assets/icons/show_pw.svg?react';
import HidePwIcon from '@assets/icons/hide_pw.svg?react';
import CancelIcon from '@assets/icons/cancel.svg?react';

type State = 'default' | 'writing' | 'output';

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'value' | 'onChange'
  > {
  width: string;
  height: string;
  fontClassName: string;
  state?: State;
  fullWidth?: boolean;
  isPassword?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      width,
      height,
      fontClassName = 'font-B02-M',
      state = 'default',
      fullWidth = true,
      isPassword = false,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const handleClear = () => {
      const event = {
        target: { value: '' },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
      if (ref && typeof ref !== 'function' && ref?.current) {
        ref.current.focus();
      }
    };

    return (
      <div
        className={clsx(
          'relative flex items-center',
          fullWidth && 'w-full',
          width && !fullWidth && width
        )}
      >
        <input
          ref={ref}
          type={isPassword && !showPassword ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          className={clsx(
            'w-full rounded-[15px] border outline-none transition-all placeholder:text-gray-400',
            fontClassName,
            value ? 'pr-16' : '',
            height,
            'px-3',
            state === 'writing' || focused
              ? 'border-purple-500'
              : 'border-gray-300',
            state === 'output' && 'border-gray-300 text-black',
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {value && (
          <div className="absolute right-4 flex items-center space-x-2">
            {isPassword && (
              <button
                type="button"
                className="text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <ShowPwIcon /> : <HidePwIcon />}
              </button>
            )}
            <button
              type="button"
              className="text-gray-400"
              onClick={handleClear}
            >
              <CancelIcon />
            </button>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
