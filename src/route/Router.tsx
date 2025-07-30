import SignupFunnel from '@pages/signup/SignupFunnel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<SignupFunnel />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
