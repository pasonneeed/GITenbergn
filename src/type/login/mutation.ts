export interface LoginInput {
  memberId: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  timestamp: string;
  data: {
    memberId: string;
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
