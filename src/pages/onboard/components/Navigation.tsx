import Button from '@common/Button.tsx';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  disablePrev: boolean;
  disableNext: boolean;
  isLast: boolean;
}

const Navigation = ({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
  isLast,
  onSubmit,
}: NavigationProps) => {
  return (
    <div className="flex justify-end gap-4 pt-10">
      <Button
        text="이전"
        color="secondary"
        className="h-[3.5rem] w-[100px] font-T05-SB"
        disabled={disablePrev}
        onClick={onPrev}
      />
      <Button
        text={isLast ? '제출' : '다음'}
        color="primary"
        className="h-[3.5rem] w-[220px] font-T05-SB"
        disabled={disableNext}
        onClick={isLast ? onSubmit : onNext}
      />
    </div>
  );
};

export default Navigation;
