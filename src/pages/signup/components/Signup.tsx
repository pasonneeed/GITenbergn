import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@common/Button';
import { Input } from '@common/Input';
import useMediaQuery from '@hook/useMediaQuery';
import {
  SignupFormValues,
  SignupSchema,
} from '@validation/signup/SignupSchema';
import { useSignupStore } from '@store/useSignupStore';
import { useDuplicateIdMutation } from '@hook/useSignup';
import { useState } from 'react';

interface SignupProps {
  onNext: () => void;
}

const Signup = ({ onNext }: SignupProps) => {
  const isMobile = useMediaQuery();
  const setField = useSignupStore((state) => state.setField);
  const { mutate: checkDuplicateId } = useDuplicateIdMutation();
  const [duplicateMessage, setDuplicateMessage] = useState<string | null>(null);
  const [duplicateSuccess, setDuplicateSuccess] = useState<boolean | null>(
    null
  );

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log('제출된 값:', data);
    setField('loginId', data.loginId);
    setField('password', data.password);
    onNext();
  };

  const handleDuplicateCheck = () => {
    const loginId = getValues('loginId');
    if (!loginId) return;

    checkDuplicateId(loginId, {
      onSuccess: (data) => {
        if (data?.duplicated) {
          setDuplicateSuccess(false);
          setDuplicateMessage('이미 사용 중인 아이디입니다.');
        } else {
          setDuplicateSuccess(true);
          setDuplicateMessage('사용 가능한 아이디입니다');
        }
      },
      onError: () => {
        setDuplicateSuccess(false);
        setDuplicateMessage('이미 사용 중인 아이디입니다.');
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center"
    >
      <div
        className={`flex w-full flex-col items-start gap-[30px] ${
          isMobile ? 'w-full max-w-[393px] px-4' : 'w-full max-w-[424px]'
        }`}
      >
        <div className="mb-[6px] text-gray-900 font-T01-B">회원가입하기</div>

        <div className="relative w-full">
          <Controller
            name="loginId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                inputtitle="아이디"
                placeholder="아이디를 입력하세요"
                className="h-[68px] w-full pr-[84px] font-B02-M"
                undertext={
                  errors.loginId?.message
                    ? errors.loginId.message
                    : duplicateMessage || '4-20자/영문,숫자 조합'
                }
                undertextClassName={
                  errors.loginId?.message
                    ? 'text-warning'
                    : duplicateSuccess === true
                      ? 'text-success'
                      : duplicateSuccess === false
                        ? 'text-warning'
                        : 'text-gray-500'
                }
                minLength={4}
                maxLength={20}
              />
            )}
          />
          <button
            type="button"
            onClick={handleDuplicateCheck}
            className="absolute right-4 top-[52%] h-[38px] -translate-y-1/2 cursor-pointer rounded-[10px] bg-gray-400 px-[10px] py-2 text-white font-B03-M"
          >
            중복확인
          </button>
        </div>

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              inputtitle="비밀번호"
              placeholder="비밀번호를 입력하세요"
              isPassword
              className={`h-[68px] w-full font-B02-M ${
                errors.password ? 'border-warning' : ''
              }`}
              undertext={
                errors.password?.message ||
                '8~16자/영문 대소문자,숫자,특수문자 조합'
              }
              undertextClassName={
                errors.password ? 'text-warning' : 'text-gray-500'
              }
              minLength={8}
              maxLength={16}
            />
          )}
        />

        <Controller
          name="passwordcheck"
          control={control}
          defaultValue=""
          render={({ field }) => {
            const passwordValue = getValues('password'); // 여기서도 getValues 사용 가능
            const isMatch = field.value && passwordValue === field.value;
            const hasError = !!errors.passwordcheck;

            return (
              <Input
                {...field}
                inputtitle="비밀번호 확인"
                placeholder="비밀번호를 다시 입력하세요"
                isPassword
                className={`h-[68px] w-full font-B02-M ${
                  hasError ? 'border-warning' : ''
                }`}
                undertext={
                  hasError
                    ? errors.passwordcheck?.message
                    : isMatch
                      ? '비밀번호가 일치합니다'
                      : ''
                }
                undertextClassName={
                  hasError ? 'text-warning' : isMatch ? 'text-success' : ''
                }
              />
            );
          }}
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
          type="submit"
          className="h-[60px] w-full font-T05-SB"
        />
      </div>
    </form>
  );
};

export default Signup;
