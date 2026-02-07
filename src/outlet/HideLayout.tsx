import Header from '@common/Header';
import { Outlet } from 'react-router-dom';

const HideLayout = () => {
  return (
    <div className="max-h-[1024px] min-h-screen bg-white">
      <Header type="hide" />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default HideLayout;
