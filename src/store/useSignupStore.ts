import { create } from 'zustand';

interface SignupState {
  loginId: string;
  password: string;
  nickName: string;
  birthDate: string;
  gender: string;
  regionCode: string | null;
  setField: <K extends keyof SignupState>(
    key: K,
    value: SignupState[K]
  ) => void;
  reset: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  loginId: '',
  password: '',
  nickName: '',
  birthDate: '',
  gender: '',
  regionCode: null,
  setField: (key, value) => set((state) => ({ ...state, [key]: value })),
  reset: () =>
    set({
      loginId: '',
      password: '',
      nickName: '',
      birthDate: '',
      gender: '',
      regionCode: null,
    }),
}));
