import CheckIocn from '@assets/icons/check.svg?react';

interface StepProps {
  stepNumber: number;
  title: string;
  status: 'prev' | 'current' | 'next';
}

const Step = ({ stepNumber, title, status }: StepProps) => {
  const isCurrent = status === 'current';
  const isPrevious = status === 'prev';
  return (
    <div className="flex flex-col items-center space-y-2">
      {isCurrent && (
        <div className="text-sm text-purple-500 font-B02-M">{title}</div>
      )}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${isPrevious ? 'bg-purple-100 text-purple-500' : ''} ${isCurrent ? 'bg-purple-500 text-white' : ''} ${status === 'next' ? 'bg-gray-200' : ''} `}
      >
        {isPrevious ? (
          <CheckIocn className="h-5 w-5" />
        ) : (
          <span>{stepNumber}</span>
        )}
      </div>
      <div></div>
    </div>
  );
};
export default Step;
