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

  const {
    isOpen: isJobOpen,
    selected: job,
    toggle: toggleJob,
    select: selectJob,
    reset: resetJob,
    ref: jobRef,
  } = useDropdown<string>();

  const {
    isOpen: isLocationOpen,
    selected: location,
    toggle: toggleLocation,
    select: selectLocation,
    reset: resetLocation,
    ref: locationRef,
  } = useDropdown<string>();

  const handleReset = () => {
    resetJob();
    resetLocation();
    setStartDate('');
  };

  return (
    <div className="aspect-[5/1] w-full rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex justify-end">
        <button
          className="flex items-center gap-1 rounded-full bg-black px-4 py-2 text-sm text-white"
          onClick={handleReset}
        >
          필터 초기화 <RefreshIcon />
        </button>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
        {/* 직업 드롭다운 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            직업
          </label>
          <div ref={jobRef} className="relative">
            <div
              onClick={toggleJob}
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 px-4 py-5 text-gray-500 font-B01-M"
            >
              <span>{job || '직업을 선택해주세요'}</span>
              <DropDownIcon />
            </div>
            {isJobOpen && (
              <ul className="absolute left-0 top-full z-10 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-lg">
                {jobOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => selectJob(option)}
                    className={`cursor-pointer px-4 py-3 text-sm ${
                      job === option
                        ? 'font-semibold text-purple-500'
                        : 'text-gray-700'
                    } hover:bg-gray-100`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 근무지 드롭다운 */}
        <div className="flex min-w-0 flex-1 flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            근무지
          </label>
          <div ref={locationRef} className="relative">
            <div
              onClick={toggleLocation}
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 px-4 py-5 text-gray-500 font-B01-M"
            >
              <span>{location || '근무지를 선택해주세요'}</span>
              <DropDownIcon />
            </div>
            {isLocationOpen && (
              <ul className="absolute left-0 top-full z-10 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-lg">
                {locationOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => selectLocation(option)}
                    className={`cursor-pointer px-4 py-3 text-sm ${
                      location === option
                        ? 'font-semibold text-purple-500'
                        : 'text-gray-700'
                    } hover:bg-gray-100`}
                  >
                    {option}
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
          <div className="flex w-full items-center rounded-xl border px-4 py-5 text-sm text-gray-700 shadow-sm">
            <input
              type="text"
              placeholder="언제부터 근무할 수 있나요?"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full outline-none"
            />
            <button className="ml-2 text-gray-400">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
