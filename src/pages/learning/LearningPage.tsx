import Filter from '@pages/learning/components/Filter.tsx';
import PencilIcon from '@assets/images/writing.png';
import LearningDummy, { LearningItem } from '@utils/data/learn/learnDummy.ts';
import Footer from '@common/Footer.tsx';
import LearningCard from '@pages/learning/components/LearningCard.tsx';
import { useState } from 'react';
import CardDetail from '@pages/learning/components/CardDetail.tsx';

const LearningPage = () => {
  const [cardId, setCardId] = useState<number>(0);

  const selectedCardId = LearningDummy.find((item) => item.id === cardId);

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100">
        <div className="container mx-auto mb-8 flex flex-col items-start gap-4 py-16 sm:py-24 lg:py-32">
          <img src={PencilIcon} alt="연필" />
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 font-B03-M">일자리 찾기</p>
            <h1 className="text-gray-900 font-T01-B">
              꿈을 향한 도약, 배움터를 찾아보세요
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
        <p className={'text-purple-500 font-T03-B'}>{'8'}개</p>의 훈련과정이
        모집 중이에요
      </div>
      <div className="container mx-auto mb-6 px-4 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LearningDummy.map((item: LearningItem) => (
            <div
              key={item.id}
              onClick={() => setCardId(item.id)}
              className="cursor-pointer"
            >
              <LearningCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {selectedCardId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <CardDetail item={selectedCardId} onClose={() => setCardId(0)} />
        </div>
      )}
    </div>
  );
};

export default LearningPage;
