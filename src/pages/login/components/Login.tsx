import Button from '@common/Button.tsx';
import { Input } from '@common/Input.tsx';
import LoginImage from '@assets/images/login.png';
import { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-[1200px]">
        {/* 왼쪽: 이미지 영역 */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={LoginImage}
            alt="로그인 이미지"
            className="h-auto w-[500px]"
          />
        </div>

        {/*로그인 폼 영역*/}
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="w-full max-w-[400px] space-y-6">
            <div className={'space-y-1 pb-8'}>
              <div className="text-3xl text-gray-600">당신의 인생 2막,</div>
              <div className="text-6xl font-bold text-black">
                지금 두드림에서
              </div>
            </div>

            {/* 입력 폼 */}
            <div className="mt-8 w-full space-y-5 pb-4">
              <div className="space-y-1">
                <div className="text-gray-700 font-B01-M">아이디</div>
                <Input
                  placeholder="아이디를 입력하세요"
                  width="w-full"
                  height="h-14"
                  fontClassName="font-B02-M"
                  state="default"
                  fullWidth={false}
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <div className="text-gray-700 font-B01-M">비밀번호</div>
                <Input
                  placeholder="비밀번호를 입력하세요"
                  width="w-full"
                  height="h-14"
                  fontClassName="font-B02-M"
                  state="default"
                  fullWidth={false}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isPassword
                />
              </div>
            </div>

            <Button className="w-full" text={'로그인'} />
            <div className="mt-6 h-px w-full bg-gray-200 font-T05-SB" />
            <div className="mt-4 w-full text-center text-gray-500 font-B03-M">
              두드림이 처음이신가요?{'  '}
              <a href="/signup" className="font-semibold text-purple-500">
                회원가입
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
