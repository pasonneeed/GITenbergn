import Button from '@common/Button.tsx';
import { Input } from '@common/Input.tsx';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormValues } from '@validation/login/loginSchema.ts';
import clsx from 'clsx';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  return (
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
              className={clsx(
                'h-14 w-full font-B02-M',
                errors.id && 'border-warning'
              )}
            />
          )}
        />
        {errors.id && (
          <p className="text-warning text-sm">{errors.id.message}</p>
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
              className={clsx(
                'h-14 w-full font-B02-M',
                errors.password && 'border-warning'
              )}
            />
          )}
        />
        {errors.password && (
          <p className="text-warning text-sm">{errors.password.message}</p>
        )}
      </div>

      <Button
        text="로그인"
        type="submit"
        color="primary"
        className="h-[3.25rem] w-full font-T05-SB"
      />
    </form>
  );
};

export default LoginForm;
