import Button from '@common/Button';
import { useState } from 'react';
import useMediaQuery from '@hook/useMediaQuery';
import AddressModal from './AddressModal';
import { Input } from '@common/Input';
import AddressInput from './AddressInput';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Signup2FormValues,
  Signup2Schema,
} from '@validation/signup/SignupSchema';

const Signup2 = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const isMobile = useMediaQuery();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [address, setAddress] = useState('');
  const genderOptions = [
    { label: '여자', value: 'female' },
    { label: '남자', value: 'male' },
  ];

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Signup2FormValues>({
    resolver: zodResolver(Signup2Schema),
    defaultValues: {
      nickname: '',
      date: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: Signup2FormValues) => {
    console.log('폼 데이터:', data, '성별:', selectedGender);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center"
    >
      <div
        className={`flex flex-col items-start gap-[30px] ${
          isMobile ? 'w-full max-w-[393px] px-4' : 'w-full max-w-[424px]'
        }`}
      >
        <div className="text-gray-900 font-T01-B">회원가입하기</div>

        <div className="relative w-full">
          <Controller
            name="nickname"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                inputtitle="닉네임"
                placeholder="닉네임을 입력하세요"
                className={`h-[68px] w-full pr-[84px] font-B02-M ${
                  errors.nickname ? 'border-warning' : ''
                }`}
                undertext={
                  errors.nickname?.message || '2~8자 이내의 한글, 영문, 숫자'
                }
                undertextClassName={
                  errors.nickname?.message ? 'text-warning' : 'text-gray-500'
                }
                minLength={1}
                maxLength={8}
              />
            )}
          />
          <button
            type="button"
            className="absolute right-4 top-[52%] h-[38px] -translate-y-1/2 cursor-pointer rounded-[10px] bg-gray-400 px-[10px] py-2 text-white font-B03-M"
          >
            중복확인
          </button>
        </div>

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              inputtitle="생년월일"
              placeholder="YYYY / MM / DD"
              className={`h-[68px] w-full font-B02-M ${
                errors.date ? 'border-warning' : ''
              }`}
              undertext={errors.date?.message}
              undertextClassName={errors.date ? 'text-warning' : ''}
            />
          )}
        />

        <div className="flex w-full flex-col gap-2">
          <span className="text-gray-600 font-B01-M">성별</span>
          <div className="flex flex-row gap-3">
            {genderOptions.map(({ label, value }) => (
              <button
                key={value}
                type="button"
                onClick={() => setSelectedGender(value)}
                className={`flex h-[68px] w-full cursor-pointer items-center justify-center rounded-2xl px-5 py-6 ${
                  selectedGender === value
                    ? 'bg-purple-150 text-purple-500 font-B02-SB'
                    : 'bg-gray-100 text-gray-400 font-B02-M'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <AddressInput onClick={() => setIsModal(true)} address={address} />
      </div>

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

      {isModal && (
        <AddressModal
          onClose={(selectedAddress?: string) => {
            if (selectedAddress) {
              setAddress(selectedAddress);
            }
            setIsModal(false);
          }}
        />
      )}
    </form>
  );
};

export default Signup2;
