export interface RecruitItem {
  id: number;
  company: string;
  title: string;
  hashtags: string[];
  endDate: string;
  isDay?: boolean;
}

const RecruitDummy: RecruitItem[] = [
  {
    id: 1,
    company: '라헨느뷰티아카데미',
    title: '피부미용 국가자격증(실기) 단기 속성 반',
    hashtags: ['경기 고양시 덕양구', '경력무관 정규직', '햑력 무관'],
    endDate: '05.22 (수)',
    isDay: true,
  },
  {
    id: 2,
    company: '라헨느뷰티아카데미',
    title: '피부미용 국가자격증(실기) 단기 속성 반',
    hashtags: ['경기 고양시 덕양구', '경력무관 정규직', '햑력 무관'],
    endDate: '05.22 (수)',
    isDay: true,
  },
  {
    id: 3,
    company: '라헨느뷰티아카데미',
    title: '피부미용 국가자격증(실기) 단기 속성 반',
    hashtags: ['경기 고양시 덕양구', '경력무관 정규직', '햑력 무관'],
    endDate: '05.22 (수)',
    isDay: false,
  },
];

export default RecruitDummy;
