import checker from '@assets/images/checker.png';
import sample from '@assets/images/tmp.png';

interface FoundJob {
  id: number;
  title: string;
  tags: string;
  description: string;
  imageUrl: string;
  userProfiles: {
    id: number;
    avatar: string;
  }[];
}

const FoundJobs: FoundJob[] = [
  {
    id: 1,
    title: '요양보호사',
    tags: '불필요, 평일 9시~18시, 움직임이 많은 활동',
    description:
      '요양보호사는 노인이나 장애인 등의 일상생활을 돕는 직업입니다.',
    imageUrl: sample,
    userProfiles: [
      { id: 1, avatar: checker },
      { id: 2, avatar: checker },
      { id: 3, avatar: sample },
      { id: 4, avatar: sample },
      { id: 5, avatar: sample },
    ],
  },
  {
    id: 2,
    title: '방과후 돌봄 교사',
    tags: '자격증 필요, 주중 오후, 교육 중심',
    description:
      '초등학생을 대상으로 방과 후 활동을 지도하고 돌보는 역할입니다.',
    imageUrl: checker,
    userProfiles: [
      { id: 1, avatar: checker },
      { id: 2, avatar: checker },
      { id: 3, avatar: sample },
      { id: 4, avatar: sample },
      { id: 5, avatar: sample },
      { id: 1, avatar: checker },
      { id: 2, avatar: checker },
      { id: 3, avatar: sample },
      { id: 4, avatar: sample },
      { id: 5, avatar: sample },
      { id: 1, avatar: checker },
      { id: 2, avatar: checker },
      { id: 3, avatar: sample },
      { id: 4, avatar: sample },
      { id: 5, avatar: sample },
    ],
  },
  {
    id: 3,
    title: '간호조무사',
    tags: '자격증 필요, 병원 근무, 정시 출퇴근',
    description: '환자 관리와 간호사의 보조 업무를 수행합니다.',
    imageUrl: checker,
    userProfiles: [
      { id: 7, avatar: checker },
      { id: 8, avatar: sample },
      { id: 100, avatar: checker },
      { id: 101, avatar: sample },
      { id: 200, avatar: checker },
      { id: 250, avatar: checker },
      { id: 150, avatar: checker },
    ],
  },
  {
    id: 4,
    title: '사회복지사',
    tags: '학위 필요, 상담 중심, 공공기관 근무',
    description: '도움이 필요한 사람들에게 복지 서비스를 제공합니다.',
    imageUrl: sample,
    userProfiles: [
      { id: 10, avatar: checker },
      { id: 11, avatar: checker },
      { id: 60, avatar: sample },
      { id: 70, avatar: checker },
    ],
  },
  {
    id: 5,
    title: '어린이집 보육교사',
    tags: '자격증 필요, 아이 돌봄, 주중 오전',
    description: '영유아의 안전과 발달을 지원하며 다양한 활동을 지도합니다.',
    imageUrl: checker,
    userProfiles: [
      { id: 13, avatar: sample },
      { id: 14, avatar: checker },
      { id: 15, avatar: checker },
    ],
  },
  {
    id: 6,
    title: '급식 조리사',
    tags: '경력 우대, 조리 가능자, 식사 제공',
    description: '학교 및 복지시설에서 식사를 조리하고 배식합니다.',
    imageUrl: checker,
    userProfiles: [],
  },
  {
    id: 7,
    title: '경비원',
    tags: '교대근무, 야간 가능자, 신체 건강',
    description: '건물이나 주거지역의 안전을 책임지는 직업입니다.',
    imageUrl: checker,
    userProfiles: [
      { id: 90, avatar: sample },
      { id: 91, avatar: sample },
      { id: 92, avatar: sample },
      { id: 90, avatar: checker },
      { id: 91, avatar: checker },
      { id: 92, avatar: checker },
      { id: 90, avatar: checker },
      { id: 91, avatar: checker },
      { id: 92, avatar: checker },
      { id: 90, avatar: checker },
      { id: 91, avatar: checker },
      { id: 92, avatar: checker },
      { id: 91, avatar: checker },
      { id: 92, avatar: checker },
    ],
  },
  {
    id: 8,
    title: '청소원',
    tags: '정리정돈, 오전 근무, 실내 활동',
    description: '건물이나 공공시설의 위생과 청결을 담당합니다.',
    imageUrl: checker,
    userProfiles: [
      { id: 22, avatar: checker },
      { id: 23, avatar: checker },
      { id: 24, avatar: checker },
      { id: 25, avatar: checker },
      { id: 26, avatar: checker },
    ],
  },
  {
    id: 9,
    title: '택배 보조원',
    tags: '체력 필요, 오전~오후, 외부 활동',
    description: '물류센터에서 택배 상하차 및 분류 업무를 수행합니다.',
    imageUrl: checker,
    userProfiles: [{ id: 27, avatar: checker }],
  },
  {
    id: 10,
    title: '마을버스 안내원',
    tags: '친절한 태도, 노약자 배려, 승객 응대',
    description: '마을버스에서 승객에게 목적지를 안내하고 배려하는 역할입니다.',
    imageUrl: checker,
    userProfiles: [
      { id: 61, avatar: checker },
      { id: 62, avatar: checker },
      { id: 63, avatar: checker },
    ],
  },
  {
    id: 11,
    title: '장애인 활동지원사',
    tags: '공감 능력, 신체 보조, 외부 동행',
    description: '장애인의 일상생활을 함께 하며 활동을 돕습니다.',
    imageUrl: sample,
    userProfiles: [
      { id: 31, avatar: sample },
      { id: 32, avatar: sample },
      { id: 33, avatar: checker },
      { id: 40, avatar: sample },
      { id: 41, avatar: sample },
      { id: 42, avatar: checker },
      { id: 43, avatar: sample },
      { id: 44, avatar: sample },
      { id: 45, avatar: checker },
    ],
  },
  {
    id: 12,
    title: '공공 도서관 사서',
    tags: '책 정리, 이용자 안내, 데이터 입력',
    description: '도서 대출과 반납, 서가 정리 및 이용자 응대를 담당합니다.',
    imageUrl: checker,
    userProfiles: [{ id: 34, avatar: checker }],
  },
];

export default FoundJobs;
