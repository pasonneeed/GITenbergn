import { useState } from 'react';
import Filter from '@pages/learning/components/Filter.tsx';
import PencilIcon from '@assets/images/learn.webp';
import Img from '@assets/images/illustration_2.webp';
import LearningDummy, { LearningItem } from '@utils/data/learn/learnDummy.ts';
import Footer from '@common/Footer.tsx';
import LearningCard from '@pages/learning/components/LearningCard.tsx';
import CardDetail from '@pages/learning/components/CardDetail.tsx';

const LearningPage = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const selectedCard = selectedCardId
    ? LearningDummy.find((item) => item.id === selectedCardId)
    : null;

  return (
    <div className="flex flex-col">
      <div className="bg-[#36369A]">
        <div className="container mx-auto mb-16 flex flex-col items-start gap-4 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <img className="h-12 w-12" src={PencilIcon} alt="연필" />
            <p className="text-white font-B03-M">배움터 찾기</p>
            <h1 className="text-white font-T01-B">
              꿈을 향한 도약, 배움터를 찾아보세요
            </h1>
          </div>

          <img
            className="h-auto max-w-xs lg:max-w-sm"
            src={Img}
            alt="일자리 이미지"
          />
        </div>
      </div>

      <div className="container mx-auto -mt-32">
        <Filter />
      </div>

      <div className="container mx-auto mb-4 mt-16 flex text-black font-T03-B">
        <p className="text-purple-500 font-T03-B">8개</p>의 훈련과정이 모집
        중이에요
      </div>

      <div className="container mx-auto mb-6 px-4 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LearningDummy.map((item: LearningItem) => (
            <div
              key={item.id}
              onClick={() => setSelectedCardId(item.id)}
              className="cursor-pointer"
            >
              <LearningCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCardId(null);
          }}
        >
          <CardDetail
            item={selectedCard}
            onClose={() => setSelectedCardId(null)}
          />
        </div>
      )}
    </div>
  );
};

export default LearningPage;
