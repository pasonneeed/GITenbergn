import { useRef, forwardRef, ForwardedRef } from 'react';
import * as React from 'react';

export interface DateInputProps {
  title?: string;
  label: string;
  name: 'startDate' | 'endDate';
  value: string;
  onChange: (value: string) => void;
  autoFocusTo?: React.RefObject<HTMLInputElement>;
}

const DateInput = forwardRef(
  (
    { title, label, name, value, onChange, autoFocusTo }: DateInputProps,
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

      if (!/^[0-9/]{0,10}$/.test(v)) return;

      const parts = v.split('/');

      if (v.length < 10) {
        onChange(v);
        return;
      }

      const [y, m, d] = parts;
      if (y.length !== 4 || m.length !== 2 || d.length !== 2) {
        return;
      }

      const year = Number(y);
      const month = Number(m);
      const day = Number(d);

      if (month < 1 || month > 12) {
        onChange(`${y}/`);
        return;
      }

      if (day < 1 || day > 31) {
        onChange(`${y}/${m}/`);
        return;
      }

      const date = new Date(year, month - 1, day);
      const isValidDate =
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day;

      if (!isValidDate) {
        onChange(`${y}/${m}/`);
        return;
      }

      onChange(v);
      if (name === 'startDate') {
        autoFocusTo?.current?.focus();
      }
    };

    return (
      <div className="flex w-full min-w-0 flex-1 flex-col">
        <label className="mb-2 text-gray-900 font-T05-SB">{title}</label>
        <label className="mb-2 text-gray-500 font-C01-M">{label}</label>
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
