import Logo from '@assets/icons/mobileLogo.svg?react';
import Button from './Button';
import UserIcon from '@assets/icons/profile.svg?react';
import { Link, useNavigate } from 'react-router-dom';

interface ShowProps {
  type: 'show' | 'hide';
}

const NavItems = [
  { label: '일자리 찾기', path: '/' },
  { label: '배움터 찾기', path: '/' },
  { label: '마이드림', path: '/' },
  { label: '직업탐색', path: '/' },
];

const Header = ({ type }: ShowProps) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const nickname = localStorage.getItem('nickname');
  const isLoggedIn = Boolean(accessToken);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white px-[120px] py-5">
      <div className="flex flex-row items-center gap-5">
        <Logo />
        {NavItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className="flex items-center px-[15px] py-[10px] text-gray-600 font-B03-M"
          >
            {label}
          </Link>
        ))}
      </div>

      {type === 'show' && !isLoggedIn && (
        <Button
          text="로그인"
          color="primary"
          className="flex h-[38px] items-center justify-center rounded-[10px] px-6 py-[10px]"
          onClick={() => navigate('/login')}
        />
      )}

      {type === 'show' && isLoggedIn && (
        <div className="flex items-center gap-2">
          <UserIcon className={'h-10 w-10'} />
          <span className="text-gray-900 font-B03-M">{nickname}님</span>
        </div>
      )}
    </div>
  );
};

export default Header;
