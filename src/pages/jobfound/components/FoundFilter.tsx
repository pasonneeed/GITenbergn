import DropDown from '@common/DropDown';
import ResetButton from '@common/ResetButton';
import { useFilterStore } from '@store/filterStore';

const needOptions = ['필요함', '불필요함'];
const workTimeOptions = [
  '평일 오전',
  '평일 오후',
  '평일 9시-18시',
  '주말 근무',
  '이벤트성',
  '탄력 근무',
];
const bodyActivityOptions = [
  '정적인 활동',
  '가벼운 활동',
  '움직임이 많은 활동',
];

const FoundFilter = () => {
  const { reset, require, workTime, bodyActivity, setSelection } =
    useFilterStore();
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-end">
        {' '}
        <ResetButton onClick={reset} />
      </div>

      <div className="flex w-full basis-1/3 flex-row gap-5">
        <DropDown
          title="자격증 필요여부"
          placeholder="자격증 필요여부를 선택해주세요"
          options={needOptions}
          value={require}
          onSelect={(v) => setSelection('require', v)}
        />

        <DropDown
          title="근무시간대"
          placeholder="근무 시간대를 선택해주세요"
          options={workTimeOptions}
          value={workTime}
          onSelect={(v) => setSelection('workTime', v)}
        />

        <DropDown
          title="신체활동 정도"
          placeholder="신체활동 정도를 선택해주세요"
          options={bodyActivityOptions}
          value={bodyActivity}
          onSelect={(v) => setSelection('bodyActivity', v)}
        />
      </div>
    </div>
  );
};

export default FoundFilter;
