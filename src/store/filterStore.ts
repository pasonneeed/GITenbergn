import { create } from 'zustand';
type FilterState = {
  job: string;
  location: string;
  startDate: string;
  endDate: string;
  trainingCourse: string;
  require: string; //자격증 필요여부
  workTime: string;
  bodyActivity: string;
};

type FilterActions = {
  setSelection: (
    key:
      | 'job'
      | 'location'
      | 'require'
      | 'workTime'
      | 'bodyActivity'
      | 'trainingCourse',
    value: string
  ) => void;
  updateDate: (key: 'startDate' | 'endDate', value: string) => void;
  removeTag: (
    type:
      | 'job'
      | 'location'
      | 'date'
      | 'trainingCourse'
      | 'require'
      | 'workTime'
      | 'bodyActivity'
  ) => void;
  reset: () => void;
};

export const useFilterStore = create<FilterState & FilterActions>((set) => ({
  job: '',
  location: '',
  startDate: '',
  endDate: '',
  trainingCourse: '',
  require: '',
  workTime: '',
  bodyActivity: '',

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
      trainingCourse: '',
      require: '',
      workTime: '',
      bodyActivity: '',
    }),
}));
