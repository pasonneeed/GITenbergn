import { useState } from 'react';
import Stepper from '@pages/onboard/components/Stepper';
import OptionSelector from '@pages/onboard/components/OptionSelector';
import Button from '@common/Button';
import OnboardCharacter from '@assets/images/onboarding.png';
import stepQuestions from '@utils/data/onboard/onboardDummy';

const OnBoardingPage = () => {
  const [curStep, setCurStep] = useState(0);
  const [curQuestionIndex, setCurQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [step: string]: string[] }>({});

  const currentStepData = stepQuestions[curStep];
  const currentQuestionData = currentStepData.questions?.[curQuestionIndex];

  const handleOptionChange = (value: string) => {
    const stepName = currentStepData.step;
    const prevAnswers = answers[stepName] || [];
    const newAnswers = [...prevAnswers];
    newAnswers[curQuestionIndex] = value;
    setAnswers({ ...answers, [stepName]: newAnswers });
  };

  const handleNext = () => {
    const totalQuestions = currentStepData.questions?.length || 0;
    if (curQuestionIndex < totalQuestions - 1) {
      setCurQuestionIndex((prev) => prev + 1);
    } else {
      setCurStep((prev) => prev + 1);
      setCurQuestionIndex(0);
    }
  };

  const handlePrev = () => {
    if (curQuestionIndex > 0) {
      setCurQuestionIndex((prev) => prev - 1);
    } else if (curStep > 0) {
      const prevStep = stepQuestions[curStep - 1];
      const prevStepLength = prevStep.questions?.length || 1;
      setCurStep((prev) => prev - 1);
      setCurQuestionIndex(prevStepLength - 1);
    }
  };

  const totalQuestions = stepQuestions.reduce(
    (sum, step) => sum + (step.questions?.length || 1),
    0
  );
  const currentProgress =
    stepQuestions
      .slice(0, curStep)
      .reduce((sum, step) => sum + (step.questions?.length || 1), 0) +
    curQuestionIndex;
  const progressPercent = Math.round((currentProgress / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="flex justify-center">
        <div className="w-full max-w-[900px]">
          <Stepper
            curStep={curStep}
            steps={stepQuestions.map((s) => ({ title: s.step }))}
            progress={progressPercent}
          />
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
              {currentQuestionData?.question}
            </h2>

            <OptionSelector
              options={currentQuestionData?.options || []}
              value={answers[currentStepData.step]?.[curQuestionIndex] || ''}
              onChange={handleOptionChange}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-40">
          <Button
            text="이전"
            color="secondary"
            className="h-[3.5rem] w-[100px] font-T05-SB"
            onClick={handlePrev}
            disabled={curStep === 0 && curQuestionIndex === 0}
          />
          <Button
            text={curStep === stepQuestions.length - 1 ? '제출' : '다음'}
            color="primary"
            className="h-[3.5rem] w-[220px] font-T05-SB"
            onClick={handleNext}
            disabled={
              curStep === stepQuestions.length - 1 && !currentQuestionData
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
