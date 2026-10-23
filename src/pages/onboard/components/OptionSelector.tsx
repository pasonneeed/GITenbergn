import { clsx } from 'clsx';
import CheckIcon from '@assets/icons/check.svg?react';

interface OptionSelectorProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const OptionSelector = ({ options, value, onChange }: OptionSelectorProps) => {
  return (
    <div className="space-y-4">
      {options.map((option) => {
        const isSelected = value === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={clsx(
              'flex w-full items-center justify-between rounded-2xl border px-4 py-5 transition',
              isSelected
                ? 'border-purple-500 bg-purple-100 text-purple-500'
                : 'border-gray-300 bg-white text-gray-800'
            )}
          >
            <span className="font-B01-M">{option}</span>

            {isSelected && <CheckIcon className="h-5 w-5 text-purple-500" />}
          </button>
        );
      })}
    </div>
  );
};

export default OptionSelector;
