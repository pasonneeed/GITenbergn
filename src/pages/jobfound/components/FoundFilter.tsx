import { useMemo } from 'react';
import DropDown from '@common/DropDown';
import ResetButton from '@common/ResetButton';
import { useFilterStore } from '@store/filterStore';
import Cancel from '@assets/icons/purplecancel.svg?react';

type Tag = { label: string; type: 'require' | 'workTime' | 'bodyActivity' };

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
  const { require, workTime, bodyActivity, setSelection, removeTag, reset } =
    useFilterStore();

  const tags = useMemo<Tag[]>(() => {
    const t: Tag[] = [];
    if (require) t.push({ label: require, type: 'require' });
    if (workTime) t.push({ label: workTime, type: 'workTime' });
    if (bodyActivity) t.push({ label: bodyActivity, type: 'bodyActivity' });
    return t;
  }, [require, workTime, bodyActivity]);

  const handleResetAll = () => {
    reset();
  };

  return (
    <div className="shadow-shadow2 mt-[60px] flex min-h-[242px] w-full flex-col items-start rounded-[30px] bg-white p-[30px]">
      <div className="flex w-full flex-col">
        <div className="flex justify-end">
          <ResetButton onClick={handleResetAll} />
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

        <div className="mt-6 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="flex items-center gap-1 rounded-full border border-purple-500 bg-purple-100 px-3 py-2 text-purple-500 font-B03-M"
            >
              {tag.label}
              <button onClick={() => removeTag(tag.type)}>
                <Cancel />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FoundFilter;
