import Dreamer from '@utils/data/home/DreamerDummy';
import Banner from './components/Banner';
import DreamerCard from './components/DreamerCard';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mb-[160px] mt-[420px] px-[120px]">
        <div className="mb-[50px] text-gray-900 font-T02-B">
          나와 같은 꿈을 꾸는 드리머예요!
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
    </div>
  );
};

export default Home;
