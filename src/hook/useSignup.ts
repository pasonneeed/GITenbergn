import api from './api';

export interface SignupRequest {
  loginId: string;
  password: string;
  nickName: string;
  birthDate: string;
  gender: string | null;
  regionCode?: string | null;
}

export const signupUser = async (data: SignupRequest) => {
  const response = await api.post(`/v1/member/auth/sign-up`, data);
  return response.data;
};
