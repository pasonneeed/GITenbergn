import { useState } from 'react';
import jobCardDummy from '@utils/data/jobRecommend/jobCardDummy.ts';
import Card from '@pages/jobRecommend/components/Card.tsx';
import JobTitle from '@pages/jobRecommend/components/JobTitle.tsx';

const JobRecommendPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const nickname = localStorage.getItem('nickname');
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <JobTitle />
      <div className="no-scrollbar flex gap-4">
        {jobCardDummy.map((job, index) => (
          <Card
            key={index}
            title={job.title}
            description={job.description}
            imageUrl={job.imageUrl}
            reason={job.reason}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
            nickname={nickname}
          />
        ))}
      </div>

      <div className="mt-8 flex gap-2">
        {jobCardDummy.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full transition-colors duration-300 ${
              hoveredIndex === index ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendPage;
