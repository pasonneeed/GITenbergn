import { useState } from 'react';
import Divider from '@common/Divider';
import Check from '@assets/icons/check.svg?react';

interface DreamerCardProps {
  regionName: string;
  job: string;
  nickname: string;
  day: string;
  todo: string;
  profile: string;
  todotext: string[];
  doneList: boolean[];
}

const DreamerCard = ({
  regionName,
  job,
  nickname,
  day,
  todo,
  profile,
  todotext,
  doneList,
}: DreamerCardProps) => {
  const [checked, setChecked] = useState([...doneList]);

  const toggleCheck = (index: number) => {
    const newList = [...checked];
    newList[index] = !newList[index];
    setChecked(newList);
  };

  return (
    <div className="hover:drop-shadow-dropdown2 flex h-auto w-[384px] flex-col items-start rounded-[30px] border-[1.2px] border-gray-300 bg-white p-[30px] transition-shadow">
      <div className="flex flex-row gap-5">
        <img
          src={profile}
          alt="프로필이미지"
          className="h-[90px] w-[90px] rounded-full"
        />

        <div className="flex flex-col gap-[6px]">
          <span className="text-gray-900 font-T05-SB">{nickname}</span>
          <span className="text-gray-500 font-C01-M">{day}일째 꿈꾸는 중</span>

          <div className="mt-1 flex items-center justify-center gap-[10px]">
            <div className="rounded-[10px] bg-purple-100 p-2 text-purple-500 font-B03-SB">
              {job}
            </div>

            <div className="rounded-[10px] bg-gray-100 p-2 text-gray-500 font-B03-SB">
              할일 {todo}개
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-6 flex flex-row items-center justify-center gap-[10px]">
        <span className="text-gray-500 font-B02-M">지역</span>
        {regionName ? (
          <span className="text-gray-800 font-B02-SB">{regionName}</span>
        ) : (
          <span className="text-gray-500 font-B02-SB">
            등록된 지역이 없어요
          </span>
        )}
      </div>

      <Divider />

      <div className="mt-6 flex w-full flex-col gap-3">
        {todotext.length === 0 ? (
          <span className="text-gray-500 font-B02-M">
            작성된 할일 목록이 없어요
          </span>
        ) : (
          todotext.map((text, index) => {
            const done = checked[index];

            return (
              <div
                key={index}
                className="flex w-full flex-row items-center gap-2"
              >
                <div
                  className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg border ${done ? 'border-purple-300 bg-purple-150 text-purple-600' : 'border-gray-300 bg-gray-100 text-transparent'} cursor-pointer`}
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
          })
        )}
      </div>
    </div>
  );
};

export default DreamerCard;
