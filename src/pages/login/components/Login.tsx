import Button from '@common/Button.tsx';
import { Input } from '@common/Input.tsx';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormValues } from '@validation/loginSchema';
import LoginImage from '@assets/images/login.png';
import Divider from '@common/Divider.tsx';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="flex items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-[1200px]">
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <img
            src={LoginImage}
            alt="로그인 이미지"
            className="h-auto w-[400px] md:w-[500px]"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center px-4 md:w-1/2">
          <div className="w-full max-w-[400px] space-y-6">
            <div className="space-y-2 pb-8 text-left">
              <div className="text-2xl text-gray-600 md:text-3xl">
                당신의 인생 2막,
              </div>
              <div className="text-4xl font-bold text-black md:text-6xl">
                지금 두드림에서
              </div>
            </div>

            <form
              onSubmit={handleSubmit((data) => console.log(data))}
              className="mt-8 w-full space-y-5"
            >
              <div className="space-y-1">
                <div className="text-gray-700 font-B01-M">아이디</div>
                <Controller
                  name={'id'}
                  control={control}
                  defaultValue={''}
                  render={({ field }) => (
                    <Input
                      placeholder="아이디를 입력하세요"
                      {...field}
                      className="h-14 w-full font-B02-M"
                    />
                  )}
                />
                {errors.id && (
                  <p className="text-sm text-red-500">{errors.id.message}</p>
                )}
              </div>

              <div className="space-y-1 pb-4">
                <div className="text-gray-700 font-B01-M">비밀번호</div>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      isPassword
                      placeholder="비밀번호를 입력하세요"
                      className="h-14 w-full font-B02-M"
                    />
                  )}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button
                text="로그인"
                type="submit"
                color="primary"
                className="h-[3.25rem] w-full font-T05-SB"
              />
            </form>

            <Divider />

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
