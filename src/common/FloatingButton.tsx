import Pencil from '@assets/icons/pencil.svg?react';
import { useState } from 'react';
import FloatingModal from './modal/FloatingModal';
const FloatingButton = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <button
        className="shadow-shadow2 fixed bottom-[60px] right-[60px] flex h-20 w-20 items-center rounded-[28px] bg-purple-500 p-5 transition-colors hover:bg-purple-500"
        onClick={() => setIsModal(true)}
      >
        <Pencil />
      </button>
      {isModal && <FloatingModal />}
    </div>
  );
};

export default FloatingButton;
