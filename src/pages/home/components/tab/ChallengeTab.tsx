import CheckList from '@common/CheckList';

const challengeList = [
  '도전하기 tab을 누르면 나오는 화면이에용',
  '도전하기 tab을 누르면 나오는 화면이에용',
  '도전하기 tab을 누르면 나오는 화면이에용',
];

const ChallengeTab = () => {
  return (
    <CheckList
      lists={challengeList}
      className="flex h-[168px] flex-col gap-4 overflow-hidden"
    />
  );
};

export default ChallengeTab;
