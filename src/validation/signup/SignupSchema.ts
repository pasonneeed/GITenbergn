import { z } from 'zod';

export const SignupSchema = z
  .object({
    loginId: z
      .string()
      .trim()
      .min(4, '4자 이상 입력해주세요')
      .max(20, '20자 이하로 입력해주세요')
      .regex(/^[a-zA-Z0-9]+$/, '특수문자를 없애주세요'),
    password: z
      .string()
      .trim()
      .min(8, '8자 이상 입력해주세요')
      .max(16, '16자 이하로 입력해주세요')
      .regex(/[a-z]/, '소문자를 포함해주세요')
      .regex(/[A-Z]/, '대문자를 포함해주세요')
      .regex(/[0-9]/, '숫자를 포함해주세요')
      .regex(/[^A-Za-z0-9]/, '특수문자를 포함해주세요'),

    passwordcheck: z.string(),
  })
  .refine((data) => data.password === data.passwordcheck, {
    path: ['passwordcheck'],
    message: '비밀번호가 일치하지 않습니다',
  });

export type SignupFormValues = z.infer<typeof SignupSchema>;

export const Signup2Schema = z.object({
  nickname: z
    .string()
    .trim()
    .min(2, '2자 이상 8자 이내의 한글, 영문, 숫자만 입력해주세요.')
    .max(8, '2자 이상 8자 이내의 한글, 영문, 숫자만 입력해주세요.')
    .regex(/^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]+$/, '특수문자를 없애주세요'),

  date: z
    .string()
    .regex(/^\d{4}\/\d{2}\/\d{2}$/, 'YYYY/MM/DD 형식으로 입력해주세요'),
});

export type Signup2FormValues = z.infer<typeof Signup2Schema>;
