import Header from '@common/Header';
import { Outlet } from 'react-router-dom';

const ShowLayout = () => {
  return (
    <div className="grid min-h-screen w-full grid-rows-[80px_1fr] bg-white">
      <div>
        <Header type="show" />
      </div>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ShowLayout;
