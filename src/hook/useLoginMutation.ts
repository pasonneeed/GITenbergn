import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface LoginInput {
  memberId: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  timestamp: string;
  data: {
    memberId: string;
    accessToken: string;
    refreshToken: string;
  };
}

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const login = async (data: LoginInput): Promise<LoginResponse> => {
    const response = await axios.post(`${BASE_URL}/v1/member/auth/login`, data);
    return response.data;
  };

  return useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log(res);
      if (res.success) {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        navigate('/');
      } else {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    },
    onError: (error: any) => {
      const errorMsg = error.response.data.message;
      alert(errorMsg);
    },
  });
};
