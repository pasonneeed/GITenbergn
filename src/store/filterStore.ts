import { create } from 'zustand';

type FilterState = {
  job: string;
  location: string;
  startDate: string;
  endDate: string;
};

type FilterActions = {
  setSelection: (key: 'job' | 'location', value: string) => void;
  updateDate: (key: 'startDate' | 'endDate', value: string) => void;
  removeTag: (type: 'job' | 'location' | 'date') => void;
  reset: () => void;
};

export const useFilterStore = create<FilterState & FilterActions>((set) => ({
  job: '',
  location: '',
  startDate: '',
  endDate: '',

  setSelection: (key, value) =>
    set((state) => ({
      [key]: state[key] === value ? '' : value,
    })),

  updateDate: (key, value) =>
    set(() => ({
      [key]: value,
    })),

  removeTag: (type) =>
    set(() => {
      if (type === 'date') {
        return { startDate: '', endDate: '' };
      }
      return {
        [type]: '',
      };
    }),

  reset: () =>
    set({
      job: '',
      location: '',
      startDate: '',
      endDate: '',
    }),
}));
