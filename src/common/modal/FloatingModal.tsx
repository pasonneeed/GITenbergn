import { useState } from 'react';

interface FloatingModalProps {
  onClose: () => void;
  onAddTask: (task: { text: string; category: string }) => void;
}

const FloatingModal = ({ onClose, onAddTask }: FloatingModalProps) => {
  const [taskText, setTaskText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('요양보호사');

  const categories = ['요양보호사', '간호조무사', '물리치료사', '사회복지사'];

  const handleSubmit = () => {
    if (taskText.trim()) {
      onAddTask({ text: taskText, category: selectedCategory });
      console.log('제출됨');
      setTaskText('');
      onClose();
    }
  };

  return (
    <div className="shadow-shadow4 fixed bottom-[162px] right-[60px] z-50 w-full max-w-[344px] rounded-[30px] bg-white px-5 pb-5 pt-[30px]">
      <div className="flex flex-col">
        <div className="text-lg text-black font-T05-SB">
          할 일을 <br /> 작성해보세요
        </div>

        <div className="no-scrollbar mt-6 flex flex-nowrap gap-2 overflow-x-auto">
          {categories.map((label, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCategory(label)}
              className={`cursor-pointer whitespace-nowrap rounded-[10px] p-2 font-B03-SB ${
                selectedCategory === label
                  ? 'border-[0.8px] border-purple-500 bg-purple-100 text-purple-500'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <textarea
          placeholder="입력해주세요"
          className="mt-4 h-[262px] w-full resize-none rounded-[20px] border border-transparent bg-gray-100 p-5 text-gray-900 font-B03-M placeholder:text-gray-400 focus:border-purple-500 focus:outline-none"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <button
          className="mt-3 self-end rounded-[10px] bg-purple-500 px-4 py-[10px] text-purple-100 font-B03-B"
          onClick={handleSubmit}
        >
          할 일 추가
        </button>
      </div>
    </div>
  );
};

export default FloatingModal;
