import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@pages/login/LoginPage';
import SignupFunnel from '@pages/signup/SignupFunnel';
import HideLayout from '@outlet/HideLayout';
import ShowLayout from '@outlet/ShowLayout';
import OnBoardingPage from '@pages/onboard/OnBoardingPage.tsx';
import Home from '@pages/home/Home';
import JobRecommendPage from '@pages/jobRecommand/JobRecommandPage.tsx';

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
          <Route path="/onboard" element={<OnBoardingPage />} />
          <Route path="/jobrecommend" element={<JobRecommendPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
