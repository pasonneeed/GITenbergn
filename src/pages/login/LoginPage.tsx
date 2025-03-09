import Login from '@pages/login/components/Login';
import LoginMb from '@pages/login/components/LoginMb';
import useMediaQuery from '@hook/useMediaQuery.ts';

const LoginPage = () => {
  const isMobile = useMediaQuery('(max-width: 480px)');

  return isMobile ? <LoginMb /> : <Login />;
};
export default LoginPage;
