import checker from '@assets/images/checker.png';
import PlusIcon from '@assets/icons/plus.svg?react';

const ListFound = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-9 py-[60px]">
      {Array.from({ length: 9 }).map((_, idx) => (
        <div key={idx} className="flex flex-col items-start">
          <img
            src={checker}
            alt="임시 이미지"
            className="h-[240px] w-[360px] rounded-2xl"
          />

          <div className="mt-[14px] w-[360px]">
            <p className="text-purple-500 font-B02-SB">
              불필요, 평일 9시~18시, 움직임이 많은 활동
            </p>
            <span className="mt-[6px] text-gray-900 font-T04-SB">
              {' '}
              요양보호사{' '}
            </span>
            <p className="mt-[10px] text-gray-500 font-B02-M">
              요양보호사는 노인이나 장애인 등의 일상생활을 혼자 하...
            </p>

            <div className="mt-[18px] flex w-full items-center justify-between">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    src={checker}
                    alt="1"
                    className="h-[38px] w-[38px] rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={checker}
                    alt="2"
                    className="h-[38px] w-[38px] rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={checker}
                    alt="3"
                    className="h-[38px] w-[38px] rounded-full border-2 border-white object-cover"
                  />

                  <div className="my-[5px] flex h-7 w-9 items-center justify-center rounded-full bg-black p-[6px]">
                    <div className="flex flex-row items-center justify-center gap-[2px]">
                      <div className="mt-[2px] text-center text-white font-C01-M">
                        {' '}
                        9{' '}
                      </div>
                      <PlusIcon />
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex w-[116px] cursor-pointer items-center justify-center rounded-[10px] bg-purple-500 px-5 py-3 text-white font-B03-SB">
                담기
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListFound;
