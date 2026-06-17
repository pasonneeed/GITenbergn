const stepQuestions = [
  {
    step: '경험',
    questions: [
      {
        question: '직업을 선택하실 때 가장 중요하게 생각하는 건 무엇인가요?',
        options: [
          '내 적성에 맞는 일',
          '수입이 안정적인 일',
          '당장 시작할 수 있는 일',
        ],
      },
      {
        question: '과거에 어떤 직무를 경험해보셨나요?',
        options: ['사무직', '서비스직', '기술직'],
      },
      {
        question: '경험을 통해 얻은 가장 큰 가치는 무엇인가요?',
        options: ['성장', '협업', '문제 해결'],
      },
    ],
  },
  {
    step: '근무조건',
    questions: [
      {
        question: '어떤 근무 조건이 가장 중요하다고 생각하시나요?',
        options: ['정규직', '재택근무 가능', '복지 혜택 우수'],
      },
      {
        question: '근무 시간 중 어떤 것을 선호하시나요?',
        options: ['풀타임', '유연근무제', '파트타임'],
      },
      {
        question: '선호하는 팀 구조는 어떤가요?',
        options: ['작은 팀', '중간 규모 팀', '대규모 팀'],
      },
    ],
  },
  {
    step: '기타',
    questions: [
      {
        question: '추가로 고려하는 요소가 있나요?',
        options: ['회사 위치', '성장 가능성'],
      },
      {
        question: '회사 문화 중 중요하게 여기는 점은?',
        options: ['자율성', '수평적 문화', '빠른 실행력'],
      },
    ],
  },
  {
    step: '확인',
    questions: [],
  },
];
export default stepQuestions;
