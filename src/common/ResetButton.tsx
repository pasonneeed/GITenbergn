import RefreshIcon from '@assets/icons/refresh_icon.svg?react';

interface ResetButtonProps {
  onClick: () => void;
  label?: string;
}

export default function ResetButton({
  onClick,
  label = '필터 초기화',
}: ResetButtonProps) {
  return (
    <div className="mb-4 flex justify-end">
      <button
        onClick={onClick}
        className="flex items-center gap-1 rounded-full bg-black px-4 py-2 text-sm text-white"
      >
        {label} <RefreshIcon />
      </button>
    </div>
  );
}
