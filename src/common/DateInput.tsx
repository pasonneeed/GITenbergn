import { useRef, forwardRef, ForwardedRef } from 'react';
import * as React from 'react';

export interface DateInputProps {
  label: string;
  name: 'startDate' | 'endDate';
  value: string;
  onChange: (value: string) => void;
  autoFocusTo?: React.RefObject<HTMLInputElement>;
}

const DateInput = forwardRef(
  (
    { label, name, value, onChange, autoFocusTo }: DateInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);

    const inputRef = (ref || innerRef) as React.RefObject<HTMLInputElement>;

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Backspace' && e.key !== 'Delete') {
        const v = inputRef.current?.value ?? '';
        if ((v.length === 4 || v.length === 7) && !v.endsWith('/')) {
          onChange(v + '/');
        }
      }
    };

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      if (/^[0-9/]{0,10}$/.test(v)) {
        onChange(v);
        if (name === 'startDate' && v.length === 10) {
          autoFocusTo?.current?.focus();
        }
      }
    };

    return (
      <div className="flex w-full min-w-0 flex-1 flex-col">
        <label className="mb-2 text-sm font-semibold text-gray-900">
          {label}
        </label>
        <div className="flex items-center rounded-xl border px-4 py-5 text-sm text-gray-700 shadow-sm focus-within:border-purple-500">
          <input
            ref={inputRef}
            name={name}
            type="text"
            placeholder="YYYY/MM/DD"
            value={value}
            onChange={onInput}
            onKeyUp={onKeyUp}
            maxLength={10}
            className="w-full outline-none"
          />
        </div>
      </div>
    );
  }
);

DateInput.displayName = 'DateInput';

export default DateInput;
