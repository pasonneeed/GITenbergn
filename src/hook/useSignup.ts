import { useMutation } from '@tanstack/react-query';
import api from './api';
import { useNavigate } from 'react-router-dom';

export interface SignupRequest {
  loginId: string;
  password: string;
  nickName: string;
  birthDate: string;
  gender: string | null;
  regionCode?: string | null;
}

const signupUser = async (data: SignupRequest) => {
  const response = await api.post(`/v1/member/auth/sign-up`, data);
  return response.data;
};

const duplicateId = async (loginId: string) => {
  const response = await api.get(`/v1/member/auth/check-id`, {
    params: { loginId },
  });
  return response.data;
};

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      navigate('/login');
    },
  });
};

export const useDuplicateIdMutation = () => {
  return useMutation({
    mutationFn: duplicateId,
  });
};
