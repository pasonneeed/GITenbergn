import Pencil from '@assets/icons/pencil.svg?react';
import { useState } from 'react';
import FloatingModal from './modal/FloatingModal';

const FloatingButton = () => {
  const [isModal, setIsModal] = useState(false);

  const handleAddTask = (task: { text: string; category: string }) => {
    console.log('추가됨:', task);
  };

  return (
    <div>
      <button
        className="shadow-shadow2 hover:shadow-shadow4 fixed bottom-[60px] right-[60px] flex h-20 w-20 items-center rounded-[28px] bg-purple-500 p-5 transition-colors"
        onClick={() => setIsModal(true)}
      >
        <Pencil />
      </button>

      {isModal && (
        <div className="fixed inset-0 z-50" onClick={() => setIsModal(false)}>
          <div
            className="absolute bottom-[140px] right-[60px]"
            onClick={(e) => e.stopPropagation()}
          >
            <FloatingModal
              onClose={() => setIsModal(false)}
              onAddTask={handleAddTask}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
