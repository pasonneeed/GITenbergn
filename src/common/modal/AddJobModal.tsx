import Heart from '@assets/images/heart.webp';
import Button from '@common/Button';
import Cancel from '@assets/icons/bigcancel.svg?react';

interface AddJobModalProps {
  onClose: () => void;
}
const AddJobModal = ({ onClose }: AddJobModalProps) => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#121212]/[0.07]">
      <div className="flex h-[420px] w-full max-w-[548px] flex-col items-center justify-center rounded-[30px] bg-white px-[30px] pb-[40px] pt-[30px]">
        <div className="flex h-4 flex-col items-end justify-center self-stretch">
          <Cancel className="h-4 w-4 cursor-pointer" onClick={onClose} />
        </div>

        <div className="mt-[10px] text-gray-900 font-T03-B">
          내 직업 목록에 담겼어요
        </div>
        <span className="mt-[10px] text-gray-500 font-T05-SB">
          {' '}
          [마이드림&gt;투두리스트]에서 확인할 수 있어요
        </span>

        <img
          src={Heart}
          alt="heart"
          className="mt-[30px] aspect-[75/61] h-[152px] w-[152px]"
        />

        <div className="flex w-full flex-row gap-3">
          <Button
            text="계속 직업 탐색하기"
            color="secondary"
            type="button"
            onClick={onClose}
            className="mt-[25px] h-[62px] w-full border border-purple-500 bg-white font-T05-SB"
          />
          <Button
            text="직업 목록 보러가기"
            color="primary"
            type="submit"
            className="mt-[25px] h-[62px] w-full font-T05-SB"
          />
        </div>
      </div>
    </div>
  );
};

export default AddJobModal;
