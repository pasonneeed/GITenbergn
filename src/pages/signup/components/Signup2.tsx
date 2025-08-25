import Button from '@common/Button';
import { useState } from 'react';
import useMediaQuery from '@hook/useMediaQuery';
import AddressModal from './AddressModal';
import { Input } from '@common/Input';
import AddressInput from './AddressInput';

const Signup2 = () => {
  const [selectedGender, setSelectedGender] = useState<
    'female' | 'male' | null
  >(null);
  const isMobile = useMediaQuery();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [nickname, setNickname] = useState('');
  const [date, setDate] = useState('');

  const ShowModal = () => {
    setIsModal(true);
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div
        className={`flex flex-col items-start gap-[30px] ${
          isMobile ? 'w-full max-w-[393px] px-4' : 'w-full max-w-[424px]'
        }`}
      >
        <div className="text-gray-900 font-T01-B">회원가입하기</div>

        <Input
          inputtitle="닉네임"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="h-[68px] w-full px-5 py-6 font-B02-M"
          undertext="2~8자 이내의 한글, 영문, 숫자"
        />

        <Input
          inputtitle="생년월일"
          placeholder="YYYY / MM / DD"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-[68px] w-full px-5 py-6 font-B02-M"
        />

        <div className="flex w-full flex-col gap-2">
          <span className="text-gray-600 font-B01-M">성별</span>
          <div className="flex flex-row gap-3">
            <button
              onClick={() => setSelectedGender('female')}
              className={`flex h-[68px] w-full cursor-pointer items-center justify-center rounded-2xl px-5 py-6 ${
                selectedGender === 'female'
                  ? 'bg-purple-150 text-purple-500 font-B02-SB'
                  : 'bg-gray-100 text-gray-400 font-B02-M'
              }`}
            >
              여자
            </button>
            <button
              onClick={() => setSelectedGender('male')}
              className={`flex h-[68px] w-full cursor-pointer items-center justify-center rounded-2xl px-5 py-6 ${
                selectedGender === 'male'
                  ? 'bg-purple-150 text-purple-500 font-B02-SB'
                  : 'bg-gray-100 text-gray-400 font-B02-M'
              }`}
            >
              남자
            </button>
          </div>
        </div>

        <AddressInput onClick={ShowModal} />
      </div>

      {isModal && <AddressModal />}
      <div
        className={`${
          isMobile
            ? 'mt-[40px] w-full max-w-[393px] px-4 pb-10'
            : 'mt-[40px] w-full max-w-[424px]'
        }`}
      >
        <Button
          text="두드림 시작하기"
          type="submit"
          color="primary"
          className="h-[60px] w-full font-T05-SB"
        />
      </div>
    </div>
  );
};

export default Signup2;
