import { useState } from 'react';
import SearchIcon from '@assets/icons/search.svg?react';
import RefreshIcon from '@assets/icons/refresh_icon.svg?react';
import DropDownIcon from '@assets/icons/drop_down.svg?react';
import { useDropdown } from '@hook/useDropdown.ts';

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

const locationOptions = [
  '서울',
  '부산',
  '인천',
  '대구',
  '광주',
  '대전',
  '울산',
];

const Filter = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const { isOpen: isJobOpen, toggle: toggleJob, ref: jobRef } = useDropdown();

  const {
    isOpen: isLocationOpen,
    toggle: toggleLocation,
    ref: locationRef,
  } = useDropdown();

  const toggleSelection = (
    option: string,

    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedList((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleReset = () => {
    setSelectedJobs([]);
    setSelectedLocations([]);
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-lg">
      {/* 초기화 버튼 */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={handleReset}
          className="flex items-center gap-1 rounded-full bg-black px-4 py-2 text-sm text-white"
        >
          필터 초기화 <RefreshIcon />
        </button>
      </div>

      {/* 필터 입력부 */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
        {/* 직업 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            직업
          </label>
          <div ref={jobRef} className="relative">
            <div
              onClick={toggleJob}
              className="flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-5 text-gray-500 font-B01-M"
            >
              <span>{'직업 선택'}</span>
              <DropDownIcon />
            </div>
            {isJobOpen && (
              <ul className="absolute left-0 top-full z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border bg-white shadow-lg">
                {jobOptions.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => toggleSelection(opt, setSelectedJobs)}
                    className={`cursor-pointer px-4 py-3 text-sm hover:bg-gray-100 ${
                      selectedJobs.includes(opt)
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

        {/* 지역 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            지역
          </label>
          <div ref={locationRef} className="relative">
            <div
              onClick={toggleLocation}
              className="flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-5 text-gray-500 font-B01-M"
            >
              <span>{'지역 선택'}</span>
              <DropDownIcon />
            </div>
            {isLocationOpen && (
              <ul className="absolute left-0 top-full z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border bg-white shadow-lg">
                {locationOptions.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => toggleSelection(opt, setSelectedLocations)}
                    className={`cursor-pointer px-4 py-3 text-sm hover:bg-gray-100 ${
                      selectedLocations.includes(opt)
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
        {/* 근무 시작일 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            근무 시작일
          </label>
          <div className="flex items-center rounded-xl border px-4 py-5 text-sm text-gray-700 shadow-sm">
            <input
              type="text"
              placeholder="YYYY.DD.MM"
              value={startDate}
              onChange={(e) => {
                const v = e.target.value;
                if (/^[0-9.]{0,10}$/.test(v)) setStartDate(v);
              }}
              className="w-full outline-none"
            />
            <SearchIcon className="ml-2 text-gray-400" />
          </div>
        </div>

        {/* 근무 종료일 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            근무 종료일
          </label>
          <div className="flex items-center rounded-xl border px-4 py-5 text-sm text-gray-700 shadow-sm">
            <input
              type="text"
              placeholder="YYYY.DD.MM"
              value={endDate}
              onChange={(e) => {
                const v = e.target.value;
                if (/^[0-9.]{0,10}$/.test(v)) setEndDate(v);
              }}
              className="w-full outline-none"
            />
            <SearchIcon className="ml-2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* 선택된 필터 태그 */}
      <div className="mt-6 flex flex-wrap gap-2">
        {selectedJobs.map((job) => (
          <span
            key={job}
            className="flex items-center gap-1 rounded-full border border-purple-300 px-3 py-1 text-sm text-purple-500"
          >
            {job}
            <button onClick={() => toggleSelection(job, setSelectedJobs)}>
              ×
            </button>
          </span>
        ))}
        {selectedLocations.map((loc) => (
          <span
            key={loc}
            className="flex items-center gap-1 rounded-full border border-purple-300 px-3 py-1 text-sm text-purple-500"
          >
            {loc}
            <button onClick={() => toggleSelection(loc, setSelectedLocations)}>
              ×
            </button>
          </span>
        ))}
        {startDate && endDate && (
          <span className="flex items-center gap-1 rounded-full border border-purple-300 px-3 py-1 text-sm text-purple-500">
            {startDate} – {endDate}
            <button
              onClick={() => {
                setStartDate('');
                setEndDate('');
              }}
              className="text-xs"
            >
              ×
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Filter;
