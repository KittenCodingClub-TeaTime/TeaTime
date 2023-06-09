import { create } from 'zustand';

export const useAuthStore: any = create((set: any) => ({
  auth: {
    userInfos: {
      name: '',
      email: '',
    },
    isLoading: false,
    active: false,
  },
  setUserInfos: (data: any) => set((state: any) => ({ auth: { ...state.auth, userInfos: data } })),
}));
