import Dreamer from '@utils/data/home/DreamerDummy';
import Banner from './components/Banner';
import DreamerCard from './components/DreamerCard';
import HomeRecruit from './components/HomeRecruit';
import Arrow from '@assets/icons/arrow.svg?react';
import Footer from '@common/Footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mb-[160px] mt-[420px] px-[120px]">
        <div className="mb-[50px] flex items-center justify-between">
          <div className="text-gray-900 font-T02-B">
            대전 서구에 새로 올라온 구인글이에요!
          </div>
          <div className="flex cursor-pointer flex-row items-center text-gray-500 font-B02-SB">
            더 보러가기
            <Arrow />
          </div>
        </div>

        <div className="flex flex-row gap-6">
          {Dreamer.map((dream, index) => (
            <DreamerCard
              key={index}
              regionName={dream.regionName}
              job={dream.job}
              nickname={dream.nickname}
              day={dream.day}
              todo={dream.todo}
              profile={dream.profile}
              todotext={dream.todotext}
              doneList={dream.doneList}
            />
          ))}
        </div>
      </div>

      <div className="mb-20 px-[120px]">
        <HomeRecruit />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
