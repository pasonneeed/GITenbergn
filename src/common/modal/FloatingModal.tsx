const FloatingModal = () => {
  return (
    <div className="shadow-shadow4 fixed bottom-[162px] right-[60px] z-50 w-full max-w-[344px] rounded-[30px] bg-white px-5 pb-5 pt-[30px]">
      <div className="flex flex-col">
        <div className="text-lg text-black font-T05-SB">
          할 일을 <br /> 작성해보세요
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {['요양보호사', '간호조무사', '요양보호사'].map((label, idx) => (
            <div
              key={idx}
              className={`rounded-[10px] p-2 font-B03-SB ${
                idx === 0
                  ? 'border-[0.8px] border-purple-500 bg-purple-100 text-purple-500'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <textarea
          placeholder="입력해주세요"
          className="mt-4 h-[262px] w-full resize-none rounded-[20px] bg-gray-100 p-5 text-gray-900 font-B03-M placeholder:text-gray-400"
        />

        <button className="mt-3 self-end rounded-[10px] bg-purple-500 px-4 py-[10px] text-purple-100 font-B03-B">
          할 일 추가
        </button>
      </div>
    </div>
  );
};

export default FloatingModal;
