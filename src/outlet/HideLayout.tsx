import Header from '@common/Header';
import { Outlet } from 'react-router-dom';

const HideLayout = () => {
  return (
    <div className="grid min-h-screen w-full grid-rows-[80px_1fr] bg-white">
      <div>
        <Header type="hide" />
      </div>
      <main className="flex w-full items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default HideLayout;
