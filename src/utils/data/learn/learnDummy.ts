export interface LearningItem {
  id: number;
  company: string;
  title: string;
  hashtags: string[];
  price: string;
  isDay?: boolean;
}

const LearningDummy: LearningItem[] = [
  {
    id: 1,
    company: '라헨느뷰티아카데미',
    title: '피부미용 국가자격증(실기) 단기 속성 반',
    hashtags: ['경기 고양시 덕양구', '경력무관 정규직', '햑력 무관'],
    price: '101,300원',
    isDay: false,
  },
  {
    id: 2,
    company: '라헨느뷰티아카데미',
    title: '피부미용 국가자격증(실기) 단기 속성 반',
    hashtags: ['경기 고양시 덕양구', '경력무관 정규직', '햑력 무관'],
    price: '101,300원',
    isDay: false,
  },
  {
    id: 3,
    company: '라헨느뷰티아카데미',
    title: '피부미용 국가자격증(실기) 단기 속성 반',
    hashtags: ['경기 고양시 덕양구', '경력무관 정규직', '햑력 무관'],
    price: '101,300원',
    isDay: false,
  },
];

export default LearningDummy;
