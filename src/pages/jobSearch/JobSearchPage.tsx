import Filter from '@pages/jobSearch/components/Filter.tsx';
import MagnifyIcon from '@assets/images/reading.png';
import RecruitCard from '@common/RecruitCard.tsx';
import RecruitDummy, { RecruitItem } from '@utils/data/search/searchDummy.ts';
import Footer from '@common/Footer.tsx';

const JobSearchPage = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100">
        <div className="container mx-auto mb-16 flex flex-col items-start gap-4 py-20">
          <img className={'h-12 w-12'} src={MagnifyIcon} alt="돋보기" />
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 font-B03-M">일자리 찾기</p>
            <h1 className="text-gray-900 font-T01-B">
              우리 집 근처, 일자리를 찾아보세요
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto -mt-32">
        <Filter />
      </div>
      <div
        className={'container mx-auto mb-4 mt-16 flex text-black font-T03-B'}
      >
        <p className={'text-purple-500 font-T03-B'}>{'8'}개</p>의 일자리가 구인
        중이에요
      </div>
      <div className="container mx-auto mb-6 px-4 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RecruitDummy.map((item: RecruitItem) => (
            <RecruitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSearchPage;
