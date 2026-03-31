import Divider from '@assets/icons/shortDivider.svg?react';
const Footer = () => {
  return (
    <div className="bottom-0 flex h-[130px] flex-col items-center justify-center border-t border-gray-300 bg-white">
      <div className="mt-[23px] flex flex-row items-center gap-[9px] text-gray-500 font-B02-SB">
        <span> 공지사항 </span>
        <Divider />
        <span> 이용약관 </span>
        <Divider />
        <span> 문의하기 </span>
      </div>

      <div className="mt-[13px] text-center text-gray-400 font-B01-SB">
        인생의 제 2막을 향한, 두드림
      </div>
      <div className="mt-1 text-center text-gray-400 font-B01-M">
        두둠칫팀 JuhyunPark4650@gmail.com
      </div>
    </div>
  );
};

export default Footer;
