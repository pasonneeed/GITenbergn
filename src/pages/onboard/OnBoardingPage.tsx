import Stepper from '@pages/onboard/components/Stepper';
import stepQuestions from '@utils/data/onboard/onboardDummy';
import { useOnboarding } from '@hook/useOnboarding';
import Navigation from '@pages/onboard/components/Navigation';
import Questions from '@pages/onboard/components/Questions';
import { useNavigate } from 'react-router-dom';

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const {
    curStep,
    curQuestionIndex,
    answers,
    currentStepData,
    currentQuestionData,
    handleOptionChange,
    handleNext,
    handlePrev,
    stepInfo,
  } = useOnboarding(stepQuestions);

  const handleSubmit = () => {
    // 임시로 네비게이션 처리
    navigate('/jobrecommend');
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="flex justify-center">
        <div className="w-full max-w-[1500px]">
          <Stepper
            curStep={curStep}
            curQuestionIndex={curQuestionIndex}
            steps={stepInfo}
          />
        </div>
      </div>

      <div className="mx-auto mt-10 flex h-[calc(100vh-200px)] w-full max-w-[700px] flex-col">
        {currentQuestionData && (
          <Questions
            question={currentQuestionData.question}
            options={currentQuestionData.options}
            value={answers[currentStepData.step]?.[curQuestionIndex] ?? ''}
            onChange={handleOptionChange}
          />
        )}

        <div className="mt-auto">
          <Navigation
            onPrev={handlePrev}
            onNext={handleNext}
            disablePrev={curStep === 0 && curQuestionIndex === 0}
            disableNext={
              curStep < stepQuestions.length - 1 && !currentQuestionData
            }
            isLast={curStep === stepQuestions.length - 1}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
