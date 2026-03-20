import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@pages/login/LoginPage';
import SignupFunnel from '@pages/signup/SignupFunnel';
import HideLayout from '@outlet/HideLayout';
import ShowLayout from '@outlet/ShowLayout';
import Home from '@pages/home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HideLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupFunnel />} />
        </Route>

        <Route element={<ShowLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
