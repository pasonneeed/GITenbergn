interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

const Card = ({ title, description, imageUrl, onClick }: CardProps) => {
  return (
    <div
      className={
        'flex h-[480px] w-[372px] flex-col rounded-[30px] border border-gray-200 pb-8'
      }
    >
      <div className="h-[300px] w-full flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-t-[30px] border-b-0"
        />
      </div>
      <div className={'flex flex-1 flex-col px-6 py-5'}>
        <h3 className="mb-1 text-xl font-semibold text-gray-900 font-T02-B">
          {title}
        </h3>
        <p className="mb-6 text-gray-500 font-B02-M">{description}</p>
        <div
          onClick={onClick}
          className={'mt-auto cursor-pointer self-end text-gray-400 font-B03-M'}
        >
          상세정보 보기 →
        </div>
      </div>
    </div>
  );
};
export default Card;
