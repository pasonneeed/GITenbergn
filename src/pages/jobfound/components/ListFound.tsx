import PlusIcon from '@assets/icons/plus.svg?react';
import FoundJobs from '@utils/data/jobfound/JobFoundDummy';

const ListFound = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-9 py-[60px]">
      {FoundJobs.map((item) => {
        const users = item.userProfiles;
        const userCount = users.length;
        const maxUsers = 3;

        return (
          <div key={item.id} className="flex flex-col items-start">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-[240px] w-[360px] rounded-2xl object-cover"
            />

            <div className="mt-[14px] w-[360px]">
              <div className="text-purple-500 font-B02-SB">{item.tags}</div>
              <span className="mt-[6px] text-gray-900 font-T04-SB">
                {item.title}
              </span>
              <div className="mt-[10px] truncate text-gray-500 font-B02-M">
                {item.description}
              </div>

              <div className="mt-[18px] flex w-full items-center justify-between">
                <div className="flex max-w-[126px] items-center -space-x-2">
                  {users.slice(0, maxUsers).map((user) => (
                    <img
                      key={user.id}
                      src={user.avatar}
                      alt={`${user.id}`}
                      className="h-[38px] w-[38px] rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  {userCount > maxUsers && (
                    <div className="my-[5px] flex h-7 w-9 items-center justify-center rounded-full bg-black p-[6px]">
                      <div className="flex flex-row items-center justify-center gap-[2px]">
                        <div className="mt-[2px] text-white font-C01-M">
                          {userCount - maxUsers}
                        </div>
                        <PlusIcon />
                      </div>
                    </div>
                  )}
                </div>

                <button className="flex w-[116px] cursor-pointer items-center justify-center rounded-[10px] bg-purple-500 px-5 py-3 text-white font-B03-SB">
                  담기
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListFound;
