import { clsx } from 'clsx';
import { forwardRef, InputHTMLAttributes, useState } from 'react';
import ShowPwIcon from '@assets/icons/show_pw.svg?react';
import HidePwIcon from '@assets/icons/hide_pw.svg?react';
import CancelIcon from '@assets/icons/cancel.svg?react';

/* 입력 상태 타입 (default: 기본, writing: 포커스되면 테두리 색 변화) */
type State = 'default' | 'writing';

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'value' | 'onChange'
  > {
  state?: State;
  isPassword?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      state = 'default',
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
      <div className="relative flex items-center">
        <input
          ref={ref}
          type={isPassword && !showPassword ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={clsx(
            'w-full rounded-[15px] border px-3 outline-none transition-all placeholder:text-gray-400',
            state === 'writing' || focused
              ? 'border-purple-500'
              : 'border-gray-300',
            value && 'pr-16',
            className
          )}
          {...props}
        />

        {/* 값이 있을 때만 오른쪽 아이콘 표시 */}
        {value && (
          <div className="absolute right-4 flex items-center space-x-2">
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-400"
              >
                {showPassword ? <ShowPwIcon /> : <HidePwIcon />}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400"
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
