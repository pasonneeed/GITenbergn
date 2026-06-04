import Step from '@pages/onboard/components/Step.tsx';

interface StepperProps {
  curStep: number;
  steps: { title: string }[];
}

const Stepper = ({ curStep, steps }: StepperProps) => {
  return (
    <div className="mx-auto flex w-full justify-center">
      <div className="flex w-full items-center gap-2">
        {steps.map((step, index) => {
          const status: 'prev' | 'current' | 'next' =
            index < curStep ? 'prev' : index === curStep ? 'current' : 'next';

          return (
            <div key={index} className="flex items-center">
              {/* step 본체 */}
              <Step stepNumber={index + 1} title={step.title} status={status} />

              {/* 마지막 step 이후에는 선을 그리지 않음 */}
              {index !== steps.length - 1 && (
                <div className="mx-1 h-0.5 w-48 bg-gray-200 md:w-52" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Stepper;
