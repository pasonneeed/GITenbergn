import { useState } from 'react';

const Filter = () => {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex justify-end">
        <button
          className="flex items-center gap-1 rounded-full bg-black px-4 py-2 text-sm text-white"
          onClick={() => {
            setJob('');
            setLocation('');
            setStartDate('');
          }}
        >
          필터 초기화 ↻
        </button>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            직업
          </label>
          <select
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="w-[220px] rounded-xl border px-4 py-3 text-sm text-gray-700 shadow-sm focus:outline-none"
          >
            <option value="">직업을 선택해주세요</option>
            <option value="요양보호사">요양보호사</option>
            <option value="간병인">간병인</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            근무지
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-[220px] rounded-xl border px-4 py-3 text-sm text-gray-700 shadow-sm focus:outline-none"
          >
            <option value="">근무지를 선택해주세요</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-900">
            근무 시작일
          </label>
          <div className="flex w-[220px] items-center rounded-xl border px-4 py-3 text-sm text-gray-700 shadow-sm">
            <input
              type="text"
              placeholder="언제부터 근무할 수 있나요?"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full outline-none"
            />
            <button className="ml-2 text-gray-400">🔍</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
