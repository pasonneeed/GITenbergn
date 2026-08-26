import Step from '@pages/onboard/components/Step';

interface StepperProps {
  curStep: number;
  steps: { title: string }[];
  progress: number;
}

const Stepper = ({ curStep, steps, progress }: StepperProps) => {
  const totalConnectors = steps.length - 1;

  return (
    <div className="mx-auto flex w-full max-w-[1100px] items-center">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const status: 'prev' | 'current' | 'next' =
          index < curStep ? 'prev' : index === curStep ? 'current' : 'next';

        return (
          <div
            key={index}
            className={`flex items-center ${!isLast ? 'flex-1' : ''} `}
          >
            <Step stepNumber={index + 1} title={step.title} status={status} />

            {!isLast && (
              <div className="relative mx-1 h-0.5 flex-1 overflow-hidden bg-gray-200">
                <div
                  className="absolute left-0 top-0 h-full bg-purple-500 transition-all duration-300"
                  style={{
                    width: `${
                      Math.min(
                        Math.max(progress - (index * 100) / totalConnectors, 0),
                        100 / totalConnectors
                      ) * totalConnectors
                    }%`,
                  }}
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
