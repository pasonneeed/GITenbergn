import LoginImage from '@assets/images/login.png';

const LoginImageComponent = () => {
  return (
    <div className="hidden w-1/2 items-center justify-center md:flex">
      <img
        src={LoginImage}
        alt="로그인 이미지"
        className="h-auto w-[400px] md:w-[500px]"
      />
    </div>
  );
};
export default LoginImageComponent;
