import { useMemo, useState, useRef } from 'react';
import DropDown from '@common/DropDown';
import DateInput from '@common/DateInput';
import ResetButton from '@common/ResetButton';
import { useFilterStore } from '@store/filterStore';

type Tag = { label: string; type: 'job' | 'location' | 'date' };

const jobOptions = [
  '요양보호사',
  '간병인',
  '물리치료사',
  '작업치료사',
  '간호사',
  '사회복지사',
  '방문요양보호사',
  '주간보호센터',
  '요양원 요리사',
  '청소원',
];

const cityOptions = ['서울', '부산', '인천', '대구', '광주', '대전', '울산'];

const districtMap: Record<string, string[]> = {
  서울: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
  ],
  부산: ['해운대구', '수영구', '동래구', '남구', '북구'],
  인천: ['연수구', '남동구', '부평구', '계양구', '서구'],
  대구: ['수성구', '달서구', '중구', '동구'],
  광주: ['북구', '서구', '동구', '남구'],
  대전: ['유성구', '서구', '중구', '동구'],
  울산: ['남구', '중구', '동구', '북구'],
};

export default function Filter() {
  const {
    job,
    location,
    startDate,
    endDate,
    setSelection,
    updateDate,
    removeTag,
    reset,
  } = useFilterStore();

  const [locStep, setLocStep] = useState<'city' | 'district'>('city');
  const [tempCity, setTempCity] = useState('');
  const endDateRef = useRef<HTMLInputElement>(null);

  const selectedCity = location.split(' ')[0] || '';
  const selectedDistrict = location.split(' ')[1] || '';

  const tags = useMemo<Tag[]>(() => {
    const t: Tag[] = [];
    if (job) t.push({ label: job, type: 'job' });
    if (location.includes(' ')) t.push({ label: location, type: 'location' });
    if (startDate && endDate)
      t.push({ label: `${startDate} ~ ${endDate}`, type: 'date' });
    return t;
  }, [job, location, startDate, endDate]);

  const handleCitySelect = (city: string) => {
    setTempCity(city);
    if (city === selectedCity) {
      setLocStep('district');
    } else {
      setSelection('location', '');
      setLocStep('district');
    }
  };
  const handleDistrictSelect = (dist: string) => {
    setSelection('location', `${tempCity} ${dist}`);
    setLocStep('city');
  };
  const handleResetAll = () => {
    reset();
    setLocStep('city');
    setTempCity('');
  };

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-lg">
      {/* 1) 필터 초기화 */}
      <div className="mb-4 flex justify-end">
        <ResetButton onClick={handleResetAll} />
      </div>

      {/* 2) 빈 공간 */}
      <div className="h-4" />

      {/* 3) 첫째 줄: 라벨들 */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-900">직업</label>
        </div>
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-900">지역</label>
        </div>
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-900">
            공고 날짜
          </label>
        </div>
      </div>

      {/* 4) 컨트롤 행 */}
      {/* 4) 컨트롤 행 */}
      <div className="mt-2 flex flex-col gap-4 md:flex-row">
        {/* 직업 드롭다운 */}
        <div className="flex-1">
          <DropDown
            placeholder="직업 선택"
            options={jobOptions}
            value={job}
            onSelect={(v) => setSelection('job', v)}
          />
        </div>

        {/* 지역 드롭다운 */}
        <div className="flex-1">
          {locStep === 'city' ? (
            <DropDown
              placeholder="지역 선택"
              options={cityOptions}
              value={selectedCity}
              onSelect={handleCitySelect}
              keepOpenOnSelect
            />
          ) : (
            <DropDown
              placeholder={`${tempCity}의 구 선택`}
              options={districtMap[tempCity] || []}
              value={selectedDistrict}
              onSelect={handleDistrictSelect}
              backButton={{
                label: '← 시 선택으로 돌아가기',
                onClick: () => setLocStep('city'),
              }}
            />
          )}
        </div>

        {/* 공고 날짜 입력 영역 */}
        <div className="flex flex-1 gap-2">
          <div className="w-1/2">
            <DateInput
              label="공고 시작일"
              name="startDate"
              value={startDate}
              onChange={(v) => updateDate('startDate', v)}
              autoFocusTo={endDateRef}
            />
          </div>
          <div className="w-1/2">
            <DateInput
              ref={endDateRef}
              label="공고 마감일"
              name="endDate"
              value={endDate}
              onChange={(v) => updateDate('endDate', v)}
            />
          </div>
        </div>
      </div>

      {/* 6) 선택된 태그 */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className="flex items-center gap-1 rounded-full border border-purple-300 px-3 py-1 text-sm text-purple-500"
          >
            {tag.label}
            <button onClick={() => removeTag(tag.type)} className="text-xs">
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
