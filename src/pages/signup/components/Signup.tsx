import Button from '@common/Button';
import { Input } from '@common/Input';
import useMediaQuery from '@hook/useMediaQuery';
import { useState } from 'react';

interface SignupProps {
  onNext: () => void | undefined;
}

const Signup = ({ onNext }: SignupProps) => {
  const isMobile = useMediaQuery();
  const [password, setPassword] = useState('');
  const [passwordcheck, setPasswordCheck] = useState('');
  const [id, setId] = useState('');

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div
        className={`flex w-full flex-col items-start gap-[30px] ${
          isMobile ? 'w-full max-w-[393px] px-4' : 'w-full max-w-[424px]'
        }`}
      >
        <div className="mb-[6px] text-gray-900 font-T01-B">회원가입하기</div>

        <div className="relative w-full">
          <Input
            inputtitle="아이디"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="h-[68px] w-full pr-[84px] font-B02-M"
            undertext="4-20자/영문,숫자 조합"
          />
          <button className="absolute right-4 top-[52%] h-[38px] -translate-y-1/2 cursor-pointer rounded-[10px] bg-gray-400 px-[10px] py-2 text-white font-B03-M">
            중복확인
          </button>
        </div>

        <Input
          inputtitle="비밀번호"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-[68px] w-full font-B02-M"
          undertext="8~16자/영문 대소문자,숫자,특수문자 조합"
        />

        <Input
          inputtitle="비밀번호 확인"
          placeholder="비밀번호를 입력하세요"
          value={passwordcheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          className="h-[68px] w-full font-B02-M"
        />
      </div>

      <div
        className={`${
          isMobile
            ? 'mt-[180px] w-full max-w-[393px] px-4 pb-10'
            : 'mt-[100px] w-full max-w-[424px]'
        }`}
      >
        <Button
          text="다음"
          color="primary"
          className="h-[60px] w-full font-T05-SB"
          onClick={() => {
            onNext();
          }}
        />
      </div>
    </div>
  );
};

export default Signup;
