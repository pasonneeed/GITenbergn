// Filter.tsx
import { useMemo, useState, useRef } from 'react';
import RefreshIcon from '@assets/icons/refresh_icon.svg?react';
import DropDownIcon from '@assets/icons/drop_down.svg?react';
import { useDropdown } from '@hook/useDropdown.ts';
import { useFilterStore } from '@store/filterStore.ts';

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

// 시 → 구 맵핑 (필요한만큼 추가)
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

  // 직업 드롭다운
  const { isOpen: isJobOpen, toggle: toggleJob, ref: jobRef } = useDropdown();
  // 지역 드롭다운 (1단계/2단계 공용)
  const { isOpen: isLocOpen, toggle: toggleLoc, ref: locRef } = useDropdown();

  // 지역 단계 관리
  const [locStep, setLocStep] = useState<'city' | 'district'>('city');
  const [tempCity, setTempCity] = useState<string>('');

  // 날짜 입력 필드 참조
  const endDateInputRef = useRef<HTMLInputElement>(null);

  // 시작일 입력 처리 함수
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // 날짜 형식 검증 (숫자와 / 만 허용)
    if (/^[0-9/]*$/.test(value)) {
      updateDate('startDate', value);
      
      // 날짜 형식 완성 시 자동으로 다음 필드로 이동
      // YYYY/MM/DD 형식 (10자)이 완성되면 종료일로 포커스 이동
      if (value.length === 10 && value.split('/').length === 3) {
        endDateInputRef.current?.focus();
      }
    }
  };

  // 종료일 입력 처리 함수
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // 날짜 형식 검증 (숫자와 / 만 허용)
    if (/^[0-9/]*$/.test(value)) {
      updateDate('endDate', value);
    }
  };

  // 날짜 입력 도우미 함수 (자동으로 / 추가)
  const formatDateInput = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {
    // 백스페이스나 딜리트 키가 아닌 경우만 처리
    if (e.key !== 'Backspace' && e.key !== 'Delete') {
      // YYYY/MM/DD 형식 자동 변환
      if (value.length === 4 && !value.includes('/')) {
        updateDate(e.currentTarget.name as 'startDate' | 'endDate', value + '/');
      } else if (value.length === 7 && value.split('/').length === 2) {
        updateDate(e.currentTarget.name as 'startDate' | 'endDate', value + '/');
      }
    }
  };

  // 선택된 태그 생성
  const selectedTags = useMemo(
    () => {
      const tags = [];
      
      if (job) {
        tags.push({ label: job, type: 'job' as const });
      }
      
      if (location) {
        tags.push({ label: location, type: 'location' as const });
      }
      
      if (startDate && endDate) {
        tags.push({ label: `${startDate} ~ ${endDate}`, type: 'date' as const });
      }
      
      return tags;
    },
    [job, location, startDate, endDate]
  );

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-lg">
      {/* 초기화 */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => {
            reset();
            setLocStep('city');
            setTempCity('');
          }}
          className="flex items-center gap-1 rounded-full bg-black px-4 py-2 text-sm text-white"
        >
          필터 초기화 <RefreshIcon />
        </button>
      </div>

      {/* 드롭다운 영역 */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
        {/* 직업 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            직업
          </label>
          <div ref={jobRef} className="relative">
            <div
              onClick={toggleJob}
              className="flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-5 text-gray-500"
            >
              <span>{'직업 선택'}</span>
              <div className={`transition-transform duration-300 ${isJobOpen ? 'rotate-180' : ''}`}>
                <DropDownIcon />
              </div>
            </div>
            {isJobOpen && (
              <ul className="absolute left-0 top-full z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border bg-white shadow-lg">
                {jobOptions.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      setSelection('job', opt);
                      toggleJob(); // 선택 후 닫기
                    }}
                    className={`cursor-pointer px-4 py-3 text-sm hover:bg-gray-100 ${
                      job === opt
                        ? 'font-semibold text-purple-500'
                        : 'text-gray-700'
                    }`}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 지역 (시/구) */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            지역
          </label>
          <div ref={locRef} className="relative">
            <div
              onClick={() => {
                toggleLoc();
                setLocStep('city');
              }}
              className="flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-5 text-gray-500"
            >
              <span>{'지역 선택'}</span>
              <div className={`transition-transform duration-300 ${isLocOpen ? 'rotate-180' : ''}`}>
                <DropDownIcon />
              </div>
            </div>
            {isLocOpen && (
              <ul className="absolute left-0 top-full z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border bg-white shadow-lg">
                {locStep === 'city' &&
                  cityOptions.map((city) => (
                    <li
                      key={city}
                      onClick={() => {
                        setTempCity(city);
                        setLocStep('district');
                      }}
                      className="cursor-pointer px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {city}
                    </li>
                  ))}
                {locStep === 'district' && (
                  <>
                    {/* 뒤로가기 */}
                    <li
                      onClick={() => setLocStep('city')}
                      className="cursor-pointer px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                    >
                      ← 시 선택으로 돌아가기
                    </li>
                    {districtMap[tempCity]?.map((dist) => (
                      <li
                        key={dist}
                        onClick={() => {
                          setSelection('location', `${tempCity} ${dist}`);
                          toggleLoc(); // 선택 후 닫기
                          setLocStep('city');
                        }}
                        className={`cursor-pointer px-4 py-3 text-sm hover:bg-gray-100 ${
                          location === `${tempCity} ${dist}`
                            ? 'font-semibold text-purple-500'
                            : 'text-gray-700'
                        }`}
                      >
                        {dist}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* 근무 시작일 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            근무 시작일
          </label>
          <div className="flex items-center rounded-xl border px-4 py-5 text-sm text-gray-700 shadow-sm">
            <input
              type="text"
              name="startDate"
              placeholder="YYYY/MM/DD"
              value={startDate}
              onChange={handleStartDateChange}
              onKeyUp={(e) => formatDateInput(e, startDate)}
              maxLength={10}
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* 근무 종료일 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            근무 종료일
          </label>
          <div className="flex items-center rounded-xl border px-4 py-5 text-sm text-gray-700 shadow-sm">
            <input
              ref={endDateInputRef}
              type="text"
              name="endDate"
              placeholder="YYYY/MM/DD"
              value={endDate}
              onChange={handleEndDateChange}
              onKeyUp={(e) => formatDateInput(e, endDate)}
              maxLength={10}
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>

      {/* 선택된 태그 출력 */}
      <div className="mt-6 flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
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
