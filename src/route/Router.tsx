import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@pages/login/LoginPage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
