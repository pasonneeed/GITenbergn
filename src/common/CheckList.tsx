import { useState, useEffect } from 'react';
import Check from '@assets/icons/check.svg?react';

interface CheckListProps {
  lists: string[];
  defaultCheckedList?: boolean[];
  className?: string;
  onChange?: (checkedList: boolean[]) => void;
}

const CheckList = ({
  lists,
  defaultCheckedList,
  className = '',
  onChange,
}: CheckListProps) => {
  const [checkedList, setCheckedList] = useState<boolean[]>(
    defaultCheckedList ?? new Array(lists.length).fill(false)
  );

  useEffect(() => {
    if (onChange) {
      onChange(checkedList);
    }
  }, [checkedList, onChange]);

  const toggleCheck = (index: number) => {
    const newList = [...checkedList];
    newList[index] = !newList[index];
    setCheckedList(newList);
  };

  return (
    <div className={className}>
      {lists.map((text, index) => {
        const done = checkedList[index];
        return (
          <div key={index} className="flex w-full flex-row items-center gap-2">
            <div
              className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg border ${
                done
                  ? 'border-purple-300 bg-purple-150 text-purple-600'
                  : 'border-gray-300 bg-gray-100 text-transparent'
              } cursor-pointer transition-colors duration-150`}
              onClick={() => toggleCheck(index)}
            >
              {done && <Check className="h-[19px] w-[19px]" />}
            </div>

            <span
              className={`truncate font-B02-M ${
                done ? 'text-gray-500' : 'text-gray-800'
              }`}
            >
              {text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckList;
