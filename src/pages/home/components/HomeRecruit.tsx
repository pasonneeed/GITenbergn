import Arrow from '@assets/icons/arrow.svg?react';
import Recruit from '@utils/data/home/RecruitDummy';
import Like from '@assets/icons/like.svg?react';
import Eye from '@assets/icons/purpleeye.svg?react';

const HomeRecruit = () => {
  return (
    <div>
      <div className="mb-[50px] flex items-center justify-between">
        <div className="text-gray-900 font-T02-B">
          대전 서구에 새로 올라온 구인글이에요!
        </div>
        <div className="flex cursor-pointer flex-row items-center text-gray-500 font-B02-SB">
          더 보러가기
          <Arrow />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[...Recruit]
          .sort((a, b) => parseInt(a.time) - parseInt(b.time))
          .map((item, index) => (
            <div
              key={index}
              className="flex h-auto w-[384px] flex-col items-start rounded-[30px] border-[1.2px] border-gray-300 p-[30px]"
            >
              <div className="flex w-full flex-col items-end">
                <Like />
              </div>
              <div className="mt-3 text-gray-500 font-B03-M">
                {item.company}
              </div>
              <div className="mt-4 flex h-10 items-center justify-center rounded-[10px] bg-purple-100 px-[10px] py-2 text-purple-500 font-B01-B">
                {item.job}
              </div>
              <div className="mt-2 self-stretch text-gray-900 font-T05-SB">
                {item.recruit}
              </div>

              <div className="mt-[61px] flex w-full items-center justify-between">
                <div className="text-gray-500 font-B03-M">
                  {item.time}시간 전
                </div>
                <div className="flex flex-row items-center justify-center gap-[6px]">
                  <Eye />
                  <span className="text-purple-500 font-B03-M">
                    {item.interest}명이 관심을 보였어요
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeRecruit;
