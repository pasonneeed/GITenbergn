export interface LoginInput {
  loginId: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  timestamp: string;
  data: {
    memberId: string;
    loginId: string;
    nickname: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface ErrorResponse {
  success: false;
  timestamp: string;
  statusCode: number;
  code: string;
  message: string;
}
