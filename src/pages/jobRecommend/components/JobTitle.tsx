// import LightBulbIcon from '@assets/icons/lightbulb.svg?react';

const JobTitle = () => {
  const nickname = localStorage.getItem('nickname');
  return (
    <div className="mb-12 flex flex-col items-center space-y-2 text-center">
      <div className="flex items-center gap-2">
        {/* <LightBulbIcon /> */}
        <h1 className="text-gray-900 font-T01-B">
          ‘{nickname}’님의 적성에 맞는 직업을 골라봤어요!
        </h1>
      </div>
      <p className="text-gray-500 font-B01-M">
        마우스를 올려 상세 정보를 확인해보세요
      </p>
    </div>
  );
};
export default JobTitle;
