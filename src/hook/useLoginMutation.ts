import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LoginInput, LoginResponse, ErrorResponse } from '@type/login/mutation';
import api from './api';

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const login = async (data: LoginInput): Promise<LoginResponse> => {
    const response = await api.post(`/v1/member/auth/login`, data);
    return response.data;
  };

  return useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log(res);
      if (res.success) {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('nickname', res.data.nickname);
        navigate('/');
      } else {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const errorMsg = error.response?.data.message;
      alert(errorMsg);
    },
  });
};
