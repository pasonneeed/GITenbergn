import { HomeBackImage, HomeCard } from './HomeImage';
import MyDreamArrow from '@assets/icons/myDreamarrow.svg?react';
import Bell from '@assets/icons/Bell.svg?react';
import Arrow from '@assets/icons/arrow.svg?react';

const Banner = () => {
  return (
    <div className="flex flex-row gap-6">
      <div className="relative w-full">
        <div className="z-0">
          <HomeBackImage />
        </div>

        <div className="absolute left-[122px] top-[100px] z-50">
          <div className="relative flex flex-row gap-6">
            <div className="relative">
              <HomeCard />

              <div className="absolute right-6 top-[7px] z-50 flex cursor-pointer items-center space-x-3">
                <span className="text-gray-500 font-B02-SB">마이드림 가기</span>
                <MyDreamArrow />
              </div>

              <div className="absolute left-[29px] top-[40px] flex flex-col">
                <span className="text-white font-B02-M">58일째 꿈꾸는 중</span>
                <div className="mt-[10px]">
                  <span className="text-white font-T01-B">
                    인생 2막, <br />
                    어떻게 시작할지 막막하다면?
                  </span>
                </div>
              </div>
            </div>

            <div className="flex h-[465px] w-[384px] flex-col items-start rounded-[30px] border border-gray-300 bg-white px-[30px] py-[40px]">
              <div className="flex w-full flex-row items-start justify-between">
                <Bell />
                <div className="flex flex-row items-center">
                  <div className="text-gray-500 font-B02-SB">더보기 </div>
                  <Arrow />
                </div>
              </div>

              <span className="mt-6 text-gray-900 font-T01-B">
                {' '}
                인기 직종 구인 현황
              </span>

              <div className="mt-[27px] flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center rounded-[10px] bg-purple-100 p-2 text-purple-500 font-T05-SB">
                      요양보호사
                    </div>
                    <div className="text-gray-900 font-T05-SB">23건</div>
                  </div>

                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center rounded-[10px] bg-purple-100 p-2 text-purple-500 font-T05-SB">
                      요양보호사
                    </div>
                    <div className="text-gray-900 font-T05-SB">13건</div>
                  </div>

                  <div className="flex flex-row items-center gap-4">
                    <div className="flex items-center justify-center rounded-[10px] bg-purple-100 p-2 text-purple-500 font-T05-SB">
                      요양보호사
                    </div>
                    <div className="text-gray-900 font-T05-SB">32건</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
