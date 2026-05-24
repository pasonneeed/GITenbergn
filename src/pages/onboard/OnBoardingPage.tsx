import { useState } from 'react';
import Stepper from '@pages/onboard/components/Stepper';
import OptionSelector from '@pages/onboard/components/OptionSelector';
import Button from '@common/Button';
import OnboardCharacter from '@assets/images/onboarding.png';

const steps = [
  { title: '경험' },
  { title: '근무조건' },
  { title: '기타' },
  { title: '확인' },
];

const options = [
  '내 적성에 맞는 일',
  '수입이 안정적인 일',
  '당장 시작할 수 있는 일',
];

const OnBoardingPage = () => {
  const [selected, setSelected] = useState('');
  const [curStep, setCurStep] = useState(0);

  const handlePrev = () => {
    setCurStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="flex justify-center">
        <div className="w-full max-w-[900px]">
          <Stepper curStep={curStep} steps={steps} />
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-[700px] space-y-10">
        <div className="flex w-full items-start gap-4">
          <img
            src={OnboardCharacter}
            alt="캐릭터"
            className="hidden h-[100px] w-[100px] shrink-0 md:block"
          />

          <div className="flex flex-1 flex-col space-y-8">
            <h2 className="text-gray-900 font-T04-SB">
              직업을 선택하실 때 가장 중요하게 생각하는 건 무엇인가요?
            </h2>

            <OptionSelector
              options={options}
              value={selected}
              onChange={(val) => setSelected(val)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-40">
          <Button
            text="이전"
            color="secondary"
            className="h-[3.5rem] w-[100px] font-T05-SB"
            onClick={handlePrev}
            disabled={curStep === 0}
          />
          <Button
            text="다음"
            color="primary"
            className="h-[3.5rem] w-[220px] font-T05-SB"
            onClick={handleNext}
            disabled={curStep === steps.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
