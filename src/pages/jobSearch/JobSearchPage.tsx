import Filter from '@common/Filter'; // 실제 필터 컴포넌트 경로로 맞춰주세요
import MagnifyIcon from '@assets/images/reading.png';

const JobSearchPage = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100">
        <div className="bg-gray-100">
          <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-40 md:px-0">
            <img src={MagnifyIcon} alt="돋보기" />
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-500">일자리 찾기</p>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                우리 집 근처, 일자리를 찾아보세요
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto -mt-8 px-4 md:px-0">
        <Filter />
      </div>

      <div className="container mx-auto px-4 pt-8 md:px-0"></div>
    </div>
  );
};

export default JobSearchPage;
