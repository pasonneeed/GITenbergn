import Stepper from '@pages/onboard/components/Stepper';
import stepQuestions from '@utils/data/onboard/onboardDummy';
import { useOnboarding } from '@hook/useOnboarding';
import Navigation from '@pages/onboard/components/Navigation';
import Questions from '@pages/onboard/components/Questions';

const OnBoardingPage = () => {
  const {
    curStep,
    curQuestionIndex,
    answers,
    currentStepData,
    currentQuestionData,
    handleOptionChange,
    handleNext,
    handlePrev,
  } = useOnboarding(stepQuestions);
  const stepInfo = stepQuestions.map((s) => ({
    title: s.step,
    questionCount: s.questions?.length ?? 1,
  }));

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

      <div className="mx-auto mt-10 w-full max-w-[700px] space-y-10">
        {currentQuestionData && (
          <Questions
            question={currentQuestionData.question}
            options={currentQuestionData.options}
            value={answers[currentStepData.step]?.[curQuestionIndex] ?? ''}
            onChange={handleOptionChange}
          />
        )}

        <Navigation
          onPrev={handlePrev}
          onNext={handleNext}
          disablePrev={curStep === 0 && curQuestionIndex === 0}
          disableNext={
            curStep === stepQuestions.length - 1 && !currentQuestionData
          }
          isLast={curStep === stepQuestions.length - 1}
        />
      </div>
    </div>
  );
};

export default OnBoardingPage;
