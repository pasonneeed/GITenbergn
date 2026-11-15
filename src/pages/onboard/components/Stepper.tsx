import Step from '@pages/onboard/components/Step';

interface StepInfo {
  title: string;
  questionCount: number;
}

interface StepperProps {
  curStep: number;
  curQuestionIndex: number;
  steps: StepInfo[]; // 이제 questionCount 포함
}

const Stepper = ({ curStep, curQuestionIndex, steps }: StepperProps) => {
  return (
    <div className="mx-auto flex w-full max-w-[1100px] items-center">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const status: 'prev' | 'current' | 'next' =
          index < curStep ? 'prev' : index === curStep ? 'current' : 'next';

        // 커넥터 채워질 비율 계산
        const fillPercent =
          index < curStep
            ? 100
            : index === curStep
              ? (curQuestionIndex / step.questionCount) * 100
              : 0;

        return (
          <div
            key={index}
            className={`flex items-center ${!isLast ? 'flex-1' : ''}`}
          >
            <Step stepNumber={index + 1} title={step.title} status={status} />

            {!isLast && (
              <div className="relative mx-1 h-0.5 flex-1 overflow-hidden bg-gray-200">
                <div
                  className="absolute left-0 top-0 h-full bg-purple-500 transition-all duration-300"
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
