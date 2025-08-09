import SignupFunnel from '@pages/signup/SignupFunnel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@pages/login/LoginPage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupFunnel />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
