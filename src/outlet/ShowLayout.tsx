import Header from '@common/Header';
import { Outlet } from 'react-router-dom';

const ShowLayout = () => {
  return (
    <div className="max-h-[1024px] min-h-screen bg-white">
      <Header type="show" />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default ShowLayout;
