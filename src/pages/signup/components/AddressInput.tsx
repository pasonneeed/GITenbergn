import Arrow from '@assets/icons/arrow.svg?react';

interface AddressInputProps {
  onClick: () => void;
}

const AddressInput = ({ onClick }: AddressInputProps) => {
  return (
    <button
      className="relative w-full flex-col items-start rounded-2xl border border-gray-300 bg-white px-5 py-[14px]"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <span className="text-gray-600 font-B01-M">거주지 선택</span>
        <span className="text-gray-400 font-B01-M">(선택)</span>
      </div>
      <span className="mt-1 flex text-gray-400 font-B03-M">
        내 위치 기반으로 더 정확한 서비스가 제공돼요
      </span>

      <div className="absolute right-5 top-1/2 -translate-y-1/2">
        <Arrow />
      </div>
    </button>
  );
};

export default AddressInput;
