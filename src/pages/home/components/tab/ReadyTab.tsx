import CheckList from '@common/CheckList';

const readyList = [
  '준비하기 tab을 누르면 나오는 화면이에용',
  '준비하기 tab을 누르면 나오는 화면이에용',
  '준비하기 tab을 누르면 나오는 화면이에용',
];

const ReadyTab = () => {
  return (
    <CheckList
      lists={readyList}
      className="flex h-[168px] flex-col gap-4 overflow-hidden"
    />
  );
};

export default ReadyTab;
