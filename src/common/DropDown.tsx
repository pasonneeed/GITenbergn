import { useDropdown } from '@hook/useDropdown.ts';
import BackIcon from '@assets/icons/back.svg?react';
import DropDownIcon from '@assets/icons/drop_down.svg?react';
import Divider from '@common/Divider.tsx';

export interface DropDownProps<T extends string> {
  placeholder: string;
  options: T[];
  value: T | '';
  label?: string;
  onSelect: (value: T) => void;
  backButton?: { label: string; onClick: () => void };
  keepOpenOnSelect?: boolean;
}

export default function DropDown<T extends string>({
  placeholder,
  options,
  value,
  label,
  onSelect,
  backButton,
  keepOpenOnSelect = false,
}: DropDownProps<T>) {
  const { isOpen, toggle, ref } = useDropdown<T>();

  return (
    <div className="flex w-full min-w-0 flex-1 flex-col">
      <div ref={ref} className="relative">
        <label className="block min-h-[20px] text-sm font-semibold text-gray-900">
          {label}
        </label>
        <div
          onClick={toggle}
          className="flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-5 text-gray-500"
        >
          <span>{value || placeholder}</span>
          <div
            className={`transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <DropDownIcon />
          </div>
        </div>
        {isOpen && (
          <ul className="absolute left-0 top-full z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border bg-white shadow-lg">
            {backButton && (
              <li
                onClick={backButton.onClick}
                className="flex cursor-pointer items-center gap-2 px-6 py-4 text-gray-900 font-B01-B"
              >
                <BackIcon />
                {backButton.label}
              </li>
            )}
            <Divider />
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onSelect(opt);
                  if (!keepOpenOnSelect) toggle();
                }}
                className={`cursor-pointer px-4 py-3 font-B01-M hover:text-purple-500 ${
                  value === opt ? 'text-purple-500' : 'text-gray-400'
                }`}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
