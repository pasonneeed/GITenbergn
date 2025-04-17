import Button from '@common/Button.tsx';
import { Input } from '@common/Input.tsx';
import { useState } from 'react';
import LoginImage from '@assets/images/login.png';

const Login = () => {
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-[1200px]">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={LoginImage}
            alt="로그인 이미지"
            className="h-auto w-[500px]"
          />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="w-full max-w-[400px] space-y-6">
            <div className="space-y-1 pb-8">
              <div className="text-3xl text-gray-600">당신의 인생 2막,</div>
              <div className="text-6xl font-bold text-black">
                지금 두드림에서
              </div>
            </div>

            <form className="mt-8 w-full space-y-5">
              <div className="space-y-1">
                <div className="text-gray-700 font-B01-M">아이디</div>
                <Input
                  placeholder="아이디를 입력하세요"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="h-14 w-full font-B02-M"
                />
              </div>

              <div className="space-y-1 pb-4">
                <div className="text-gray-700 font-B01-M">비밀번호</div>
                <Input
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isPassword
                  className="h-14 w-full font-B02-M"
                />
              </div>

              <Button
                text="로그인"
                type="submit"
                color="primary"
                className="h-[3.25rem] w-full font-T05-SB"
              />
            </form>

            <div className="h-px w-full bg-gray-300" />

            <div className="mt-4 w-full text-center text-gray-500 font-B03-M">
              두드림이 처음이신가요?{'  '}
              <a href="/signup" className="text-purple-500 font-B03-M">
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
