import CheckList from '@common/CheckList';

const startList = [
  '시작하기 tab을 누르면 나오는 화면이에용',
  '시작하기 tab을 누르면 나오는 화면이에용',
  '시작하기 tab을 누르면 나오는 화면이에용',
];
const StartTab = () => {
  return (
    <CheckList
      lists={startList}
      className="flex h-[168px] flex-col gap-4 overflow-hidden"
    />
  );
};

export default StartTab;
